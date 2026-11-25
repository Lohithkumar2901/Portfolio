import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';
import { useTheme } from '../../context/ThemeContext';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'lohithkumar290104@gmail.com', href: 'mailto:lohithkumar290104@gmail.com', color: '#00f5ff' },
  { icon: Phone, label: 'Phone', value: '+91 9003265701', href: 'tel:+919003265701', color: '#bf5af2' },
  { icon: MapPin, label: 'Location', value: 'Chennai, TN 600062, India', href: '#', color: '#30d158' },
  { icon: LinkedinIcon, label: 'LinkedIn', value: 'linkedin.com/in/lohithkumar', href: 'https://linkedin.com', color: '#0a84ff' },
  { icon: GithubIcon, label: 'GitHub', value: 'github.com/lohithkumar', href: 'https://github.com', color: '#ff9f0a' },
];

export default function Contact() {
  const { isDark } = useTheme();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const inputClass = `w-full px-4 py-3 rounded-xl text-sm outline-none transition-all ${
    isDark
      ? 'bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-cyan-400/50 focus:bg-white/8'
      : 'bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:border-cyan-400 focus:bg-white'
  }`;

  return (
    <section
      id="contact"
      className={`py-28 ${isDark ? 'bg-[#030308] grid-bg' : 'bg-slate-50 grid-bg-light'}`}
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 text-xs font-semibold tracking-wider uppercase"
            style={{ background: 'rgba(0,245,255,0.1)', border: '1px solid rgba(0,245,255,0.3)', color: '#00f5ff' }}
          >
            <Mail size={12} /> Get In Touch
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className={`max-w-xl mx-auto text-base ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Open to full-time roles in Software Engineering, Full Stack Development, or AI/ML Engineering. Let's build something impactful together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className={`text-xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Contact Information
            </h3>

            {contactInfo.map(item => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, x: 6 }}
                className={`flex items-center gap-4 p-4 rounded-2xl transition-all group ${
                  isDark ? 'glass border border-white/10 hover:border-cyan-400/30' : 'glass-light border border-slate-200 hover:border-cyan-300 shadow-sm'
                }`}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${item.color}18`, border: `1px solid ${item.color}30` }}
                >
                  <item.icon size={18} style={{ color: item.color }} />
                </div>
                <div>
                  <p className={`text-xs font-semibold mb-0.5 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                    {item.label}
                  </p>
                  <p className={`text-sm font-medium group-hover:text-cyan-400 transition-colors ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    {item.value}
                  </p>
                </div>
              </motion.a>
            ))}

            {/* Availability badge */}
            <div
              className={`mt-6 p-4 rounded-2xl flex items-center gap-3 ${
                isDark ? 'bg-green-400/10 border border-green-400/20' : 'bg-green-50 border border-green-200'
              }`}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
              <div>
                <p className="text-green-400 font-semibold text-sm">Available for hire</p>
                <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  Open to full-time opportunities — will respond within 24h
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`rounded-3xl p-8 ${isDark ? 'glass border border-white/10' : 'glass-light border border-slate-200 shadow-sm'}`}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-12"
              >
                <CheckCircle size={48} className="text-green-400 mb-4" />
                <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Message Sent!
                </h3>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                  className="mt-6 px-4 py-2 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Send a Message
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    className={inputClass}
                    placeholder="Your Name"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    required
                  />
                  <input
                    type="email"
                    className={inputClass}
                    placeholder="Your Email"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    required
                  />
                </div>
                <input
                  className={inputClass}
                  placeholder="Subject"
                  value={form.subject}
                  onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                  required
                />
                <textarea
                  className={`${inputClass} resize-none`}
                  rows={5}
                  placeholder="Your message..."
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  required
                />
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-shadow disabled:opacity-60"
                >
                  {loading ? (
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <><Send size={14} /> Send Message</>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
