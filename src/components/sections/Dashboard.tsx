import { motion } from 'framer-motion';
import {
  RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer,
  AreaChart, Area, XAxis, YAxis, Tooltip, BarChart, Bar, CartesianGrid, Cell,
} from 'recharts';
import { BarChart2, Bot, Rocket, Code2, Zap, Layers, Award } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const radarData = [
  { subject: 'Frontend', A: 90 },
  { subject: 'Backend',  A: 88 },
  { subject: 'AI/ML',   A: 82 },
  { subject: 'Database', A: 83 },
  { subject: 'Security', A: 80 },
  { subject: 'DevOps',   A: 72 },
];

const timelineData = [
  { period: 'Dec 23', projects: 1, skills: 12 },
  { period: 'Apr 24', projects: 2, skills: 18 },
  { period: 'Jan 25', projects: 3, skills: 24 },
  { period: 'Nov 25', projects: 4, skills: 28 },
  { period: 'Dec 25', projects: 6, skills: 32 },
  { period: 'Now',    projects: 6, skills: 35 },
];

const techUsage = [
  { tech: 'React',   value: 90 },
  { tech: 'Node.js', value: 88 },
  { tech: 'Python',  value: 88 },
  { tech: 'FastAPI', value: 80 },
  { tech: 'Angular', value: 82 },
  { tech: 'TF',      value: 78 },
];

interface StatCard {
  label: string;
  value: string;
  Icon: LucideIcon;
  color: string;
}

const statCards: StatCard[] = [
  { label: 'AI Systems Built',      value: '3',    Icon: Bot,    color: '#00f5ff' },
  { label: 'Production Deployments', value: '4+',  Icon: Rocket, color: '#bf5af2' },
  { label: 'Lines of Code',          value: '50K+', Icon: Code2,  color: '#30d158' },
  { label: 'Manual Work Reduced',    value: '70%',  Icon: Zap,    color: '#ff9f0a' },
  { label: 'Tech Stack Depth',       value: '20+',  Icon: Layers, color: '#0a84ff' },
  { label: 'Certifications',         value: '10',   Icon: Award,  color: '#ff375f' },
];

const BAR_COLORS = ['#00f5ff', '#0af', '#4f8eff', '#bf5af2', '#a855f7', '#d946ef'];

function CustomTooltip({
  active, payload, label, isDark,
}: {
  active?: boolean;
  payload?: { value: number; name?: string }[];
  label?: string;
  isDark: boolean;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div className={`px-3 py-2 rounded-xl text-xs font-medium shadow-xl ${
      isDark ? 'bg-slate-900 border border-white/10 text-white' : 'bg-white border border-slate-200 text-slate-900'
    }`}>
      <p className="text-cyan-400 mb-1 font-semibold">{label}</p>
      {payload.map((p, i) => (
        <p key={i} className={isDark ? 'text-slate-300' : 'text-slate-600'}>
          {p.name ?? 'Value'}: <span className="font-bold">{p.value}</span>
        </p>
      ))}
    </div>
  );
}

export default function Dashboard() {
  const { isDark } = useTheme();

  return (
    <section
      id="dashboard"
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
            style={{ background: 'rgba(0,245,255,0.1)', border: '1px solid rgba(0,245,255,0.3)', color: '#00f5ff' }}
          >
            <BarChart2 size={12} /> Analytics
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Portfolio <span className="gradient-text">Metrics</span>
          </h2>
          <p className={`max-w-xl mx-auto text-base ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            A data-driven view of my skills, growth trajectory, and technical achievements.
          </p>
        </motion.div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
          {statCards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, type: 'spring', stiffness: 260, damping: 20 }}
              whileHover={{ scale: 1.06, y: -4 }}
              className={`rounded-2xl p-4 text-center transition-all ${
                isDark ? 'glass border border-white/10' : 'glass-light border border-slate-200 shadow-sm'
              }`}
              style={{ boxShadow: `0 0 24px ${card.color}12` }}
            >
              <div
                className="w-10 h-10 mx-auto mb-2 rounded-xl flex items-center justify-center"
                style={{ background: `${card.color}18`, border: `1px solid ${card.color}30` }}
              >
                <card.Icon size={18} style={{ color: card.color }} strokeWidth={1.75} />
              </div>
              <div className="text-xl font-bold mb-0.5" style={{ color: card.color }}>
                {card.value}
              </div>
              <div className={`text-xs leading-tight ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                {card.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Charts row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Radar — Skill profile */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`rounded-2xl p-6 ${
              isDark ? 'glass border border-white/10' : 'glass-light border border-slate-200 shadow-sm'
            }`}
          >
            <h3 className={`font-bold mb-1 text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Skill Profile
            </h3>
            <p className={`text-xs mb-4 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
              Competency across disciplines
            </p>
            <ResponsiveContainer width="100%" height={210}>
              <RadarChart data={radarData}>
                <PolarGrid stroke={isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.07)'} />
                <PolarAngleAxis
                  dataKey="subject"
                  tick={{ fill: isDark ? '#94a3b8' : '#64748b', fontSize: 11 }}
                />
                <Radar
                  name="Skills"
                  dataKey="A"
                  stroke="#00f5ff"
                  fill="#00f5ff"
                  fillOpacity={0.12}
                  strokeWidth={2}
                />
              </RadarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Area — Growth trajectory */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12, duration: 0.5 }}
            className={`rounded-2xl p-6 ${
              isDark ? 'glass border border-white/10' : 'glass-light border border-slate-200 shadow-sm'
            }`}
          >
            <h3 className={`font-bold mb-1 text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Growth Trajectory
            </h3>
            <p className={`text-xs mb-4 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
              Projects & skills over time
            </p>
            <ResponsiveContainer width="100%" height={210}>
              <AreaChart data={timelineData}>
                <defs>
                  <linearGradient id="projectGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%"  stopColor="#00f5ff" stopOpacity={0.28} />
                    <stop offset="95%" stopColor="#00f5ff" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="skillGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%"  stopColor="#bf5af2" stopOpacity={0.28} />
                    <stop offset="95%" stopColor="#bf5af2" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke={isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'} />
                <XAxis dataKey="period" tick={{ fill: isDark ? '#94a3b8' : '#64748b', fontSize: 10 }} />
                <YAxis tick={{ fill: isDark ? '#94a3b8' : '#64748b', fontSize: 10 }} />
                <Tooltip content={<CustomTooltip isDark={isDark} />} />
                <Area type="monotone" dataKey="projects" name="Projects" stroke="#00f5ff" strokeWidth={2} fill="url(#projectGrad)" dot={{ fill: '#00f5ff', r: 3 }} />
                <Area type="monotone" dataKey="skills"   name="Skills"   stroke="#bf5af2" strokeWidth={2} fill="url(#skillGrad)"   dot={{ fill: '#bf5af2', r: 3 }} />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Bar — Core tech */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.24, duration: 0.5 }}
            className={`rounded-2xl p-6 ${
              isDark ? 'glass border border-white/10' : 'glass-light border border-slate-200 shadow-sm'
            }`}
          >
            <h3 className={`font-bold mb-1 text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Core Tech Proficiency
            </h3>
            <p className={`text-xs mb-4 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
              Self-assessed proficiency %
            </p>
            <ResponsiveContainer width="100%" height={210}>
              <BarChart data={techUsage} layout="vertical" barSize={8}>
                <CartesianGrid strokeDasharray="3 3" stroke={isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'} />
                <XAxis type="number" domain={[0, 100]} tick={{ fill: isDark ? '#94a3b8' : '#64748b', fontSize: 10 }} />
                <YAxis dataKey="tech" type="category" tick={{ fill: isDark ? '#94a3b8' : '#64748b', fontSize: 11 }} width={46} />
                <Tooltip content={<CustomTooltip isDark={isDark} />} />
                <Bar dataKey="value" name="Proficiency" radius={4}>
                  {techUsage.map((_, i) => (
                    <Cell key={i} fill={BAR_COLORS[i % BAR_COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Contribution heatmap */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className={`mt-6 rounded-2xl p-6 ${
            isDark ? 'glass border border-white/10' : 'glass-light border border-slate-200 shadow-sm'
          }`}
        >
          <h3 className={`font-bold mb-1 text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Activity Heatmap
          </h3>
          <p className={`text-xs mb-4 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
            Simulated contribution density over 12 months
          </p>
          <div className="overflow-x-auto">
            <div className="flex gap-1 min-w-max">
              {Array.from({ length: 52 }, (_, week) => (
                <div key={week} className="flex flex-col gap-1">
                  {Array.from({ length: 7 }, (_, day) => {
                    const level = Math.random();
                    const intensity = level < 0.5 ? 0 : level < 0.7 ? 1 : level < 0.85 ? 2 : level < 0.95 ? 3 : 4;
                    const dark  = ['rgba(255,255,255,0.05)', 'rgba(0,245,255,0.18)', 'rgba(0,245,255,0.38)', 'rgba(0,245,255,0.62)', 'rgba(0,245,255,0.88)'];
                    const light = ['rgba(0,0,0,0.04)',       'rgba(0,180,200,0.18)', 'rgba(0,180,200,0.38)', 'rgba(0,180,200,0.60)', 'rgba(0,160,190,0.82)'];
                    return (
                      <div
                        key={day}
                        className="w-3 h-3 rounded-sm"
                        style={{ background: (isDark ? dark : light)[intensity] }}
                        title={`Week ${week + 1}, day ${day + 1}`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
          <div className={`flex items-center gap-2 mt-3 text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
            <span>Less</span>
            {[0.05, 0.2, 0.4, 0.65, 0.9].map((o, i) => (
              <div key={i} className="w-3 h-3 rounded-sm" style={{ background: `rgba(0,245,255,${o})` }} />
            ))}
            <span>More</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
