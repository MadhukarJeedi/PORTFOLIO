import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import RightNavigation from './components/RightNavigation';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const observerOptions = {
      root: null,
      // Focus the intersection detection in the center of the viewport
      rootMargin: '-35% 0px -35% 0px',
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="min-h-screen bg-brand-light-grey text-brand-charcoal selection:bg-brand-yellow selection:text-brand-charcoal">
      {/* Left Sidebar Navigation (Desktop) / Sticky Header + Drawer (Mobile) */}
      <Sidebar activeSection={activeSection} />

      {/* Main Content Area (Uses .main-content class to prevent sidebar overlap) */}
      <main className="main-content pt-16 md:pt-0 relative z-10">
        <Hero />
        <About />
        <Resume />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      {/* Right Floating Indicator Dots (Desktop only) */}
      <RightNavigation activeSection={activeSection} />
    </div>
  );
}
