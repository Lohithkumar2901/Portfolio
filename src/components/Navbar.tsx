import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X, Zap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useScrollProgress } from '../hooks/useScrollProgress';

const navLinks = [
  { label: 'About',        href: '#about'         },
  { label: 'Builds',       href: '#specializations'},
  { label: 'Skills',       href: '#skills'         },
  { label: 'Experience',   href: '#experience'     },
  { label: 'Projects',     href: '#projects'       },
  { label: 'Dashboard',    href: '#dashboard'      },
  { label: 'Contact',      href: '#contact'        },
];

function useActiveSection() {
  const [active, setActive] = useState('');

  useEffect(() => {
    const ids = navLinks.map(l => l.href.slice(1));
    const observers: IntersectionObserver[] = [];

    ids.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: '-40% 0px -55% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  return active;
}

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const progress = useScrollProgress();
  const active   = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const id = href.slice(1);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-[100] origin-left"
        style={{
          background: 'linear-gradient(90deg, #00f5ff, #bf5af2)',
          scaleX: progress / 100,
        }}
      />

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="fixed top-2 left-0 right-0 z-50 px-4"
      >
        <div
          className={`max-w-6xl mx-auto rounded-2xl px-5 py-3 flex items-center justify-between transition-all duration-300 ${
            scrolled
              ? isDark
                ? 'glass border border-white/10 shadow-xl shadow-black/30'
                : 'glass-light border border-black/8 shadow-lg shadow-black/8'
              : 'bg-transparent'
          }`}
        >
          {/* Logo */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center shadow-md shadow-cyan-500/30">
              <Zap size={15} className="text-white" strokeWidth={2.5} />
            </div>
            <span className={`font-black text-sm tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              LK<span className="text-cyan-400">.</span>
            </span>
          </motion.button>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map(link => {
              const isActive = active === link.href.slice(1);
              return (
                <motion.button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className={`relative px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    isActive
                      ? isDark ? 'text-white' : 'text-slate-900'
                      : isDark ? 'text-slate-400 hover:text-white hover:bg-white/8' : 'text-slate-500 hover:text-slate-900 hover:bg-black/5'
                  }`}
                >
                  {link.label}
                  {/* Active underline pill */}
                  {isActive && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 w-4 rounded-full"
                      style={{ background: 'linear-gradient(90deg,#00f5ff,#bf5af2)' }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1, rotate: 20 }}
              whileTap={{ scale: 0.9 }}
              className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                isDark ? 'text-slate-400 hover:text-white hover:bg-white/10' : 'text-slate-500 hover:text-slate-900 hover:bg-black/5'
              }`}
            >
              {isDark ? <Sun size={15} /> : <Moon size={15} />}
            </motion.button>

            <motion.button
              onClick={() => handleNav('#contact')}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="hidden lg:flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-md shadow-cyan-500/25 hover:shadow-cyan-500/45 transition-shadow"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse" />
              Hire Me
            </motion.button>

            <motion.button
              className="lg:hidden w-9 h-9 rounded-xl flex items-center justify-center"
              onClick={() => setMobileOpen(o => !o)}
              whileTap={{ scale: 0.9 }}
            >
              {mobileOpen
                ? <X size={17} className={isDark ? 'text-white' : 'text-slate-900'} />
                : <Menu size={17} className={isDark ? 'text-white' : 'text-slate-900'} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className={`max-w-6xl mx-auto mt-2 rounded-2xl overflow-hidden ${
                isDark ? 'glass border border-white/10' : 'glass-light border border-black/8 shadow-lg'
              }`}
            >
              <div className="p-4 flex flex-col gap-1">
                {navLinks.map(link => (
                  <button
                    key={link.href}
                    onClick={() => handleNav(link.href)}
                    className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                      active === link.href.slice(1)
                        ? isDark ? 'bg-white/10 text-white' : 'bg-slate-100 text-slate-900'
                        : isDark ? 'text-slate-400 hover:text-white hover:bg-white/8' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
                <button
                  onClick={() => handleNav('#contact')}
                  className="mt-2 w-full py-2.5 rounded-xl text-sm font-bold bg-gradient-to-r from-cyan-500 to-purple-600 text-white"
                >
                  Hire Me
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
