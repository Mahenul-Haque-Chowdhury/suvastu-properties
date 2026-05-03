import { getProjectRecord } from '@/lib/project-data';

export default async function Head({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectRecord(slug);

  return (
    <>
      <title>{project.metaTitle}</title>
      <meta name="description" content={project.metaDescription} />
      <meta name="keywords" content={project.seoKeywords.join(', ')} />
      <link rel="canonical" href={`https://www.suvastuproperties.com/projects/${project.slug}`} />
    </>
  );
}
