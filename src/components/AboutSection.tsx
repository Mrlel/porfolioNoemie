import { useEffect, useRef, useState } from "react";
import { Code2, Palette, MapPin, Mail, Phone, MessageCircle, GraduationCap, Languages, Briefcase, Clock } from "lucide-react";

const stats = [
  { value: "1+", label: "Years of Experience", suffix: "YRS" },
  { value: "5+", label: "Projects Delivered", suffix: "PRJ" },
  { value: "8+", label: "Happy Clients", suffix: "CLT" },
  { value: "∞", label: "Lines of Code", suffix: "LOC" },
];

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    desc: "Solid, maintainable architecture built to scale — no spaghetti, just structure.",
    color: "#00f5ff",
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    desc: "Elegant, intuitive interfaces where every pixel has a purpose.",
    color: "#7b2fff",
  },
];

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;500;600;700&display=swap');

        #about {
          font-family: 'Rajdhani', sans-serif;
          background: #02040f;
          padding: 8rem 1.5rem;
          position: relative;
          overflow: hidden;
        }

        #about::before {
          content: ''; position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(0,245,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,245,255,0.03) 1px, transparent 1px);
          background-size: 60px 60px; pointer-events: none;
        }

        .about-glow-a {
          position: absolute; width: 500px; height: 500px; border-radius: 50%;
          background: radial-gradient(circle, rgba(123,47,255,0.07) 0%, transparent 70%);
          top: -100px; right: -100px; pointer-events: none;
        }

        .about-glow-b {
          position: absolute; width: 400px; height: 400px; border-radius: 50%;
          background: radial-gradient(circle, rgba(0,245,255,0.05) 0%, transparent 70%);
          bottom: 0; left: -100px; pointer-events: none;
        }

        .about-inner { max-width: 1100px; margin: 0 auto; position: relative; z-index: 2; }

        .about-eyebrow {
          font-family: 'Orbitron', monospace; font-size: 0.6rem; font-weight: 700;
          letter-spacing: 0.3em; text-transform: uppercase; color: #00f5ff;
          display: flex; align-items: center; gap: 12px; margin-bottom: 1rem;
        }
        .about-eyebrow::before { content: ''; width: 30px; height: 1px; background: linear-gradient(90deg, transparent, #00f5ff); }

        .about-heading {
          font-family: 'Orbitron', monospace; font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 900; color: #e8f4ff; line-height: 1.1; margin-bottom: 4rem;
        }
        .about-heading span {
          background: linear-gradient(135deg, #00f5ff, #7b2fff);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }

        .about-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 3.5rem; align-items: start; margin-bottom: 3.5rem;
        }
        @media (max-width: 768px) { .about-grid { grid-template-columns: 1fr; gap: 2.5rem; } }

        .about-text-block { position: relative; }
        .about-text-block::before {
          content: ''; position: absolute; left: -20px; top: 0; bottom: 0; width: 1px;
          background: linear-gradient(to bottom, #00f5ff, rgba(123,47,255,0.5), transparent);
        }

        .about-body { font-size: 1.05rem; font-weight: 400; line-height: 1.9; color: rgba(180,210,255,0.6); margin-bottom: 1.5rem; }
        .about-body strong { color: rgba(180,210,255,0.9); font-weight: 600; }

        .highlight-card {
          position: relative; padding: 1.4rem 1.5rem;
          background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06);
          overflow: hidden; transition: all 0.4s ease; cursor: default;
        }
        .highlight-card::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, var(--card-color-a, transparent), transparent);
          opacity: 0; transition: opacity 0.4s ease;
        }
        .highlight-card:hover { border-color: var(--card-border, rgba(0,245,255,0.2)); transform: translateX(6px); }
        .highlight-card:hover::before { opacity: 1; }
        .highlight-card::after {
          content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 2px;
          background: var(--card-border, #00f5ff); transform: scaleY(0); transform-origin: bottom; transition: transform 0.4s ease;
        }
        .highlight-card:hover::after { transform: scaleY(1); }

        .highlight-icon-wrap {
          width: 40px; height: 40px; display: flex; align-items: center; justify-content: center;
          border: 1px solid; clip-path: polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%);
          margin-bottom: 1rem; flex-shrink: 0;
        }
        .highlight-title { font-family: 'Orbitron', monospace; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 0.4rem; }
        .highlight-desc { font-size: 0.9rem; line-height: 1.7; color: rgba(180,210,255,0.5); font-weight: 400; }

        /* ── RECRUITER BLOCK ── */
        .recruiter-block {
          position: relative; margin-bottom: 3.5rem;
          border: 1px solid rgba(0,245,255,0.12);
          overflow: hidden;
        }

        /* Animated top accent */
        .recruiter-block::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, #00f5ff 30%, #7b2fff 70%, transparent);
        }

        @keyframes scanBlock {
          0% { left: -25%; }
          100% { left: 110%; }
        }

        .recruiter-scan {
          position: absolute; top: 0; bottom: 0; width: 25%;
          background: linear-gradient(90deg, transparent, rgba(0,245,255,0.03), transparent);
          animation: scanBlock 7s linear infinite;
          pointer-events: none; z-index: 0;
        }

        /* Block header */
        .recruiter-header {
          display: flex; align-items: center; justify-content: space-between;
          padding: 1rem 1.6rem;
          background: rgba(0,245,255,0.02);
          border-bottom: 1px solid rgba(0,245,255,0.07);
          position: relative; z-index: 1;
          flex-wrap: wrap; gap: 10px;
        }

        .recruiter-title {
          font-family: 'Orbitron', monospace; font-size: 0.55rem; font-weight: 700;
          letter-spacing: 0.3em; text-transform: uppercase; color: #00f5ff;
          display: flex; align-items: center; gap: 8px;
        }

        .rh-dot {
          width: 5px; height: 5px; border-radius: 50%;
          background: #00f5ff; box-shadow: 0 0 8px #00f5ff;
          animation: blink 2s ease-in-out infinite;
        }

        .recruiter-badge {
          font-family: 'Orbitron', monospace; font-size: 0.45rem; font-weight: 700;
          letter-spacing: 0.15em; text-transform: uppercase; color: #00ff88;
          background: rgba(0,255,136,0.07); border: 1px solid rgba(0,255,136,0.2);
          padding: 4px 12px;
          clip-path: polygon(5px 0%, 100% 0%, calc(100% - 5px) 100%, 0% 100%);
          display: flex; align-items: center; gap: 6px;
        }

        .badge-pulse {
          width: 4px; height: 4px; border-radius: 50%;
          background: #00ff88; box-shadow: 0 0 6px #00ff88;
          animation: blink 1.5s ease-in-out infinite;
        }

        /* 4-col info grid */
        .info-grid {
          display: grid; grid-template-columns: repeat(4, 1fr);
          gap: 1px; background: rgba(0,245,255,0.05);
          position: relative; z-index: 1;
        }

        @media (max-width: 900px) { .info-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 480px)  { .info-grid { grid-template-columns: 1fr; } }

        .info-cell {
          background: #02040f; padding: 1.4rem 1.5rem;
          transition: background 0.3s ease; position: relative; overflow: hidden;
        }

        .info-cell::after {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: var(--cc, #00f5ff); opacity: 0; transition: opacity 0.3s ease;
        }

        .info-cell:hover { background: rgba(255,255,255,0.018); }
        .info-cell:hover::after { opacity: 0.35; }

        .ic-icon {
          width: 30px; height: 30px;
          border: 1px solid; display: flex; align-items: center; justify-content: center;
          clip-path: polygon(4px 0%, 100% 0%, calc(100% - 4px) 100%, 0% 100%);
          margin-bottom: 0.85rem;
        }

        .ic-label {
          font-family: 'Orbitron', monospace; font-size: 0.43rem; font-weight: 700;
          letter-spacing: 0.25em; text-transform: uppercase;
          display: block; margin-bottom: 6px;
        }

        .ic-value {
          font-family: 'Rajdhani', sans-serif; font-size: 0.88rem; font-weight: 600;
          color: rgba(220,235,255,0.8); line-height: 1.5;
          white-space: pre-line; display: block;
          text-decoration: none; transition: color 0.3s ease;
        }

        a.ic-value:hover { color: #fff; }

        /* Tag pill */
        .tag-pill {
          font-family: 'Orbitron', monospace; font-size: 0.43rem; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase; padding: 3px 8px;
          clip-path: polygon(4px 0%, 100% 0%, calc(100% - 4px) 100%, 0% 100%);
          display: inline-block;
        }

        /* Stats */
        .stats-row {
          display: grid; grid-template-columns: repeat(4, 1fr);
          gap: 1px; background: rgba(0,245,255,0.06);
          border: 1px solid rgba(0,245,255,0.08);
          position: relative; overflow: hidden;
        }

        @media (max-width: 640px) { .stats-row { grid-template-columns: repeat(2, 1fr); } }

        @keyframes scanStats { 0% { transform: translateX(-100%); } 100% { transform: translateX(500%); } }

        .stats-row::after {
          content: ''; position: absolute; top: 0; bottom: 0; width: 60px;
          background: linear-gradient(90deg, transparent, rgba(0,245,255,0.06), transparent);
          animation: scanStats 5s linear infinite; pointer-events: none;
        }

        .stat-cell { background: #02040f; padding: 2rem 1.5rem; text-align: center; transition: background 0.3s ease; }
        .stat-cell:hover { background: rgba(0,245,255,0.03); }

        .stat-suffix {
          font-family: 'Orbitron', monospace; font-size: 0.45rem; font-weight: 700;
          letter-spacing: 0.3em; color: rgba(0,245,255,0.3);
          display: block; margin-bottom: 0.4rem; text-transform: uppercase;
        }

        .stat-value {
          font-family: 'Orbitron', monospace; font-size: clamp(1.8rem, 3vw, 2.6rem); font-weight: 900;
          background: linear-gradient(135deg, #00f5ff, #0080ff);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          line-height: 1; margin-bottom: 0.5rem; display: block;
        }

        .stat-label { font-size: 0.8rem; font-weight: 500; letter-spacing: 0.05em; color: rgba(180,210,255,0.4); text-transform: uppercase; }

        .fade-up { transition: opacity 0.7s ease, transform 0.7s ease; }
        .fade-up.hidden { opacity: 0; transform: translateY(24px); }
        .fade-up.visible { opacity: 1; transform: translateY(0); }

        .fade-right { transition: opacity 0.7s ease, transform 0.7s ease; }
        .fade-right.hidden { opacity: 0; transform: translateX(20px); }
        .fade-right.visible { opacity: 1; transform: translateX(0); }

        @keyframes blink { 0%,100% { opacity: 1; } 50% { opacity: 0.3; } }
      `}</style>

      <section id="about" ref={ref}>
        <div className="about-glow-a" />
        <div className="about-glow-b" />

        <div className="about-inner">

          {/* Header */}
          <div className={`fade-up ${visible ? "visible" : "hidden"}`}>
            <div className="about-eyebrow">About Me</div>
            <h2 className="about-heading">Who am <span>I?</span></h2>
          </div>

          {/* Text + Highlight cards */}
          <div className="about-grid">
            <div className={`about-text-block fade-up ${visible ? "visible" : "hidden"}`} style={{ transitionDelay: "150ms" }}>
              <p className="about-body">
                I'm a <strong>fullstack developer</strong> passionate about crafting modern web
                applications that blend aesthetics with raw performance. Specialised in{" "}
                <strong>React, Node.js</strong> and cloud technologies, I turn ambitious ideas
                into polished digital realities.
              </p>
              <p className="about-body">
                My approach is simple: <strong>clean architecture</strong>, scalable systems,
                and an obsessive attention to design detail — because great products live at
                the intersection of engineering and art.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {highlights.map(({ icon: Icon, title, desc, color }, i) => (
                <div
                  key={title}
                  className={`highlight-card fade-right ${visible ? "visible" : "hidden"}`}
                  style={{ transitionDelay: `${i * 120 + 200}ms`, "--card-color-a": `${color}08`, "--card-border": `${color}40` } as React.CSSProperties}
                >
                  <div className="highlight-icon-wrap" style={{ borderColor: `${color}30`, background: `${color}08` }}>
                    <Icon size={17} style={{ color }} />
                  </div>
                  <div className="highlight-title" style={{ color }}>{title}</div>
                  <div className="highlight-desc">{desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RECRUITER INFO BLOCK ── */}
          <div className={`recruiter-block fade-up ${visible ? "visible" : "hidden"}`} style={{ transitionDelay: "350ms" }}>
            <div className="recruiter-scan" />

            {/* Header */}
            <div className="recruiter-header">
              <div className="recruiter-title">
                <div className="rh-dot" />
                Recruiter_Profile.info
              </div>
              <div className="recruiter-badge">
                <div className="badge-pulse" />
                Open to Opportunities
              </div>
            </div>

            {/* 4-col grid */}
            <div className="info-grid">

              {/* Location */}
              <div className="info-cell" style={{ "--cc": "#00f5ff" } as React.CSSProperties}>
                <div className="ic-icon" style={{ borderColor: "rgba(0,245,255,0.2)", background: "rgba(0,245,255,0.06)" }}>
                  <MapPin size={13} style={{ color: "#00f5ff" }} />
                </div>
                <span className="ic-label" style={{ color: "rgba(0,245,255,0.4)" }}>Location</span>
                <span className="ic-value">Al, Nhada 1 Dubai</span>
              </div>

              {/* Email */}
              <div className="info-cell" style={{ "--cc": "#0080ff" } as React.CSSProperties}>
                <div className="ic-icon" style={{ borderColor: "rgba(0,128,255,0.2)", background: "rgba(0,128,255,0.06)" }}>
                  <Mail size={13} style={{ color: "#0080ff" }} />
                </div>
                <span className="ic-label" style={{ color: "rgba(0,128,255,0.4)" }}>Email</span>
                <a href="mailto:nohemiepaha@gmail.com" className="ic-value">pahanohemie022024@gmail.com</a>
              </div>

              {/* Phone */}
              <div className="info-cell" style={{ "--cc": "#00f5ff" } as React.CSSProperties}>
                <div className="ic-icon" style={{ borderColor: "rgba(0,245,255,0.2)", background: "rgba(0,245,255,0.06)" }}>
                  <Phone size={13} style={{ color: "#00f5ff" }} />
                </div>
                <span className="ic-label" style={{ color: "rgba(0,245,255,0.4)" }}>Phone</span>
                <a href="tel:+971542371689" className="ic-value">+971 542 371 689</a>
              </div>

              {/* WhatsApp */}
              <div className="info-cell" style={{ "--cc": "#00ff88" } as React.CSSProperties}>
                <div className="ic-icon" style={{ borderColor: "rgba(0,255,136,0.2)", background: "rgba(0,255,136,0.06)" }}>
                  <MessageCircle size={13} style={{ color: "#00ff88" }} />
                </div>
                <span className="ic-label" style={{ color: "rgba(0,255,136,0.4)" }}>WhatsApp</span>
                <a href="https://wa.me/2250173551927" className="ic-value">{"+225 0173 551 927\n+971 542 371 689"}</a>
              </div>

              {/* Education */}
              <div className="info-cell" style={{ "--cc": "#7b2fff" } as React.CSSProperties}>
                <div className="ic-icon" style={{ borderColor: "rgba(123,47,255,0.2)", background: "rgba(123,47,255,0.06)" }}>
                  <GraduationCap size={13} style={{ color: "#7b2fff" }} />
                </div>
                <span className="ic-label" style={{ color: "rgba(123,47,255,0.4)" }}>Education</span>
                <span className="ic-value">{"Bachelor in IT system and project management)"}</span>
              </div>

              {/* Languages */}
              <div className="info-cell" style={{ "--cc": "#ff2fff" } as React.CSSProperties}>
                <div className="ic-icon" style={{ borderColor: "rgba(255,47,255,0.2)", background: "rgba(255,47,255,0.06)" }}>
                  <Languages size={13} style={{ color: "#ff2fff" }} />
                </div>
                <span className="ic-label" style={{ color: "rgba(255,47,255,0.4)" }}>Languages</span>
                <div style={{ display: "flex", gap: "5px", marginTop: "2px", flexWrap: "wrap" }}>
                  {["French", "English"].map((lang) => (
                    <span key={lang} className="tag-pill" style={{
                      color: "rgba(255,100,255,0.9)", background: "rgba(255,47,255,0.08)",
                      border: "1px solid rgba(255,47,255,0.2)",
                    }}>{lang}</span>
                  ))}
                </div>
              </div>

              {/* Contract */}
              <div className="info-cell" style={{ "--cc": "#ffaa00" } as React.CSSProperties}>
                <div className="ic-icon" style={{ borderColor: "rgba(255,170,0,0.2)", background: "rgba(255,170,0,0.06)" }}>
                  <Briefcase size={13} style={{ color: "#ffaa00" }} />
                </div>
                <span className="ic-label" style={{ color: "rgba(255,170,0,0.4)" }}>Contract Type</span>
                <div style={{ display: "flex", gap: "5px", flexWrap: "wrap", marginTop: "2px" }}>
                  {["CDI", "Freelance", "Remote"].map((t) => (
                    <span key={t} className="tag-pill" style={{
                      color: "rgba(255,180,0,0.9)", background: "rgba(255,170,0,0.08)",
                      border: "1px solid rgba(255,170,0,0.2)",
                    }}>{t}</span>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div className="info-cell" style={{ "--cc": "#00f5ff" } as React.CSSProperties}>
                <div className="ic-icon" style={{ borderColor: "rgba(0,245,255,0.2)", background: "rgba(0,245,255,0.06)" }}>
                  <Clock size={13} style={{ color: "#00f5ff" }} />
                </div>
                <span className="ic-label" style={{ color: "rgba(0,245,255,0.4)" }}>Experience</span>
                <div style={{ display: "flex", alignItems: "baseline", gap: "6px", marginTop: "4px" }}>
                  <span style={{
                    fontFamily: "'Orbitron', monospace", fontSize: "1.6rem", fontWeight: 900,
                    background: "linear-gradient(135deg, #00f5ff, #0080ff)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                    backgroundClip: "text", lineHeight: 1,
                  }}>1+</span>
                  <span style={{
                    fontFamily: "'Rajdhani', sans-serif", fontSize: "0.75rem", fontWeight: 600,
                    color: "rgba(180,210,255,0.4)", letterSpacing: "0.1em", textTransform: "uppercase",
                  }}>Year</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default AboutSection;