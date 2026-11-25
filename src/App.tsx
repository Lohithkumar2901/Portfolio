import { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Cursor from './components/Cursor';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Specializations from './components/sections/Specializations';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Dashboard from './components/sections/Dashboard';
import Resume from './components/sections/Resume';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

function Portfolio() {
  const [showIntro, setShowIntro] = useState(() => {
    // Show intro only once per browser session
    if (typeof sessionStorage !== 'undefined') {
      const seen = sessionStorage.getItem('portfolio-intro-seen');
      if (seen) return false;
      sessionStorage.setItem('portfolio-intro-seen', '1');
    }
    return true;
  });

  // Lock scroll while intro is visible
  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [showIntro]);

  return (
    <>
      <Cursor />

      {showIntro && (
        <Intro onDone={() => setShowIntro(false)} />
      )}

      <div style={{ visibility: showIntro ? 'hidden' : 'visible' }}>
        <Navbar />
        <main>
          <Hero />
          <Specializations />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Dashboard />
          <Resume />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  );
}
