import { useEffect, useRef, useState } from "react";

const skillCategories = [
  {
    title: "Frontend",
    code: "FE",
    color: "#00f5ff",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Javascript", level: 75 },
    ],
  },
  {
    title: "Backend",
    code: "BE",
    color: "#7b2fff",
    skills: [
      { name: "Node.js / Express", level: 90 },
      { name: "Python / Django", level: 80 },
      { name: "PostgreSQL", level: 85 },

    ],
  },
  {
    title: "DevOps & Tools",
    code: "DO",
    color: "#0080ff",
    skills: [
      { name: "Git / CI/CD", level: 92 },
      { name: "Figma", level: 85 },
    ],
  },
];

const SkillBar = ({
  name,
  level,
  visible,
  delay,
  color,
}: {
  name: string;
  level: number;
  visible: boolean;
  delay: number;
  color: string;
}) => (
  <div
    style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateX(0)" : "translateX(-12px)",
      transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
    }}
  >
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "8px" }}>
      <span style={{
        fontFamily: "'Rajdhani', sans-serif",
        fontSize: "0.82rem",
        fontWeight: 600,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: "rgba(180,210,255,0.65)",
      }}>
        {name}
      </span>
      <span style={{
        fontFamily: "'Orbitron', monospace",
        fontSize: "0.6rem",
        fontWeight: 700,
        color,
        letterSpacing: "0.05em",
      }}>
        {level}%
      </span>
    </div>

    {/* Track */}
    <div style={{
      height: "3px",
      background: "rgba(255,255,255,0.04)",
      position: "relative",
      overflow: "hidden",
      clipPath: "polygon(0% 0%, 100% 0%, calc(100% - 3px) 100%, 0% 100%)",
    }}>
      {/* Fill */}
      <div style={{
        height: "100%",
        width: visible ? `${level}%` : "0%",
        background: `linear-gradient(90deg, ${color}60, ${color})`,
        transition: `width 1.1s cubic-bezier(0.22, 1, 0.36, 1) ${delay + 200}ms`,
        position: "relative",
      }}>
        {/* Glow tip */}
        <div style={{
          position: "absolute",
          right: 0, top: "-3px",
          width: "2px", height: "9px",
          background: color,
          boxShadow: `0 0 10px ${color}, 0 0 20px ${color}`,
          opacity: visible ? 1 : 0,
          transition: `opacity 0.3s ease ${delay + 1000}ms`,
        }} />
      </div>
    </div>
  </div>
);

const SkillsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);

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

        #skills {
          font-family: 'Rajdhani', sans-serif;
          background: #02040f;
          padding: 8rem 1.5rem;
          position: relative;
          overflow: hidden;
        }

        /* Grid */
        #skills::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(0,245,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,245,255,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }

        .skills-glow-a {
          position: absolute;
          width: 600px; height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0,245,255,0.05) 0%, transparent 70%);
          top: -100px; left: -150px;
          pointer-events: none;
        }

        .skills-glow-b {
          position: absolute;
          width: 500px; height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(123,47,255,0.06) 0%, transparent 70%);
          bottom: -100px; right: -100px;
          pointer-events: none;
        }

        .skills-inner {
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        /* Eyebrow */
        .skills-eyebrow {
          font-family: 'Orbitron', monospace;
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: #00f5ff;
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 1rem;
        }

        .skills-eyebrow::before {
          content: '';
          width: 30px; height: 1px;
          background: linear-gradient(90deg, transparent, #00f5ff);
        }

        .skills-heading {
          font-family: 'Orbitron', monospace;
          font-weight: 900;
          font-size: clamp(2rem, 4vw, 3rem);
          color: #e8f4ff;
          margin-bottom: 1rem;
        }

        .skills-heading span {
          background: linear-gradient(135deg, #00f5ff, #7b2fff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Progress ring top bar */
        .skills-overview {
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
          margin-bottom: 4rem;
          padding-bottom: 3rem;
          border-bottom: 1px solid rgba(0,245,255,0.07);
        }

        .overview-item {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .overview-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
        }

        .overview-label {
          font-family: 'Orbitron', monospace;
          font-size: 0.55rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        /* Cards grid */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        @media (max-width: 900px) { .skills-grid { grid-template-columns: 1fr; } }
        @media (min-width: 600px) and (max-width: 900px) { .skills-grid { grid-template-columns: repeat(2, 1fr); } }

        /* Skill card */
        .skill-card {
          position: relative;
          padding: 2rem;
          background: rgba(255,255,255,0.015);
          border: 1px solid rgba(255,255,255,0.06);
          overflow: hidden;
          cursor: default;
          transition: border-color 0.3s ease, background 0.3s ease, transform 0.3s ease;
        }

        .skill-card::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: var(--card-color, #00f5ff);
          opacity: 0.4;
          transition: opacity 0.3s;
        }

        .skill-card.active {
          border-color: var(--card-border, rgba(0,245,255,0.3));
          background: rgba(0,245,255,0.02);
          transform: translateY(-4px);
        }

        .skill-card.active::after { opacity: 1; }

        /* Corner decoration */
        .card-corner {
          position: absolute;
          width: 14px; height: 14px;
          border-color: var(--card-color, #00f5ff);
          border-style: solid;
          opacity: 0.4;
          transition: opacity 0.3s;
        }
        .skill-card.active .card-corner { opacity: 1; }
        .corner-tl { top: 8px; left: 8px; border-width: 1px 0 0 1px; }
        .corner-br { bottom: 8px; right: 8px; border-width: 0 1px 1px 0; }

        /* Card header */
        .card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 2rem;
        }

        .card-title {
          font-family: 'Orbitron', monospace;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #e8f4ff;
        }

        .card-code {
          font-family: 'Orbitron', monospace;
          font-size: 0.55rem;
          font-weight: 900;
          letter-spacing: 0.1em;
          padding: 4px 10px;
          clip-path: polygon(4px 0%, 100% 0%, calc(100% - 4px) 100%, 0% 100%);
        }

        /* BG watermark */
        .card-watermark {
          position: absolute;
          bottom: 10px; right: 14px;
          font-family: 'Orbitron', monospace;
          font-size: 3.5rem;
          font-weight: 900;
          opacity: 0.025;
          letter-spacing: -0.02em;
          pointer-events: none;
          line-height: 1;
        }

        /* Skill bars spacing */
        .bars-wrap {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        /* Fade in */
        .fade-up {
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .fade-up.hidden { opacity: 0; transform: translateY(24px); }
        .fade-up.visible { opacity: 1; transform: translateY(0); }
      `}</style>

      <section id="skills" ref={ref}>
        <div className="skills-glow-a" />
        <div className="skills-glow-b" />

        <div className="skills-inner">

          {/* Header */}
          <div className={`fade-up ${visible ? "visible" : "hidden"}`}>
            <div className="skills-eyebrow">Technical_Capabilities</div>
            <h2 className="skills-heading">
              System<span>_Stack</span>
            </h2>
          </div>

          {/* Overview legend */}
          <div
            className={`skills-overview fade-up ${visible ? "visible" : "hidden"}`}
            style={{ transitionDelay: "150ms" }}
          >
            {skillCategories.map(({ title, code, color }) => (
              <div className="overview-item" key={code}>
                <div className="overview-dot" style={{ background: color, boxShadow: `0 0 6px ${color}` }} />
                <span className="overview-label" style={{ color: `${color}80` }}>{title}</span>
              </div>
            ))}
            <div className="overview-item" style={{ marginLeft: "auto" }}>
              <span style={{
                fontFamily: "'Orbitron', monospace",
                fontSize: "0.5rem",
                letterSpacing: "0.15em",
                color: "rgba(0,245,255,0.3)",
                textTransform: "uppercase",
              }}>
                Proficiency_Level / 100
              </span>
            </div>
          </div>

          {/* Cards */}
          <div className="skills-grid">
            {skillCategories.map((cat, ci) => (
              <div
                key={cat.title}
                className={`skill-card fade-up ${visible ? "visible" : "hidden"} ${activeCard === ci ? "active" : ""}`}
                style={{
                  transitionDelay: `${ci * 150 + 300}ms`,
                  "--card-color": cat.color,
                  "--card-border": `${cat.color}40`,
                } as React.CSSProperties}
                onMouseEnter={() => setActiveCard(ci)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Corner accents */}
                <div className="card-corner corner-tl" style={{ borderColor: cat.color }} />
                <div className="card-corner corner-br" style={{ borderColor: cat.color }} />

                {/* BG watermark */}
                <div className="card-watermark" style={{ color: cat.color }}>{cat.code}</div>

                {/* Header */}
                <div className="card-header">
                  <div className="card-title">{cat.title}</div>
                  <div
                    className="card-code"
                    style={{
                      background: `${cat.color}15`,
                      border: `1px solid ${cat.color}30`,
                      color: cat.color,
                    }}
                  >
                    {cat.code}
                  </div>
                </div>

                {/* Bars */}
                <div className="bars-wrap">
                  {cat.skills.map((skill, si) => (
                    <SkillBar
                      key={skill.name}
                      {...skill}
                      visible={visible}
                      delay={ci * 150 + si * 100 + 500}
                      color={cat.color}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default SkillsSection;