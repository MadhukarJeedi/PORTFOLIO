import React, { useState } from 'react';
import {
  Code2, Brain, Network, MessageSquare, Sparkles, Database, Rocket, Wrench,
} from 'lucide-react';
import { skillCategories } from '../data/skills';

const iconMap = { Code2, Brain, Network, MessageSquare, Sparkles, Database, Rocket, Wrench };

const colorMap = {
  blue: { bg: 'rgba(59,130,246,0.08)', border: 'rgba(59,130,246,0.2)', text: '#60a5fa' },
  emerald: { bg: 'rgba(16,185,129,0.08)', border: 'rgba(16,185,129,0.2)', text: '#34d399' },
  purple: { bg: 'rgba(139,92,246,0.08)', border: 'rgba(139,92,246,0.2)', text: '#a78bfa' },
  amber: { bg: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.2)', text: '#fbbf24' },
  gray: { bg: 'rgba(156,163,175,0.08)', border: 'rgba(156,163,175,0.15)', text: '#9ca3af' },
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered =
    activeCategory === 'all'
      ? skillCategories
      : skillCategories.filter(c => c.id === activeCategory);

  return (
    <section
      id="skills"
      className="py-32 sm:py-36"
      style={{
        background: '#030712',
      }}
    >
      <div className="section-container">

        {/* Header */}
        <div className="mb-14 text-center">
          <div className="flex justify-center mb-4">
            <span className="section-tag">Technical Skills</span>
          </div>
          <h2
            className="font-bold mb-4"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: '#f9fafb', letterSpacing: '-0.02em' }}
          >
            My Technical{' '}
            <span className="gradient-text-emerald">Expertise</span>
          </h2>
          <p style={{ color: '#9ca3af', fontSize: '1.05rem', maxWidth: '520px', margin: '0 auto' }}>
            A comprehensive skill set spanning the complete AI/ML engineering stack.
          </p>
        </div>

        {/* Category filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveCategory('all')}
            className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
            style={{
              background: activeCategory === 'all' ? 'rgba(59,130,246,0.15)' : 'rgba(255,255,255,0.04)',
              border: activeCategory === 'all' ? '1px solid rgba(59,130,246,0.4)' : '1px solid rgba(255,255,255,0.08)',
              color: activeCategory === 'all' ? '#60a5fa' : '#9ca3af',
              cursor: 'pointer',
            }}
          >
            All Skills
          </button>
          {skillCategories.map(cat => {
            const isActive = activeCategory === cat.id;
            const c = colorMap[cat.color] || colorMap.gray;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
                style={{
                  background: isActive ? c.bg : 'rgba(255,255,255,0.04)',
                  border: isActive ? `1px solid ${c.border}` : '1px solid rgba(255,255,255,0.08)',
                  color: isActive ? c.text : '#9ca3af',
                  cursor: 'pointer',
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Skill cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map(cat => {
            const IconComp = iconMap[cat.icon] || Code2;
            const c = colorMap[cat.color] || colorMap.gray;
            return (
              <div
                key={cat.id}
                className="rounded-2xl p-5 transition-all duration-300"
                style={{
                  background: 'rgba(7,12,28,0.55)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.border = `1px solid ${c.border}`;
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = `0 8px 30px ${c.bg}`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.border = '1px solid rgba(255,255,255,0.07)';
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{ background: c.bg, border: `1px solid ${c.border}` }}
                  >
                    <IconComp size={16} style={{ color: c.text }} />
                  </div>
                  <h3 className="font-semibold text-sm" style={{ color: '#e5e7eb' }}>
                    {cat.label}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map(skill => (
                    <span
                      key={skill}
                      className="skill-chip"
                      style={{ fontSize: '0.73rem', padding: '0.25rem 0.65rem' }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
