import React, { useEffect, useRef, useState } from "react";
import { MapPin, Mail, Phone, MessageCircle, Languages, Clock } from "lucide-react";

const contactCards = [
  { icon: MapPin,        label: "Location",   value: "Al Nahda 1, Dubai, UAE" },
  { icon: Mail,          label: "Email",      value: "pahanohemie@gmail.com",  href: "mailto:pahanohemie@gmail.com" },
  { icon: Phone,         label: "Phone",      value: "+971 542 371 689",        href: "tel:+971542371689" },
  { icon: MessageCircle, label: "WhatsApp",   value: "+225 0173 551 927\n+971 542 371 689", href: "https://wa.me/2250173551927" },
  { icon: Languages,     label: "Languages",  tags: ["French", "English"] },
  { icon: Clock,         label: "Experience", bold: "1+ Year Pro XP" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(e.target); } },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');

        /* ── Keyframes ── */
        @keyframes ab-fade-up   { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes ab-scale-in  { from{opacity:0;transform:scale(0.9)}       to{opacity:1;transform:scale(1)} }
        @keyframes ab-float     { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes ab-orbit     { from{transform:rotate(0deg) translateX(var(--r,110px)) rotate(0deg)}
                                   to  {transform:rotate(360deg) translateX(var(--r,110px)) rotate(-360deg)} }
        @keyframes ab-spin-ring { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes ab-glow-pulse{
          0%,100%{box-shadow:0 0 20px rgba(139,92,246,0.25),0 0 60px rgba(139,92,246,0.08)}
          50%    {box-shadow:0 0 40px rgba(139,92,246,0.45),0 0 100px rgba(139,92,246,0.15)}
        }
        @keyframes ab-dot-pulse {
          0%,100%{box-shadow:0 0 6px rgba(139,92,246,0.5)}
          50%    {box-shadow:0 0 14px rgba(139,92,246,0.9),0 0 28px rgba(139,92,246,0.4)}
        }
        @keyframes ab-shimmer {
          0%  {background-position:200% center}
          100%{background-position:-200% center}
        }

        /* ── Root ── */
        .ab-root {
          font-family: 'DM Sans', sans-serif;
          background: #000000;
          color: #ffffff;
          padding: 110px 24px 130px;
          position: relative;
          overflow: hidden;
        }

        /* Ambient blobs */
        .ab-blob {
          position: absolute; border-radius: 50%;
          filter: blur(90px); pointer-events: none;
        }
        .ab-blob-1 { width:480px;height:480px; background:rgba(139,92,246,0.06); top:-120px; right:-100px; }
        .ab-blob-2 { width:320px;height:320px; background:rgba(96,165,250,0.04); bottom:-60px; left:-80px; }

        /* Grid lines */
        .ab-grid {
          position: absolute; inset: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(139,92,246,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139,92,246,0.03) 1px, transparent 1px);
          background-size: 64px 64px;
        }

        .ab-inner { max-width: 1060px; margin: 0 auto; position: relative; }

        /* Eyebrow */
        .ab-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 0.72rem; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.13em;
          color: #8B5CF6; margin-bottom: 20px;
          opacity: 0; transform: translateY(14px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .ab-eyebrow.on { opacity:1; transform:translateY(0); }
        .ab-eyebrow-line { display:inline-block; width:28px; height:2px; background:#8B5CF6; border-radius:1px; flex-shrink:0; }

        /* ── MAIN GRID ── */
        .ab-main {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 72px;
          align-items: center;
          margin-bottom: 64px;
        }
        @media(max-width:820px){ .ab-main{grid-template-columns:1fr;gap:48px;} }

        /* Text col */
        .ab-text {
          opacity: 0; transform: translateY(22px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .ab-text.on { opacity:1; transform:translateY(0); }

        .ab-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.2rem, 5vw, 3.4rem);
          font-weight: 800; line-height: 1.08;
          letter-spacing: -0.04em; margin-bottom: 28px;
        }
        .ab-title .accent { color: #8B5CF6; }

        /* Shimmer accent text */
        .ab-title .shimmer-txt {
          background: linear-gradient(
            90deg,
            #8B5CF6 0%, #a78bfa 25%, #c4b5fd 50%, #a78bfa 75%, #8B5CF6 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: ab-shimmer 4s linear infinite;
        }

        .ab-p {
          font-size: 1rem; line-height: 1.85;
          color: #4a5568; margin-bottom: 20px;
        }
        .ab-p strong { color: #94a3b8; font-weight: 500; }

        /* Small stat pills below text */
        .ab-stats {
          display: flex; gap: 12px; flex-wrap: wrap;
          margin-top: 32px;
        }
        .ab-stat {
          display: flex; flex-direction: column;
          padding: 14px 20px; border-radius: 14px;
          background: #0a0a0a; border: 1px solid #1e1e1e;
          transition: border-color 0.3s, transform 0.3s;
        }
        .ab-stat:hover { border-color: rgba(139,92,246,0.35); transform: translateY(-3px); }
        .ab-stat-num {
          font-family: 'Syne', sans-serif;
          font-size: 1.5rem; font-weight: 800; color: #fff; line-height: 1;
        }
        .ab-stat-lbl { font-size: 0.75rem; color: #4a5568; margin-top: 4px; }

        /* ── PHOTO COL ── */
        .ab-photo-col {
          opacity: 0; transform: translateY(22px) scale(0.96);
          transition: opacity 0.9s ease 0.15s, transform 0.9s ease 0.15s;
          display: flex; justify-content: center;
        }
        .ab-photo-col.on { opacity:1; transform:translateY(0) scale(1); }

        .ab-photo-wrap {
          position: relative;
          width: 300px; height: 360px;
          flex-shrink: 0;
        }

        /* Corner decorations */
        .ab-corner {
          position: absolute; width: 24px; height: 24px;
          border-color: rgba(139,92,246,0.5); border-style: solid;
          pointer-events: none;
        }
        .ab-corner-tl { top:-6px; left:-6px;  border-width:2px 0 0 2px; border-radius:3px 0 0 0; }
        .ab-corner-tr { top:-6px; right:-6px; border-width:2px 2px 0 0; border-radius:0 3px 0 0; }
        .ab-corner-bl { bottom:-6px; left:-6px;  border-width:0 0 2px 2px; border-radius:0 0 0 3px; }
        .ab-corner-br { bottom:-6px; right:-6px; border-width:0 2px 2px 0; border-radius:0 0 3px 0; }

        /* Spinning dashed ring */
        .ab-spin-ring {
          position: absolute;
          top: 50%; left: 50%;
          width: 330px; height: 400px;
          margin: -200px 0 0 -165px;
          border-radius: 50%;
          border: 1.5px dashed rgba(139,92,246,0.18);
          animation: ab-spin-ring 18s linear infinite;
          pointer-events: none;
        }

        /* Orbital planets */
        .ab-planet {
          position: absolute;
          top: 50%; left: 50%;
          width: 34px; height: 34px;
          margin: -17px 0 0 -17px;
          border-radius: 50%;
          background: #0e0e0e;
          border: 1px solid rgba(139,92,246,0.28);
          display: flex; align-items: center; justify-content: center;
          font-size: 14px;
          animation: ab-orbit var(--dur,9s) linear infinite;
          animation-delay: var(--delay,0s);
        }

        /* Photo frame */
        .ab-photo-frame {
          position: relative; z-index: 2;
          width: 300px; height: 360px;
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid rgba(139,92,246,0.25);
          animation: ab-glow-pulse 4s ease-in-out infinite;
        }

        .ab-photo-frame img {
          width: 100%; height: 100%;
          object-fit: cover;
          object-position: top center;
          display: block;
          filter: contrast(1.03) brightness(1.02);
          transition: transform 0.6s cubic-bezier(0.4,0,0.2,1);
        }
        .ab-photo-frame:hover img { transform: scale(1.04); }

        /* Gradient overlay at bottom of photo */
        .ab-photo-overlay {
          position: absolute; bottom: 0; left: 0; right: 0;
          height: 100px;
          background: linear-gradient(to top, #000 0%, transparent 100%);
          pointer-events: none;
          z-index: 3;
        }

        /* Name tag on photo */
        .ab-name-tag {
          position: absolute; bottom: 16px; left: 16px; right: 16px;
          z-index: 4;
          display: flex; align-items: center; gap: 10px;
        }
        .ab-name-tag-inner {
          background: rgba(10,10,18,0.85);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(139,92,246,0.25);
          border-radius: 12px;
          padding: 10px 14px;
          flex: 1;
        }
        .ab-name-tag-name {
          font-family: 'Syne', sans-serif;
          font-size: 0.92rem; font-weight: 700;
          color: #fff; line-height: 1;
        }
        .ab-name-tag-role { font-size: 0.72rem; color: #64748b; margin-top: 3px; }

        /* Status dot */
        .ab-status-dot {
          width: 10px; height: 10px; border-radius: 50%;
          background: #10b981; flex-shrink: 0;
          animation: ab-dot-pulse 2s ease-in-out infinite;
        }

        /* ── CONTACT CARDS ── */
        .ab-cards {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 14px;
          opacity: 0; transform: translateY(20px);
          transition: opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s;
        }
        .ab-cards.on { opacity:1; transform:translateY(0); }
        @media(max-width:720px){ .ab-cards{grid-template-columns:1fr 1fr;} }
        @media(max-width:480px){ .ab-cards{grid-template-columns:1fr;} }

        .ab-card {
          background: #080808;
          border: 1px solid #181818;
          border-radius: 16px;
          padding: 18px 20px;
          transition: border-color 0.3s, transform 0.3s, background 0.3s;
          position: relative; overflow: hidden;
        }
        .ab-card::before {
          content: '';
          position: absolute; top:0; left:0; right:0; height:2px;
          background: linear-gradient(90deg, transparent, #8B5CF6, transparent);
          opacity: 0; transition: opacity 0.3s;
        }
        .ab-card:hover { border-color:rgba(139,92,246,0.3); background:#0c0c0c; transform:translateY(-4px); }
        .ab-card:hover::before { opacity:1; }

        .ab-card-hdr {
          display: flex; align-items: center; gap: 8px;
          font-size: 0.68rem; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.11em;
          color: #8B5CF6; margin-bottom: 10px;
        }
        .ab-card-ico {
          width: 26px; height: 26px; border-radius: 8px;
          background: rgba(139,92,246,0.1);
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .ab-card-val {
          font-size: 0.9rem; color: #cbd5e1; line-height: 1.65;
          text-decoration: none; display: block; white-space: pre-line;
        }
        a.ab-card-val:hover { color: #a78bfa; }

        .ab-tag-pill {
          display: inline-block;
          font-size: 0.71rem; font-weight: 600;
          padding: 4px 10px;
          background: rgba(139,92,246,0.1);
          color: #a78bfa;
          border: 1px solid rgba(139,92,246,0.2);
          border-radius: 100px;
          margin: 2px 4px 2px 0;
        }
      `}</style>

      <section className="ab-root" id="about" ref={ref}>
        <div className="ab-grid" aria-hidden="true" />
        <div className="ab-blob ab-blob-1" />
        <div className="ab-blob ab-blob-2" />

        <div className="ab-inner">

          {/* Eyebrow */}
          <div className={`ab-eyebrow ${visible ? "on" : ""}`}>
            <span className="ab-eyebrow-line" />
            Who I am
          </div>

          {/* Main two-col grid */}
          <div className="ab-main">

            {/* ── Text ── */}
            <div className={`ab-text ${visible ? "on" : ""}`}>
               <h2 className="sk-title">About <span className="accent">Me.</span></h2>
              <p className="ab-p">
                I'm a passionate <strong>fullstack developer</strong> based in Dubai, specializing in crafting
                modern web applications that blend aesthetics with raw performance.
              </p>
              <p className="ab-p">
                With a Bachelor in IT system and project management, my approach is simple:{" "}
                <strong>clean architecture</strong>, scalable systems, and an obsessive attention to design detail —
                because great products live at the intersection of engineering and art.
              </p>

              {/* Mini stats */}
              <div className="ab-stats">
                <div className="ab-stat">
                  <span className="ab-stat-num">1+</span>
                  <span className="ab-stat-lbl">Year XP</span>
                </div>
                <div className="ab-stat">
                  <span className="ab-stat-num">3+</span>
                  <span className="ab-stat-lbl">Projects</span>
                </div>
                <div className="ab-stat">
                  <span className="ab-stat-num">2</span>
                  <span className="ab-stat-lbl">Languages</span>
                </div>
              </div>
            </div>

            {/* ── Photo col ── */}
            <div className={`ab-photo-col ${visible ? "on" : ""}`}>
              <div className="ab-photo-wrap">

                {/* Spinning ring + planets */}
                <div className="ab-spin-ring" aria-hidden="true" />
                <div
                  className="ab-planet"
                  style={{ "--r": "155px", "--dur": "9s", "--delay": "0s" } as React.CSSProperties}
                  aria-hidden="true"
                >⚛️</div>
                <div
                  className="ab-planet"
                  style={{ "--r": "155px", "--dur": "13s", "--delay": "-4.5s" } as React.CSSProperties}
                  aria-hidden="true"
                >🎨</div>
                <div
                  className="ab-planet"
                  style={{ "--r": "155px", "--dur": "11s", "--delay": "-8s" } as React.CSSProperties}
                  aria-hidden="true"
                >🛠</div>

                {/* Corner accents */}
                <span className="ab-corner ab-corner-tl" aria-hidden="true" />
                <span className="ab-corner ab-corner-tr" aria-hidden="true" />
                <span className="ab-corner ab-corner-bl" aria-hidden="true" />
                <span className="ab-corner ab-corner-br" aria-hidden="true" />

                {/* Photo frame */}
                <div className="ab-photo-frame">
                  <img
                    src="/noe.jpeg"
                    alt="Paha Noemie Carole — Fullstack Developer"
                    loading="lazy"
                  />
                  <div className="ab-photo-overlay" aria-hidden="true" />

                  {/* Name tag overlay */}
                  <div className="ab-name-tag">
                    <div className="ab-name-tag-inner">
                      <div className="ab-name-tag-name">Paha Noémie Carole</div>
                      <div className="ab-name-tag-role">Fullstack Developer · Dubai</div>
                    </div>
                    <div className="ab-status-dot" title="Available for work" />
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* ── Contact cards ── */}
          <div className={`ab-cards ${visible ? "on" : ""}`}>
            {contactCards.map(({ icon: Icon, label, value, href, tags, bold }) => (
              <div key={label} className="ab-card">
                <div className="ab-card-hdr">
                  <span className="ab-card-ico"><Icon size={13} color="#8B5CF6" /></span>
                  {label}
                </div>
                {tags ? (
                  <div>{tags.map(t => <span key={t} className="ab-tag-pill">{t}</span>)}</div>
                ) : bold ? (
                  <span className="ab-card-val" style={{ fontWeight: 700, color: "#fff", fontSize: "1rem" }}>{bold}</span>
                ) : href ? (
                  <a href={href} className="ab-card-val">{value}</a>
                ) : (
                  <span className="ab-card-val">{value}</span>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default AboutSection;