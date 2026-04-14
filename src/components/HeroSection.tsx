// HeroSection.jsx
import React from "react";

const HeroSection = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        @keyframes hero-fade-up {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes hero-pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
        }
        @keyframes hero-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes hero-shimmer {
          0% { left: -60%; }
          100% { left: 120%; }
        }

        .hero-root {
          font-family: 'Plus Jakarta Sans', sans-serif;
          background: #000000;
          color: #ffffff;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 60px 24px 80px;
          position: relative;
          overflow: hidden;
        }

        .hero-glow {
          position: absolute;
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%);
          top: 35%; left: 50%; transform: translate(-50%, -50%);
          pointer-events: none;
        }
        .hero-glow-2 {
          position: absolute;
          width: 300px; height: 300px;
          background: radial-gradient(circle, rgba(167,139,250,0.06) 0%, transparent 70%);
          top: 75%; left: 15%;
          pointer-events: none;
        }

        .hero-grid-overlay {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(139,92,246,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139,92,246,0.04) 1px, transparent 1px);
          background-size: 50px 50px;
          pointer-events: none;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(139,92,246,0.08);
          border: 1px solid rgba(139,92,246,0.25);
          color: #a78bfa;
          padding: 7px 18px;
          border-radius: 100px;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 28px;
          animation: hero-fade-up 0.6s ease both;
          position: relative;
          overflow: hidden;
          z-index: 1;
        }
        .hero-badge::after {
          content: '';
          position: absolute;
          top: 0; left: -60%;
          width: 40%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(167,139,250,0.3), transparent);
          animation: hero-shimmer 3s ease-in-out infinite;
        }
        .hero-badge-dot {
          width: 6px; height: 6px;
          background: #a78bfa;
          border-radius: 50%;
          animation: hero-pulse 2s ease-in-out infinite;
          flex-shrink: 0;
        }

        .hero-title {
          font-size: clamp(2.4rem, 7vw, 4.8rem);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -0.03em;
          margin-bottom: 20px;
          animation: hero-fade-up 0.6s ease 0.1s both;
          position: relative;
          z-index: 1;
        }
        .hero-title .name {
          color: #8B5CF6;
          position: relative;
        }
        .hero-title .name::after {
          content: '';
          position: absolute;
          bottom: -4px; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, #8B5CF6, #A78BFA, transparent);
          border-radius: 2px;
        }

        .hero-role {
          font-size: clamp(1.2rem, 3vw, 2rem);
          font-weight: 700;
          color: #e2e8f0;
          margin-bottom: 8px;
          animation: hero-fade-up 0.6s ease 0.18s both;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          position: relative;
          z-index: 1;
        }
        .hero-cursor {
          display: inline-block;
          width: 3px; height: 1.2em;
          background: #8B5CF6;
          border-radius: 1px;
          animation: hero-blink 1s step-end infinite;
          vertical-align: middle;
        }

        .hero-desc {
          max-width: 540px;
          font-size: 1.05rem;
          line-height: 1.7;
          color: #64748b;
          margin: 0 auto 40px;
          animation: hero-fade-up 0.6s ease 0.26s both;
          position: relative;
          z-index: 1;
        }

        .hero-cta {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          justify-content: center;
          animation: hero-fade-up 0.6s ease 0.34s both;
          position: relative;
          z-index: 1;
        }

        .hero-btn-primary {
          background: #8B5CF6;
          color: #fff;
          padding: 14px 32px;
          border-radius: 12px;
          font-weight: 700;
          font-size: 0.92rem;
          text-decoration: none;
          position: relative;
          overflow: hidden;
          transition: transform 0.2s ease, box-shadow 0.3s ease;
          box-shadow: 0 10px 30px -8px rgba(139,92,246,0.5);
        }
        .hero-btn-primary::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%);
          transform: translateX(-100%);
          transition: transform 0.5s ease;
        }
        .hero-btn-primary:hover::after { transform: translateX(100%); }
        .hero-btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 40px -8px rgba(139,92,246,0.6);
        }

        .hero-btn-ghost {
          background: transparent;
          color: #fff;
          border: 1px solid #1e293b;
          padding: 14px 32px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 0.92rem;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .hero-btn-ghost:hover {
          border-color: #334155;
          background: rgba(255,255,255,0.04);
          transform: translateY(-2px);
        }

        .hero-stats {
          display: flex;
          gap: 52px;
          margin-top: 64px;
          padding-top: 48px;
          border-top: 1px solid rgba(255,255,255,0.06);
          animation: hero-fade-up 0.6s ease 0.44s both;
          position: relative;
          z-index: 1;
        }
        .hero-stat { text-align: center; }
        .hero-stat-num {
          font-size: 1.9rem;
          font-weight: 800;
          color: #fff;
          letter-spacing: -0.02em;
          line-height: 1;
        }
        .hero-stat-num span { color: #8B5CF6; }
        .hero-stat-label {
          font-size: 0.72rem;
          color: #475569;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-top: 6px;
        }
      `}</style>

      <section className="hero-root" id="hero">
        <div className="hero-glow" />
        <div className="hero-glow-2" />
        <div className="hero-grid-overlay" />

        <div className="hero-badge">
          <span className="hero-badge-dot" />
          Available for new projects
        </div>

        <h1 className="hero-title">
          Hey! I am <span className="name">Paha&nbsp;Noemie</span>
        </h1>

        <div className="hero-role">
          Full-Stack Developer <span className="hero-cursor" />
        </div>

        <p className="hero-desc">
          I craft beautiful, functional digital experiences that bring ideas to life.
          Specializing in modern web development and user-centered design.
        </p>

        <div className="hero-cta">
          <a href="#stack" className="hero-btn-primary">View My Stack ✦</a>
          <a href="#contact" className="hero-btn-ghost">Get in Touch →</a>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-num">1<span>+</span></div>
            <div className="hero-stat-label">Year XP</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-num">3<span>+</span></div>
            <div className="hero-stat-label">Projects</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-num">2</div>
            <div className="hero-stat-label">Languages</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;