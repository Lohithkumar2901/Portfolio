import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* Shows once per browser session — skipped on subsequent navigations */
export default function Intro({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<'in' | 'fill' | 'out'>('in');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Phase 1 — short pause then start fill
    const t1 = setTimeout(() => setPhase('fill'), 400);

    // Phase 2 — animate progress 0 → 100 over 900 ms
    let raf: number;
    let start: number | null = null;
    const DURATION = 900;

    const tick = (ts: number) => {
      if (!start) start = ts;
      const elapsed = ts - start;
      const pct = Math.min((elapsed / DURATION) * 100, 100);
      setProgress(pct);
      if (pct < 100) raf = requestAnimationFrame(tick);
      else setPhase('out');
    };

    const t2 = setTimeout(() => { raf = requestAnimationFrame(tick); }, 400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <AnimatePresence onExitComplete={onDone}>
      {phase !== 'out' && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: 'easeInOut' }}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center"
          style={{ background: '#030308' }}
        >
          {/* Ambient glows */}
          <div className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full blur-3xl opacity-15 bg-cyan-500 pointer-events-none" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-10 bg-purple-500 pointer-events-none" />

          {/* Monogram ring */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="relative mb-8"
          >
            {/* Spinning conic ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, #00f5ff, #bf5af2, #0a84ff, transparent)',
                padding: '2px',
                borderRadius: '50%',
              }}
            >
              <div className="w-full h-full rounded-full bg-[#030308]" />
            </motion.div>

            {/* Monogram */}
            <div
              className="relative w-24 h-24 rounded-full flex items-center justify-center"
              style={{ border: '1px solid rgba(0,245,255,0.15)' }}
            >
              <span
                className="text-2xl font-black tracking-tight select-none"
                style={{
                  background: 'linear-gradient(135deg, #00f5ff, #bf5af2)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                LK
              </span>
            </div>
          </motion.div>

          {/* Name */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.45 }}
            className="text-white font-bold text-lg tracking-[0.2em] uppercase mb-1"
          >
            Lohith Kumar P
          </motion.p>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.45 }}
            className="text-xs tracking-[0.25em] uppercase mb-10"
            style={{ color: 'rgba(0,245,255,0.6)' }}
          >
            Software Engineer &nbsp;&middot;&nbsp; AI / ML &nbsp;&middot;&nbsp; Full Stack
          </motion.p>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0.6 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.3 }}
            className="w-48 h-px rounded-full overflow-hidden"
            style={{ background: 'rgba(255,255,255,0.08)' }}
          >
            <motion.div
              className="h-full rounded-full"
              style={{
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #00f5ff, #bf5af2)',
                boxShadow: '0 0 8px rgba(0,245,255,0.6)',
                transition: 'width 0.05s linear',
              }}
            />
          </motion.div>

          {/* Percentage */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-3 text-xs font-mono"
            style={{ color: 'rgba(255,255,255,0.3)' }}
          >
            {Math.round(progress)}%
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
