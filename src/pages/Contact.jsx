import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react'
import { COMPANY, CATEGORIES } from '../data/siteData'

const officeHours = [
  { day: 'Monday – Saturday', time: '8:00 AM – 8:00 PM' },
  { day: 'Sunday', time: '10:00 AM – 4:00 PM' },
  { day: 'Emergency Pickup', time: '24/7 (WhatsApp)' },
]

const contactChannels = [
  {
    icon: Phone,
    title: 'Call Us',
    value: COMPANY.phone,
    sub: 'Mon–Sat 8AM–8PM',
    action: `tel:${COMPANY.phone}`,
    cta: 'Call Now',
    color: '#0066ff',
    bg: 'rgba(0,102,255,0.1)',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    value: 'Instant Response',
    sub: 'Average reply: 5 minutes',
    action: `https://wa.me/${COMPANY.whatsapp}?text=Hello NK Traders, I need a scrap pickup quote.`,
    cta: 'WhatsApp Now',
    color: '#25d366',
    bg: 'rgba(37,211,102,0.1)',
    external: true,
  },
  {
    icon: Mail,
    title: 'Email',
    value: COMPANY.email,
    sub: 'Response within 2 hours',
    action: `mailto:${COMPANY.email}`,
    cta: 'Send Email',
    color: '#7c3aed',
    bg: 'rgba(124,58,237,0.1)',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    value: 'Delhi Head Office',
    sub: COMPANY.address,
    action: 'https://maps.google.com',
    cta: 'Get Directions',
    color: '#d97706',
    bg: 'rgba(217,119,6,0.1)',
    external: true,
  },
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '', company: '', phone: '', email: '',
    location: '', materialType: '', quantity: '', message: '',
  })
  const [submitting, setSubmitting] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    if (!form.name || !form.phone) {
      toast.error('Name and phone number are required.')
      return
    }
    setSubmitting(true)
    await new Promise(r => setTimeout(r, 1000))
    const msg = `*NK Traders Contact Form*\n\n*Name:* ${form.name}\n*Company:* ${form.company}\n*Phone:* ${form.phone}\n*Email:* ${form.email}\n*Location:* ${form.location}\n*Material:* ${form.materialType}\n*Quantity:* ${form.quantity}\n*Message:* ${form.message}`
    window.open(`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank')
    toast.success('Redirecting to WhatsApp!')
    setSubmitting(false)
    setForm({ name: '', company: '', phone: '', email: '', location: '', materialType: '', quantity: '', message: '' })
  }

  const inputStyle = {
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.1)',
  }

  return (
    <>
      <Helmet>
        <title>Contact NK Traders | Scrap Metal Buyers | Get Free Quote India</title>
        <meta name="description" content="Contact NK Traders for scrap metal buying, pickup scheduling, and free valuation. Call +91-98765-43210 or WhatsApp for instant response. Pan India coverage, 60-minute callback guarantee." />
        <link rel="canonical" href="https://nktraders.in/contact" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contact NK Traders',
          description: 'Contact page for NK Traders scrap metal buying services',
          url: 'https://nktraders.in/contact',
        })}</script>
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #020b18 0%, #071428 100%)' }}>
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute right-0 top-0 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(0,102,255,0.08) 0%, transparent 70%)' }} />
        <div className="container-custom relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="section-label mb-6 inline-flex">Get In Touch</span>
            <h1 className="section-title text-white mb-5">
              Get Your
              <span className="text-gradient-blue"> Free Quote</span>
              <br />in 60 Minutes
            </h1>
            <p className="text-steel-400 max-w-2xl mx-auto text-lg">
              Contact us via call, WhatsApp, or the form below. Our team will respond within 60 minutes with a competitive price for your scrap material.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Channels */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
            {contactChannels.map((ch, i) => (
              <motion.a
                key={ch.title}
                href={ch.action}
                target={ch.external ? '_blank' : undefined}
                rel={ch.external ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl p-6 group transition-all duration-300 hover:-translate-y-1 block"
                style={{ background: ch.bg, border: `1px solid ${ch.color}30` }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: ch.color + '20' }}>
                  <ch.icon size={22} style={{ color: ch.color }} />
                </div>
                <h3 className="font-display font-bold text-white mb-1">{ch.title}</h3>
                <p className="font-semibold text-sm mb-1" style={{ color: ch.color }}>{ch.value}</p>
                <p className="text-steel-400 text-xs mb-4">{ch.sub}</p>
                <span className="text-sm font-semibold flex items-center gap-1" style={{ color: ch.color }}>
                  {ch.cta} →
                </span>
              </motion.a>
            ))}
          </div>

          {/* Main content: Form + Info */}
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Info Column */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Office Hours */}
              <div className="rounded-2xl p-7"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div className="flex items-center gap-3 mb-5">
                  <Clock size={18} className="text-electric-400" />
                  <h3 className="font-display font-bold text-white text-lg">Business Hours</h3>
                </div>
                <div className="space-y-3">
                  {officeHours.map(h => (
                    <div key={h.day} className="flex justify-between items-center text-sm"
                      style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.75rem' }}>
                      <span className="text-steel-400">{h.day}</span>
                      <span className="text-white font-medium">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* HQ Address */}
              <div className="rounded-2xl p-7"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div className="flex items-center gap-3 mb-5">
                  <MapPin size={18} className="text-electric-400" />
                  <h3 className="font-display font-bold text-white text-lg">Head Office</h3>
                </div>
                <p className="text-steel-400 text-sm leading-relaxed mb-4">{COMPANY.address}</p>
                <p className="text-steel-400 text-sm"><strong className="text-white">GST:</strong> {COMPANY.gst}</p>
                <p className="text-steel-400 text-sm"><strong className="text-white">MSME:</strong> {COMPANY.msme}</p>
              </div>

              {/* Cities */}
              <div className="rounded-2xl p-7"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <h3 className="font-display font-bold text-white text-lg mb-4">Service Locations</h3>
                <div className="flex flex-wrap gap-2">
                  {['Delhi', 'Gurgaon', 'Noida', 'Faridabad', 'Ghaziabad', 'Mumbai', 'Pune', 'Ahmedabad', 'Jaipur', 'Bangalore', 'Chennai', 'Hyderabad', 'Kolkata'].map(city => (
                    <span key={city} className="px-3 py-1.5 rounded-full text-xs text-steel-300"
                      style={{ background: 'rgba(0,102,255,0.08)', border: '1px solid rgba(0,102,255,0.2)' }}>
                      📍 {city}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit}
                className="rounded-2xl p-8 relative overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="absolute top-0 left-0 right-0 h-0.5"
                  style={{ background: 'linear-gradient(90deg, transparent, #0066ff, transparent)' }} />

                <h2 className="font-display font-bold text-white text-2xl mb-2">Send Us a Message</h2>
                <p className="text-steel-400 text-sm mb-8">Fill in the form and we'll send you a quote via WhatsApp within 60 minutes.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  {[
                    { name: 'name', label: 'Full Name *', placeholder: 'Rajesh Kumar' },
                    { name: 'company', label: 'Company Name', placeholder: 'ABC Industries Pvt. Ltd.' },
                    { name: 'phone', label: 'Phone Number *', placeholder: '+91 98765 43210' },
                    { name: 'email', label: 'Email Address', placeholder: 'rajesh@company.com' },
                    { name: 'location', label: 'City / Location', placeholder: 'Delhi, Mumbai, Gurgaon...' },
                    { name: 'quantity', label: 'Approx. Quantity', placeholder: 'e.g. 500 kg, 5 MT' },
                  ].map(f => (
                    <div key={f.name}>
                      <label className="block text-xs font-semibold text-steel-400 mb-2 uppercase tracking-widest">{f.label}</label>
                      <input
                        type="text"
                        name={f.name}
                        value={form[f.name]}
                        onChange={handleChange}
                        placeholder={f.placeholder}
                        className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-steel-400 focus:outline-none transition-all"
                        style={inputStyle}
                        onFocus={e => e.target.style.borderColor = 'rgba(0,102,255,0.5)'}
                        onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                      />
                    </div>
                  ))}
                </div>

                <div className="mb-4">
                  <label className="block text-xs font-semibold text-steel-400 mb-2 uppercase tracking-widest">Material Type</label>
                  <select
                    name="materialType"
                    value={form.materialType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl text-sm text-white focus:outline-none"
                    style={inputStyle}
                  >
                    <option value="" style={{ background: '#071428' }}>Select material type</option>
                    {CATEGORIES.map(c => (
                      <option key={c.name} value={c.name} style={{ background: '#071428' }}>{c.name}</option>
                    ))}
                    <option value="Mixed" style={{ background: '#071428' }}>Mixed / Multiple Materials</option>
                    <option value="Not Sure" style={{ background: '#071428' }}>Not Sure — Need Assessment</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-xs font-semibold text-steel-400 mb-2 uppercase tracking-widest">Your Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe your scrap material, condition, location, or any special requirements..."
                    className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-steel-400 focus:outline-none resize-none"
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'rgba(0,102,255,0.5)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button type="submit" disabled={submitting} className="btn-primary flex-1 justify-center">
                    {submitting ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2"><Send size={16} /> Send via WhatsApp</span>
                    )}
                  </button>
                  <a href={`tel:${COMPANY.phone}`} className="btn-secondary flex-1 justify-center text-center">
                    <Phone size={16} /> Call Directly
                  </a>
                </div>

                <p className="text-center text-xs text-steel-400 mt-4">
                  🔒 Your information is confidential and used only to provide your quote.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
