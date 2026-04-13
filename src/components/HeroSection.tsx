import { Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;500;600;700&display=swap');

        .hero-root {
          font-family: 'Rajdhani', sans-serif;
          background: #02040f;
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        /* ── Grid background ── */
        .hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(0,245,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,245,255,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse at center, black 30%, transparent 80%);
        }

        /* ── Ambient glows ── */
        .glow-left {
          position: absolute;
          width: 600px; height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0,245,255,0.07) 0%, transparent 70%);
          top: -100px; left: -150px;
          pointer-events: none;
        }

        .glow-right {
          position: absolute;
          width: 700px; height: 700px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(123,47,255,0.08) 0%, transparent 70%);
          bottom: -200px; right: -200px;
          pointer-events: none;
        }

        /* ── Scanlines overlay ── */
        .hero-scanlines {
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0,0,0,0.08) 2px,
            rgba(0,0,0,0.08) 4px
          );
          pointer-events: none;
        }

        /* ── Layout ── */
        .hero-inner {
          position: relative;
          z-index: 10;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          padding-top: 100px;
        }

        @media (max-width: 900px) {
          .hero-inner {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 3rem;
          }
          .hero-photo-col { order: -1; }
          .hero-social { justify-content: center; }
          .hero-tag { margin: 0 auto 1.5rem; }
          .hero-btns { justify-content: center; }
        }

        /* ── Text side ── */
        .hero-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Orbitron', monospace;
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #00f5ff;
          padding: 6px 14px;
          border: 1px solid rgba(0,245,255,0.3);
          clip-path: polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%);
          background: rgba(0,245,255,0.05);
          margin-bottom: 1.5rem;
          animation: fadeSlideUp 0.8s ease forwards;
        }

        .tag-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #00f5ff;
          box-shadow: 0 0 8px #00f5ff;
          animation: blink 1.5s ease-in-out infinite;
        }

        @keyframes blink {
          0%,100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        .hero-name {
          font-family: 'Orbitron', monospace;
          font-size: clamp(2.2rem, 5vw, 3.8rem);
          font-weight: 900;
          line-height: 1.1;
          letter-spacing: -0.01em;
          margin-bottom: 0.5rem;
          animation: fadeSlideUp 0.8s 0.15s ease both;
        }

        .hero-name-first {
          color: #e8f4ff;
          display: block;
        }

        .hero-name-last {
          display: block;
          background: linear-gradient(135deg, #00f5ff 0%, #0080ff 50%, #7b2fff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-title-line {
          font-family: 'Rajdhani', sans-serif;
          font-size: clamp(1rem, 2vw, 1.3rem);
          font-weight: 600;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(0,245,255,0.6);
          margin-bottom: 1.5rem;
          animation: fadeSlideUp 0.8s 0.25s ease both;
        }

        .hero-desc {
          font-size: 1.05rem;
          font-weight: 400;
          line-height: 1.8;
          color: rgba(180,210,255,0.55);
          max-width: 480px;
          margin-bottom: 2.5rem;
          animation: fadeSlideUp 0.8s 0.35s ease both;
        }

        @media (max-width: 900px) {
          .hero-desc { margin: 0 auto 2.5rem; }
        }

        /* ── Buttons ── */
        .hero-btns {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 2.5rem;
          animation: fadeSlideUp 0.8s 0.45s ease both;
        }

        .btn-primary {
          font-family: 'Orbitron', monospace;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #02040f;
          background: linear-gradient(135deg, #00f5ff, #0080ff);
          padding: 13px 28px;
          text-decoration: none;
          clip-path: polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%);
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .btn-primary::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #7b2fff, #00f5ff);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .btn-primary:hover::after { opacity: 1; }
        .btn-primary span { position: relative; z-index: 1; }

        .btn-secondary {
          font-family: 'Orbitron', monospace;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #00f5ff;
          border: 1px solid rgba(0,245,255,0.35);
          padding: 12px 28px;
          text-decoration: none;
          clip-path: polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%);
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 6px;
          background: transparent;
        }

        .btn-secondary:hover {
          background: rgba(0,245,255,0.07);
          border-color: rgba(0,245,255,0.7);
          box-shadow: 0 0 20px rgba(0,245,255,0.15);
        }

        /* ── Social ── */
        .hero-social {
          display: flex;
          align-items: center;
          gap: 12px;
          animation: fadeSlideUp 0.8s 0.55s ease both;
        }

        .social-label {
          font-family: 'Orbitron', monospace;
          font-size: 0.5rem;
          letter-spacing: 0.2em;
          color: rgba(0,245,255,0.3);
          text-transform: uppercase;
        }

        .social-divider {
          width: 30px;
          height: 1px;
          background: rgba(0,245,255,0.2);
        }

        .social-link {
          width: 38px; height: 38px;
          border: 1px solid rgba(0,245,255,0.2);
          display: flex; align-items: center; justify-content: center;
          color: rgba(0,245,255,0.5);
          text-decoration: none;
          transition: all 0.3s ease;
          clip-path: polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%);
          position: relative;
          overflow: hidden;
        }

        .social-link::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(0,245,255,0.08);
          opacity: 0;
          transition: opacity 0.3s;
        }

        .social-link:hover { color: #00f5ff; border-color: rgba(0,245,255,0.6); }
        .social-link:hover::before { opacity: 1; }

        /* ── PHOTO COLUMN ── */
        .hero-photo-col {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          animation: fadeSlideUp 0.8s 0.2s ease both;
        }

        /* Outer rotating ring */
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes spinReverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }

        .ring-outer {
          position: absolute;
          width: 420px; height: 420px;
          border-radius: 50%;
          border: 1px solid rgba(0,245,255,0.12);
          animation: spinSlow 20s linear infinite;
        }

        .ring-outer::before {
          content: '';
          position: absolute;
          top: -3px; left: 50%;
          transform: translateX(-50%);
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #00f5ff;
          box-shadow: 0 0 10px #00f5ff, 0 0 20px #00f5ff;
        }

        .ring-outer::after {
          content: '';
          position: absolute;
          bottom: -3px; left: 50%;
          transform: translateX(-50%);
          width: 4px; height: 4px;
          border-radius: 50%;
          background: #7b2fff;
          box-shadow: 0 0 8px #7b2fff;
        }

        .ring-mid {
          position: absolute;
          width: 360px; height: 360px;
          border-radius: 50%;
          border: 1px dashed rgba(0,245,255,0.08);
          animation: spinReverse 14s linear infinite;
        }

        /* Hex clip photo frame */
        .photo-frame-wrap {
          position: relative;
          width: 300px;
          height: 300px;
          z-index: 2;
        }

        @media (max-width: 900px) {
          .ring-outer { width: 320px; height: 320px; }
          .ring-mid { width: 270px; height: 270px; }
          .photo-frame-wrap { width: 230px; height: 230px; }
        }

        .photo-glow-base {
          position: absolute;
          inset: -20px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0,245,255,0.15) 0%, rgba(123,47,255,0.1) 50%, transparent 75%);
          animation: glowPulse 3s ease-in-out infinite;
        }

        @keyframes glowPulse {
          0%,100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }

        /* Hexagonal clip */
        .photo-hex {
          width: 100%;
          height: 100%;
          clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, rgba(0,245,255,0.2), rgba(123,47,255,0.2));
        }

        .photo-hex img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          display: block;
          filter: saturate(1.1) contrast(1.05);
          transition: transform 0.6s ease;
        }

        .photo-frame-wrap:hover .photo-hex img {
          transform: scale(1.05);
        }

        /* Hex border overlay */
        .photo-hex-border {
          position: absolute;
          inset: -2px;
          clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
          background: linear-gradient(135deg, #00f5ff, #0080ff, #7b2fff, #00f5ff);
          z-index: -1;
          animation: borderRotate 4s linear infinite;
          background-size: 300% 300%;
        }

        @keyframes borderRotate {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Corner data tags */
        .photo-data-tag {
          position: absolute;
          font-family: 'Orbitron', monospace;
          font-size: 0.5rem;
          letter-spacing: 0.15em;
          color: rgba(0,245,255,0.6);
          display: flex;
          align-items: center;
          gap: 5px;
          white-space: nowrap;
        }

        .photo-data-tag .tag-line {
          height: 1px;
          background: rgba(0,245,255,0.3);
        }

        .tag-top-right {
          top: -12px; right: -60px;
        }

        .tag-top-right .tag-line { width: 50px; }

        .tag-bottom-left {
          bottom: -12px; left: -60px;
        }

        .tag-bottom-left .tag-line { width: 50px; }

        @media (max-width: 900px) {
          .photo-data-tag { display: none; }
        }

        /* Status card floating */
        .status-card {
          position: absolute;
          bottom: -16px;
          right: -20px;
          background: rgba(2,4,20,0.9);
          border: 1px solid rgba(0,245,255,0.2);
          padding: 10px 16px;
          display: flex;
          align-items: center;
          gap: 10px;
          z-index: 10;
          animation: floatY 4s ease-in-out infinite;
          clip-path: polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%);
        }

        .status-card-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #00ff88;
          box-shadow: 0 0 8px #00ff88;
          animation: blink 1.5s ease-in-out infinite;
        }

        .status-card-text {
          font-family: 'Orbitron', monospace;
          font-size: 0.55rem;
          letter-spacing: 0.1em;
          color: rgba(180,255,220,0.8);
        }

        @keyframes floatY {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        /* XP badge */
        .xp-badge {
          position: absolute;
          top: -16px;
          left: -24px;
          background: linear-gradient(135deg, rgba(0,245,255,0.1), rgba(123,47,255,0.1));
          border: 1px solid rgba(123,47,255,0.4);
          padding: 10px 14px;
          z-index: 10;
          animation: floatY 4s 2s ease-in-out infinite;
          clip-path: polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%);
        }

        .xp-num {
          font-family: 'Orbitron', monospace;
          font-size: 1.1rem;
          font-weight: 900;
          color: #7b2fff;
          line-height: 1;
        }

        .xp-label {
          font-family: 'Rajdhani', sans-serif;
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          color: rgba(180,150,255,0.6);
          text-transform: uppercase;
        }

        /* ── Scroll indicator ── */
        .scroll-hint {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          text-decoration: none;
          color: rgba(0,245,255,0.4);
          transition: color 0.3s;
        }

        .scroll-hint:hover { color: rgba(0,245,255,0.8); }

        .scroll-line {
          width: 1px;
          height: 40px;
          background: linear-gradient(to bottom, rgba(0,245,255,0.4), transparent);
          animation: scrollAnim 2s ease-in-out infinite;
        }

        @keyframes scrollAnim {
          0% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          51% { transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }

        .scroll-label {
          font-family: 'Orbitron', monospace;
          font-size: 0.45rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          writing-mode: vertical-rl;
        }

        /* ── Fade animations ── */
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <section id="hero" className="hero-root">
        <div className="hero-grid" />
        <div className="glow-left" />
        <div className="glow-right" />
        <div className="hero-scanlines" />

        <div className="hero-inner">

          {/* ── TEXT COLUMN ── */}
          <div>
            <div className="hero-tag">
              <div className="tag-dot" />
              Fullstack Developer
            </div>

            <h1 className="hero-name">
              <span className="hero-name-first">Paha Noemie</span>
              <span className="hero-name-last">Carole</span>
            </h1>

            <p className="hero-title-line">Building Digital Futures</p>

            <p className="hero-desc">
              Passionate about code and design, I transform your ideas into innovative and 
              high-performance digital experiences — from pixel-perfect interfaces to robust backends.
            </p>

            <div className="hero-btns">
              <a href="#projects" className="btn-primary">
                <span>View Projects</span>
              </a>
              <a href="#contact" className="btn-secondary">
                <Mail size={13} />
                Contact Me
              </a>
            </div>

            <div className="hero-social">
              <span className="social-label">Follow</span>
              <div className="social-divider" />
              {[
                {
                  href: "#",
                  label: "GitHub",
                  svg: (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>
                  ),
                },
                {
                  href: "#",
                  label: "LinkedIn",
                  svg: (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  ),
                },
                {
                  href: "mailto:nohemiepaha@gmail.com",
                  label: "Email",
                  svg: <Mail size={15} />,
                },
              ].map(({ href, label, svg }) => (
                <a key={label} href={href} className="social-link" aria-label={label}>
                  {svg}
                </a>
              ))}
            </div>
          </div>

          {/* ── PHOTO COLUMN ── */}
          <div className="hero-photo-col">
            {/* Rotating rings */}
            <div className="ring-outer" />
            <div className="ring-mid" />

            {/* Photo frame */}
            <div className="photo-frame-wrap">
              <div className="photo-glow-base" />

              {/* Hex border */}
              <div className="photo-hex-border" />

              {/* Hexagonal photo */}
              <div className="photo-hex">
               <img src="/noe.jpg" alt="Paha Noemie Carole" />
                <div style={{
                  width: "100%",
                  height: "100%",
                  background: "linear-gradient(135deg, rgba(0,245,255,0.08) 0%, rgba(0,128,255,0.12) 40%, rgba(123,47,255,0.1) 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  gap: "8px",
                }}>
                  {/* Placeholder avatar */}
                  <div style={{
                    width: 80, height: 80, borderRadius: "50%",
                    background: "linear-gradient(135deg, rgba(0,245,255,0.3), rgba(123,47,255,0.3))",
                    border: "1px solid rgba(0,245,255,0.4)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <span style={{
                      fontFamily: "'Orbitron', monospace",
                      fontWeight: 900, fontSize: "1.4rem",
                      background: "linear-gradient(135deg, #00f5ff, #7b2fff)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}>PNC</span>
                  </div>
                  <span style={{
                    fontFamily: "'Orbitron', monospace",
                    fontSize: "0.45rem", letterSpacing: "0.2em",
                    color: "rgba(0,245,255,0.5)", textTransform: "uppercase",
                  }}>
                    Add your photo here
                  </span>
                </div>
              </div>

              {/* Data tags */}
              <div className="photo-data-tag tag-top-right">
                <div className="tag-line" />
                IDENTITY_VERIFIED
              </div>
              <div className="photo-data-tag tag-bottom-left">
                PORTFOLIO_2025
                <div className="tag-line" />
              </div>

              {/* Floating status card */}
              <div className="status-card">
                <div className="status-card-dot" />
                <div className="status-card-text">Open to work</div>
              </div>

              {/* XP Badge */}
              <div className="xp-badge">
                <div className="xp-num">1+</div>
                <div className="xp-label">Yrs Exp</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <a href="#about" className="scroll-hint">
          <div className="scroll-line" />
          <span className="scroll-label">Scroll</span>
        </a>
      </section>
    </>
  );
};

export default HeroSection;