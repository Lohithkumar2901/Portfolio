import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Layers } from 'lucide-react';
import { GithubIcon } from '../ui/SocialIcons';
import { projects, type Project } from '../../data/projects';
import { useTheme } from '../../context/ThemeContext';

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const { isDark } = useTheme();

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[200] flex items-center justify-center p-4"
        style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(16px)' }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.88, y: 40 }}
          transition={{ type: 'spring', stiffness: 340, damping: 28 }}
          onClick={e => e.stopPropagation()}
          className={`relative w-full max-w-2xl rounded-3xl overflow-hidden ${
            isDark ? 'glass border border-white/15' : 'bg-white border border-slate-200 shadow-2xl'
          }`}
        >
          {/* Gradient header banner */}
          <div className={`h-36 bg-gradient-to-br ${project.gradient} relative overflow-hidden flex items-center justify-center`}>
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.15, type: 'spring', stiffness: 300 }}
              className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl ${
                isDark ? 'bg-white/10 border border-white/20' : 'bg-white/70 border border-white/60'
              }`}
            >
              <project.Icon size={32} className={isDark ? 'text-white' : 'text-slate-700'} strokeWidth={1.5} />
            </motion.div>
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 60%)' }}
            />
            {/* Animated grid lines on banner */}
            <div className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />
          </div>

          {/* Close button */}
          <motion.button
            onClick={onClose}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center bg-black/40 text-white hover:bg-black/60 transition-colors backdrop-blur-sm"
          >
            <X size={15} />
          </motion.button>

          <div className="p-8">
            {/* Category + title */}
            <div className="mb-1">
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full tracking-wide uppercase ${
                isDark ? 'bg-cyan-400/10 text-cyan-400 border border-cyan-400/20'
                       : 'bg-cyan-50 text-cyan-700 border border-cyan-200'
              }`}>
                {project.category}
              </span>
            </div>

            <h3 className={`text-2xl font-bold mt-3 mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {project.title}
            </h3>
            <p className={`text-sm mb-5 font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              {project.subtitle}
            </p>
            <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              {project.longDescription}
            </p>

            {/* Metrics */}
            {project.metrics && (
              <div className="grid grid-cols-3 gap-3 mb-6">
                {project.metrics.map(m => (
                  <div
                    key={m.label}
                    className={`p-3 rounded-xl text-center ${
                      isDark ? 'bg-white/5 border border-white/10' : 'bg-slate-50 border border-slate-200'
                    }`}
                  >
                    <div className="text-lg font-bold gradient-text">{m.value}</div>
                    <div className={`text-xs mt-0.5 ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>{m.label}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-7">
              {project.tech.map(t => (
                <span
                  key={t}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium ${
                    isDark ? 'bg-white/5 border border-white/10 text-slate-300'
                           : 'bg-slate-100 border border-slate-200 text-slate-600'
                  }`}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-slate-800 text-white hover:bg-slate-700 transition-colors"
                >
                  <GithubIcon size={14} /> GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:opacity-90 transition-opacity"
                >
                  <ExternalLink size={14} /> Live Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  const { isDark } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, y: -6 }}
      transition={{ duration: 0.4 }}
      onClick={onClick}
      className={`group rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${
        isDark
          ? 'glass border border-white/10 hover:border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-500/10'
          : 'glass-light border border-slate-200 shadow-sm hover:border-cyan-300 hover:shadow-md'
      }`}
    >
      {/* Banner */}
      <div className={`h-40 bg-gradient-to-br ${project.gradient} relative overflow-hidden flex items-center justify-center`}>
        {/* Animated grid on hover */}
        <div
          className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />
        {/* Glare sweep on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 50%)' }}
        />

        <motion.div
          className={`relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl transition-all duration-300 ${
            isDark ? 'bg-white/10 border border-white/20' : 'bg-white/70 border border-white/60'
          } group-hover:scale-110`}
        >
          <project.Icon size={26} className={isDark ? 'text-white' : 'text-slate-700'} strokeWidth={1.5} />
        </motion.div>

        {/* Category badge */}
        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg text-xs font-semibold backdrop-blur-md bg-black/30 text-white tracking-wide">
          {project.category}
        </div>
      </div>

      <div className="p-5">
        <h3 className={`font-bold text-sm mb-0.5 group-hover:text-cyan-400 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          {project.title}
        </h3>
        <p className={`text-xs mb-3 font-medium ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
          {project.subtitle}
        </p>
        <p className={`text-sm leading-relaxed mb-4 line-clamp-3 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          {project.description}
        </p>

        {/* Tech chips */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.slice(0, 4).map(t => (
            <span
              key={t}
              className={`px-2 py-0.5 rounded-md text-xs font-medium ${
                isDark ? 'bg-white/5 border border-white/10 text-slate-400'
                       : 'bg-slate-100 border border-slate-200 text-slate-500'
              }`}
            >
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className={`px-2 py-0.5 rounded-md text-xs ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>
              +{project.tech.length - 4} more
            </span>
          )}
        </div>

        {/* Metrics */}
        {project.metrics && (
          <div className="flex gap-4 pt-3 border-t border-white/5">
            {project.metrics.slice(0, 2).map(m => (
              <div key={m.label}>
                <div className="text-sm font-bold gradient-text">{m.value}</div>
                <div className={`text-xs ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>{m.label}</div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-3 text-xs font-semibold flex items-center gap-1.5 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          View Details <ExternalLink size={10} />
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { isDark } = useTheme();
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section
      id="projects"
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
            style={{ background: 'rgba(48,209,88,0.1)', border: '1px solid rgba(48,209,88,0.3)', color: '#30d158' }}
          >
            <Layers size={12} /> Portfolio
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className={`max-w-xl mx-auto text-base ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Enterprise-grade AI systems, full-stack applications, and research implementations.
            Click any card to explore in depth.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <ProjectCard project={project} onClick={() => setSelected(project)} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
