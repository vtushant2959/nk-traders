import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import toast from 'react-hot-toast'
import { Send, Upload, Phone, Mail, MapPin, Building, Package } from 'lucide-react'
import { COMPANY, CATEGORIES } from '../../data/siteData'

export default function LeadForm() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [form, setForm] = useState({
    name: '', company: '', phone: '', email: '', location: '',
    materialType: '', quantity: '', message: '',
  })
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.phone) {
      toast.error('Please fill in Name and Phone number')
      return
    }
    setSubmitting(true)
    // Simulate submission
    await new Promise(r => setTimeout(r, 1200))

    // WhatsApp redirect
    const msg = `*NK Traders Lead Enquiry*\n\n*Name:* ${form.name}\n*Company:* ${form.company}\n*Phone:* ${form.phone}\n*Email:* ${form.email}\n*Location:* ${form.location}\n*Material:* ${form.materialType}\n*Quantity:* ${form.quantity}\n*Message:* ${form.message}`
    window.open(`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank')
    toast.success('Redirecting to WhatsApp for fastest response!')
    setSubmitting(false)
    setForm({ name: '', company: '', phone: '', email: '', location: '', materialType: '', quantity: '', message: '' })
  }

  return (
    <section id="lead-form" ref={ref} className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #071428 0%, #020b18 100%)' }}>

      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,102,255,0.08) 0%, transparent 70%)' }} />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="section-label mb-5 inline-flex">Get Free Quote</span>
          <h2 className="section-title text-white mb-5">
            Get Your
            <span className="text-gradient-blue"> Instant Quote</span>
          </h2>
          <p className="text-steel-400 max-w-xl mx-auto">
            Fill the form below and get a call back within 60 minutes. Or WhatsApp us directly for the fastest response.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="lg:col-span-2 space-y-6"
          >
            {[
              {
                icon: Phone, title: 'Call Us Now', desc: COMPANY.phone, sub: 'Mon-Sat 8AM–8PM',
                action: `tel:${COMPANY.phone}`, cta: 'Call Directly', color: '#0066ff',
              },
              {
                icon: null, title: 'WhatsApp', desc: 'Instant Scrap Quote', sub: 'Response in minutes',
                action: `https://wa.me/${COMPANY.whatsapp}?text=I need a scrap quote`, cta: 'WhatsApp Now', color: '#25d366',
                isWA: true,
              },
              {
                icon: Mail, title: 'Email Us', desc: COMPANY.email, sub: 'Response within 2 hours',
                action: `mailto:${COMPANY.email}`, cta: 'Send Email', color: '#7c3aed',
              },
              {
                icon: MapPin, title: 'Visit Us', desc: COMPANY.address, sub: 'By appointment',
                action: '#', cta: 'Get Directions', color: '#d97706',
              },
            ].map((item) => (
              <div key={item.title}
                className="rounded-2xl p-5 transition-all duration-300 hover:scale-102 group"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${item.color}20` }}>
                    {item.isWA ? (
                      <svg viewBox="0 0 24 24" fill="currentColor" style={{ color: item.color, width: 18, height: 18 }}>
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                    ) : (
                      <item.icon size={18} style={{ color: item.color }} />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-white font-semibold text-sm mb-0.5">{item.title}</div>
                    <div className="text-steel-300 text-sm truncate">{item.desc}</div>
                    <div className="text-steel-400 text-xs">{item.sub}</div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit}
              className="rounded-2xl p-8 relative overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: 'linear-gradient(90deg, transparent, #0066ff, transparent)' }} />

              <h3 className="font-display font-bold text-white text-xl mb-6">Get Free Scrap Valuation</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                {[
                  { name: 'name', label: 'Your Name *', placeholder: 'Rajesh Kumar', icon: null },
                  { name: 'company', label: 'Company Name', placeholder: 'ABC Industries Pvt. Ltd.', icon: null },
                  { name: 'phone', label: 'Phone Number *', placeholder: '+91 98765 43210', icon: null },
                  { name: 'email', label: 'Email Address', placeholder: 'rajesh@company.com', icon: null },
                  { name: 'location', label: 'City / Location', placeholder: 'Delhi, Gurgaon, Mumbai...', icon: null },
                  { name: 'quantity', label: 'Approx. Quantity', placeholder: 'e.g. 500 kg, 5 MT, 10 tonnes', icon: null },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-xs font-semibold text-steel-400 mb-2 uppercase tracking-wide">
                      {field.label}
                    </label>
                    <input
                      type="text"
                      name={field.name}
                      value={form[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-steel-400 focus:outline-none transition-all duration-200"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.1)',
                      }}
                      onFocus={e => e.target.style.borderColor = 'rgba(0,102,255,0.5)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                    />
                  </div>
                ))}
              </div>

              <div className="mb-4">
                <label className="block text-xs font-semibold text-steel-400 mb-2 uppercase tracking-wide">
                  Material Type
                </label>
                <select
                  name="materialType"
                  value={form.materialType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl text-sm text-white focus:outline-none transition-all duration-200"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <option value="" style={{ background: '#071428' }}>Select Material Type</option>
                  {CATEGORIES.map(c => (
                    <option key={c.name} value={c.name} style={{ background: '#071428' }}>{c.name}</option>
                  ))}
                  <option value="Mixed/Multiple" style={{ background: '#071428' }}>Mixed / Multiple Materials</option>
                  <option value="Not Sure" style={{ background: '#071428' }}>Not Sure — Need Assessment</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-xs font-semibold text-steel-400 mb-2 uppercase tracking-wide">
                  Additional Details
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Describe your scrap material, condition, any special requirements..."
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-steel-400 focus:outline-none resize-none transition-all duration-200"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}
                  onFocus={e => e.target.style.borderColor = 'rgba(0,102,255,0.5)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary flex-1 justify-center"
                >
                  {submitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Submitting...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send size={16} /> Send via WhatsApp
                    </span>
                  )}
                </button>
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="btn-secondary flex-1 justify-center text-center"
                >
                  <Phone size={16} /> Call Now
                </a>
              </div>

              <p className="text-center text-xs text-steel-400 mt-4">
                🔒 Your details are private. We will only use them to provide your quote.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
