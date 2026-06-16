import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react'
import logo from '../../assets/logo.png'

const SocialIcons = {
  Linkedin: () => <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
  Facebook: () => <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
  Twitter: () => <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
  Instagram: () => <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>,
  Youtube: () => <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>,
}
import { COMPANY, LOCATIONS, SERVICES } from '../../data/siteData'

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-8 overflow-hidden" style={{ background: 'linear-gradient(180deg, #020b18 0%, #040f1f 100%)' }}>
      {/* Top glow */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,102,255,0.4), transparent)' }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,102,255,0.06) 0%, transparent 70%)' }} />

      {/* Newsletter Banner */}
      <div className="container-custom mb-16">
        <div className="rounded-2xl p-8 md:p-12 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, rgba(0,102,255,0.15) 0%, rgba(0,198,255,0.05) 100%)', border: '1px solid rgba(0,102,255,0.2)' }}>
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-display font-bold text-white mb-2">Get Daily Scrap Price Updates</h3>
              <p className="text-steel-400">Subscribe to receive LME rates & market intelligence directly in your inbox.</p>
            </div>
            <form className="flex gap-3 w-full md:w-auto" onSubmit={e => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 md:w-72 px-5 py-3 rounded-full text-sm bg-white/05 border border-white/15 text-white placeholder-steel-400 focus:outline-none focus:border-electric-500"
              />
              <button type="submit" className="btn-primary text-sm !px-6 !py-3 whitespace-nowrap">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex mb-5">
              <div className="bg-white rounded-xl p-1.5 shadow-lg">
                <img src={logo} alt="NK Traders" className="h-14 w-auto" />
              </div>
            </Link>
            <p className="text-steel-400 text-sm leading-relaxed mb-6 max-w-sm">
              India's trusted scrap and metal trading partner since 2005. Serving 500+ industrial clients across 25+ cities with competitive pricing, fast payments, and pan India pickup.
            </p>
            <div className="space-y-3 mb-6">
              <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-3 text-sm text-steel-400 hover:text-white transition-colors">
                <Phone size={15} className="text-electric-400 shrink-0" /> {COMPANY.phone}
              </a>
              <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 text-sm text-steel-400 hover:text-white transition-colors">
                <Mail size={15} className="text-electric-400 shrink-0" /> {COMPANY.email}
              </a>
              <div className="flex items-start gap-3 text-sm text-steel-400">
                <MapPin size={15} className="text-electric-400 shrink-0 mt-0.5" /> {COMPANY.address}
              </div>
            </div>
            <div className="flex items-center gap-3">
              {[
                { Icon: SocialIcons.Linkedin, href: '#', label: 'LinkedIn' },
                { Icon: SocialIcons.Facebook, href: '#', label: 'Facebook' },
                { Icon: SocialIcons.Twitter, href: '#', label: 'Twitter' },
                { Icon: SocialIcons.Instagram, href: '#', label: 'Instagram' },
                { Icon: SocialIcons.Youtube, href: '#', label: 'YouTube' },
              ].map(({ Icon, href, label }) => (
                <a key={label} href={href} aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-steel-400 hover:text-white hover:bg-electric-600/20 transition-all duration-200"
                  style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-sm tracking-wide uppercase">Our Services</h4>
            <ul className="space-y-2.5">
              {['Industrial Scrap Buying','Copper Scrap Buyers','Aluminium Scrap Buyers','Brass Scrap Buyers','Steel Scrap Buyers','Plant Dismantling','E-Waste Procurement','Asset Recovery'].map(s => (
                <li key={s}>
                  <Link to="/services" className="flex items-center gap-2 text-sm text-steel-400 hover:text-white transition-colors group">
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 text-electric-400 transition-all -translate-x-2 group-hover:translate-x-0" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-sm tracking-wide uppercase">Locations</h4>
            <ul className="space-y-2.5">
              {LOCATIONS.map(loc => (
                <li key={loc}>
                  <Link to={`/locations/${loc.toLowerCase()}`} className="flex items-center gap-2 text-sm text-steel-400 hover:text-white transition-colors group">
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 text-electric-400 transition-all -translate-x-2 group-hover:translate-x-0" />
                    {loc}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-sm tracking-wide uppercase">Company</h4>
            <ul className="space-y-2.5 mb-6">
              {[['About Us','/about'],['Industries','/industries'],['Case Studies','/case-studies'],['Blog','/blog'],['Contact','/contact']].map(([label,href]) => (
                <li key={label}>
                  <Link to={href} className="flex items-center gap-2 text-sm text-steel-400 hover:text-white transition-colors group">
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 text-electric-400 transition-all -translate-x-2 group-hover:translate-x-0" />
                    {label}
                  </Link>
                </li>
              ))}
              {[['Privacy Policy'],['Terms of Service']].map(([label]) => (
                <li key={label}>
                  <a href="#" className="flex items-center gap-2 text-sm text-steel-400 hover:text-white transition-colors group">
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 text-electric-400 transition-all -translate-x-2 group-hover:translate-x-0" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="font-display font-semibold text-white mb-3 text-sm tracking-wide uppercase">Certifications</h4>
            <div className="flex flex-wrap gap-2">
              {['GST Reg.','MSME','ISO 9001'].map(cert => (
                <span key={cert} className="px-3 py-1 rounded-full text-xs font-semibold text-electric-400"
                  style={{ background: 'rgba(0,102,255,0.12)', border: '1px solid rgba(0,102,255,0.25)' }}>
                  ✓ {cert}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="divider-glow mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-steel-400">
          <p>© 2025 NK Traders. All rights reserved. | GST: {COMPANY.gst}</p>
          <p>Designed for peak performance & lead generation</p>
        </div>
      </div>
    </footer>
  )
}
