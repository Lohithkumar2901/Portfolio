import { motion } from 'framer-motion';
import { Download, FileText, Eye } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function Resume() {
  const { isDark } = useTheme();

  return (
    <section
      id="resume"
      className={`py-28 ${isDark ? 'bg-[#030308] grid-bg' : 'bg-slate-50 grid-bg-light'}`}
    >
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 text-xs font-semibold tracking-wider uppercase"
            style={{ background: 'rgba(191,90,242,0.1)', border: '1px solid rgba(191,90,242,0.3)', color: '#bf5af2' }}
          >
            <FileText size={12} /> Resume
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            My <span className="gradient-text">Resume</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className={`rounded-3xl overflow-hidden ${
            isDark ? 'glass border border-white/10' : 'glass-light border border-slate-200 shadow-xl'
          }`}
        >
          {/* Resume card header */}
          <div className="h-2 bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500" />

          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
              <div>
                <h3 className={`text-2xl font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Lohith Kumar P
                </h3>
                <p className="gradient-text font-semibold">Software Engineer · AI/ML Engineer · Full Stack Developer</p>
                <p className={`text-sm mt-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Chennai, TN 600062 · lohithkumar290104@gmail.com · +91 9003265701
                </p>
              </div>
              <div className="flex gap-3">
                <motion.a
                  href="/resume.pdf"
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-shadow"
                >
                  <Download size={14} /> Download PDF
                </motion.a>
              </div>
            </div>

            {/* Resume preview sections */}
            <div className="space-y-6">
              {[
                {
                  title: 'Professional Summary',
                  content: 'Results-driven Software Engineer and AI/ML practitioner with B.Tech CSE (AI & ML, CGPA 8.56) and 1.5+ years of industry experience across five roles. Delivered production AI dashboards, enterprise chatbots, and full-stack systems.',
                },
                {
                  title: 'Education',
                  content: 'B.Tech — Computer Science Engineering (AI & ML Specialization) · SRM University, Chennai · Sept 2021 – May 2025 · CGPA: 8.56 / 10.00',
                },
                {
                  title: 'Key Skills',
                  content: 'Python · Node.js · React.js · Angular · FastAPI · TensorFlow · NLP · RAG · AES-256-GCM · JWT · MySQL · MongoDB · PostgreSQL · OpenAI APIs',
                },
              ].map(section => (
                <div key={section.title} className={`p-5 rounded-2xl ${isDark ? 'bg-white/5 border border-white/10' : 'bg-slate-50 border border-slate-200'}`}>
                  <h4 className={`font-bold text-sm mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {section.title}
                  </h4>
                  <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg"
              >
                <Download size={16} /> Download Full Resume
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border transition-colors ${
                  isDark ? 'border-white/20 text-white hover:bg-white/10' : 'border-slate-300 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <Eye size={16} /> Contact Me
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
