import React, { useState, useEffect } from 'react';
import { Award, BookOpen, Shield, Code2, Medal, ExternalLink, X, FileCheck } from 'lucide-react';
import { certificationGroups, issuerColors } from '../data/certifications';

const iconMap = { Award, BookOpen, Shield, Code2, Medal };

function CertModal({ group, colors, onClose }) {
  const IconComp = iconMap[group.icon] || Award;
  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
      <div onClick={onClose} style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(6px)' }} />
      <div style={{ position: 'relative', zIndex: 1, background: 'linear-gradient(145deg, #07101E, #111827)', border: `1px solid ${colors.border}`, borderRadius: '1.25rem', padding: '2rem', width: '100%', maxWidth: '540px', boxShadow: `0 25px 60px rgba(0,0,0,0.6), 0 0 0 1px ${colors.border}`, maxHeight: '85vh', overflowY: 'auto' }}>
        <button onClick={onClose} style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.5rem', color: '#9ca3af', width: '2rem', height: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.15s' }} onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = '#f9fafb'; }} onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = '#9ca3af'; }}><X size={14} /></button>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <div style={{ width: '3.25rem', height: '3.25rem', borderRadius: '0.875rem', background: colors.bg, border: `1px solid ${colors.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><IconComp size={22} style={{ color: colors.text }} /></div>
          <div>
            <h3 style={{ color: '#f9fafb', fontWeight: 700, fontSize: '1.15rem', lineHeight: 1.3, marginBottom: '0.3rem' }}>{group.groupTitle}</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.72rem', fontWeight: 700, padding: '0.2rem 0.65rem', borderRadius: '9999px', background: colors.bg, color: colors.text, border: `1px solid ${colors.border}` }}>{group.issuer}</span>
              <span style={{ fontSize: '0.72rem', color: '#6b7280' }}>{group.credentials.length} Certificate{group.credentials.length !== 1 ? 's' : ''}</span>
            </div>
          </div>
        </div>
        <div style={{ height: '1px', background: 'rgba(255,255,255,0.07)', marginBottom: '1.25rem' }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
          {group.credentials.map((cred, i) => (
            <a key={i} href={cred.url} target="_blank" rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', padding: '0.875rem 1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '0.75rem', textDecoration: 'none', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.background = colors.bg; e.currentTarget.style.border = `1px solid ${colors.border}`; e.currentTarget.style.transform = 'translateX(4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.border = '1px solid rgba(255,255,255,0.08)'; e.currentTarget.style.transform = 'none'; }}
            >
              <span style={{ minWidth: '1.625rem', height: '1.625rem', borderRadius: '50%', background: colors.bg, border: `1px solid ${colors.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 700, color: colors.text, flexShrink: 0 }}>{i + 1}</span>
              <div style={{ flex: 1, minWidth: 0 }}><p style={{ color: '#e5e7eb', fontSize: '0.875rem', fontWeight: 600, lineHeight: 1.4 }}>{cred.label}</p></div>
              <ExternalLink size={14} style={{ color: colors.text, opacity: 0.7, flexShrink: 0 }} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Certifications() {
  const [activeGroup, setActiveGroup] = useState(null);
  const handleCardClick = (group) => {
    if (group.credentials.length === 0) return;
    if (group.credentials.length === 1) { window.open(group.credentials[0].url, '_blank', 'noopener,noreferrer'); }
    else { setActiveGroup(group); }
  };
  const activeColors = activeGroup ? (issuerColors[activeGroup.issuerColor] || issuerColors.blue) : null;
  return (
    <>
      <section id="certifications" className="py-24" style={{ background: '#04080F' }}>
        <div className="section-container">
          <div className="mb-14 text-center">
            <div className="flex justify-center mb-4"><span className="section-tag">Certifications</span></div>
            <h2 className="font-bold mb-4" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: '#f9fafb', letterSpacing: '-0.02em' }}>Credentials &amp; <span className="gradient-text-purple">Certifications</span></h2>
            <p style={{ color: '#9ca3af', fontSize: '1.05rem', maxWidth: '500px', margin: '0 auto' }}>Verified learning achievements across AI, ML, Python, and Data Science. Click any card to view individual certificates.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificationGroups.map(group => {
              const IconComp = iconMap[group.icon] || Award;
              const colors = issuerColors[group.issuerColor] || issuerColors.blue;
              const isClickable = group.credentials.length > 0;
              const count = group.credentials.length;
              return (
                <div key={group.id} onClick={() => handleCardClick(group)}
                  style={{ background: 'rgba(7,12,28,0.62)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: '1.125rem', padding: '1.625rem', cursor: isClickable ? 'pointer' : 'default', transition: 'all 0.3s ease', display: 'flex', flexDirection: 'column', gap: '1rem', minHeight: '180px' }}
                  onMouseEnter={e => { if (!isClickable) return; e.currentTarget.style.border = `1px solid ${colors.border}`; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = `0 16px 40px rgba(0,0,0,0.35), 0 0 0 1px ${colors.border}`; }}
                  onMouseLeave={e => { e.currentTarget.style.border = '1px solid rgba(255,255,255,0.09)'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                    <div style={{ width: '3rem', height: '3rem', borderRadius: '0.875rem', background: colors.bg, border: `1px solid ${colors.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><IconComp size={20} style={{ color: colors.text }} /></div>
                    {count > 0 && (<span style={{ fontSize: '0.7rem', fontWeight: 700, padding: '0.25rem 0.625rem', borderRadius: '9999px', background: colors.bg, color: colors.text, border: `1px solid ${colors.border}` }}>{count} cert{count !== 1 ? 's' : ''}</span>)}
                  </div>
                  <div>
                    <h3 style={{ color: '#f9fafb', fontWeight: 700, fontSize: '1rem', lineHeight: 1.35, marginBottom: '0.5rem' }}>{group.groupTitle}</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.72rem', fontWeight: 700, padding: '0.2rem 0.65rem', borderRadius: '9999px', background: colors.bg, color: colors.text, border: `1px solid ${colors.border}` }}>{group.issuer}</span>
                      <span style={{ fontSize: '0.72rem', color: '#6b7280', background: 'rgba(255,255,255,0.04)', padding: '0.2rem 0.5rem', borderRadius: '0.25rem' }}>{group.category}</span>
                    </div>
                  </div>
                  {isClickable && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: 'auto', paddingTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.06)', color: colors.text, fontSize: '0.78rem', fontWeight: 600, opacity: 0.8 }}>
                      <FileCheck size={13} />
                      <span>{count === 1 ? 'View Certificate' : `View All ${count} Certificates`}</span>
                      <ExternalLink size={11} style={{ marginLeft: 'auto' }} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {activeGroup && <CertModal group={activeGroup} colors={activeColors} onClose={() => setActiveGroup(null)} />}
    </>
  );
}
