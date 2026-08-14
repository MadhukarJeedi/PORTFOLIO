import React, { useState } from 'react';
import { GraduationCap, FileText, ExternalLink, Loader2 } from 'lucide-react';
import { profile } from '../data/profile';

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
  const [activeTab, setActiveTab] = useState('education'); // 'education' | 'preview'
  const [loading, setLoading] = useState(true);

  // Convert Google Drive view URL to preview URL for iframe embedding
  const getEmbedUrl = (url) => {
    if (url.includes('/view')) {
      return url.replace('/view', '/preview');
    }
    return url;
  };

  const previewUrl = getEmbedUrl(profile.resumeUrl);

  return (
    <section
      id="resume"
      className="min-h-fit md:min-h-screen py-12 md:py-24 relative flex items-center"
      style={{ background: 'var(--color-brand-light-grey)' }}
    >
      <div className="section-container w-full lg:pl-8">
        {/* Title Heading */}
        <h2 className="section-title mb-10">RESUME & EDUCATION</h2>

        {/* Flat style Tab buttons */}
        <div className="flex justify-center gap-4 mb-10 max-w-md mx-auto">
          <button
            onClick={() => setActiveTab('education')}
            className={`flex-1 py-3 px-4 font-black text-xs sm:text-sm tracking-wider uppercase border-3 transition-all cursor-pointer select-none text-center ${
              activeTab === 'education'
                ? 'bg-brand-yellow text-brand-charcoal border-brand-charcoal shadow-[4px_4px_0px_0px_rgba(33,37,41,1)]'
                : 'bg-white text-brand-charcoal/70 border-brand-charcoal/20 hover:border-brand-charcoal hover:text-brand-charcoal'
            }`}
          >
            Education History
          </button>
          <button
            onClick={() => setActiveTab('preview')}
            className={`flex-1 py-3 px-4 font-black text-xs sm:text-sm tracking-wider uppercase border-3 transition-all cursor-pointer select-none text-center ${
              activeTab === 'preview'
                ? 'bg-brand-yellow text-brand-charcoal border-brand-charcoal shadow-[4px_4px_0px_0px_rgba(33,37,41,1)]'
                : 'bg-white text-brand-charcoal/70 border-brand-charcoal/20 hover:border-brand-charcoal hover:text-brand-charcoal'
            }`}
          >
            Interactive Resume
          </button>
        </div>

        {/* Centered Single-Column Layout */}
        <div className="max-w-4xl mx-auto flex flex-col gap-6">
          
          {activeTab === 'education' ? (
            <div className="max-w-3xl mx-auto w-full">
              <div className="flex items-center gap-3 mb-6 justify-center">
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
          ) : (
            <div className="w-full flex flex-col bg-white border-4 border-brand-charcoal shadow-[6px_6px_0px_0px_rgba(33,37,41,1)]">
              {/* Toolbar */}
              <div className="bg-brand-charcoal p-3 flex items-center justify-between text-white border-b-2 border-brand-charcoal">
                <div className="flex items-center gap-2">
                  <FileText size={16} className="text-brand-yellow" />
                  <span className="font-bold text-xs tracking-wider uppercase">Jeedi_Madhukar_Resume.pdf</span>
                </div>
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1 bg-brand-yellow text-brand-charcoal hover:bg-white transition-all font-black text-xs tracking-wider border-2 border-brand-charcoal no-underline shadow-[2px_2px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-none"
                >
                  <ExternalLink size={12} />
                  OPEN FULLSCREEN
                </a>
              </div>

              {/* PDF Container */}
              <div className="w-full h-[600px] relative bg-brand-light-grey min-h-0">
                {loading && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-brand-light-grey z-10">
                    <Loader2 size={36} className="animate-spin text-brand-yellow stroke-[3]" />
                    <p className="font-black text-[10px] text-brand-charcoal tracking-wider uppercase mt-3">
                      Loading PDF Viewer...
                    </p>
                  </div>
                )}
                <iframe
                  src={previewUrl}
                  className="w-full h-full border-none"
                  title="Jeedi Madhukar Resume View"
                  onLoad={() => setLoading(false)}
                />
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
