// SkillsSection.jsx
import React, { useEffect, useRef, useState } from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Javascript", level: 75 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js / Express", level: 90 },
      { name: "Python / Django", level: 80 },
      { name: "PostgreSQL", level: 85 },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Git / CI/CD", level: 92 },
      { name: "Figma", level: 85 },
    ],
  },
];

const SkillBar = ({ name, level, visible, delay }: { name: string; level: number; visible: boolean; delay: number }) => (
  <div
    style={{
      marginBottom: "18px",
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(10px)",
      transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
    }}
  >
    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "7px" }}>
      <span className="sk-name">{name}</span>
      <span className="sk-pct">{level}%</span>
    </div>
    <div className="sk-track">
      <div
        className="sk-fill"
        style={{
          width: visible ? `${level}%` : "0%",
          transition: `width 1.6s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
        }}
      />
    </div>
  </div>
);

const SkillsSection = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        @keyframes sk-fade-up {
          from { opacity: 0; transform: translateY(22px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes sk-shimmer {
          0% { left: -60%; }
          100% { left: 120%; }
        }
        @keyframes sk-pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
        }

        #skills {
          font-family: 'Plus Jakarta Sans', sans-serif;
          background: #000000;
          padding: 100px 24px;
          color: #ffffff;
          position: relative;
          overflow: hidden;
        }
        #skills::before {
          content: '';
          position: absolute;
          top: -80px; left: -60px;
          width: 450px; height: 450px;
          background: radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%);
          pointer-events: none;
        }

        .sk-inner { max-width: 1000px; margin: 0 auto; }

        .sk-eyebrow {
          font-size: 0.7rem; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.12em; color: #8B5CF6; margin-bottom: 12px;
          display: flex; align-items: center; gap: 10px;
          animation: sk-fade-up 0.6s ease both;
        }
        .sk-eyebrow::before {
          content: ''; display: inline-block;
          width: 24px; height: 2px; background: #8B5CF6;
          border-radius: 1px; flex-shrink: 0;
        }

        .sk-head { margin-bottom: 56px; animation: sk-fade-up 0.6s ease 0.05s both; }
        .sk-title {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 800; letter-spacing: -0.03em;
          margin-bottom: 12px; line-height: 1.1;
        }
        .sk-title .accent { color: #8B5CF6; }
        .sk-sub { color: #475569; font-size: 1rem; line-height: 1.7; max-width: 560px; }

        .sk-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
        }

        .sk-card {
          background: #080808;
          border: 1px solid #161616;
          border-radius: 18px;
          padding: 28px 26px;
          position: relative;
          overflow: hidden;
          transition: all 0.35s ease;
        }
        .sk-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, #8B5CF6, transparent);
          opacity: 0; transition: opacity 0.3s ease;
        }
        .sk-card::after {
          content: '';
          position: absolute;
          top: 0; left: -60%; width: 30%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(139,92,246,0.04), transparent);
          animation: sk-shimmer 6s ease-in-out infinite;
        }
        .sk-card:hover { border-color: rgba(139,92,246,0.28); transform: translateY(-4px); background: #0b0b0b; }
        .sk-card:hover::before { opacity: 1; }

        .sk-label {
          font-size: 0.68rem; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.12em; color: #8B5CF6; margin-bottom: 24px;
          display: flex; align-items: center; gap: 8px;
        }
        .sk-label-dot {
          width: 5px; height: 5px; border-radius: 50%; background: #8B5CF6;
          animation: sk-pulse 2s ease-in-out infinite; flex-shrink: 0;
        }

        .sk-name { font-size: 0.9rem; font-weight: 600; color: #e2e8f0; }
        .sk-pct { font-size: 0.78rem; font-weight: 700; color: #8B5CF6; }

        .sk-track {
          height: 5px; background: #141414;
          border-radius: 100px; overflow: hidden; position: relative;
        }
        .sk-fill {
          height: 100%; border-radius: 100px;
          background: linear-gradient(90deg, #8B5CF6, #A78BFA);
          position: relative;
        }
        .sk-fill::after {
          content: '';
          position: absolute; right: 0; top: 50%; transform: translateY(-50%);
          width: 8px; height: 8px; border-radius: 50%;
          background: #fff;
          box-shadow: 0 0 6px rgba(139,92,246,0.8);
        }
      `}</style>

      <section id="skills" ref={ref}>
        <div className="sk-inner">
          <div className="sk-eyebrow">What I use</div>
          <div className="sk-head">
            <h2 className="sk-title">Technical <span className="accent">Stack.</span></h2>
            <p className="sk-sub">
              Tools and technologies I use to build robust, scalable and visually stunning digital products.
            </p>
          </div>

          <div className="sk-grid">
            {skillCategories.map((cat, ci) => (
              <div
                key={cat.title}
                className="sk-card"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(20px)",
                  transition: `all 0.7s ease ${ci * 100}ms`,
                }}
              >
                <div className="sk-label">
                  <span className="sk-label-dot" />
                  {cat.title}
                </div>
                {cat.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    {...skill}
                    visible={visible}
                    delay={ci * 100 + si * 100 + 100}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillsSection;