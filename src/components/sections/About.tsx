import { useRef } from 'react';
import { motion, useAnimationFrame, useMotionValue } from 'framer-motion';
import { GraduationCap, Briefcase, Code2, Award, Quote } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

/* ── Infinite marquee strip ── */
const MARQUEE_ITEMS = [
  'React.js', 'Node.js', 'Python', 'FastAPI', 'Angular', 'TypeScript',
  'TensorFlow', 'RAG', 'OpenAI API', 'AES-256-GCM', 'Azure AD', 'MySQL',
  'MongoDB', 'Docker', 'REST APIs', 'NLP', 'U-Net', 'JWT', 'Tailwind CSS', 'Framer Motion',
];

function Marquee({ isDark }: { isDark: boolean }) {
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useAnimationFrame(() => {
    const container = containerRef.current;
    if (!container) return;
    const contentWidth = container.scrollWidth / 2;
    x.set((x.get() - 0.55) % -contentWidth);
  });

  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="overflow-hidden w-full py-2 relative">
      {/* Left fade */}
      <div
        className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{
          background: `linear-gradient(to right, ${isDark ? '#050510' : '#ffffff'}, transparent)`,
        }}
      />
      {/* Right fade */}
      <div
        className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{
          background: `linear-gradient(to left, ${isDark ? '#050510' : '#ffffff'}, transparent)`,
        }}
      />

      <motion.div
        ref={containerRef}
        style={{ x }}
        className="flex gap-3 whitespace-nowrap will-change-transform"
      >
        {items.map((item, i) => (
          <span
            key={i}
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold flex-shrink-0 ${
              isDark
                ? 'bg-white/5 border border-white/10 text-slate-400'
                : 'bg-slate-100 border border-slate-200 text-slate-600'
            }`}
          >
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: i % 3 === 0 ? '#00f5ff' : i % 3 === 1 ? '#bf5af2' : '#30d158' }}
            />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/* ── Career timeline ── */
const timeline = [
  { year: '2021', title: 'Started B.Tech CSE (AI & ML)',        org: 'SRM University, Chennai',   color: '#00f5ff' },
  { year: '2023', title: 'Python Developer Intern',             org: 'TWM Inc., Chennai',          color: '#bf5af2' },
  { year: '2024', title: 'AI Research Intern',                  org: 'Agnirva Space Research',     color: '#30d158' },
  { year: 'Jan 25', title: 'System Engineer Intern',            org: 'Infosys, Mysore',            color: '#0a84ff' },
  { year: 'Nov 25', title: 'Full Stack Developer Intern',       org: 'Cognifyz Technologies',      color: '#ff9f0a' },
  { year: 'Dec 25', title: 'IT Engineer (Current)',             org: 'Wheels India Limited',       color: '#ff375f' },
];

const stats = [
  { label: 'CGPA',        value: '8.56',  sub: 'B.Tech AI & ML',     Icon: GraduationCap, color: '#00f5ff' },
  { label: 'Experience',  value: '1.5+',  sub: 'Years Industry',      Icon: Briefcase,     color: '#bf5af2' },
  { label: 'Projects',    value: '6+',    sub: 'Production Systems',  Icon: Code2,         color: '#30d158' },
  { label: 'Certs',       value: '10',    sub: 'Certifications',      Icon: Award,         color: '#ff9f0a' },
];

export default function About() {
  const { isDark } = useTheme();

  return (
    <section
      id="about"
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
            style={{ background: 'rgba(191,90,242,0.1)', border: '1px solid rgba(191,90,242,0.3)', color: '#bf5af2' }}
          >
            Who I Am
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        {/* Quote card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className={`relative rounded-3xl p-8 md:p-10 mb-14 overflow-hidden ${
            isDark ? 'glass border border-white/10' : 'glass-light border border-slate-200 shadow-sm'
          }`}
        >
          {/* Decorative gradient blob */}
          <div
            className="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl pointer-events-none opacity-20"
            style={{ background: 'radial-gradient(circle, #00f5ff, #bf5af2)' }}
          />

          <Quote
            size={36}
            className="mb-5 opacity-30"
            style={{ color: '#00f5ff' }}
          />

          <p className={`text-lg md:text-xl leading-relaxed font-medium mb-6 relative ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
            I build at the intersection of{' '}
            <span className="gradient-text font-bold">AI research</span> and{' '}
            <span className="gradient-text font-bold">production engineering</span> — turning complex
            data challenges into secure, scalable systems that measurably reduce manual effort and
            surface intelligence that was previously hidden in spreadsheets.
          </p>

          <div className="flex flex-wrap gap-3">
            {['Enterprise AI', 'Full Stack', 'RAG / LLM', 'Computer Vision', 'NLP', 'Security'].map(tag => (
              <span
                key={tag}
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  isDark ? 'bg-white/5 border border-white/10 text-slate-300' : 'bg-slate-100 border border-slate-200 text-slate-700'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, type: 'spring', stiffness: 260, damping: 22 }}
              whileHover={{ scale: 1.04, y: -4 }}
              className={`rounded-2xl p-6 text-center transition-all ${
                isDark ? 'glass border border-white/10' : 'glass-light border border-slate-200 shadow-sm'
              }`}
              style={{ boxShadow: `0 0 0 0 ${s.color}` }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = `0 0 24px ${s.color}20`; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 0 ${s.color}`; }}
            >
              <div
                className="w-10 h-10 mx-auto mb-3 rounded-xl flex items-center justify-center"
                style={{ background: `${s.color}18`, border: `1px solid ${s.color}30` }}
              >
                <s.Icon size={18} style={{ color: s.color }} strokeWidth={1.75} />
              </div>
              <div className="text-3xl font-black mb-0.5" style={{ color: s.color }}>{s.value}</div>
              <div className={`text-xs font-bold mb-0.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>{s.label}</div>
              <div className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>{s.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Tech marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className={`text-xs font-semibold tracking-widest uppercase text-center mb-4 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
            Technologies I work with
          </p>
          <Marquee isDark={isDark} />
        </motion.div>

        {/* Career timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Career <span className="gradient-text">Journey</span>
          </h3>
        </motion.div>

        <div className="relative">
          {/* Center line — desktop only */}
          <div
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px hidden md:block"
            style={{ background: 'linear-gradient(180deg, transparent, #00f5ff33 20%, #bf5af244 80%, transparent)' }}
          />

          <div className="flex flex-col gap-6">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -32 : 32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className={`flex items-center gap-6 md:gap-10 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Card */}
                <div className="flex-1">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`p-5 rounded-2xl transition-all ${
                      isDark ? 'glass border border-white/10 hover:border-white/20' : 'glass-light border border-slate-200 shadow-sm hover:shadow-md'
                    }`}
                  >
                    <span
                      className="inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-2"
                      style={{ background: `${item.color}18`, color: item.color, border: `1px solid ${item.color}30` }}
                    >
                      {item.year}
                    </span>
                    <h4 className={`font-bold text-sm mb-0.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {item.title}
                    </h4>
                    <p className="text-xs font-semibold" style={{ color: item.color }}>
                      {item.org}
                    </p>
                  </motion.div>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex items-center justify-center flex-shrink-0">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 320, delay: i * 0.08 + 0.15 }}
                    className="w-4 h-4 rounded-full z-10"
                    style={{
                      background: item.color,
                      boxShadow: `0 0 14px ${item.color}`,
                      border: `2px solid ${isDark ? '#050510' : '#ffffff'}`,
                    }}
                  />
                </div>

                {/* Spacer */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
