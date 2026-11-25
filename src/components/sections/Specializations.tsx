import { motion } from 'framer-motion';
import { Shield, Layers, MessageSquare, Brain, ArrowRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const specs = [
  {
    Icon: Shield,
    title: 'Enterprise AI Systems',
    tagline: 'Safety · Analytics · Automation',
    description:
      'Architecting production AI platforms that integrate multi-source datasets through encrypted APIs — replacing manual workflows with intelligent, real-time intelligence pipelines.',
    bullets: ['AES-256-GCM secure transport', 'Multi-plant analytics architecture', 'Semantic hazard correlation', 'Automated KPI dashboards'],
    accent: '#00f5ff',
    glow: 'rgba(0,245,255,0.12)',
    border: 'rgba(0,245,255,0.2)',
    gradient: 'from-cyan-500/10 to-blue-600/5',
  },
  {
    Icon: Layers,
    title: 'Full Stack Engineering',
    tagline: 'React · Angular · Node · FastAPI',
    description:
      'Building end-to-end web applications with clean architecture, RBAC authentication, real-time dashboards, and enterprise API integration — from database schema to UI.',
    bullets: ['React.js · Angular · TypeScript', 'Node.js · Express · FastAPI', 'MySQL · MongoDB · PostgreSQL', 'REST APIs · Microservices · RBAC'],
    accent: '#bf5af2',
    glow: 'rgba(191,90,242,0.12)',
    border: 'rgba(191,90,242,0.2)',
    gradient: 'from-purple-500/10 to-pink-600/5',
  },
  {
    Icon: MessageSquare,
    title: 'RAG & LLM Applications',
    tagline: 'Retrieval · Embeddings · SSO',
    description:
      'Developing production RAG chatbots with vector embeddings, semantic reranking, and Azure AD SSO — turning unstructured enterprise knowledge into precise, queryable intelligence.',
    bullets: ['Retrieval-Augmented Generation', 'Vector embeddings & reranking', 'Azure AD · JWT · CIS Benchmark', 'OpenAI API integration'],
    accent: '#30d158',
    glow: 'rgba(48,209,88,0.12)',
    border: 'rgba(48,209,88,0.2)',
    gradient: 'from-green-500/10 to-teal-600/5',
  },
  {
    Icon: Brain,
    title: 'ML / Computer Vision Research',
    tagline: 'Deep Learning · NLP · Segmentation',
    description:
      'Applying state-of-the-art deep learning architectures to real-world problems — from pixel-level satellite image segmentation to event classification on social media streams.',
    bullets: ['U-Net · 82% IoU on Kaggle', 'LSTM NLP event classifiers', 'TensorFlow · Scikit-learn', 'Geospatial & social media data'],
    accent: '#ff9f0a',
    glow: 'rgba(255,159,10,0.12)',
    border: 'rgba(255,159,10,0.2)',
    gradient: 'from-orange-500/10 to-yellow-600/5',
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const card = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function Specializations() {
  const { isDark } = useTheme();

  return (
    <section id="specializations" className={`py-28 ${isDark ? 'bg-[#050510]' : 'bg-white'}`}>
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
            What I Build
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Core <span className="gradient-text">Specializations</span>
          </h2>
          <p className={`max-w-2xl mx-auto text-base leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Four distinct domains where I've shipped production systems with measurable business impact.
            Every project is engineered to be secure, scalable, and data-driven.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {specs.map(spec => (
            <motion.div
              key={spec.title}
              variants={card}
              whileHover={{ scale: 1.015, y: -5 }}
              className={`group relative rounded-3xl p-7 overflow-hidden transition-all duration-300 ${
                isDark
                  ? 'glass border border-white/10 hover:border-[color:var(--accent-border)]'
                  : 'glass-light border border-slate-200 shadow-sm hover:shadow-lg'
              }`}
              style={{
                '--accent-border': spec.border,
                boxShadow: `0 0 0 0 ${spec.glow}`,
              } as React.CSSProperties}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 40px ${spec.glow}`;
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 0 ${spec.glow}`;
              }}
            >
              {/* Background gradient blob */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${spec.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              />

              {/* Top: icon + title */}
              <div className="relative flex items-start gap-4 mb-5">
                <motion.div
                  whileHover={{ rotate: [0, -6, 6, 0] }}
                  transition={{ duration: 0.4 }}
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md"
                  style={{
                    background: `${spec.accent}18`,
                    border: `1px solid ${spec.border}`,
                  }}
                >
                  <spec.Icon size={22} style={{ color: spec.accent }} strokeWidth={1.75} />
                </motion.div>

                <div>
                  <h3 className={`font-bold text-base mb-0.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {spec.title}
                  </h3>
                  <p className="text-xs font-semibold" style={{ color: spec.accent }}>
                    {spec.tagline}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className={`relative text-sm leading-relaxed mb-5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                {spec.description}
              </p>

              {/* Bullet list */}
              <ul className="relative space-y-2">
                {spec.bullets.map(b => (
                  <li key={b} className="flex items-center gap-2.5 text-sm">
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: spec.accent }}
                    />
                    <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{b}</span>
                  </li>
                ))}
              </ul>

              {/* Hover CTA */}
              <div
                className="relative mt-5 flex items-center gap-1.5 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ color: spec.accent }}
              >
                See related projects <ArrowRight size={12} />
              </div>

              {/* Corner accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${spec.accent}, transparent)` }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className={`mt-14 rounded-3xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 ${
            isDark ? 'glass border border-white/10' : 'glass-light border border-slate-200 shadow-sm'
          }`}
        >
          {[
            { value: '5',    label: 'Companies worked with' },
            { value: '6+',   label: 'Production systems shipped' },
            { value: '1.5+', label: 'Years of industry experience' },
            { value: '10+',  label: 'Industry certifications' },
          ].map((s, i) => (
            <div key={i} className="text-center flex-1">
              <div className="text-2xl font-black gradient-text">{s.value}</div>
              <div className={`text-xs mt-0.5 ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
