import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollManager() {
  const location = useLocation()

  useEffect(() => {
    // If the URL includes a hash (e.g. /about#vision), always scroll that anchor into view.
    if (location.hash) {
      const id = decodeURIComponent(location.hash.slice(1))
      // Ensure layout has painted before scrolling.
      window.setTimeout(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ block: 'start' })
        else window.scrollTo(0, 0)
      }, 0)
      return
    }

    // Default behavior: reset scroll on navigation so users land at the top.
    window.scrollTo(0, 0)
  }, [location.pathname, location.hash])

  return null
}

