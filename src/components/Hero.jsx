import React, { useEffect, useRef } from 'react';
import { Download, Mail, ChevronRight, MapPin, Phone } from 'lucide-react';
import { profile } from '../data/profile';
import { socialLinksArray } from '../data/socialLinks';

// Single source of truth for background — matches profile image corners
const BG = '#030712';

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
      for(let i=0;i<ns.length;i++) for(let j=i+1;j<ns.length;j++){const d=Math.hypot(ns[j].x-ns[i].x,ns[j].y-ns[i].y);if(d<D){ctx.beginPath();ctx.moveTo(ns[i].x,ns[i].y);ctx.lineTo(ns[j].x,ns[j].y);ctx.strokeStyle=`rgba(99,102,241,${(1-d/D)*.08})`;ctx.lineWidth=.5;ctx.stroke();}}
      ns.forEach(n=>{ctx.beginPath();ctx.arc(n.x,n.y,n.r,0,Math.PI*2);ctx.fillStyle='rgba(99,102,241,.15)';ctx.fill();n.x+=n.vx;n.y+=n.vy;if(n.x<0||n.x>W)n.vx*=-1;if(n.y<0||n.y>H)n.vy*=-1;});
      id=requestAnimationFrame(dr);
    };
    dr(); return ()=>cancelAnimationFrame(id);
  },[]);
  return <canvas ref={ref} style={{position:'absolute',inset:0,width:'100%',height:'100%',opacity:.35,pointerEvents:'none'}} aria-hidden="true"/>;
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
        overflowX: 'hidden',
      }}
    >
      {/* ── Ambient blue/purple glow behind everything ── */}
      <div aria-hidden="true" style={{
        position:'absolute', inset:0, pointerEvents:'none',
        background:`radial-gradient(ellipse 70% 85% at 75% 45%, rgba(99,102,241,0.08) 0%, rgba(59,130,246,0.04) 52%, transparent 74%)`,
      }}/>
      <div aria-hidden="true" style={{
        position:'absolute', top:'10%', left:0, width:420, height:580, pointerEvents:'none',
        background:`radial-gradient(ellipse, rgba(99,102,241,0.04) 0%, transparent 70%)`,
      }}/>
      <NeuralCanvas/>

      <style>{`
        .hero-grid {
          position: relative;
          z-index: 10;
          max-width: 1400px;
          width: 92%;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          align-items: center;
          gap: clamp(16px, 2.5vw, 40px);
          min-height: 100vh;
          padding-top: clamp(88px, 10vh, 110px);
          padding-bottom: clamp(40px, 5vh, 72px);
        }
        .hero-img-col {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          margin-left: -70px;
        }
        .hero-overlay-left {
          position: absolute; top: 0; left: 0; bottom: 0; width: 16%; z-index: 4; pointer-events: none;
          background: linear-gradient(to right, ${BG} 0%, rgba(3,7,18,0.95) 15%, rgba(3,7,18,0.4) 55%, transparent 100%);
        }
        .hero-overlay-top {
          position: absolute; top: 0; left: 0; right: 0; height: 14%; z-index: 4; pointer-events: none;
          background: linear-gradient(to bottom, ${BG} 0%, rgba(3,7,18,0.95) 15%, rgba(3,7,18,0.4) 55%, transparent 100%);
        }
        .hero-overlay-bottom {
          position: absolute; bottom: 0; left: 0; right: 0; height: 16%; z-index: 4; pointer-events: none;
          background: linear-gradient(to top, ${BG} 0%, rgba(3,7,18,0.95) 15%, rgba(3,7,18,0.4) 55%, transparent 100%);
        }
        .hero-overlay-right {
          position: absolute; top: 0; right: 0; bottom: 0; width: 14%; z-index: 4; pointer-events: none;
          background: linear-gradient(to left, ${BG} 0%, rgba(3,7,18,0.95) 15%, rgba(3,7,18,0.4) 55%, transparent 100%);
        }
        @media (max-width: 1024px) {
          .hero-img-col {
            margin-left: -20px;
          }
        }
        @media (max-width: 767px) {
          .hero-grid {
            grid-template-columns: 1fr;
            min-height: unset;
            padding-top: clamp(80px, 10vh, 100px);
            padding-bottom: clamp(32px, 5vh, 56px);
            gap: 24px;
          }
          .hero-img-col {
            order: -1;
            justify-content: center;
            margin-left: 0;
            margin-bottom: 24px;
          }
          .hero-overlay-left { width: 12%; }
          .hero-overlay-top { height: 10%; }
          .hero-overlay-bottom { height: 10%; }
          .hero-overlay-right { width: 12%; }
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
              opacity: 0.9,
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
            <span style={{ display:'block', color:'#f3f4f6' }}>Jeedi</span>
            <span style={{
              display: 'block',
              background: 'linear-gradient(135deg, #60a5fa 0%, #8b5cf6 50%, #c4b5fd 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              filter: 'drop-shadow(0 2px 10px rgba(139,92,246,0.15))',
            }}>Madhukar</span>
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            fontWeight: 600,
            color: '#e5e7eb',
            letterSpacing: '0.01em',
            margin: '0 0 16px',
          }}>
            AI/ML Engineer &amp; Data Science Specialist
          </p>

          {/* Availability badge */}
          <div style={{ marginBottom: 20 }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '5px 14px', borderRadius: 9999, fontSize: '0.7rem', fontWeight: 600,
              background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.25)', color: '#60a5fa',
            }}>
              <span aria-hidden="true" style={{ width:6, height:6, borderRadius:'50%', background:'#3b82f6', display:'inline-block', boxShadow:'0 0 8px #3b82f6', animation:'pulse-dot 2.2s ease-in-out infinite' }}/>
              {profile.availabilityBadge}
            </span>
          </div>

          {/* Bio */}
          <p style={{ color:'#9ca3af', fontSize:'0.94rem', lineHeight:1.78, margin:'0 0 28px', maxWidth:460 }}>
            {profile.bio}
          </p>

          {/* CTAs */}
          <div style={{display:'flex',flexWrap:'wrap',gap:12,marginBottom:28}}>
            <button
              onClick={()=>scrollTo('#projects')}
              style={{display:'inline-flex',alignItems:'center',gap:8,padding:'12px 24px',borderRadius:12,fontSize:'0.875rem',fontWeight:700,border:'none',cursor:'pointer',background:'linear-gradient(135deg,#3b82f6,#2563eb)',color:'#fff',boxShadow:'0 4px 20px rgba(59,130,246,0.25)',transition:'all 0.2s'}}
              onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-2px)';e.currentTarget.style.boxShadow='0 8px 28px rgba(59,130,246,0.40)';}}
              onMouseLeave={e=>{e.currentTarget.style.transform='none';e.currentTarget.style.boxShadow='0 4px 20px rgba(59,130,246,0.25)';}}>
              View Projects <ChevronRight size={15}/>
            </button>
            <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer"
              style={{display:'inline-flex',alignItems:'center',gap:8,padding:'12px 20px',borderRadius:12,fontSize:'0.875rem',fontWeight:600,textDecoration:'none',background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.08)',color:'#e5e7eb',transition:'all 0.2s'}}
              onMouseEnter={e=>{e.currentTarget.style.background='rgba(255,255,255,0.06)';e.currentTarget.style.transform='translateY(-2px)';}}
              onMouseLeave={e=>{e.currentTarget.style.background='rgba(255,255,255,0.03)';e.currentTarget.style.transform='none';}}>
              <Download size={15}/> Download Resume
            </a>
            <button
              onClick={()=>scrollTo('#contact')}
              style={{display:'inline-flex',alignItems:'center',gap:8,padding:'12px 20px',borderRadius:12,fontSize:'0.875rem',fontWeight:600,border:'1px solid rgba(255,255,255,0.08)',cursor:'pointer',background:'rgba(255,255,255,0.03)',color:'#e5e7eb',transition:'all 0.2s'}}
              onMouseEnter={e=>{e.currentTarget.style.background='rgba(255,255,255,0.06)';e.currentTarget.style.transform='translateY(-2px)';}}
              onMouseLeave={e=>{e.currentTarget.style.background='rgba(255,255,255,0.03)';e.currentTarget.style.transform='none';}}>
              <Mail size={15}/> Contact Me
            </button>
          </div>

          {/* Social links */}
          <div style={{display:'flex',flexWrap:'wrap',gap:10,marginBottom:20}}>
            {socialLinksArray.map(link=>{
              const Icon=iconMap[link.label];
              return (
                <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.ariaLabel}
                  style={{display:'inline-flex',alignItems:'center',gap:8,padding:'8px 12px',borderRadius:8,fontSize:'0.75rem',fontWeight:500,textDecoration:'none',background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.08)',color:'#9ca3af',transition:'all 0.2s'}}
                  onMouseEnter={e=>{e.currentTarget.style.color=link.color;e.currentTarget.style.background=`${link.color}15`;e.currentTarget.style.border=`1px solid ${link.color}35`;}}
                  onMouseLeave={e=>{e.currentTarget.style.color='#9ca3af';e.currentTarget.style.background='rgba(255,255,255,0.03)';e.currentTarget.style.border='1px solid rgba(255,255,255,0.08)';}}>
                  {Icon&&<Icon size={14}/>}{link.label}
                </a>
              );
            })}
          </div>

          {/* Contact + location */}
          <div style={{display:'flex',flexWrap:'wrap',alignItems:'center',gap:16,fontSize:'0.74rem',color:'#9ca3af'}}>
            <a href={profile.phoneHref}
              style={{display:'inline-flex',alignItems:'center',gap:6,textDecoration:'none',color:'#9ca3af',transition:'color 0.2s'}}
              onMouseEnter={e=>e.currentTarget.style.color='#60a5fa'}
              onMouseLeave={e=>e.currentTarget.style.color='#9ca3af'}>
              <Phone size={11}/>{profile.phone}
            </a>
            <span style={{color:'rgba(255,255,255,0.1)'}}>|</span>
            <span style={{display:'inline-flex',alignItems:'center',gap:6}}><MapPin size={11}/>{profile.location}</span>
          </div>
        </div>

        {/* ═══════════════════════════════════════
            COLUMN 2 — Profile image
            ═══════════════════════════════════════ */}
        <div className="hero-img-col">

          {/* Image wrapper */}
          <div style={{ position:'relative', width:'100%', maxWidth:480 }}>

            {/* The Image */}
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

            {/* Fades to blend the image seamlessly into the page background */}
            <div aria-hidden="true" className="hero-overlay-left" />
            <div aria-hidden="true" className="hero-overlay-top" />
            <div aria-hidden="true" className="hero-overlay-bottom" />
            <div aria-hidden="true" className="hero-overlay-right" />

            {/* Subtle glow behind the photo */}
            <div aria-hidden="true" style={{
              position:'absolute', top:'5%', left:'5%', right:'5%', bottom:'5%',
              pointerEvents:'none', zIndex:1,
              background:`radial-gradient(circle at center, rgba(99,102,241,0.15) 0%, rgba(59,130,246,0.05) 50%, transparent 70%)`,
            }}/>

            {/* Available for Hire badge */}
            <div style={{
              position:'absolute', bottom:'7%', left:'50%', transform:'translateX(-50%)',
              display:'flex', alignItems:'center', gap:7,
              padding:'5px 17px', borderRadius:9999,
              background:'rgba(12,19,34,0.85)', border:'1px solid rgba(59,130,246,0.3)',
              backdropFilter:'blur(14px)', color:'#60a5fa', fontSize:'0.68rem',
              fontWeight:700, whiteSpace:'nowrap', zIndex:5,
              boxShadow:'0 4px 20px rgba(59,130,246,0.15)',
            }}>
              <span aria-hidden="true" style={{width:7,height:7,borderRadius:'50%',background:'#3b82f6',display:'inline-block',boxShadow:'0 0 10px #3b82f6',animation:'pulse-dot 2.2s ease-in-out infinite'}}/>
              Available for Hire
            </div>

          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <div style={{position:'absolute',bottom:24,left:'50%',transform:'translateX(-50%)',opacity:.25,zIndex:10}} aria-hidden="true">
        <div style={{width:20,height:32,borderRadius:10,border:'1.5px solid rgba(255,255,255,0.12)',display:'flex',alignItems:'flex-start',justifyContent:'center',paddingTop:6}}>
          <div style={{width:4,height:8,borderRadius:2,background:'#3b82f6',animation:'float 1.6s ease-in-out infinite'}}/>
        </div>
      </div>
    </section>
  );
}
