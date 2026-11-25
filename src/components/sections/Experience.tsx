import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, ChevronRight, CheckCircle2 } from 'lucide-react';
import { experiences } from '../../data/experience';
import { useTheme } from '../../context/ThemeContext';

export default function Experience() {
  const { isDark } = useTheme();

  return (
    <section
      id="experience"
      className={`py-28 ${isDark ? 'bg-[#050510]' : 'bg-white'}`}
    >
      <div className="max-w-5xl mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 text-xs font-semibold tracking-wider uppercase"
            style={{ background: 'rgba(10,132,255,0.1)', border: '1px solid rgba(10,132,255,0.3)', color: '#0a84ff' }}
          >
            <Briefcase size={12} /> Work History
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className={`max-w-xl mx-auto text-base ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            5 roles across enterprise AI, full-stack engineering, and ML research — shipping
            production-grade systems from day one.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px md:left-8 overflow-hidden">
            <motion.div
              initial={{ scaleY: 0, originY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="w-full h-full"
              style={{ background: 'linear-gradient(180deg, #00f5ff44, #bf5af266, #0a84ff44)' }}
            />
          </div>

          <div className="flex flex-col gap-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative pl-16 md:pl-20"
              >
                {/* Timeline dot with pulse ring */}
                <div className="absolute left-3.5 top-6 md:left-5.5">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 300, delay: i * 0.08 + 0.2 }}
                    className="relative w-5 h-5"
                  >
                    {/* Pulse ring */}
                    <motion.div
                      animate={{ scale: [1, 1.7, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut', delay: i * 0.3 }}
                      className="absolute inset-0 rounded-full"
                      style={{ background: exp.color }}
                    />
                    {/* Solid dot */}
                    <div
                      className="relative w-5 h-5 rounded-full border-2 flex items-center justify-center z-10"
                      style={{
                        background: isDark ? '#050510' : '#ffffff',
                        borderColor: exp.color,
                        boxShadow: `0 0 10px ${exp.glowColor}`,
                      }}
                    >
                      <div className="w-2 h-2 rounded-full" style={{ background: exp.color }} />
                    </div>
                  </motion.div>
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  className={`rounded-2xl p-6 transition-all duration-300 ${
                    isDark
                      ? 'glass border border-white/10 hover:border-white/20'
                      : 'glass-light border border-slate-200 shadow-sm hover:shadow-md'
                  }`}
                  style={{
                    boxShadow: `0 2px 16px ${exp.glowColor.replace('0.18', '0.05')}`,
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 32px ${exp.glowColor}`;
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 2px 16px ${exp.glowColor.replace('0.18', '0.05')}`;
                  }}
                >
                  {/* Card header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className={`font-bold text-base ${isDark ? 'text-white' : 'text-slate-900'}`}>
                          {exp.role}
                        </h3>
                        <span
                          className="text-xs px-2 py-0.5 rounded-full font-semibold"
                          style={{
                            background: `${exp.color}18`,
                            color: exp.color,
                            border: `1px solid ${exp.color}30`,
                          }}
                        >
                          {exp.type}
                        </span>
                      </div>
                      <p className="font-bold text-sm" style={{ color: exp.color }}>
                        {exp.company}
                      </p>
                    </div>

                    <div className={`flex flex-col items-start sm:items-end gap-1 text-xs flex-shrink-0 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                      <span className="flex items-center gap-1.5">
                        <Calendar size={11} /> {exp.duration}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={11} /> {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <ul className="space-y-2 mb-4">
                    {exp.responsibilities.map((r, ri) => (
                      <li
                        key={ri}
                        className={`flex items-start gap-2.5 text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}
                      >
                        <ChevronRight
                          size={14}
                          className="mt-0.5 flex-shrink-0"
                          style={{ color: exp.color }}
                        />
                        {r}
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {exp.tech.map(t => (
                      <span
                        key={t}
                        className={`px-2 py-0.5 rounded-lg text-xs font-medium ${
                          isDark
                            ? 'bg-white/5 border border-white/10 text-slate-400'
                            : 'bg-slate-100 border border-slate-200 text-slate-600'
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Achievements */}
                  {exp.achievements && (
                    <div className="flex flex-wrap gap-2 pt-3 border-t border-white/5">
                      {exp.achievements.map(a => (
                        <span
                          key={a}
                          className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold"
                          style={{
                            background: `${exp.color}12`,
                            color: exp.color,
                            border: `1px solid ${exp.color}28`,
                          }}
                        >
                          <CheckCircle2 size={10} />
                          {a}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
