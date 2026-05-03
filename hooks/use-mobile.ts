import * as React from "react"

const MOBILE_BREAKPOINT = 768

function getIsMobile() {
  return window.innerWidth < MOBILE_BREAKPOINT
}

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(() => {
    if (typeof window === 'undefined') {
      return false
    }

    return getIsMobile()
  })

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)

    const onChange = () => {
      setIsMobile(getIsMobile())
    }

    onChange()

    if (typeof mql.addEventListener === 'function') {
      mql.addEventListener("change", onChange)
      return () => mql.removeEventListener("change", onChange)
    }

    mql.addListener(onChange)
    return () => {
      mql.removeListener(onChange)
    }
  }, [])

  return isMobile
}
