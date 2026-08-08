import React, { useEffect, useRef } from 'react';
import { Download, Mail, ChevronRight, MapPin, Phone } from 'lucide-react';
import { profile } from '../data/profile';
import { socialLinksArray } from '../data/socialLinks';

// Single source of truth for background — matches profile image dark corners
const BG = '#04080F';

// ─── Social icons ─────────────────────────────────────────────────────────────
function LinkedInIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}
function GithubIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  );
}
function KaggleIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.1.352-.3.352H5.029c-.2 0-.3-.117-.3-.352V.353c0-.233.1-.353.3-.353h2.758c.2 0 .3.12.3.353v12.812l6.316-6.489c.173-.174.35-.26.531-.26h3.2c.154 0 .25.046.285.134.036.09-.007.188-.131.293l-6.446 6.316 6.952 8.468c.107.14.14.238.031.334"/>
    </svg>
  );
}
const iconMap = { LinkedIn: LinkedInIcon, GitHub: GithubIcon, Kaggle: KaggleIcon };

// ─── Neural canvas ─────────────────────────────────────────────────────────────
function NeuralCanvas() {
  const ref = useRef(null);
  useEffect(() => {
    const c = ref.current; if (!c) return;
    const ctx = c.getContext('2d'); let id, W, H;
    const ns = []; const N = 28, D = 110;
    const siz = () => { W = c.width = c.offsetWidth; H = c.height = c.offsetHeight; };
    const ini = () => { ns.length=0; for(let i=0;i<N;i++) ns.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.18,vy:(Math.random()-.5)*.18,r:Math.random()*.9+.4}); };
    siz(); ini(); window.addEventListener('resize',()=>{siz();ini();});
    const dr = () => {
      ctx.clearRect(0,0,W,H);
      for(let i=0;i<ns.length;i++) for(let j=i+1;j<ns.length;j++){const d=Math.hypot(ns[j].x-ns[i].x,ns[j].y-ns[i].y);if(d<D){ctx.beginPath();ctx.moveTo(ns[i].x,ns[i].y);ctx.lineTo(ns[j].x,ns[j].y);ctx.strokeStyle=`rgba(59,130,246,${(1-d/D)*.07})`;ctx.lineWidth=.5;ctx.stroke();}}
      ns.forEach(n=>{ctx.beginPath();ctx.arc(n.x,n.y,n.r,0,Math.PI*2);ctx.fillStyle='rgba(96,165,250,.18)';ctx.fill();n.x+=n.vx;n.y+=n.vy;if(n.x<0||n.x>W)n.vx*=-1;if(n.y<0||n.y>H)n.vy*=-1;});
      id=requestAnimationFrame(dr);
    };
    dr(); return ()=>cancelAnimationFrame(id);
  },[]);
  return <canvas ref={ref} style={{position:'absolute',inset:0,width:'100%',height:'100%',opacity:.28,pointerEvents:'none'}} aria-hidden="true"/>;
}

