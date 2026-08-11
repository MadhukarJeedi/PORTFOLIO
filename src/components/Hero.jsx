import React from 'react';
import { profile } from '../data/profile';

export default function Hero() {
  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center py-16 lg:py-24 relative overflow-hidden"
      style={{ background: 'var(--color-brand-light-grey)' }}
    >
      {/* Editorial layout grid */}
      <div className="section-container w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10 lg:pl-8">
        
        {/* Left Side: Information */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* HI THERE with horizontal underline line */}
          <div className="mb-4">
            <span className="font-extrabold text-sm sm:text-base tracking-widest text-brand-yellow uppercase">
              HI THERE!
            </span>
            <div className="w-24 h-1 bg-brand-yellow mt-1.5" />
          </div>

          {/* Name rendered in solid color instead of hollow outline */}
          <h1 className="font-black text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl leading-[0.95] tracking-tighter mb-6 uppercase">
            <span className="text-brand-charcoal">I'M</span> <span className="text-brand-yellow font-black">JEEDI</span>
            <span className="block text-brand-yellow font-black mt-1">MADHUKAR</span>
          </h1>

          {/* Badges / Pill Tags */}
          <div className="flex flex-wrap gap-2.5 mb-6">
            <span className="bg-brand-charcoal text-white text-[10px] sm:text-xs font-black tracking-wider px-3.5 py-2 rounded-none uppercase hover:scale-102 transition-transform shadow-sm">
              AI/ML ENGINEER &amp; DATA SCIENTIST
            </span>
            <span className="border-2 border-brand-charcoal text-brand-charcoal text-[10px] sm:text-xs font-black tracking-wider px-3.5 py-2 rounded-none uppercase hover:scale-102 transition-transform shadow-sm">
              READY TO BUILD INTELLIGENT APPLICATIONS
            </span>
          </div>

          {/* Intro Description */}
          <p className="text-brand-charcoal/80 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mb-8">
            Data Science graduate focused on Machine Learning, NLP, Generative AI, and LLM Agents. 
            I build end-to-end, production-ready AI applications that turn raw data into intelligent action.
          </p>

          {/* 4 Action Pill Buttons (Rounded-full) with 3D tactile effect */}
          <div className="flex flex-wrap gap-4 mt-2 max-w-2xl">
            <button
              onClick={handleScrollToAbout}
              className="bg-brand-charcoal text-white hover:bg-brand-yellow hover:text-brand-charcoal font-black text-sm tracking-widest px-10 py-5 rounded-full uppercase border-b-4 border-black/45 active:translate-y-[4px] active:border-b-0 transition-all duration-100 shadow-md cursor-pointer select-none"
            >
              ABOUT ME
            </button>
            <button
              onClick={handleScrollToContact}
              className="bg-brand-yellow text-brand-charcoal hover:bg-brand-charcoal hover:text-white font-black text-sm tracking-widest px-10 py-5 rounded-full uppercase border-b-4 border-[#b88c14] active:translate-y-[4px] active:border-b-0 transition-all duration-100 shadow-md cursor-pointer select-none"
            >
              CONTACT ME
            </button>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-charcoal text-white hover:bg-brand-yellow hover:text-brand-charcoal font-black text-sm tracking-widest px-10 py-5 rounded-full uppercase border-b-4 border-black/45 active:translate-y-[4px] active:border-b-0 transition-all duration-100 shadow-md flex items-center justify-center no-underline select-none"
            >
              DOWNLOAD RESUME
            </a>
            <a
              href="https://www.linkedin.com/in/madhukarjeedi/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0077b5] text-white hover:bg-brand-charcoal hover:text-white font-black text-sm tracking-widest px-10 py-5 rounded-full uppercase border-b-4 border-[#00527c] active:translate-y-[4px] active:border-b-0 transition-all duration-100 shadow-md flex items-center justify-center no-underline select-none"
            >
              LINKEDIN
            </a>
          </div>
        </div>

        {/* Right Side: Portrait Image with Arc Overlay */}
        <div className="lg:col-span-5 flex items-center justify-center relative mt-10 lg:mt-0">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[320px] lg:h-[320px] xl:w-[380px] xl:h-[380px] flex items-center justify-center">
            
            {/* Outline yellow arc circle backdrop */}
            <svg 
              className="absolute inset-0 w-full h-full animate-[spin_40s_linear_infinite]" 
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="46"
                fill="none"
                stroke="var(--color-brand-yellow)"
                strokeWidth="0.8"
                strokeDasharray="70 40 50 40"
              />
              {/* Little dots on the arc */}
              <circle cx="50" cy="4" r="1.5" fill="var(--color-brand-charcoal)" />
              <circle cx="96" cy="50" r="1.5" fill="var(--color-brand-charcoal)" />
              <circle cx="50" cy="96" r="1.5" fill="var(--color-brand-charcoal)" />
              <circle cx="4" cy="50" r="1.5" fill="var(--color-brand-charcoal)" />
            </svg>

            {/* Profile Avatar Image */}
            <div className="w-[82%] h-[82%] rounded-full overflow-hidden border-8 border-white shadow-xl bg-white relative z-10 hover:scale-103 transition-transform duration-300">
              <img
                src={profile.profileImage}
                alt={profile.name}
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 12%' }}
                loading="eager"
              />
            </div>

            {/* Small floating badges representing icons from template */}
            <div className="absolute top-8 right-2 bg-white text-brand-charcoal w-10 h-10 rounded-full shadow-md flex items-center justify-center border border-black/5 z-20 hover:scale-115 transition-transform duration-200">
              <span className="text-sm">🤖</span>
            </div>
            <div className="absolute bottom-8 left-2 bg-white text-brand-charcoal w-10 h-10 rounded-full shadow-md flex items-center justify-center border border-black/5 z-20 hover:scale-115 transition-transform duration-200">
              <span className="text-sm">💻</span>
            </div>
            <div className="absolute bottom-4 right-10 bg-white text-brand-charcoal w-10 h-10 rounded-full shadow-md flex items-center justify-center border border-black/5 z-20 hover:scale-115 transition-transform duration-200">
              <span className="text-sm">📊</span>
            </div>

          </div>
        </div>

      </div>

      {/* Decorative Slide Lines */}
      <div className="absolute left-0 right-0 top-0 h-1 bg-brand-yellow/10" />
      <div className="absolute left-0 right-0 bottom-0 h-1 bg-brand-yellow/10" />
    </section>
  );
}
