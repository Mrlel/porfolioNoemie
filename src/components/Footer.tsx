// Footer.jsx
import { GitFork, Link, Mail, ArrowUp, Phone, MessageSquare } from "lucide-react";

const socialLinks = [
  { icon: GitFork, href: "#", label: "GitHub" },
  { icon: Link, href: "#", label: "LinkedIn" },
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
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

        @keyframes pulse-dot {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
        }
        @keyframes float-heart {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes arrow-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }

        .footer-root {
          font-family: 'Inter', sans-serif;
          background: #000000;
          color: #ffffff;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          padding: 80px 0 44px;
          position: relative;
          overflow: hidden;
        }
        .footer-root::before {
          content: '';
          position: absolute;
          top: -150px; left: 50%; transform: translateX(-50%);
          width: 700px; height: 700px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.055) 0%, transparent 70%);
          pointer-events: none;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 32px;
          position: relative;
          z-index: 1;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1.5fr;
          gap: 64px;
          margin-bottom: 80px;
        }
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr; gap: 44px; }
        }

        .footer-col-brand { animation: fadeInUp 0.7s ease 0.1s both; }
        .footer-col-nav { animation: fadeInUp 0.7s ease 0.2s both; }
        .footer-col-contact { animation: fadeInUp 0.7s ease 0.3s both; }

        .footer-logo {
          font-weight: 800;
          font-size: 1.5rem;
          letter-spacing: -0.03em;
          text-decoration: none;
          color: #fff;
          display: inline-block;
          margin-bottom: 14px;
        }
        .footer-logo .dot { color: #8B5CF6; }

        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.2);
          color: #34d399;
          font-size: 0.68rem;
          font-weight: 700;
          padding: 5px 12px;
          border-radius: 100px;
          margin-bottom: 18px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
        .status-dot {
          width: 6px; height: 6px;
          background: #34d399;
          border-radius: 50%;
          animation: pulse-dot 1.8s ease-in-out infinite;
          flex-shrink: 0;
        }

        .footer-tagline {
          color: #64748b;
          line-height: 1.7;
          max-width: 310px;
          margin-bottom: 28px;
          font-size: 0.9rem;
        }

        .footer-socials {
          display: flex;
          gap: 12px;
        }
        .social-icon-btn {
          width: 42px; height: 42px;
          border-radius: 12px;
          background: #0d0d0d;
          border: 1px solid rgba(255, 255, 255, 0.07);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #64748b;
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .social-icon-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #8B5CF6, #A78BFA);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .social-icon-btn > * { position: relative; z-index: 1; }
        .social-icon-btn:hover::before { opacity: 1; }
        .social-icon-btn:hover {
          color: #fff;
          transform: translateY(-4px);
          border-color: transparent;
          box-shadow: 0 8px 24px rgba(139, 92, 246, 0.3);
        }

        .footer-section-title {
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #334155;
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .footer-section-title::before {
          content: '';
          display: inline-block;
          width: 5px; height: 5px;
          background: #8B5CF6;
          border-radius: 50%;
          flex-shrink: 0;
          animation: pulse-dot 2.5s ease-in-out infinite;
        }

        .footer-nav-list {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .footer-nav-link {
          color: #64748b;
          text-decoration: none;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
          width: fit-content;
        }
        .footer-nav-link:hover {
          color: #fff;
          transform: translateX(6px);
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 14px;
          border-radius: 12px;
          border: 1px solid transparent;
          text-decoration: none;
          color: #64748b;
          font-size: 0.88rem;
          transition: all 0.3s ease;
          margin-bottom: 8px;
        }
        .contact-item:hover {
          background: rgba(139, 92, 246, 0.07);
          border-color: rgba(139, 92, 246, 0.2);
          color: #c4b5fd;
          transform: translateX(4px);
        }
        .contact-icon {
          width: 32px; height: 32px;
          border-radius: 8px;
          background: #111;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background 0.3s ease;
        }
        .contact-item:hover .contact-icon {
          background: rgba(139, 92, 246, 0.2);
        }

        .footer-bottom {
          padding-top: 36px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          justify-content: space-between;
          align-items: center;
          animation: fadeInUp 0.7s ease 0.4s both;
        }
        @media (max-width: 640px) {
          .footer-bottom { flex-direction: column; gap: 20px; text-align: center; }
        }

        .footer-copy {
          color: #334155;
          font-size: 0.82rem;
        }
        .footer-heart {
          color: #8B5CF6;
          display: inline-block;
          animation: float-heart 2s ease-in-out infinite;
        }

        .scroll-top-btn {
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #94a3b8;
          padding: 9px 20px;
          border-radius: 100px;
          font-size: 0.78rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: inherit;
          letter-spacing: 0.02em;
          transition: all 0.3s ease;
        }
        .scroll-top-btn:hover {
          background: rgba(139, 92, 246, 0.1);
          border-color: rgba(139, 92, 246, 0.4);
          color: #c4b5fd;
          transform: translateY(-2px);
        }
        .scroll-top-btn:hover svg {
          animation: arrow-bounce 0.6s ease infinite;
        }
      `}</style>

      <footer className="footer-root">
        <div className="footer-container">
          <div className="footer-grid">

            <div className="footer-col-brand">
              <a href="#hero" className="footer-logo">PAHA<span className="dot">.</span>DEV</a>
              <div className="status-badge">
                <span className="status-dot" />
                Available for work
              </div>
              <p className="footer-tagline">
                Software Engineer specialized in building exceptional digital experiences. Focus on performance, design and scalability.
              </p>
              <div className="footer-socials">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a key={label} href={href} className="social-icon-btn" aria-label={label}>
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </div>

            <div className="footer-col-nav">
              <h4 className="footer-section-title">Platform</h4>
              <ul className="footer-nav-list">
                {navLinks.map(({ label, href }) => (
                  <li key={href}>
                    <a href={href} className="footer-nav-link">→ {label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-col-contact">
              <h4 className="footer-section-title">Contact Me</h4>
              <a href="mailto:nohemiepaha@gmail.com" className="contact-item">
                <span className="contact-icon"><Mail size={14} color="#8B5CF6" /></span>
                nohemiepaha@gmail.com
              </a>
              <a href="tel:+2250173551927" className="contact-item">
                <span className="contact-icon"><Phone size={14} color="#8B5CF6" /></span>
                +225 01 73 55 19 27
              </a>
              <a href="https://wa.me/2250173551927" className="contact-item">
                <span className="contact-icon"><MessageSquare size={14} color="#8B5CF6" /></span>
                WhatsApp Support
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copy">
              © 2026 Paha Noemie Carole — Built with <span className="footer-heart">♥</span> React & Tailwind
            </p>
            <button className="scroll-top-btn" onClick={scrollToTop}>
              <ArrowUp size={13} /> Back to top
            </button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;