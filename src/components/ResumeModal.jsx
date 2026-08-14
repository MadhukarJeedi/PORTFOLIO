import React, { useState } from 'react';
import { X, ExternalLink, Loader2 } from 'lucide-react';
import { profile } from '../data/profile';

export default function ResumeModal({ onClose }) {
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
    <div 
      className="modal-overlay fixed inset-0 z-[100] flex items-center justify-center bg-brand-charcoal/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-5xl h-[88vh] bg-white border-4 border-brand-charcoal flex flex-col shadow-[8px_8px_0px_0px_rgba(33,37,41,1)] relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header (Flat Yellow style matching site highlights) */}
        <div className="bg-brand-yellow border-b-4 border-brand-charcoal p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 bg-brand-charcoal rounded-full inline-block" />
            <h2 className="font-black text-sm sm:text-base tracking-wider text-brand-charcoal uppercase">
              Resume Preview — {profile.name}
            </h2>
          </div>
          
          <div className="flex items-center gap-3">
            {/* View Full/Download Button */}
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-brand-charcoal text-white hover:bg-white hover:text-brand-charcoal font-black text-xs tracking-wider border-2 border-brand-charcoal transition-all no-underline shadow-[2px_2px_0px_0px_rgba(33,37,41,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
            >
              <ExternalLink size={12} />
              OPEN IN DRIVE
            </a>
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="w-9 h-9 bg-brand-charcoal text-white hover:bg-white hover:text-brand-charcoal border-2 border-brand-charcoal flex items-center justify-center transition-all cursor-pointer shadow-[2px_2px_0px_0px_rgba(33,37,41,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
              aria-label="Close modal"
            >
              <X size={18} className="stroke-[3]" />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-brand-light-grey relative min-h-0">
          {loading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-brand-light-grey z-10">
              <Loader2 size={40} className="animate-spin text-brand-yellow stroke-[3]" />
              <p className="font-black text-xs text-brand-charcoal tracking-widest uppercase mt-4">
                Loading Resume PDF…
              </p>
            </div>
          )}
          
          <iframe
            src={previewUrl}
            className="w-full h-full border-none"
            title="Jeedi Madhukar Resume"
            onLoad={() => setLoading(false)}
            allow="autoplay"
          />
        </div>

        {/* Mobile-only Action Footer */}
        <div className="sm:hidden bg-brand-light-grey border-t-2 border-brand-charcoal p-3 flex justify-center">
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2.5 bg-brand-charcoal text-white font-black text-xs tracking-wider border-2 border-brand-charcoal no-underline shadow-[2px_2px_0px_0px_rgba(33,37,41,1)]"
          >
            <ExternalLink size={12} />
            OPEN IN GOOGLE DRIVE
          </a>
        </div>
      </div>
    </div>
  );
}
