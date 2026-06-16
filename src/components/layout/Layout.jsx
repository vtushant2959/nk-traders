import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import ErrorBoundary from '../ui/ErrorBoundary'

export default function Layout({ children }) {
  const location = useLocation()

  useEffect(() => {
    const initLenis = async () => {
      try {
        const Lenis = (await import('lenis')).default
        const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) })
        function raf(time) { lenis.raf(time); requestAnimationFrame(raf) }
        requestAnimationFrame(raf)
      } catch (e) { /* use native scroll */ }
    }
    initLenis()
  }, [])

  useEffect(() => {
    if (location.hash) {
      const scrollToHash = () => {
        const el = document.querySelector(location.hash)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
      // Small delay to allow page render
      const timer = setTimeout(scrollToHash, 150)
      return () => clearTimeout(timer)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location])

  return (
    <div className="min-h-screen text-white overflow-x-hidden" style={{ background: '#020b18' }}>
      <ErrorBoundary name="Navbar"><Navbar /></ErrorBoundary>
      <main>{children}</main>
      <ErrorBoundary name="Footer"><Footer /></ErrorBoundary>
    </div>
  )
}
