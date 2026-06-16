import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import { NAV_LINKS, COMPANY } from '../../data/siteData'
import logo from '../../assets/logo.png'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setActiveDropdown(null)
  }, [location])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
        style={{
          background: scrolled
            ? 'rgba(2, 11, 24, 0.95)'
            : 'linear-gradient(180deg, rgba(2,11,24,0.9) 0%, transparent 100%)',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        }}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="relative">
              <div className="bg-white rounded-xl p-1 shadow-lg group-hover:shadow-electric-500/30 transition-shadow duration-300">
                <img src={logo} alt="NK Traders" className="h-11 w-auto" />
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <div key={link.label} className="relative group"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}>
                <Link
                  to={link.href}
                  className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    location.pathname === link.href
                      ? 'text-white bg-white/10'
                      : 'text-steel-400 hover:text-white hover:bg-white/05'
                  }`}
                >
                  {link.label}
                  {link.children && <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />}
                </Link>
                {link.children && activeDropdown === link.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute top-full left-0 mt-2 w-64 rounded-xl overflow-hidden z-50"
                    style={{ background: 'rgba(4,15,31,0.98)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(20px)' }}
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className="block px-5 py-3 text-sm text-steel-400 hover:text-white hover:bg-white/05 transition-all duration-150 border-b border-white/04 last:border-0"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-2 text-sm text-steel-400 hover:text-white transition-colors duration-200">
              <Phone size={15} />
              {COMPANY.phone}
            </a>
            <a
              href={`https://wa.me/${COMPANY.whatsapp}?text=Hello NK Traders, I want to get a quote for scrap.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm !px-5 !py-2.5"
            >
              Get Free Quote
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-steel-400 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="fixed inset-0 z-40 flex flex-col pt-20 px-6 pb-8 overflow-y-auto"
            style={{ background: 'rgba(2,11,24,0.98)', backdropFilter: 'blur(30px)' }}
          >
            <div className="divider-glow mb-6" />
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                <Link
                  to={link.href}
                  className="block py-4 text-xl font-display font-semibold text-white border-b border-white/06 hover:text-electric-400 transition-colors"
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="ml-4 mt-1 mb-2 space-y-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className="block py-2 text-sm text-steel-400 hover:text-white transition-colors"
                      >
                        → {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
            <div className="mt-8 space-y-3">
              <a href={`tel:${COMPANY.phone}`} className="btn-secondary w-full justify-center">
                <Phone size={16} /> Call Now
              </a>
              <a
                href={`https://wa.me/${COMPANY.whatsapp}?text=Hello NK Traders, I need a quote.`}
                className="btn-whatsapp w-full justify-center"
                target="_blank" rel="noopener noreferrer"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
