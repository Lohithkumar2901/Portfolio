import { motion } from 'framer-motion';
import {
  Cpu, Globe, Server, Brain, Database, Shield, Wrench,
  type LucideIcon,
} from 'lucide-react';
import { skillCategories } from '../../data/skills';
import { useTheme } from '../../context/ThemeContext';

const categoryIcons: Record<string, LucideIcon> = {
  'Frontend':    Globe,
  'Backend':     Server,
  'AI / ML':     Brain,
  'Databases':   Database,
  'Security':    Shield,
  'Tools & Cloud': Wrench,
};

function SkillBar({
  name, level, color,
}: { name: string; level: number; color: string }) {
  const { isDark } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="mb-3.5 last:mb-0"
    >
      <div className="flex justify-between items-center mb-1.5">
        <span className={`text-xs font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
          {name}
        </span>
        <span className="text-xs font-bold tabular-nums" style={{ color }}>
          {level}%
        </span>
      </div>
      <div
        className={`h-1.5 rounded-full overflow-hidden ${isDark ? 'bg-white/8' : 'bg-slate-200'}`}
      >
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.33, 1, 0.68, 1], delay: 0.15 }}
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${color}99, ${color})`,
            boxShadow: `0 0 8px ${color}60`,
          }}
        />
      </div>
    </motion.div>
  );
}

const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const cardVariants = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' as const } },
};

/* Extract solid color from the glow rgba for bars */
function glowToHex(glow: string) {
  const m = glow.match(/rgba\((\d+),(\d+),(\d+)/);
  if (!m) return '#00f5ff';
  const r = parseInt(m[1]).toString(16).padStart(2, '0');
  const g = parseInt(m[2]).toString(16).padStart(2, '0');
  const b = parseInt(m[3]).toString(16).padStart(2, '0');
  return `#${r}${g}${b}`;
}

export default function Skills() {
  const { isDark } = useTheme();

  return (
    <section
      id="skills"
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
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 text-xs font-semibold tracking-wider uppercase"
            style={{ background: 'rgba(0,245,255,0.1)', border: '1px solid rgba(0,245,255,0.3)', color: '#00f5ff' }}
          >
            <Cpu size={12} /> Technical Arsenal
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className={`max-w-xl mx-auto text-base ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            A full-spectrum skill set spanning AI/ML research, enterprise backend systems,
            and modern frontend — built through real production work.
          </p>
        </motion.div>

        {/* Category cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {skillCategories.map(cat => {
            const CatIcon = categoryIcons[cat.category] ?? Cpu;
            const solidColor = glowToHex(cat.glow);

            return (
              <motion.div
                key={cat.category}
                variants={cardVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`relative rounded-2xl p-6 overflow-hidden group transition-all duration-300 ${
                  isDark
                    ? 'glass border border-white/10 hover:border-white/20'
                    : 'glass-light border border-slate-200 shadow-sm hover:shadow-lg'
                }`}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 40px ${cat.glow}`;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '';
                }}
              >
                {/* Subtle corner gradient on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at top left, ${cat.glow.replace('0.3','0.08')}, transparent 65%)` }}
                />

                {/* Category header */}
                <div className="flex items-center gap-3 mb-5 relative">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `${solidColor}18`,
                      border: `1px solid ${solidColor}30`,
                    }}
                  >
                    <CatIcon size={20} style={{ color: solidColor }} strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className={`font-bold text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {cat.category}
                    </h3>
                    <p className="text-xs" style={{ color: solidColor }}>
                      {cat.skills.length} technologies
                    </p>
                  </div>
                </div>

                {/* Skill bars */}
                <div className="relative">
                  {cat.skills.map(skill => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      color={solidColor}
                    />
                  ))}
                </div>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, transparent, ${solidColor}, transparent)` }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional tech chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className="mt-12 text-center"
        >
          <p className={`text-xs font-semibold tracking-widest uppercase mb-5 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
            Also familiar with
          </p>
          <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
            {[
              'Scikit-learn', 'Bootstrap', 'AngularJS', 'Java', 'C / C++',
              'U-Net', 'Vector Embeddings', 'Recharts', 'Vite', 'CPPM',
              'Excel Automation', 'Geospatial Data', 'Kaggle Datasets',
            ].map(tag => (
              <motion.span
                key={tag}
                whileHover={{ scale: 1.08, y: -2 }}
                className={`px-3 py-1.5 rounded-full text-xs font-medium cursor-default transition-all ${
                  isDark
                    ? 'bg-white/5 border border-white/10 text-slate-400 hover:border-cyan-400/30 hover:text-cyan-400'
                    : 'bg-white border border-slate-200 text-slate-600 hover:border-cyan-300 hover:text-cyan-600 shadow-sm'
                }`}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
