import { GitFork, Link, Mail, ArrowUp } from "lucide-react";

const socialLinks = [
  { icon: GitFork, href: "#", label: "GitFork" },
  { icon: Link, href: "#", label: "Link" },
  { icon: Mail, href: "mailto:nohemiepaha@gmail.com", label: "Email" },
];

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
];

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@400;500;600&display=swap');

        .footer-root {
          font-family: 'Rajdhani', sans-serif;
          background: #02040f;
          position: relative;
          overflow: hidden;
        }

        /* Top scanning border */
        .footer-scan-border {
          position: relative;
          height: 1px;
          background: rgba(0,245,255,0.08);
          overflow: hidden;
        }

        @keyframes scanBorder {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100vw); }
        }

        .footer-scan-border::after {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 200px; height: 1px;
          background: linear-gradient(90deg, transparent, #00f5ff, transparent);
          animation: scanBorder 5s linear infinite;
        }

        /* Grid bg */
        .footer-root::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(0,245,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,245,255,0.02) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }

        /* Glow */
        .footer-glow {
          position: absolute;
          width: 600px; height: 300px;
          border-radius: 50%;
          background: radial-gradient(ellipse, rgba(0,245,255,0.04) 0%, transparent 70%);
          bottom: -100px; left: 50%;
          transform: translateX(-50%);
          pointer-events: none;
        }

        .footer-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 3.5rem 1.5rem 2rem;
          position: relative; z-index: 2;
        }

        /* Top row */
        .footer-top {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: start;
          gap: 3rem;
          padding-bottom: 2.5rem;
          border-bottom: 1px solid rgba(0,245,255,0.06);
          margin-bottom: 2rem;
        }

        @media (max-width: 768px) {
          .footer-top {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2rem;
          }
          .footer-nav { display: none; }
          .footer-right { align-items: center; }
        }

        /* Brand block */
        .footer-brand-logo {
          font-family: 'Orbitron', monospace;
          font-size: 1.1rem;
          font-weight: 900;
          letter-spacing: 0.12em;
          background: linear-gradient(135deg, #00f5ff 0%, #0080ff 50%, #7b2fff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 0.75rem;
          text-decoration: none;
        }

        .brand-status {
          width: 5px; height: 5px; border-radius: 50%;
          background: #00f5ff;
          box-shadow: 0 0 8px #00f5ff;
          animation: blink 2s ease-in-out infinite;
          flex-shrink: 0;
        }

        .footer-brand-tagline {
          font-size: 0.85rem;
          font-weight: 400;
          color: rgba(180,210,255,0.4);
          line-height: 1.7;
          max-width: 260px;
          margin-bottom: 1.5rem;
        }

        /* Social links */
        .footer-socials {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .footer-social-link {
          width: 34px; height: 34px;
          border: 1px solid rgba(0,245,255,0.15);
          display: flex; align-items: center; justify-content: center;
          color: rgba(0,245,255,0.45);
          text-decoration: none;
          clip-path: polygon(5px 0%, 100% 0%, calc(100% - 5px) 100%, 0% 100%);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .footer-social-link::before {
          content: '';
          position: absolute; inset: 0;
          background: rgba(0,245,255,0.07);
          opacity: 0;
          transition: opacity 0.3s;
        }

        .footer-social-link:hover {
          color: #00f5ff;
          border-color: rgba(0,245,255,0.5);
          box-shadow: 0 0 12px rgba(0,245,255,0.15);
        }

        .footer-social-link:hover::before { opacity: 1; }

        /* Nav links (center) */
        .footer-nav {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }

        .footer-nav-label {
          font-family: 'Orbitron', monospace;
          font-size: 0.5rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(0,245,255,0.3);
          margin-bottom: 6px;
        }

        .footer-nav-link {
          font-family: 'Rajdhani', sans-serif;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(180,210,255,0.4);
          text-decoration: none;
          transition: color 0.3s ease;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .footer-nav-link::before {
          content: '';
          width: 0; height: 1px;
          background: #00f5ff;
          transition: width 0.3s ease;
        }

        .footer-nav-link:hover {
          color: #00f5ff;
        }

        .footer-nav-link:hover::before { width: 12px; }

        /* Right: contact block */
        .footer-right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 10px;
        }

        .footer-contact-label {
          font-family: 'Orbitron', monospace;
          font-size: 0.5rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(0,245,255,0.3);
          margin-bottom: 4px;
        }

        .footer-contact-item {
          font-family: 'Rajdhani', sans-serif;
          font-size: 0.82rem;
          font-weight: 500;
          color: rgba(180,210,255,0.45);
          text-decoration: none;
          transition: color 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
          text-align: right;
        }

        .footer-contact-item:hover { color: #00f5ff; }

        .contact-dot {
          width: 4px; height: 4px; border-radius: 50%;
          background: rgba(0,245,255,0.3);
          flex-shrink: 0;
        }

        /* Bottom row */
        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .footer-copy {
          font-family: 'Orbitron', monospace;
          font-size: 0.5rem;
          letter-spacing: 0.15em;
          color: rgba(180,210,255,0.2);
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .copy-name {
          color: rgba(0,245,255,0.4);
        }

        .copy-divider {
          width: 1px; height: 10px;
          background: rgba(0,245,255,0.1);
        }

        /* Back to top */
        .back-to-top {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: 'Orbitron', monospace;
          font-size: 0.5rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(0,245,255,0.35);
          background: none;
          border: 1px solid rgba(0,245,255,0.12);
          padding: 7px 14px;
          cursor: pointer;
          clip-path: polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%);
          transition: all 0.3s ease;
        }

        .back-to-top:hover {
          color: #00f5ff;
          border-color: rgba(0,245,255,0.4);
          background: rgba(0,245,255,0.05);
          box-shadow: 0 0 16px rgba(0,245,255,0.1);
        }

        .back-to-top:hover .btt-icon {
          transform: translateY(-2px);
        }

        .btt-icon {
          transition: transform 0.3s ease;
        }

        /* Status bar */
        .footer-status-bar {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 10px 0 0;
        }

        .status-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: 'Orbitron', monospace;
          font-size: 0.45rem;
          letter-spacing: 0.12em;
          color: rgba(0,245,255,0.25);
          text-transform: uppercase;
        }

        .status-item-dot {
          width: 4px; height: 4px; border-radius: 50%;
        }

        @keyframes blink {
          0%,100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        @media (max-width: 640px) {
          .footer-bottom { justify-content: center; flex-direction: column; text-align: center; }
          .footer-status-bar { justify-content: center; flex-wrap: wrap; }
        }
      `}</style>

      <footer className="footer-root">
        <div className="footer-scan-border" />
        <div className="footer-glow" />

        <div className="footer-inner">
          {/* Top grid */}
          <div className="footer-top">

            {/* Brand */}
            <div>
              <a href="#hero" className="footer-brand-logo">
                <div className="brand-status" />
                PAHA.DEV
              </a>
              <p className="footer-brand-tagline">
                Building high-performance digital experiences at the intersection of engineering and design.
              </p>
              <div className="footer-socials">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a key={label} href={href} className="footer-social-link" aria-label={label}>
                    <Icon size={14} />
                  </a>
                ))}
              </div>
            </div>

            {/* Nav */}
            <div className="footer-nav">
              <div className="footer-nav-label">Navigate</div>
              {navLinks.map(({ label, href }) => (
                <a key={href} href={href} className="footer-nav-link">{label}</a>
              ))}
            </div>

            {/* Contact info */}
            <div className="footer-right">
              <div className="footer-contact-label">Contact</div>
              <a href="mailto:nohemiepaha@gmail.com" className="footer-contact-item">
                <div className="contact-dot" />
                nohemiepaha@gmail.com
              </a>
              <a href="tel:+971542371689" className="footer-contact-item">
                <div className="contact-dot" />
                +971 542 371 689
              </a>
              <a href="https://wa.me/2250173551927" className="footer-contact-item">
                <div className="contact-dot" />
                WhatsApp: +225 0173 551 927
              </a>
            </div>
          </div>

          {/* Bottom row */}
          <div className="footer-bottom">
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <div className="footer-copy">
                <span>© 2026</span>
                <div className="copy-divider" />
                <span className="copy-name">Paha Noemie Carole</span>
                <div className="copy-divider" />
                <span>All rights reserved</span>
              </div>
              <div className="footer-status-bar">
                <div className="status-item">
                  <div className="status-item-dot" style={{ background: "#00ff88", boxShadow: "0 0 6px #00ff88", animation: "blink 2s ease-in-out infinite" }} />
                  System Online
                </div>
                <div className="status-item">
                  <div className="status-item-dot" style={{ background: "#00f5ff" }} />
                  Portfolio v2.0
                </div>
                <div className="status-item">
                  <div className="status-item-dot" style={{ background: "#7b2fff" }} />
                  React + Tailwind
                </div>
              </div>
            </div>

            <button className="back-to-top" onClick={scrollToTop}>
              <ArrowUp size={10} className="btt-icon" />
              Back to Top
            </button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;