export default function Hero() {
  const scrollTo = id => { const el = document.querySelector(id); if(el) el.scrollIntoView({behavior:'smooth'}); };

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        background: BG,
        minHeight: '100vh',
        overflowX: 'hidden',  // prevent horizontal scrollbar, but allow vertical
      }}
    >
      {/* ── Ambient blue/purple orb ── */}
      <div aria-hidden="true" style={{
        position:'absolute', inset:0, pointerEvents:'none',
        background:`radial-gradient(ellipse 70% 85% at 72% 42%, rgba(29,78,216,0.22) 0%, rgba(109,40,217,0.10) 52%, transparent 74%)`,
      }}/>
      <div aria-hidden="true" style={{
        position:'absolute', top:'10%', left:0, width:420, height:580, pointerEvents:'none',
        background:`radial-gradient(ellipse, rgba(29,78,216,0.07) 0%, transparent 70%)`,
      }}/>
      <NeuralCanvas/>

      {/*
        ════════════════════════════════════════════════════════
        CSS GRID HERO CONTAINER
        ─────────────────────────────────────────────────────
        • max-width: 1500px, width: 94%  → safe margins each side
        • margin: 0 auto                 → always centered
        • grid-template-columns: 1fr 1.1fr → ~48% / 52%
        • gap: controlled                → no huge empty space
        • This is a grid item wrapper, sits above the background layers
        ════════════════════════════════════════════════════════
      */}
      {/* Responsive grid: 2 cols on ≥768px, 1 col on mobile */}
      <style>{`
        .hero-grid {
          position: relative;
          z-index: 10;
          max-width: 1500px;
          width: 94%;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          align-items: center;
          gap: clamp(16px, 2.5vw, 48px);
          min-height: 100vh;
          padding-top: clamp(88px, 10vh, 110px);
          padding-top: clamp(88px, 10vh, 110px);
          padding-bottom: clamp(40px, 5vh, 72px);
        }
        @media (max-width: 767px) {
          .hero-grid {
            grid-template-columns: 1fr;
            min-height: unset;
            padding-top: clamp(88px, 12vh, 110px);
            padding-bottom: clamp(32px, 5vh, 56px);
          }
          .hero-img-col {
            order: -1;
          }
        }
      `}</style>
      <div className="hero-grid">
        {/* ═══════════════════════════
            COLUMN 1 — Text content
            ═══════════════════════════ */}
        <div style={{ display:'flex', flexDirection:'column', justifyContent:'center' }}>
          <div style={{ marginBottom: 10 }}>
            <span style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: '#60a5fa',
              opacity: 0.85,
            }}>
              Hello, I’m
            </span>
          </div>

          {/* Name */}
          <h1 style={{
            fontWeight: 900,
            lineHeight: 0.95,
            letterSpacing: '-0.03em',
            fontSize: 'clamp(3rem, 6.5vw, 5.8rem)',
            margin: '0 0 18px',
          }}>
            <span style={{ display:'block', color:'#ffffff', textShadow:'0 0 60px rgba(59,130,246,0.18)' }}>Jeedi</span>
            <span style={{
              display: 'block',
              background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 48%, #a78bfa 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              filter: 'drop-shadow(0 0 20px rgba(99,102,241,0.30))',
            }}>Madhukar</span>
          </h1>

          {/* Subtitle — single clean line (reference style) */}
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            fontWeight: 600,
            color: '#94a3b8',
            letterSpacing: '0.01em',
            margin: '0 0 16px',
          }}>
            AI/ML Engineer &amp; Data Science Specialist
          </p>

          {/* Availability badge — moved below subtitle for cleaner flow */}
          <div style={{ marginBottom: 20 }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '5px 14px', borderRadius: 9999, fontSize: '0.7rem', fontWeight: 600,
              background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.25)', color: '#34d399',
            }}>
              <span aria-hidden="true" style={{ width:6, height:6, borderRadius:'50%', background:'#10b981', display:'inline-block', boxShadow:'0 0 8px #10b981', animation:'pulse-dot 2.2s ease-in-out infinite' }}/>
              {profile.availabilityBadge}
            </span>
          </div>

          {/* Bio */}
          <p style={{ color:'#8090aa', fontSize:'0.94rem', lineHeight:1.78, margin:'0 0 28px', maxWidth:460 }}>
            {profile.bio}
          </p>

          {/* CTAs */}
          <div style={{display:'flex',flexWrap:'wrap',gap:12,marginBottom:28}}>
            <button
              onClick={()=>scrollTo('#projects')}
              style={{display:'inline-flex',alignItems:'center',gap:8,padding:'12px 24px',borderRadius:12,fontSize:'0.875rem',fontWeight:700,border:'none',cursor:'pointer',background:'linear-gradient(135deg,#2563eb,#1d4ed8)',color:'#fff',boxShadow:'0 4px 20px rgba(37,99,235,0.40)',transition:'all 0.2s'}}
              onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-2px)';e.currentTarget.style.boxShadow='0 8px 28px rgba(37,99,235,0.55)';}}
              onMouseLeave={e=>{e.currentTarget.style.transform='none';e.currentTarget.style.boxShadow='0 4px 20px rgba(37,99,235,0.40)';}}>
              View Projects <ChevronRight size={15}/>
            </button>
            <a href={profile.resumeUrl} download
              style={{display:'inline-flex',alignItems:'center',gap:8,padding:'12px 20px',borderRadius:12,fontSize:'0.875rem',fontWeight:600,textDecoration:'none',background:'rgba(255,255,255,0.05)',border:'1px solid rgba(255,255,255,0.11)',color:'#dde5f5',transition:'all 0.2s'}}
              onMouseEnter={e=>{e.currentTarget.style.background='rgba(255,255,255,0.09)';e.currentTarget.style.transform='translateY(-2px)';}}
              onMouseLeave={e=>{e.currentTarget.style.background='rgba(255,255,255,0.05)';e.currentTarget.style.transform='none';}}>
              <Download size={15}/> Download Resume
            </a>
            <button
              onClick={()=>scrollTo('#contact')}
              style={{display:'inline-flex',alignItems:'center',gap:8,padding:'12px 20px',borderRadius:12,fontSize:'0.875rem',fontWeight:600,border:'1px solid rgba(255,255,255,0.11)',cursor:'pointer',background:'rgba(255,255,255,0.05)',color:'#dde5f5',transition:'all 0.2s'}}
              onMouseEnter={e=>{e.currentTarget.style.background='rgba(255,255,255,0.09)';e.currentTarget.style.transform='translateY(-2px)';}}
              onMouseLeave={e=>{e.currentTarget.style.background='rgba(255,255,255,0.05)';e.currentTarget.style.transform='none';}}>
              <Mail size={15}/> Contact Me
            </button>
          </div>

          {/* Social links */}
          <div style={{display:'flex',flexWrap:'wrap',gap:10,marginBottom:20}}>
            {socialLinksArray.map(link=>{
              const Icon=iconMap[link.label];
              return(
                <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.ariaLabel}
                  style={{display:'inline-flex',alignItems:'center',gap:8,padding:'8px 12px',borderRadius:8,fontSize:'0.75rem',fontWeight:500,textDecoration:'none',background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.09)',color:'#5f7a9e',transition:'all 0.2s'}}
                  onMouseEnter={e=>{e.currentTarget.style.color=link.color;e.currentTarget.style.background=`${link.color}12`;e.currentTarget.style.border=`1px solid ${link.color}40`;}}
                  onMouseLeave={e=>{e.currentTarget.style.color='#5f7a9e';e.currentTarget.style.background='rgba(255,255,255,0.04)';e.currentTarget.style.border='1px solid rgba(255,255,255,0.09)';}}>
                  {Icon&&<Icon size={14}/>}{link.label}
                </a>
              );
            })}
          </div>

          {/* Contact + location */}
          <div style={{display:'flex',flexWrap:'wrap',alignItems:'center',gap:16,fontSize:'0.74rem',color:'#253448'}}>
            <a href={profile.phoneHref}
              style={{display:'inline-flex',alignItems:'center',gap:6,textDecoration:'none',color:'#253448',transition:'color 0.2s'}}
              onMouseEnter={e=>e.currentTarget.style.color='#60a5fa'}
              onMouseLeave={e=>e.currentTarget.style.color='#253448'}>
              <Phone size={11}/>{profile.phone}
            </a>
            <span style={{color:'#0f1b2e'}}>|</span>
            <span style={{display:'inline-flex',alignItems:'center',gap:6}}><MapPin size={11}/>{profile.location}</span>
          </div>
        </div>

        {/* ═══════════════════════════════════════
            COLUMN 2 — Profile image
            ═══════════════════════════════════════ */}
        <div className="hero-img-col" style={{ position:'relative', display:'flex', alignItems:'center', justifyContent:'center' }}>

          {/* Image wrapper — transparent bg so no rectangular panel */}
          <div style={{ position:'relative', width:'100%', maxWidth:640 }}>

            {/*
              THE IMAGE
              ─────────────────────────────────────
              • width: 100%   → fills grid cell width
              • height: auto  → FULL natural aspect ratio, ZERO cropping
              • objectFit is NOT used with natural img (not needed here)
              • opacity: 1, visibility: visible, zIndex: 3
              • display: block → no whitespace issues
            */}
            <img
              src={profile.profileImage}
              alt="Jeedi Madhukar - AI/ML Engineer"
              style={{
                display: 'block',
                width: '100%',
                height: 'auto',
                opacity: 1,
                visibility: 'visible',
                position: 'relative',
                zIndex: 3,
              }}
              loading="eager"
            />

            {/*
              EDGE GRADIENT OVERLAYS
              ──────────────────────
              Only the outermost thin strips are faded.
              The CENTER 65%+ of the image is UNTOUCHED.
              Person, face, orbital rings, all 6 tech cards remain 100% visible.
              Each overlay has pointer-events: none so they don't block clicks.
            */}

            {/*
              EDGE OVERLAYS — only thin outer strips, center untouched.
              Using BG color so no rectangular seam is visible.
              Extended widths/heights to fully erase the hard border.
            */}

            {/* LEFT edge — wider (28%) to fully cover the image's left border + fade into gap */}
            <div aria-hidden="true" style={{
              position:'absolute', top:0, left:0, bottom:0, width:'28%',
              pointerEvents:'none', zIndex:4,
              background:`linear-gradient(to right, ${BG} 0%, ${BG} 2%, rgba(5,8,23,0.88) 22%, rgba(5,8,23,0.45) 52%, rgba(5,8,23,0.10) 78%, transparent 100%)`,
            }}/>

            {/* TOP edge (18% height) */}
            <div aria-hidden="true" style={{
              position:'absolute', top:0, left:0, right:0, height:'18%',
              pointerEvents:'none', zIndex:4,
              background:`linear-gradient(to bottom, ${BG} 0%, ${BG} 2%, rgba(5,8,23,0.82) 30%, rgba(5,8,23,0.30) 60%, transparent 100%)`,
            }}/>

            {/* BOTTOM edge (20% height — lower body fade) */}
            <div aria-hidden="true" style={{
              position:'absolute', bottom:0, left:0, right:0, height:'20%',
              pointerEvents:'none', zIndex:4,
              background:`linear-gradient(to top, ${BG} 0%, ${BG} 2%, rgba(5,8,23,0.82) 30%, rgba(5,8,23,0.30) 60%, transparent 100%)`,
            }}/>

            {/* RIGHT edge — moderate (14%) — image has right-side cards so don't fade too much */}
            <div aria-hidden="true" style={{
              position:'absolute', top:0, right:0, bottom:0, width:'14%',
              pointerEvents:'none', zIndex:4,
              background:`linear-gradient(to left, ${BG} 0%, ${BG} 2%, rgba(5,8,23,0.65) 30%, rgba(5,8,23,0.20) 60%, transparent 100%)`,
            }}/>

            {/* Cinematic blue glow — BEHIND the image (zIndex:1) so it doesn't dim subject */}
            <div aria-hidden="true" style={{
              position:'absolute', top:'5%', left:'5%', right:'5%', bottom:'5%',
              pointerEvents:'none', zIndex:1,
              background:`radial-gradient(ellipse 65% 70% at 52% 42%, rgba(29,78,216,0.22) 0%, rgba(34,211,238,0.08) 48%, transparent 70%)`,
            }}/>

            {/* Available for Hire badge */}
            <div style={{
              position:'absolute', bottom:'7%', left:'50%', transform:'translateX(-50%)',
              display:'flex', alignItems:'center', gap:7,
              padding:'5px 17px', borderRadius:9999,
              background:'rgba(3,6,14,0.92)', border:'1px solid rgba(16,185,129,0.42)',
              backdropFilter:'blur(14px)', color:'#34d399', fontSize:'0.68rem',
              fontWeight:700, whiteSpace:'nowrap', zIndex:5,
              boxShadow:'0 0 22px rgba(16,185,129,0.14)',
            }}>
              <span aria-hidden="true" style={{width:7,height:7,borderRadius:'50%',background:'#10b981',display:'inline-block',boxShadow:'0 0 10px #10b981',animation:'pulse-dot 2.2s ease-in-out infinite'}}/>
              Available for Hire
            </div>

          </div>
        </div>

      </div>
      {/* End grid container */}

      {/* ── Mobile layout override: stack vertically ── */}
      {/* Handled by CSS below via <style> injected in index.css */}

      {/* Scroll indicator */}
      <div style={{position:'absolute',bottom:24,left:'50%',transform:'translateX(-50%)',opacity:.18,zIndex:10}} aria-hidden="true">
        <div style={{width:20,height:32,borderRadius:10,border:'1.5px solid rgba(255,255,255,0.18)',display:'flex',alignItems:'flex-start',justifyContent:'center',paddingTop:6}}>
          <div style={{width:4,height:8,borderRadius:2,background:'#3b82f6',animation:'float 1.6s ease-in-out infinite'}}/>
        </div>
      </div>
    </section>
  );
}
