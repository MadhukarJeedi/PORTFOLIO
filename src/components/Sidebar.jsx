import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUp, ArrowDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { profile } from '../data/profile';

const menuItems = [
  { id: 'home', label: 'HOME' },
  { id: 'about', label: 'ABOUT ME' },
  { id: 'resume', label: 'EDUCATION' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'certifications', label: 'CERTIFICATIONS' },
  { id: 'contact', label: 'CONTACT' },
];

export default function Sidebar({ activeSection }) {
  const [isOpen, setIsOpen] = useState(false);

  // Close drawer on click of item or resize
  const handleItemClick = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollDirection = (dir) => {
    const currentIndex = menuItems.findIndex(item => item.id === activeSection);
    let targetIndex = currentIndex;
    if (dir === 'up') {
      targetIndex = Math.max(0, currentIndex - 1);
    } else {
      targetIndex = Math.min(menuItems.length - 1, currentIndex + 1);
    }
    const targetId = menuItems[targetIndex].id;
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Mobile Sticky Header */}
      <header className="md:hidden fixed top-0 left-0 right-0 h-16 bg-brand-charcoal text-white flex items-center justify-between px-4 z-50 shadow-md">
        <div className="flex items-center gap-3">
          <img
            src={profile.profileImage}
            alt={profile.name}
            className="w-10 h-10 rounded-full object-cover border border-brand-yellow"
            style={{ objectPosition: 'center 12%' }}
          />
          <span className="font-extrabold tracking-tight text-sm text-brand-yellow">
            {profile.name.toUpperCase()}
          </span>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white hover:text-brand-yellow p-1"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Drawer (Framer Motion) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="md:hidden fixed inset-0 top-16 bg-brand-yellow z-40 flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-6">
              {menuItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleItemClick(item.id)}
                    className={`font-black text-2xl tracking-widest transition-all duration-200 ${
                      isActive 
                        ? 'text-brand-charcoal underline underline-offset-8 decoration-4' 
                        : 'text-brand-charcoal/70 hover:text-brand-charcoal'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Fixed Sidebar */}
      <aside className="hidden md:flex fixed top-0 left-0 bottom-0 w-64 bg-brand-yellow flex-col z-30 shadow-lg border-r border-black/5">
        {/* Avatar Box (Charcoal top background) */}
        <div className="bg-brand-charcoal h-56 flex flex-col items-center justify-center p-6 relative">
          <div className="relative">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-brand-yellow shadow-md bg-brand-charcoal">
              <img
                src={profile.profileImage}
                alt={profile.name}
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 12%' }}
              />
            </div>
            {/* Online Indicator Dot */}
            <span className="absolute bottom-1 right-2 w-4 h-4 bg-emerald-500 rounded-full border-2 border-brand-charcoal pulse-dot" />
          </div>
          <h2 className="text-white text-xs font-black tracking-widest mt-4 text-center">
            {profile.name.toUpperCase()}
          </h2>
        </div>

        {/* Navigation Links Area */}
        <div className="flex-1 flex flex-col items-center justify-between py-8 px-4">
          {/* Scroll Up Arrow */}
          <button 
            onClick={() => scrollDirection('up')}
            className="text-brand-charcoal/60 hover:text-brand-charcoal transition-colors p-1"
            disabled={activeSection === 'home'}
            aria-label="Scroll to previous section"
            style={{ opacity: activeSection === 'home' ? 0.3 : 1 }}
          >
            <ArrowUp size={20} className="stroke-[3]" />
          </button>

          {/* Links List */}
          <nav className="flex flex-col items-center gap-5 my-auto">
            {menuItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`font-black text-sm tracking-wider transition-all duration-200 relative ${
                    isActive 
                      ? 'text-brand-charcoal scale-110 font-black' 
                      : 'text-brand-charcoal/60 hover:text-brand-charcoal hover:scale-105'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-brand-charcoal rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Scroll Down Arrow */}
          <button 
            onClick={() => scrollDirection('down')}
            className="text-brand-charcoal/60 hover:text-brand-charcoal transition-colors p-1"
            disabled={activeSection === 'contact'}
            aria-label="Scroll to next section"
            style={{ opacity: activeSection === 'contact' ? 0.3 : 1 }}
          >
            <ArrowDown size={20} className="stroke-[3]" />
          </button>
        </div>
      </aside>
    </>
  );
}
