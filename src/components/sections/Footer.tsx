import { motion } from 'framer-motion';
import { Mail, ArrowUp, Zap, MapPin, Phone, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';
import { useTheme } from '../../context/ThemeContext';

const quickLinks = [
  { label: 'About',          href: '#about'          },
  { label: 'Specializations',href: '#specializations'},
  { label: 'Skills',         href: '#skills'         },
  { label: 'Experience',     href: '#experience'     },
  { label: 'Projects',       href: '#projects'       },
  { label: 'Dashboard',      href: '#dashboard'      },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact',        href: '#contact'        },
];

const projects = [
  { label: 'AI Safety Dashboard',   href: '#projects' },
  { label: 'StockBot Chatbot',       href: '#projects' },
  { label: 'NOC Policy RAG',         href: '#projects' },
  { label: 'Inventory System',       href: '#projects' },
  { label: 'Aerial Segmentation',    href: '#projects' },
  { label: 'NLP Event Classifier',   href: '#projects' },
];

const socials = [
  { Icon: GithubIcon,   href: 'https://github.com',                        label: 'GitHub'   },
  { Icon: LinkedinIcon, href: 'https://linkedin.com',                      label: 'LinkedIn' },
  { Icon: Mail,         href: 'mailto:lohithkumar290104@gmail.com',         label: 'Email'    },
];

export default function Footer() {
  const { isDark } = useTheme();

  const nav = (href: string) => {
    const id = href.slice(1);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      className={`relative ${isDark ? 'bg-[#030308]' : 'bg-slate-50'} border-t ${
        isDark ? 'border-white/8' : 'border-slate-200'
      }`}
    >
      {/* Top neon line */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent 0%, #00f5ff 30%, #bf5af2 70%, transparent 100%)' }}
      />

      {/* Main grid */}
      <div className="max-w-6xl mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Col 1 — Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <Zap size={16} className="text-white" strokeWidth={2.5} />
              </div>
              <span className={`font-black text-base ${isDark ? 'text-white' : 'text-slate-900'}`}>
                LK<span className="text-cyan-400">.</span>
              </span>
            </div>

            <p className={`text-sm leading-relaxed mb-5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Software Engineer & AI/ML practitioner building production-grade enterprise systems,
              intelligent chatbots, and data-driven dashboards.
            </p>

            {/* Contact info */}
            <div className="space-y-2.5">
              {[
                { Icon: Mail,    text: 'lohithkumar290104@gmail.com', href: 'mailto:lohithkumar290104@gmail.com' },
                { Icon: Phone,   text: '+91 9003265701',              href: 'tel:+919003265701'                  },
                { Icon: MapPin,  text: 'Chennai, TN 600062, India',   href: '#'                                  },
              ].map(({ Icon, text, href }) => (
                <a
                  key={text}
                  href={href}
                  className={`flex items-start gap-2.5 text-xs group ${
                    isDark ? 'text-slate-500 hover:text-slate-300' : 'text-slate-500 hover:text-slate-700'
                  } transition-colors`}
                >
                  <Icon size={12} className="mt-0.5 flex-shrink-0 group-hover:text-cyan-400 transition-colors" />
                  {text}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Quick links */}
          <div>
            <h4 className={`font-bold text-xs tracking-widest uppercase mb-5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <button
                    onClick={() => nav(link.href)}
                    className={`text-sm transition-colors ${
                      isDark ? 'text-slate-500 hover:text-cyan-400' : 'text-slate-500 hover:text-cyan-600'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Projects */}
          <div>
            <h4 className={`font-bold text-xs tracking-widest uppercase mb-5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Projects
            </h4>
            <ul className="space-y-2.5">
              {projects.map(p => (
                <li key={p.label}>
                  <button
                    onClick={() => nav(p.href)}
                    className={`text-sm transition-colors flex items-center gap-1.5 group ${
                      isDark ? 'text-slate-500 hover:text-purple-400' : 'text-slate-500 hover:text-purple-600'
                    }`}
                  >
                    <span className="w-1 h-1 rounded-full bg-current opacity-50 group-hover:opacity-100 transition-opacity" />
                    {p.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Status + socials */}
          <div>
            <h4 className={`font-bold text-xs tracking-widest uppercase mb-5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Status
            </h4>

            {/* Availability card */}
            <div
              className={`rounded-2xl p-4 mb-5 ${
                isDark ? 'bg-green-400/8 border border-green-400/15' : 'bg-green-50 border border-green-200'
              }`}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-bold text-green-400">Available for hire</span>
              </div>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Open to full-time roles in Software Engineering, Full Stack, or AI/ML Engineering.
                Will respond within 24 hours.
              </p>
              <button
                onClick={() => nav('#contact')}
                className="mt-3 w-full py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-cyan-500 to-purple-600 text-white"
              >
                Get in Touch
              </button>
            </div>

            {/* Social icons */}
            <p className={`text-xs font-semibold tracking-widest uppercase mb-3 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
              Connect
            </p>
            <div className="flex gap-2.5">
              {socials.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.92 }}
                  title={label}
                  className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                    isDark
                      ? 'bg-white/5 border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30 hover:bg-cyan-400/5'
                      : 'bg-white border border-slate-200 text-slate-500 hover:text-cyan-600 hover:border-cyan-300 shadow-sm'
                  }`}
                >
                  <Icon size={16} />
                </motion.a>
              ))}

              {/* Resume link */}
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.12, y: -2 }}
                whileTap={{ scale: 0.92 }}
                title="Download Resume"
                className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                  isDark
                    ? 'bg-white/5 border border-white/10 text-slate-400 hover:text-purple-400 hover:border-purple-400/30'
                    : 'bg-white border border-slate-200 text-slate-500 hover:text-purple-600 hover:border-purple-300 shadow-sm'
                }`}
              >
                <ExternalLink size={15} />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={`border-t mb-6 ${isDark ? 'border-white/8' : 'border-slate-200'}`} />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className={`text-xs ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>
            <span>© 2026 Lohith Kumar P. &nbsp;</span>
            <span className={isDark ? 'text-slate-700' : 'text-slate-300'}>|</span>
            <span> &nbsp;Built with React · Vite · Framer Motion · Tailwind CSS</span>
          </div>

          <div className="flex items-center gap-3">
            <span className={`text-xs ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>
              B.Tech CSE (AI &amp; ML) · SRM University · CGPA 8.56
            </span>
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-8 h-8 rounded-xl flex items-center justify-center bg-gradient-to-br from-cyan-500 to-purple-600 text-white shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-shadow"
            >
              <ArrowUp size={14} strokeWidth={2.5} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
