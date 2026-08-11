import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle, Award } from 'lucide-react';
import { profile } from '../data/profile';

function LinkedInIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function GithubIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  );
}

function KaggleIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.1.352-.3.352H5.029c-.2 0-.3-.117-.3-.352V.353c0-.233.1-.353.3-.353h2.758c.2 0 .3.12.3.353v12.812l6.316-6.489c.173-.174.35-.26.531-.26h3.2c.154 0 .25.046.285.134.036.09-.007.188-.131.293l-6.446 6.316 6.952 8.468c.107.14.14.238.031.334"/>
    </svg>
  );
}

const EMAILJS_SERVICE_ID  = 'service_f2g41zb';
const EMAILJS_TEMPLATE_ID = 'template_9bft3w4';
const EMAILJS_PUBLIC_KEY  = 'cLb0MmUH4g4Odr1Ak';

export default function Contact() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(null), 5000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setTimeout(() => setStatus(null), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-20 md:py-24 relative flex flex-col justify-between"
      style={{ background: 'var(--color-brand-light-grey)' }}
    >
      <div className="section-container w-full my-auto lg:pl-8">
        {/* Title Heading */}
        <h2 className="section-title mb-10">CONTACT</h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Contact Details */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <h3 className="font-extrabold text-2xl text-brand-charcoal mb-4">
              Feel free to contact me!
            </h3>
            <p className="text-brand-charcoal/80 text-sm sm:text-base leading-relaxed mb-8">
              I am open to discussions regarding AI/ML Engineering opportunities, Data Science projects, or general technical inquiries. Let's connect!
            </p>

            {/* Info Cards (Square Box + Yellow Circle + Black Icon) */}
            <div className="space-y-6 mb-8">
              {/* Phone */}
              <div className="flex items-center gap-4">
                <a
                  href={profile.phoneHref}
                  className="w-12 h-12 rounded-full bg-brand-yellow text-brand-charcoal flex items-center justify-center shadow hover:scale-105 transition-transform"
                  aria-label="Call Madhukar"
                >
                  <Phone size={18} className="stroke-[2.5]" />
                </a>
                <div>
                  <h4 className="font-extrabold text-[10px] text-brand-yellow uppercase tracking-wider">Phone</h4>
                  <a href={profile.phoneHref} className="text-sm font-black text-brand-charcoal hover:underline">
                    {profile.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="w-12 h-12 rounded-full bg-brand-yellow text-brand-charcoal flex items-center justify-center shadow hover:scale-105 transition-transform"
                  aria-label="Email Madhukar"
                >
                  <Mail size={18} className="stroke-[2.5]" />
                </a>
                <div>
                  <h4 className="font-extrabold text-[10px] text-brand-yellow uppercase tracking-wider">Email</h4>
                  <a href={`mailto:${profile.email}`} className="text-sm font-black text-brand-charcoal hover:underline">
                    {profile.email}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-yellow text-brand-charcoal flex items-center justify-center shadow">
                  <MapPin size={18} className="stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="font-extrabold text-[10px] text-brand-yellow uppercase tracking-wider">Location</h4>
                  <p className="text-sm font-black text-brand-charcoal">
                    {profile.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Circle Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/madhukarjeedi/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-brand-charcoal text-white flex items-center justify-center shadow-md hover:bg-brand-yellow hover:text-brand-charcoal hover:scale-110 transition-all"
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={16} />
              </a>
              <a
                href="https://github.com/MadhukarJeedi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-brand-charcoal text-white flex items-center justify-center shadow-md hover:bg-brand-yellow hover:text-brand-charcoal hover:scale-110 transition-all"
                aria-label="GitHub"
              >
                <GithubIcon size={16} />
              </a>
              <a
                href="https://www.kaggle.com/madhukarjeedi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-brand-charcoal text-white flex items-center justify-center shadow-md hover:bg-brand-yellow hover:text-brand-charcoal hover:scale-110 transition-all"
                aria-label="Kaggle"
              >
                <KaggleIcon size={16} />
              </a>
            </div>

            {/* Download Resume 3D Button */}
            <div className="mt-8">
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex bg-brand-charcoal text-white hover:bg-brand-yellow hover:text-brand-charcoal font-black text-sm tracking-widest px-10 py-5 rounded-full uppercase border-b-4 border-black/45 active:translate-y-[4px] active:border-b-0 transition-all duration-100 shadow-md items-center justify-center no-underline select-none cursor-pointer"
              >
                DOWNLOAD RESUME
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form (Square Card) */}
          <div className="lg:col-span-7 bg-white border border-black/5 rounded-none p-8 md:p-10 shadow-sm hover:border-brand-yellow/60 hover:scale-[1.01] hover:shadow-lg transition-all duration-300">
            {/* Status alerts (Square) */}
            {status === 'success' && (
              <div className="flex items-center gap-2 mb-6 p-4 rounded-none bg-emerald-50 border border-emerald-250 text-emerald-800">
                <CheckCircle size={18} className="text-emerald-600 flex-shrink-0" />
                <p className="text-xs font-bold leading-relaxed">
                  Your message has been sent successfully! I will get back to you shortly.
                </p>
              </div>
            )}
            {status === 'error' && (
              <div className="flex items-center gap-2 mb-6 p-4 rounded-none bg-red-50 border border-red-250 text-red-800">
                <AlertCircle size={18} className="text-red-600 flex-shrink-0" />
                <p className="text-xs font-bold leading-relaxed">
                  Oops! Something went wrong. Please check your network or email me directly.
                </p>
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-black text-brand-charcoal uppercase tracking-wider mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-5 rounded-none text-sm bg-brand-light-grey/55 border border-black/5 focus:border-brand-yellow focus:outline-none text-brand-charcoal font-medium"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-brand-charcoal uppercase tracking-wider mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-5 rounded-none text-sm bg-brand-light-grey/55 border border-black/5 focus:border-brand-yellow focus:outline-none text-brand-charcoal font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black text-brand-charcoal uppercase tracking-wider mb-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-5 rounded-none text-sm bg-brand-light-grey/55 border border-black/5 focus:border-brand-yellow focus:outline-none text-brand-charcoal font-medium"
                />
              </div>

              <div>
                <label className="block text-[10px] font-black text-brand-charcoal uppercase tracking-wider mb-1">Message</label>
                <textarea
                  name="message"
                  rows={8}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-5 rounded-none text-sm bg-brand-light-grey/55 border border-black/5 focus:border-brand-yellow focus:outline-none text-brand-charcoal resize-none font-medium"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full flex items-center justify-center gap-2 py-5 px-8 rounded-none bg-brand-charcoal text-white font-black text-sm tracking-widest uppercase hover:bg-brand-charcoal/90 transition-all hover:scale-[1.01] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                <Send size={14} />
                {status === 'sending' ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Slide Footer */}
      <div className="w-full text-center py-6 select-none opacity-20 pointer-events-none mt-12">
        <span className="font-black text-3xl sm:text-5xl lg:text-7xl tracking-tighter text-brand-charcoal uppercase block">
          THANKS FOR PATIENCE!
        </span>
      </div>
    </section>
  );
}
