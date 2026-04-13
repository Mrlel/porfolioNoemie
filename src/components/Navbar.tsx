import { useState, useEffect } from "react";
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;500;600&display=swap');

        .nav-root {
          font-family: 'Rajdhani', sans-serif;
        }

        .nav-logo {
          font-family: 'Orbitron', monospace;
          font-weight: 900;
          font-size: 1.1rem;
          letter-spacing: 0.15em;
          background: linear-gradient(135deg, #00f5ff 0%, #0080ff 50%, #7b2fff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .nav-logo::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, #00f5ff, #7b2fff);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }

        .nav-logo:hover::after {
          transform: scaleX(1);
        }

        .nav-scrolled {
          background: rgba(2, 4, 15, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(0, 245, 255, 0.1);
          box-shadow: 0 0 40px rgba(0, 245, 255, 0.05);
        }

        .nav-transparent {
          background: transparent;
        }

        .nav-link {
          font-family: 'Rajdhani', sans-serif;
          font-weight: 600;
          font-size: 0.8rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(180, 210, 255, 0.6);
          text-decoration: none;
          position: relative;
          padding: 4px 0;
          transition: color 0.3s ease;
        }

        .nav-link::before {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: linear-gradient(90deg, #00f5ff, #7b2fff);
          transition: width 0.3s ease;
        }

        .nav-link:hover {
          color: #00f5ff;
        }

        .nav-link:hover::before,
        .nav-link.active::before {
          width: 100%;
        }

        .nav-link.active {
          color: #00f5ff;
        }

        .nav-link::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          color: #00f5ff;
          opacity: 0;
          filter: blur(8px);
          transition: opacity 0.3s ease;
        }

        .nav-link:hover::after {
          opacity: 0.4;
        }

        /* Corner accent */
        .nav-corner-accent {
          position: absolute;
          width: 8px;
          height: 8px;
          border-color: rgba(0, 245, 255, 0.4);
          border-style: solid;
        }

        .nav-corner-tl {
          top: 6px; left: 6px;
          border-width: 1px 0 0 1px;
        }

        .nav-corner-tr {
          top: 6px; right: 6px;
          border-width: 1px 1px 0 0;
        }

        .nav-corner-bl {
          bottom: 6px; left: 6px;
          border-width: 0 0 1px 1px;
        }

        .nav-corner-br {
          bottom: 6px; right: 6px;
          border-width: 0 1px 1px 0;
        }

        /* CTA Button */
        .nav-cta {
          font-family: 'Orbitron', monospace;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #00f5ff;
          text-decoration: none;
          padding: 8px 20px;
          border: 1px solid rgba(0, 245, 255, 0.4);
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
        }

        .nav-cta::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(0,245,255,0.1), rgba(123,47,255,0.1));
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .nav-cta:hover::before {
          opacity: 1;
        }

        .nav-cta:hover {
          border-color: rgba(0, 245, 255, 0.8);
          box-shadow: 0 0 20px rgba(0, 245, 255, 0.2), inset 0 0 20px rgba(0, 245, 255, 0.05);
          color: #fff;
        }

        /* Scanning line animation */
        @keyframes scanLine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }

        .nav-scan-line {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 25%;
          height: 1px;
          background: linear-gradient(90deg, transparent, #00f5ff, transparent);
          animation: scanLine 4s linear infinite;
        }

        /* Mobile menu */
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-12px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .mobile-menu {
          animation: slideDown 0.3s ease forwards;
          background: rgba(2, 4, 20, 0.95);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(0, 245, 255, 0.1);
          border-radius: 2px;
        }

        .mobile-link {
          font-family: 'Rajdhani', sans-serif;
          font-weight: 600;
          font-size: 0.9rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(180, 210, 255, 0.6);
          text-decoration: none;
          padding: 12px 0;
          display: flex;
          align-items: center;
          gap: 12px;
          border-bottom: 1px solid rgba(0, 245, 255, 0.05);
          transition: color 0.3s ease, padding-left 0.3s ease;
        }

        .mobile-link:last-child {
          border-bottom: none;
        }

        .mobile-link:hover {
          color: #00f5ff;
          padding-left: 8px;
        }

        .mobile-link .link-index {
          font-family: 'Orbitron', monospace;
          font-size: 0.55rem;
          color: rgba(0, 245, 255, 0.4);
        }

        /* Hamburger */
        .hamburger-btn {
          background: rgba(0, 245, 255, 0.05);
          border: 1px solid rgba(0, 245, 255, 0.2);
          padding: 6px;
          cursor: pointer;
          transition: all 0.3s ease;
          clip-path: polygon(4px 0%, 100% 0%, calc(100% - 4px) 100%, 0% 100%);
        }

        .hamburger-btn:hover {
          background: rgba(0, 245, 255, 0.1);
          border-color: rgba(0, 245, 255, 0.5);
        }

        /* Status dot */
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }

        .status-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #00f5ff;
          animation: pulse 2s ease-in-out infinite;
          box-shadow: 0 0 6px #00f5ff;
        }
      `}</style>

      <nav
        className={`nav-root fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "nav-scrolled py-3" : "nav-transparent py-5"
        }`}
      >
        {/* Scanning line */}
        {scrolled && <div className="nav-scan-line" />}

        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative">

          {/* Logo */}
          <a href="#hero" className="nav-logo flex items-center gap-2">
            <div className="status-dot" />
            PAHA.DEV
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                data-text={link.label}
                className={`nav-link ${activeLink === link.href ? "active" : ""}`}
                onClick={() => setActiveLink(link.href)}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden hamburger-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ color: "#00f5ff" }}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="mobile-menu md:hidden mt-2 mx-4 p-6 relative">
            {/* Corner accents */}
            <div className="nav-corner-accent nav-corner-tl" />
            <div className="nav-corner-accent nav-corner-tr" />
            <div className="nav-corner-accent nav-corner-bl" />
            <div className="nav-corner-accent nav-corner-br" />

            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                className="mobile-link"
                onClick={() => {
                  setMobileOpen(false);
                  setActiveLink(link.href);
                }}
              >
                <span className="link-index">0{i + 1}</span>
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