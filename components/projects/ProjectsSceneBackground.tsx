'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { HDRLoader } from 'three/examples/jsm/loaders/HDRLoader.js';

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export default function ProjectsSceneBackground() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');
  const [pinPhase, setPinPhase] = useState<'before' | 'pinned' | 'after'>('before');

  useEffect(() => {
    if (!sectionRef.current || !canvasRef.current) {
      return;
    }

    let animationFrame = 0;
    let disposed = false;

    const sectionEl = sectionRef.current;
    const canvasEl = canvasRef.current;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xdde8f5);
    scene.fog = new THREE.FogExp2(0xdde8f5, 0.0045);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasEl,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    renderer.setSize(canvasEl.clientWidth, canvasEl.clientHeight, false);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.82;

    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;
    let hdriTexture: THREE.DataTexture | null = null;
    let hdriEnvironment: THREE.Texture | null = null;

    const sky = new THREE.Mesh(
      new THREE.SphereGeometry(1200, 32, 32),
      new THREE.ShaderMaterial({
        side: THREE.BackSide,
        depthWrite: false,
        uniforms: {
          topColor: { value: new THREE.Color(0x77b8ff) },
          bottomColor: { value: new THREE.Color(0xdde8f5) },
        },
        vertexShader: `
          varying vec3 vWorldPosition;
          void main() {
            vec4 worldPosition = modelMatrix * vec4(position, 1.0);
            vWorldPosition = worldPosition.xyz;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 topColor;
          uniform vec3 bottomColor;
          varying vec3 vWorldPosition;
          void main() {
            float h = normalize(vWorldPosition).y;
            gl_FragColor = vec4(mix(bottomColor, topColor, max(h, 0.0)), 1.0);
          }
        `,
      }),
    );
    sky.frustumCulled = false;
    scene.add(sky);

    new HDRLoader()
      .setPath('https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/')
      .load(
        'kloppenheim_06_puresky_1k.hdr',
        (texture) => {
          if (disposed) {
            texture.dispose();
            return;
          }

          texture.mapping = THREE.EquirectangularReflectionMapping;
          const envMap = pmremGenerator.fromEquirectangular(texture).texture;
          hdriTexture = texture;
          hdriEnvironment = envMap;
          scene.background = texture;
          scene.environment = envMap;
          sky.visible = false;
        },
        undefined,
        () => {
          sky.visible = true;
        },
      );

    const camera = new THREE.PerspectiveCamera(38, 1, 0.01, 5000);
    scene.add(camera);

    scene.add(new THREE.AmbientLight(0xffffff, 0.26));

    const keyLight = new THREE.DirectionalLight(0xfff3df, 1.7);
    keyLight.position.set(6, 10, 5);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xcce8ff, 0.24);
    fillLight.position.set(-10, 8, -6);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, 0.36);
    rimLight.position.set(0, 7, -11);
    scene.add(rimLight);

    const frontLight = new THREE.PointLight(0xfff4df, 0.12, 80);
    frontLight.position.set(0, 5, 8);
    scene.add(frontLight);

    const modelGroup = new THREE.Group();
    scene.add(modelGroup);

    const target = new THREE.Vector3();
    const windowTarget = new THREE.Vector3();
    const modelSize = new THREE.Vector3(1, 1, 1);
    let orbitRadius = 10;
    let verticalLift = 2.6;
    let closeDistance = 1;
    let modelReady = false;

    const cameraState = {
      currentAngle: -0.85,
      currentHeight: 0,
      currentRadius: 12,
      currentLookAt: new THREE.Vector3(),
      targetLookAt: new THREE.Vector3(),
      currentFov: 38,
      targetFov: 38,
      targetAngle: -0.85,
      targetHeight: 0,
      targetRadius: 12,
    };

    const frameModel = () => {
      const box = new THREE.Box3().setFromObject(modelGroup);
      const center = box.getCenter(new THREE.Vector3());
      box.getSize(modelSize);

      modelGroup.position.sub(center);
      target.set(0, modelSize.y * 0.36, 0);

      const maxAxis = Math.max(modelSize.x, modelSize.y, modelSize.z);
      orbitRadius = maxAxis * (window.innerWidth < 768 ? 2.05 : window.innerWidth < 1280 ? 1.72 : 1.55);
      verticalLift = modelSize.y * 0.42;
      closeDistance = Math.max(maxAxis * 0.12, 0.75);
      windowTarget.set(modelSize.x * 0.42, modelSize.y * 0.22, -modelSize.z * 0.08);
      cameraState.currentRadius = orbitRadius;
      cameraState.targetRadius = orbitRadius;
      cameraState.currentHeight = target.y + verticalLift;
      cameraState.targetHeight = target.y + verticalLift;
      cameraState.currentLookAt.copy(target);
      cameraState.targetLookAt.copy(target);
    };

    const updateSize = () => {
      const width = canvasEl.clientWidth || window.innerWidth;
      const height = canvasEl.clientHeight || window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    };

    const getLocalProgress = () => {
      const rect = sectionEl.getBoundingClientRect();
      const pinOffset = 0;
      const total = Math.max(sectionEl.offsetHeight - window.innerHeight, 1);
      const rawProgress = clamp((pinOffset - rect.top) / total, 0, 1);

      // Keep the model loaded and visible before the cinematic orbit actually starts.
      return clamp((rawProgress - 0.12) / 0.88, 0, 1);
    };

    const updateScrollTargets = () => {
      const rect = sectionEl.getBoundingClientRect();
      const pinOffset = 0;
      const progress = getLocalProgress();
      const travel = THREE.MathUtils.smoothstep(progress, 0, 1);
      const rise = Math.sin(travel * Math.PI);
      const startAngle = -0.95;
      const endAngle = -0.08;
      const startRadius = orbitRadius * 1.08;
      const endRadius = modelSize.x * 0.42 + closeDistance;
      const startHeight = target.y + verticalLift;
      const endHeight = windowTarget.y + modelSize.y * 0.015;

      cameraState.targetAngle = THREE.MathUtils.lerp(startAngle, endAngle, travel);
      cameraState.targetRadius = THREE.MathUtils.lerp(startRadius, endRadius, travel);
      cameraState.targetHeight = THREE.MathUtils.lerp(startHeight, endHeight, travel) + rise * modelSize.y * 0.08;
      cameraState.targetLookAt.copy(target).lerp(windowTarget, travel);
      cameraState.targetFov = THREE.MathUtils.lerp(38, 19, travel);
      sectionEl.style.setProperty('--projects-3d-progress', `${progress}`);

      if (rect.top > pinOffset) {
        setPinPhase('before');
        return;
      }

      if (rect.bottom > window.innerHeight) {
        setPinPhase('pinned');
        return;
      }

      setPinPhase('after');
    };

    const animate = () => {
      animationFrame = window.requestAnimationFrame(animate);

      cameraState.currentAngle = THREE.MathUtils.lerp(cameraState.currentAngle, cameraState.targetAngle, 0.055);
      cameraState.currentRadius = THREE.MathUtils.lerp(cameraState.currentRadius, cameraState.targetRadius, 0.055);
      cameraState.currentHeight = THREE.MathUtils.lerp(cameraState.currentHeight, cameraState.targetHeight, 0.055);
      cameraState.currentLookAt.lerp(cameraState.targetLookAt, 0.055);
      cameraState.currentFov = THREE.MathUtils.lerp(cameraState.currentFov, cameraState.targetFov, 0.055);

      if (Math.abs(camera.fov - cameraState.currentFov) > 0.01) {
        camera.fov = cameraState.currentFov;
        camera.updateProjectionMatrix();
      }

      if (modelReady) {
        const angle = cameraState.currentAngle;
        camera.position.set(
          Math.cos(angle) * cameraState.currentRadius,
          cameraState.currentHeight,
          Math.sin(angle) * cameraState.currentRadius,
        );
        camera.lookAt(cameraState.currentLookAt);
      }

      renderer.render(scene, camera);
    };

    const handleResize = () => {
      updateSize();

      if (modelReady) {
        frameModel();
        updateScrollTargets();
      }
    };

    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.7/');

    const loader = new GLTFLoader();
    loader.setDRACOLoader(dracoLoader);
    loader.load(
      '/3d/model.glb',
      (gltf) => {
        if (disposed) {
          return;
        }

        const model = gltf.scene;
        model.traverse((child) => {
          if (!(child instanceof THREE.Mesh)) {
            return;
          }

          child.castShadow = true;
          child.receiveShadow = true;

          if (Array.isArray(child.material)) {
            child.material.forEach((material) => {
              material.envMapIntensity = 0.42;
              material.needsUpdate = true;
            });
            return;
          }

          if (child.material) {
            child.material.envMapIntensity = 0.42;
            child.material.needsUpdate = true;
          }
        });

        modelGroup.add(model);
        frameModel();
        updateSize();
        updateScrollTargets();
        modelReady = true;
        setStatus('ready');
      },
      undefined,
      () => {
        if (!disposed) {
          setStatus('error');
        }
      },
    );

    updateSize();
    updateScrollTargets();
    animate();

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', updateScrollTargets, { passive: true });

    return () => {
      disposed = true;
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', updateScrollTargets);
      dracoLoader.dispose();
      hdriTexture?.dispose();
      hdriEnvironment?.dispose();
      pmremGenerator.dispose();
      renderer.dispose();
      scene.traverse((object) => {
        if (!(object instanceof THREE.Mesh)) {
          return;
        }

        object.geometry.dispose();

        if (Array.isArray(object.material)) {
          object.material.forEach((material) => material.dispose());
          return;
        }

        object.material.dispose();
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[260vh] overflow-clip border-y border-brand-pearl bg-[linear-gradient(180deg,#edf3f8_0%,#dce7f4_100%)] md:h-[300vh] lg:h-[360vh] xl:h-[380vh]">
      <div className={pinPhase === 'pinned'
        ? 'fixed left-0 right-0 top-0 z-0 h-[100svh] overflow-hidden will-change-transform'
        : pinPhase === 'before'
          ? 'absolute inset-x-0 top-0 z-0 h-[100svh] overflow-hidden will-change-transform'
          : 'absolute inset-x-0 bottom-0 z-0 h-[100svh] overflow-hidden will-change-transform'}>
        <canvas ref={canvasRef} className="h-full w-full" aria-label="A cinematic 3D skyscraper view" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(30,46,64,0.18),transparent_30%,transparent_72%,rgba(30,46,64,0.16)),radial-gradient(circle_at_center,transparent_50%,rgba(69,96,122,0.16)_100%)]" />

        <div className="absolute inset-x-0 top-0 mx-auto flex h-full max-w-7xl items-start px-5 pt-8 md:px-6 md:pt-10 lg:px-12 xl:pt-14">
          <div className="max-w-[16rem] md:max-w-[22rem] xl:max-w-[28rem]">
            <div className="mb-4 flex items-center gap-3 text-brand-black/68 md:mb-5">
              <div className="h-px w-12 bg-brand-black/20" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em]">Projects in Motion</span>
            </div>
            <h2 className="text-[34px] font-semibold leading-[0.92] tracking-[-0.05em] text-brand-black md:text-[46px] lg:text-[54px] xl:text-[72px]">
              Portfolio viewed through a cinematic skyline lens.
            </h2>
            <p className="mt-4 max-w-[15rem] text-[13px] leading-6 text-brand-charcoal/88 md:mt-5 md:max-w-[20rem] md:text-[14px] md:leading-7 xl:mt-6 xl:max-w-[25rem] xl:text-base xl:leading-8">
              Scroll to move around the tower before entering the project catalog. The model acts as an atmospheric stage for the portfolio rather than a literal project claim.
            </p>
          </div>
        </div>

        <div className="absolute bottom-6 left-5 right-5 mx-auto flex max-w-7xl items-end justify-between md:bottom-10 md:left-6 md:right-6 lg:left-12 lg:right-12">
          <div className="pointer-events-none rounded-full border border-brand-black/10 bg-white/70 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-brand-charcoal/76 backdrop-blur-sm md:px-4 md:text-[10px] md:tracking-[0.22em]">
            {status === 'error' ? '3D scene unavailable' : status === 'ready' ? 'Scroll to orbit the tower' : 'Loading 3D scene'}
          </div>
          <div className="hidden h-[26vh] w-[2px] overflow-hidden rounded-full bg-brand-black/14 xl:block">
            <div className="h-full origin-top bg-brand-black/72" style={{ transform: 'scaleY(var(--projects-3d-progress, 0))' }} />
          </div>
        </div>

        {status === 'error' ? (
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(221,232,245,0.8),rgba(221,232,245,0.94))]" />
        ) : null}
      </div>
    </section>
  );
}