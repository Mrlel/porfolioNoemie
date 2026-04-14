import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#hero");
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');

        :root {
          --violet:      #8B5CF6;
          --violet-dim:  rgba(139, 92, 246, 0.14);
          --violet-glow: rgba(139, 92, 246, 0.45);
          --glass-bg:    rgba(6, 6, 12, 0.78);
          --glass-border:rgba(255, 255, 255, 0.07);
          --text-muted:  #64748b;
          --text-bright: #f1f5f9;
          --font-display:'Syne', sans-serif;
          --font-body:   'DM Sans', sans-serif;
        }

        /* ── NAV ROOT ── */
        .paha-nav {
          font-family: var(--font-body);
          transition: padding 0.4s cubic-bezier(0.4, 0, 0.2, 1),
                      background 0.4s ease,
                      box-shadow 0.4s ease;
        }

        .paha-nav.scrolled {
          background: var(--glass-bg) !important;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--glass-border);
          box-shadow: 0 1px 40px rgba(0, 0, 0, 0.5);
          padding-top: 12px !important;
          padding-bottom: 12px !important;
        }

        /* Glowing top-edge line when scrolled */
        .paha-nav.scrolled::before {
          content: '';
          position: absolute;
          top: 0; left: 50%;
          transform: translateX(-50%);
          width: 40%;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--violet), transparent);
          opacity: 0.6;
        }

        /* ── LOGO ── */
        .paha-logo {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 1.22rem;
          color: #ffffff;
          text-decoration: none;
          letter-spacing: -0.03em;
          position: relative;
          display: inline-flex;
          align-items: center;
        }

        .paha-logo .dot {
          color: var(--violet);
          display: inline-block;
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .paha-logo:hover .dot {
          transform: rotate(90deg) scale(1.5);
        }

        /* Magnetic particles around logo */
        .logo-particles {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        .lp {
          position: absolute;
          top: 50%; left: 50%;
          width: 3px; height: 3px;
          margin: -1.5px 0 0 -1.5px;
          background: var(--violet);
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.35s ease, transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .paha-logo:hover .lp   { opacity: 0.65; }
        .paha-logo:hover .lp1  { transform: translate(-28px, -20px); }
        .paha-logo:hover .lp2  { transform: translate(4px, -30px); }
        .paha-logo:hover .lp3  { transform: translate(30px, -12px); }
        .paha-logo:hover .lp4  { transform: translate(26px, 16px); }
        .paha-logo:hover .lp5  { transform: translate(-4px, 28px); }
        .paha-logo:hover .lp6  { transform: translate(-30px, 8px); }

        /* ── NAV LINK ── */
        .paha-link {
          position: relative;
          font-size: 0.875rem;
          font-weight: 400;
          color: var(--text-muted);
          text-decoration: none;
          padding: 8px 16px;
          border-radius: 100px;
          transition: color 0.25s ease;
          overflow: hidden;
          white-space: nowrap;
        }

        /* Pill background hover */
        .paha-link::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 100px;
          background: var(--violet-dim);
          opacity: 0;
          transform: scale(0.75);
          transition: opacity 0.3s ease,
                      transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .paha-link:hover { color: var(--text-bright); }
        .paha-link:hover::before { opacity: 1; transform: scale(1); }

        /* Active state */
        .paha-link.active { color: #ffffff; }
        .paha-link.active::before { opacity: 1; transform: scale(1); }

        /* Pulsing dot beneath active link */
        .paha-link.active::after {
          content: '';
          position: absolute;
          bottom: 5px;
          left: 50%;
          transform: translateX(-50%);
          width: 4px; height: 4px;
          border-radius: 50%;
          background: var(--violet);
          box-shadow: 0 0 8px var(--violet-glow);
          animation: dotPulse 2s ease-in-out infinite;
        }
        @keyframes dotPulse {
          0%, 100% { box-shadow: 0 0 8px var(--violet-glow); }
          50%       { box-shadow: 0 0 18px var(--violet-glow), 0 0 36px var(--violet-glow); }
        }

        /* ── CTA BUTTON ── */
        .paha-cta {
          position: relative;
          overflow: hidden;
          background: #ffffff;
          color: #000000;
          padding: 9px 22px;
          border-radius: 100px;
          font-family: var(--font-display);
          font-size: 0.83rem;
          font-weight: 700;
          text-decoration: none;
          letter-spacing: 0.01em;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .paha-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(255, 255, 255, 0.18);
        }

        /* Shimmer sweep */
        .paha-cta::after {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 55%; height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.45),
            transparent
          );
          transition: left 0.55s ease;
        }
        .paha-cta:hover::after { left: 160%; }

        /* ── MOBILE MENU OVERLAY ── */
        .paha-mobile-overlay {
          position: fixed;
          inset: 0;
          z-index: 40;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0;
          background: #05050d;

          /* Fade + slide-in */
          animation: mobileIn 0.35s cubic-bezier(0.4, 0, 0.2, 1) both;
        }
        @keyframes mobileIn {
          from { opacity: 0; transform: translateY(-12px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Decorative accent line in overlay */
        .paha-mobile-overlay::before {
          content: '';
          position: absolute;
          top: 0; left: 50%;
          transform: translateX(-50%);
          width: 50%; height: 1px;
          background: linear-gradient(90deg, transparent, var(--violet), transparent);
        }

        .paha-mobile-link {
          font-family: var(--font-display);
          font-size: clamp(2rem, 8vw, 2.6rem);
          font-weight: 800;
          color: #3a3a55;
          text-decoration: none;
          letter-spacing: -0.03em;
          padding: 10px 0;
          transition: color 0.2s ease, transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .paha-mobile-link:hover {
          color: #ffffff;
          transform: translateX(8px);
        }

        .paha-mobile-cta {
          margin-top: 28px;
          background: #ffffff;
          color: #000000;
          padding: 14px 48px;
          border-radius: 100px;
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-weight: 700;
          text-decoration: none;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .paha-mobile-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 40px rgba(255, 255, 255, 0.2);
        }

        /* Staggered entrance for mobile links */
        .paha-mobile-link:nth-child(1) { animation: linkIn 0.4s 0.05s ease both; }
        .paha-mobile-link:nth-child(2) { animation: linkIn 0.4s 0.10s ease both; }
        .paha-mobile-link:nth-child(3) { animation: linkIn 0.4s 0.15s ease both; }
        .paha-mobile-link:nth-child(4) { animation: linkIn 0.4s 0.20s ease both; }
        .paha-mobile-cta              { animation: linkIn 0.4s 0.28s ease both; }
        @keyframes linkIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── HAMBURGER ── */
        .paha-ham {
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 4px;
          color: #ffffff;
          z-index: 50;
        }
        .paha-ham:focus-visible {
          outline: 2px solid var(--violet);
          border-radius: 6px;
        }
      `}</style>

      <nav
        className={`paha-nav fixed top-0 left-0 right-0 z-50 py-6 ${
          scrolled ? "scrolled" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">

          {/* ── Logo ── */}
          <a href="#hero" className="paha-logo">
            PAHA<span className="dot">.</span>DEV
            {/* Magnetic particles */}
            <span className="logo-particles" aria-hidden="true">
              <span className="lp lp1" />
              <span className="lp lp2" />
              <span className="lp lp3" />
              <span className="lp lp4" />
              <span className="lp lp5" />
              <span className="lp lp6" />
            </span>
          </a>

          {/* ── Desktop links ── */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`paha-link ${activeLink === link.href ? "active" : ""}`}
                onClick={() => setActiveLink(link.href)}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* ── Mobile toggle ── */}
          <button
            className="md:hidden paha-ham"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* ── Fullscreen mobile menu ── */}
        {mobileOpen && (
          <div className="paha-mobile-overlay md:hidden" ref={mobileMenuRef}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="paha-mobile-link"
                onClick={() => {
                  setMobileOpen(false);
                  setActiveLink(link.href);
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;