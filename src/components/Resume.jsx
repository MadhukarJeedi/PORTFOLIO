import React from 'react';
import { GraduationCap } from 'lucide-react';

const educationList = [
  {
    degree: 'BSc Data Science',
    institution: 'Sangamitra Degree and PG College',
    year: '2024',
    details: 'Score: 69.3%',
  },
  {
    degree: 'ITI — Electrician',
    institution: 'Rahmat Private ITI',
    year: '2021',
    details: 'Score: 82.5%',
  },
  {
    degree: 'Intermediate (MPC)',
    institution: 'Sahasra Junior College',
    year: '2019',
    details: 'Score: 66.3%',
  },
  {
    degree: 'SSC',
    institution: 'ZPHS High School',
    year: '2017',
    details: 'Score: 78%',
  },
];

export default function Resume() {
  return (
    <section
      id="resume"
      className="min-h-screen py-20 md:py-24 relative flex items-center"
      style={{ background: 'var(--color-brand-light-grey)' }}
    >
      <div className="section-container w-full lg:pl-8">
        {/* Title Heading */}
        <h2 className="section-title mb-12">EDUCATION</h2>

        {/* Centered Single-Column Layout */}
        <div className="max-w-3xl mx-auto flex flex-col gap-6">
          <div className="flex items-center gap-3 mb-4 justify-center">
            <div className="w-12 h-12 rounded-none bg-brand-charcoal text-brand-yellow flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
              <GraduationCap size={20} className="stroke-[2.5]" />
            </div>
            <h3 className="font-black text-xl tracking-widest text-brand-charcoal uppercase">
              Academic Background
            </h3>
          </div>

          {/* Education list cards - Square, Large, Animated */}
          <div className="space-y-6">
            {educationList.map((item, i) => (
              <div 
                key={i} 
                className="bg-white border border-black/5 rounded-none p-6 md:p-8 shadow-sm hover:border-brand-yellow/60 hover:scale-[1.03] hover:shadow-md transition-all duration-300"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
                  <h4 className="font-extrabold text-base sm:text-lg text-brand-charcoal">
                    {item.degree}
                  </h4>
                  <span className="bg-brand-yellow text-brand-charcoal font-black text-xs tracking-wider px-3.5 py-1 rounded-none shadow-sm">
                    {item.year}
                  </span>
                </div>
                <p className="text-sm font-bold text-brand-yellow uppercase tracking-wider mb-3">
                  {item.institution}
                </p>
                <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                  {item.details}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
