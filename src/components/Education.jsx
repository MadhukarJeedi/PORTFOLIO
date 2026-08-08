import React from 'react';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: 'BSc Data Science',
    institution: 'Sangamitra Degree and PG College',
    year: '2024',
    score: '69.3%',
    color: '#3b82f6',
    highlight: true,
  },
  {
    degree: 'ITI — Electrician',
    institution: 'Rahmat Private ITI',
    year: '2021',
    score: '82.5%',
    color: '#10b981',
    highlight: false,
  },
  {
    degree: 'Intermediate (MPC)',
    institution: 'Sahasra Junior College',
    year: '2019',
    score: '66.3%',
    color: '#8b5cf6',
    highlight: false,
  },
  {
    degree: 'SSC',
    institution: 'ZPHS High School',
    year: '2017',
    score: '78%',
    color: '#f59e0b',
    highlight: false,
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="py-24"
      style={{
        background: 'linear-gradient(180deg, #04080F 0%, #07101E 50%, #04080F 100%)',
      }}
    >
      <div className="section-container">

        {/* Header */}
        <div className="mb-14 text-center">
          <div className="flex justify-center mb-4">
            <span className="section-tag">Education</span>
          </div>
          <h2
            className="font-bold mb-4"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: '#f9fafb', letterSpacing: '-0.02em' }}
          >
            Academic{' '}
            <span className="gradient-text-blue">Background</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-5 top-0 bottom-0 w-px hidden sm:block"
              style={{ background: 'linear-gradient(to bottom, #3b82f6, #8b5cf6, #10b981, #f59e0b)' }}
            />

            <div className="space-y-6">
              {education.map((edu, i) => (
                <div key={i} className="flex gap-6">
                  {/* Dot */}
                  <div className="flex-shrink-0 flex flex-col items-center hidden sm:flex">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center z-10 border-2"
                      style={{
                        background: edu.highlight ? edu.color : '#07101E',
                        borderColor: edu.color,
                      }}
                    >
                      <GraduationCap size={16} style={{ color: edu.highlight ? '#fff' : edu.color }} />
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className="flex-1 rounded-2xl p-5 transition-all duration-300"
                    style={{
                      background: edu.highlight
                        ? `${edu.color}08`
                        : 'rgba(17, 24, 39, 0.4)',
                      border: `1px solid ${edu.highlight ? edu.color + '30' : 'rgba(255,255,255,0.07)'}`,
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.border = `1px solid ${edu.color}40`;
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.border = `1px solid ${edu.highlight ? edu.color + '30' : 'rgba(255,255,255,0.07)'}`;
                      e.currentTarget.style.transform = 'none';
                    }}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="font-bold text-base" style={{ color: '#f9fafb' }}>{edu.degree}</h3>
                        <p className="text-sm mt-0.5" style={{ color: '#9ca3af' }}>{edu.institution}</p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <span
                          className="block text-sm font-bold px-3 py-1 rounded-full"
                          style={{ background: `${edu.color}12`, color: edu.color, border: `1px solid ${edu.color}25` }}
                        >
                          {edu.year}
                        </span>
                        <span className="block text-xs mt-1.5 font-semibold" style={{ color: '#6b7280' }}>
                          Score: {edu.score}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
