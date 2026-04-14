import React, { useEffect, useRef, useState } from "react";
import { MapPin, ArrowUpRight } from "lucide-react";

const experiences = [
  {
    company: "National Public Health Laboratory (LNSP)",
    role: "Academic Internship",
    period: "Nov 2024 – Mar 2025",
    location: "Bd de Marseille, Abidjan",
    desc: "Participated in maintenance of internal web applications, provided technical support, and contributed to the digitalization of the sample management process.",
    skills: ["Web Maintenance", "Technical Support", "Digitalization"],
  },
  {
    company: "Acameleo Marcory",
    role: "Graphic Design Assistant",
    period: "Jul 2023 – Sep 2023",
    location: "Abidjan, Côte d'Ivoire",
    desc: "Designed promotional visuals and created mock-ups for social media. Contributed to the visual identity of client projects using Photoshop and Illustrator.",
    skills: ["Photoshop", "Illustrator", "Canva", "Visual Identity"],
  },
];

type Exp = { company: string; role: string; period: string; location: string; desc: string; skills: string[] };
const ExperienceItem = ({ exp, index }: { exp: Exp; index: number }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(e.target); } },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="exp-item"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : "translateX(-18px)",
        transition: `opacity 0.7s ease ${index * 0.15}s, transform 0.7s ease ${index * 0.15}s`,
      }}
    >
      {/* Timeline node */}
      <div className="exp-node">
        <div className="exp-node-inner" />
      </div>

      {/* Card */}
      <div className="exp-card">

        {/* Top row */}
        <div className="exp-top">
          <div>
            <span className="exp-period">{exp.period}</span>
            <h3 className="exp-role">{exp.role}</h3>
          </div>
          <a href="#" className="exp-link-btn" aria-label="Voir le projet">
            <ArrowUpRight size={15} />
          </a>
        </div>

        {/* Company + location */}
        <div className="exp-meta">
          <span className="exp-company">{exp.company}</span>
          <span className="exp-sep" aria-hidden="true">·</span>
          <span className="exp-location">
            <MapPin size={11} style={{ marginRight: 4, flexShrink: 0 }} />
            {exp.location}
          </span>
        </div>

        {/* Description */}
        <p className="exp-desc">{exp.desc}</p>

        {/* Skills */}
        <div className="exp-tags">
          {exp.skills.map((s: string) => (
            <span key={s} className="exp-tag">{s}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const headerRef = useRef(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setHeaderVisible(true); obs.unobserve(e.target); } },
      { threshold: 0.1 }
    );
    if (headerRef.current) obs.observe(headerRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');

        @keyframes ex-node-pulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(139,92,246,0.5); }
          50%      { box-shadow: 0 0 0 6px rgba(139,92,246,0); }
        }
        @keyframes ex-line-grow {
          from { transform: scaleY(0); }
          to   { transform: scaleY(1); }
        }
        @keyframes ex-shimmer {
          0%  { background-position: 200% center; }
          100%{ background-position: -200% center; }
        }

        /* ── Root ── */
        #experience {
          font-family: '', sans-serif;
          background: #000;
          color: #fff;
          padding: 110px 24px 120px;
          position: relative;
          overflow: hidden;
        }

        #experience::before {
          content: '';
          position: absolute; top: -120px; right: -100px;
          width: 900px; height: 500px; border-radius: 50%;
          background: radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%);
          pointer-events: none;
        }
        #experience::after {
          content: '';
          position: absolute; bottom: -80px; left: -60px;
          width: 340px; height: 340px; border-radius: 50%;
          background: radial-gradient(circle, rgba(96,165,250,0.04) 0%, transparent 70%);
          pointer-events: none;
        }

        .ex-grid {
          position: absolute; inset: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(139,92,246,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139,92,246,0.025) 1px, transparent 1px);
          background-size: 64px 64px;
        }

        .ex-inner { max-width: 1100px; margin: 0 auto; position: relative; }

        /* ── Header ── */
        .ex-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 0.72rem; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.13em;
          color: #8B5CF6; margin-bottom: 16px;
          opacity: 0; transform: translateY(12px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .ex-eyebrow.on { opacity: 1; transform: translateY(0); }
        .ex-eyebrow-line { width: 28px; height: 2px; background: #8B5CF6; border-radius: 1px; flex-shrink: 0; }

        .ex-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.4rem, 6vw, 4rem);
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 1.05;
          margin-bottom: 64px;
          opacity: 0; transform: translateY(18px);
          transition: opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s;
        }
        .ex-title.on { opacity: 1; transform: translateY(0); }
        .ex-title .dot {
          background: linear-gradient(90deg, #8B5CF6 0%, #a78bfa 50%, #8B5CF6 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: ex-shimmer 4s linear infinite;
        }

        /* ── Timeline ── */
        .ex-timeline {
          position: relative;
          padding-left: 48px;
        }

        .ex-line {
          position: absolute;
          left: 7px; top: 8px; bottom: 8px;
          width: 1px;
          background: linear-gradient(
            to bottom,
            #8B5CF6 0%,
            rgba(139,92,246,0.3) 60%,
            rgba(139,92,246,0.05) 100%
          );
          transform-origin: top;
          animation: ex-line-grow 1.2s cubic-bezier(0.4,0,0.2,1) 0.3s both;
        }

        /* ── Item ── */
        .exp-item {
          position: relative;
          margin-bottom: 52px;
        }
        .exp-item:last-child { margin-bottom: 0; }

        /* Node */
        .exp-node {
          position: absolute;
          left: -48px; top: 20px;
          width: 16px; height: 16px;
          border-radius: 50%;
          background: #000;
          border: 2px solid #8B5CF6;
          z-index: 2;
          display: flex; align-items: center; justify-content: center;
          animation: ex-node-pulse 2.4s ease-in-out infinite;
        }
        .exp-node-inner {
          width: 6px; height: 6px; border-radius: 50%;
          background: #8B5CF6;
        }

        /* ── Card ── */
        .exp-card {
          background: #080808;
          border: 1px solid #161616;
          border-radius: 20px;
          padding: 28px 28px 24px;
          position: relative; overflow: hidden;
          transition: border-color 0.3s ease, transform 0.3s ease, background 0.3s ease;
        }
        .exp-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(139,92,246,0.5), transparent);
          opacity: 0; transition: opacity 0.3s ease;
        }
        .exp-card:hover {
          border-color: rgba(139,92,246,0.28);
          background: #0c0c0c;
          transform: translateX(4px);
        }
        .exp-card:hover::before { opacity: 1; }

        /* Top row */
        .exp-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 10px;
        }

        .exp-period {
          font-size: 0.72rem; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.12em;
          color: #8B5CF6; margin-bottom: 6px;
          display: block;
        }

        .exp-role {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.3rem, 3vw, 1.65rem);
          font-weight: 800;
          color: #f8fafc;
          letter-spacing: -0.03em;
          line-height: 1.15;
        }

        .exp-link-btn {
          flex-shrink: 0;
          width: 36px; height: 36px;
          border-radius: 10px;
          border: 1px solid #222;
          background: #0a0a0a;
          display: flex; align-items: center; justify-content: center;
          color: #475569; text-decoration: none;
          transition: all 0.25s cubic-bezier(0.34,1.56,0.64,1);
        }
        .exp-link-btn:hover {
          border-color: rgba(139,92,246,0.4);
          color: #a78bfa;
          transform: translateY(-2px) rotate(-5deg) scale(1.08);
          background: rgba(139,92,246,0.08);
        }

        .exp-meta {
          display: flex; align-items: center; gap: 10px;
          flex-wrap: wrap; margin-bottom: 16px;
        }
        .exp-company {
          font-size: 0.95rem; font-weight: 500; color: #94a3b8;
        }
        .exp-sep { color: #2d2d2d; }
        .exp-location {
          display: flex; align-items: center;
          font-size: 0.8rem; color: #3d4f63;
        }

        .exp-desc {
          font-size: 0.97rem; line-height: 1.82;
          color: #475569; margin-bottom: 20px;
          max-width: 680px;
        }

        .exp-tags { display: flex; flex-wrap: wrap; gap: 8px; }
        .exp-tag {
          font-size: 0.72rem; font-weight: 600;
          color: #8b97aa;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          padding: 5px 14px; border-radius: 100px;
          transition: all 0.25s ease;
        }
        .exp-tag:hover {
          border-color: rgba(139,92,246,0.4);
          color: #c4b5fd;
          background: rgba(139,92,246,0.07);
        }

        @media (max-width: 640px) {
          .ex-timeline { padding-left: 36px; }
          .ex-line { left: 5px; }
          .exp-node { left: -37px; }
          .exp-card { padding: 22px 18px 18px; }
          .exp-role { font-size: 1.25rem; }
        }
      `}</style>

      <section id="experience">
        <div className="ex-grid" aria-hidden="true" />

        <div className="ex-inner">

          <div ref={headerRef}>
            <div className={`ex-eyebrow ${headerVisible ? "on" : ""}`}>
              <span className="ex-eyebrow-line" />
              Career path
            </div>
          <h2 className="sk-title">Experience<span className="accent">.</span></h2>
          </div>

          <div className="ex-timeline">
            <div className="ex-line" aria-hidden="true" />
            {experiences.map((exp, i) => (
              <ExperienceItem key={i} exp={exp} index={i} />
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default Experience;