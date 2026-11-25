import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { certifications } from '../../data/certifications';
import { useTheme } from '../../context/ThemeContext';

export default function Certifications() {
  const { isDark } = useTheme();

  return (
    <section
      id="certifications"
      className={`py-28 ${isDark ? 'bg-[#050510]' : 'bg-white'}`}
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 text-xs font-semibold tracking-wider uppercase"
            style={{ background: 'rgba(255,159,10,0.1)', border: '1px solid rgba(255,159,10,0.3)', color: '#ff9f0a' }}
          >
            <Award size={12} /> Achievements
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Certifications & <span className="gradient-text">Credentials</span>
          </h2>
          <p className={`max-w-xl mx-auto text-base ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Industry-recognised certifications from Infosys, AWS Academy, and NPTEL.
          </p>
        </motion.div>

        {/* Cert grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              whileHover={{ scale: 1.04, y: -6 }}
              className={`rounded-2xl p-5 text-center cursor-default transition-all group ${
                isDark
                  ? 'glass border border-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-cyan-500/5'
                  : 'glass-light border border-slate-200 shadow-sm hover:shadow-md'
              }`}
            >
              {/* Icon block */}
              <div
                className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300`}
              >
                <cert.Icon size={22} className="text-white" strokeWidth={1.75} />
              </div>

              <h4 className={`font-semibold text-xs leading-snug mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {cert.name}
              </h4>

              <span
                className="text-xs font-semibold px-2 py-0.5 rounded-full"
                style={{
                  background: isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.05)',
                  color: isDark ? '#94a3b8' : '#64748b',
                }}
              >
                {cert.issuer}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Issuer summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          {[
            { label: 'Infosys',     count: '7 certifications', color: '#0a84ff' },
            { label: 'AWS Academy', count: '2 certifications', color: '#ff9f0a' },
            { label: 'NPTEL',       count: '1 certification',  color: '#30d158' },
          ].map(b => (
            <div
              key={b.label}
              className={`flex items-center gap-3 px-5 py-3 rounded-2xl ${
                isDark ? 'glass border border-white/10' : 'glass-light border border-slate-200 shadow-sm'
              }`}
            >
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{ background: b.color, boxShadow: `0 0 8px ${b.color}` }}
              />
              <span className={`font-semibold text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {b.label}
              </span>
              <span className="text-xs font-medium" style={{ color: b.color }}>
                {b.count}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
