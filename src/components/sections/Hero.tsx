import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Download, ArrowRight, Mail, Star, TrendingUp, Cpu } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';
import { useTheme } from '../../context/ThemeContext';

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const particles: { x: number; y: number; vx: number; vy: number; r: number; a: number }[] = [];

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 90; i++) {
      particles.push({
        x:  Math.random() * (canvas.width  || 1200),
        y:  Math.random() * (canvas.height || 800),
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r:  Math.random() * 1.8 + 0.4,
        a:  Math.random() * 0.6 + 0.2,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 245, 255, ${p.a * 0.55})`;
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx   = particles[i].x - particles[j].x;
          const dy   = particles[i].y - particles[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 245, 255, ${(1 - dist / 130) * 0.1})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.65 }}
    />
  );
}

/* Animated avatar — pure CSS / SVG, no emojis */
function Avatar({ isDark }: { isDark: boolean }) {
  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
      {/* Outer spinning gradient ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 rounded-full"
        style={{
          background: 'conic-gradient(from 0deg, #00f5ff, #bf5af2, #0a84ff, #00f5ff)',
          padding: '3px',
        }}
      >
        <div className={`w-full h-full rounded-full ${isDark ? 'bg-[#030308]' : 'bg-[#f8f9ff]'}`} />
      </motion.div>

      {/* Inner dashed orbit */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-5 rounded-full border border-dashed opacity-25"
        style={{ borderColor: '#00f5ff' }}
      />

      {/* Avatar face card */}
      <div
        className="absolute inset-7 rounded-full flex flex-col items-center justify-center overflow-hidden"
        style={{
          background: isDark
            ? 'linear-gradient(135deg, #0d0d1a 0%, #1a0b2e 50%, #0b1a1a 100%)'
            : 'linear-gradient(135deg, #e0f7ff 0%, #ede9fe 50%, #ecfdf5 100%)',
        }}
      >
        {/* Stylised person silhouette — SVG, no emoji */}
        <svg viewBox="0 0 80 88" fill="none" className="w-24 h-24 opacity-90" xmlns="http://www.w3.org/2000/svg">
          {/* Head */}
          <circle cx="40" cy="26" r="16"
            fill={isDark ? 'rgba(0,245,255,0.15)' : 'rgba(0,200,220,0.18)'}
            stroke={isDark ? '#00f5ff' : '#0891b2'} strokeWidth="1.5"
          />
          {/* Face highlight */}
          <circle cx="35" cy="23" r="4"
            fill={isDark ? 'rgba(255,255,255,0.07)' : 'rgba(255,255,255,0.5)'}
          />
          {/* Body */}
          <path d="M16 80 Q16 58 40 56 Q64 58 64 80"
            fill={isDark ? 'rgba(0,245,255,0.12)' : 'rgba(0,200,220,0.15)'}
            stroke={isDark ? '#00f5ff' : '#0891b2'} strokeWidth="1.5"
          />
          {/* Code brackets decoration */}
          <text x="28" y="31" fontSize="10" fill={isDark ? '#00f5ff' : '#0891b2'} fontFamily="monospace" opacity="0.6">
            &lt;/&gt;
          </text>
        </svg>

        {/* Name label */}
        <span
          className="text-xs font-bold tracking-widest mt-1"
          style={{ color: isDark ? '#00f5ff' : '#0891b2', letterSpacing: '0.15em' }}
        >
          LOHITH KUMAR
        </span>
      </div>

      {/* Floating stat badges */}
      <motion.div
        animate={{ y: [0, -9, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
        className={`absolute -right-5 top-10 flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold shadow-lg ${
          isDark ? 'glass border border-cyan-400/30 text-cyan-300' : 'bg-white border border-cyan-200 text-cyan-700 shadow-cyan-100'
        }`}
      >
        <Cpu size={11} strokeWidth={2} />
        AI / ML
      </motion.div>

      <motion.div
        animate={{ y: [0, 9, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className={`absolute -left-7 bottom-14 flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold shadow-lg ${
          isDark ? 'glass border border-purple-400/30 text-purple-300' : 'bg-white border border-purple-200 text-purple-700 shadow-purple-100'
        }`}
      >
        <Star size={11} strokeWidth={2} />
        8.56 CGPA
      </motion.div>

      <motion.div
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
        className={`absolute -bottom-4 right-10 flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold shadow-lg ${
          isDark ? 'glass border border-green-400/30 text-green-300' : 'bg-white border border-green-200 text-green-700 shadow-green-100'
        }`}
      >
        <TrendingUp size={11} strokeWidth={2} />
        1.5+ yrs
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const { isDark } = useTheme();

  return (
    <section
      id="hero"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
        isDark ? 'bg-[#030308] grid-bg' : 'bg-[#f8f9ff] grid-bg-light'
      }`}
    >
      {isDark && <ParticleCanvas />}

      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 rounded-full opacity-[0.18] blur-3xl pointer-events-none bg-cyan-500" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 rounded-full opacity-[0.14] blur-3xl pointer-events-none bg-purple-500" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-32 flex flex-col lg:flex-row items-center gap-16">

        {/* ── Left: text ── */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
        >
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 260 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-xs font-semibold tracking-wider uppercase"
            style={{
              background: 'rgba(0, 245, 255, 0.08)',
              border: '1px solid rgba(0, 245, 255, 0.28)',
              color: '#00f5ff',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Open to full-time opportunities
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className={`text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Hi, I'm{' '}
            <span className="gradient-text">Lohith Kumar</span>
          </motion.h1>

          {/* Typing roles */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl font-semibold mb-6 h-10"
            style={{ color: '#00f5ff' }}
          >
            <TypeAnimation
              sequence={[
                'Software Engineer', 2200,
                'AI / ML Engineer', 2200,
                'Full Stack Developer', 2200,
                'Enterprise AI Builder', 2200,
              ]}
              wrapper="span"
              speed={52}
              repeat={Infinity}
            />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className={`text-base md:text-lg max-w-lg mb-8 leading-relaxed ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            B.Tech CSE (AI &amp; ML) &middot; 8.56 CGPA &middot; 1.5+ years building{' '}
            <span className={isDark ? 'text-cyan-400 font-medium' : 'text-cyan-600 font-medium'}>
              production AI systems
            </span>
            , enterprise dashboards, and intelligent chatbots at Wheels India &amp; Infosys.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.72 }}
            className="flex flex-wrap gap-3 justify-center lg:justify-start"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/45 transition-shadow"
            >
              View Projects <ArrowRight size={15} />
            </motion.button>

            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border transition-colors ${
                isDark
                  ? 'border-white/20 text-white hover:bg-white/8'
                  : 'border-slate-300 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <Download size={15} /> Download CV
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/45 transition-shadow"
            >
              <Mail size={15} /> Contact Me
            </motion.button>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex items-center gap-4 mt-8 justify-center lg:justify-start"
          >
            {[
              { Icon: GithubIcon,   href: 'https://github.com',                         label: 'GitHub'   },
              { Icon: LinkedinIcon, href: 'https://linkedin.com',                       label: 'LinkedIn' },
              { Icon: Mail,         href: 'mailto:lohithkumar290104@gmail.com',          label: 'Email'    },
            ].map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                  isDark
                    ? 'bg-white/5 border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-400/5'
                    : 'bg-slate-100 border border-slate-200 text-slate-500 hover:text-cyan-600 hover:border-cyan-300'
                }`}
              >
                <Icon size={17} />
              </motion.a>
            ))}

            <span className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
              Chennai, India &middot; Available for hire
            </span>
          </motion.div>
        </motion.div>

        {/* ── Right: Avatar ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.82, rotate: -4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.85, delay: 0.4, ease: 'easeOut' }}
          className="relative flex-shrink-0"
        >
          <Avatar isDark={isDark} />
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className={`text-xs tracking-widest uppercase ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border-2 flex items-start justify-center pt-1"
          style={{ borderColor: isDark ? 'rgba(255,255,255,0.18)' : 'rgba(0,0,0,0.14)' }}
        >
          <div className="w-1 h-2 rounded-full bg-cyan-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
