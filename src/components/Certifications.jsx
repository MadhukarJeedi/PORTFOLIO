import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, ChevronDown } from 'lucide-react';
import { certificationGroups } from '../data/certifications';

export default function Certifications() {
  const [expandedGroups, setExpandedGroups] = useState({});

  const toggleExpand = (id) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section
      id="certifications"
      className="min-h-fit md:min-h-screen py-12 md:py-24 relative flex items-center"
      style={{ background: 'var(--color-brand-light-grey)' }}
    >
      <div className="section-container w-full lg:pl-8">
        {/* Title Heading */}
        <h2 className="section-title mb-10">Certifications</h2>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationGroups.map((group) => {
            const isExpanded = !!expandedGroups[group.id];
            const hasLinks = group.credentials && group.credentials.length > 0;
            return (
              <div 
                key={group.id}
                onClick={() => toggleExpand(group.id)}
                className="cursor-pointer bg-white border border-black/5 rounded-none p-8 md:p-10 shadow-sm flex flex-col justify-between hover:border-brand-yellow/60 hover:scale-[1.03] hover:shadow-lg transition-all duration-300 select-none"
              >
                <div>
                  {/* Badge & Category */}
                  <div className="flex justify-between items-start gap-2 mb-4">
                    <span className="bg-brand-charcoal text-white text-[9px] font-black tracking-widest px-2.5 py-1 rounded-none">
                      {group.issuer.toUpperCase()}
                    </span>
                    <span className="text-[10px] font-bold text-brand-yellow uppercase tracking-wider">
                      {group.category}
                    </span>
                  </div>

                  {/* Group Title and Expand Chevron */}
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-extrabold text-base text-brand-charcoal flex items-center gap-2">
                      <Award size={18} className="text-brand-yellow stroke-[2.5]" />
                      {group.groupTitle}
                    </h3>
                    <div 
                      className={`text-brand-charcoal/40 transition-transform duration-300 ${
                        isExpanded ? 'rotate-180 text-brand-yellow' : ''
                      }`}
                    >
                      <ChevronDown size={18} className="stroke-[3]" />
                    </div>
                  </div>

                  {/* Animated Credentials List */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="mt-6 pt-6 border-t border-black/5" onClick={(e) => e.stopPropagation()}>
                          {hasLinks ? (
                            <ul className="space-y-3">
                              {group.credentials.map((cred, index) => (
                                <li key={index} className="group/item flex items-center justify-between gap-3">
                                  <span className="text-xs text-brand-charcoal/80 leading-normal">
                                    {cred.label}
                                  </span>
                                  {cred.url && (
                                    <a
                                      href={cred.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="bg-[#0077b5] text-white hover:bg-brand-charcoal hover:text-white font-black text-[9px] tracking-widest px-3 py-1 rounded-full uppercase border-b-2 border-[#00527c] active:translate-y-[2px] active:border-b-0 transition-all duration-100 shadow-sm flex items-center justify-center gap-1 no-underline select-none flex-shrink-0"
                                      aria-label={`Verify ${cred.label}`}
                                    >
                                      <ExternalLink size={9} />
                                      View
                                    </a>
                                  )}
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-xs text-brand-charcoal/50 leading-relaxed italic">
                              National Apprenticeship Certificate issued by NCVT (Ministry of Skill Development &amp; Entrepreneurship).
                            </p>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="border-t border-black/5 pt-4 mt-6">
                  <span className="text-[9px] font-black text-brand-charcoal/40 uppercase tracking-widest">
                    {isExpanded ? 'Click to collapse' : 'Click to verify credentials'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
