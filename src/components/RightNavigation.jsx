import React from 'react';
import { Home, User, FileText, LayoutGrid, Award, Send } from 'lucide-react';

const navItems = [
  { id: 'home', icon: Home, label: 'Home' },
  { id: 'about', icon: User, label: 'About Me' },
  { id: 'resume', icon: FileText, label: 'Resume & Edu' },
  { id: 'projects', icon: LayoutGrid, label: 'Projects' },
  { id: 'certifications', icon: Award, label: 'Certifications' },
  { id: 'contact', icon: Send, label: 'Contact' },
];

export default function RightNavigation({ activeSection }) {
  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 flex-col items-center z-30">
      {/* Connecting vertical line */}
      <div className="w-px h-[320px] bg-brand-charcoal/15 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      {/* Navigation dots */}
      <div className="flex flex-col gap-6 relative z-10">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          const IconComponent = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className="relative group p-2 rounded-full transition-all duration-200"
              aria-label={`Go to ${item.label}`}
            >
              {/* Floating Label */}
              <span className="absolute right-12 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded bg-brand-charcoal text-white text-xs font-bold tracking-wider opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 shadow-md whitespace-nowrap">
                {item.label.toUpperCase()}
              </span>

              {/* Dot / Icon Circle */}
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300 ${
                  isActive
                    ? 'bg-brand-yellow border-brand-charcoal text-brand-charcoal scale-110 shadow-md'
                    : 'bg-white border-brand-charcoal/10 text-brand-charcoal/40 group-hover:text-brand-charcoal group-hover:border-brand-charcoal/30 hover:scale-105'
                }`}
              >
                <IconComponent size={14} className="stroke-[2.5]" />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
