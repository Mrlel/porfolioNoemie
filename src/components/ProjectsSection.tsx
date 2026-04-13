import { useEffect, useRef, useState } from "react";
import { ExternalLink, GitFork, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    desc: "Modern e-commerce platform with integrated payments, real-time inventory management and analytics dashboard.",
    tags: ["React", "Node.js", "Stripe", "PostgreSQL"],
    id: "PRJ-001",
    status: "LIVE",
    year: "2024",
    color: "#00f5ff",
    github: "#",
    demo: "#",
  },

];

const ProjectCard = ({
  project,
  visible,
  delay,
}: {
  project: (typeof projects)[0];
  visible: boolean;
  delay: number;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms, border-color 0.3s ease, background 0.3s ease`,
        position: "relative",
        background: hovered ? `${project.color}06` : "rgba(255,255,255,0.015)",
        border: `1px solid ${hovered ? `${project.color}40` : "rgba(255,255,255,0.06)"}`,
        overflow: "hidden",
        cursor: "default",
      } as React.CSSProperties}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top accent line */}
      <div style={{
        position: "absolute",
        top: 0, left: 0, right: 0,
        height: "1px",
        background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
        opacity: hovered ? 1 : 0.3,
        transition: "opacity 0.3s ease",
      }} />

      {/* Corner clips */}
      <div style={{
        position: "absolute", top: 8, left: 8,
        width: 12, height: 12,
        borderTop: `1px solid ${project.color}`,
        borderLeft: `1px solid ${project.color}`,
        opacity: hovered ? 0.8 : 0.2,
        transition: "opacity 0.3s ease",
      }} />
      <div style={{
        position: "absolute", bottom: 8, right: 8,
        width: 12, height: 12,
        borderBottom: `1px solid ${project.color}`,
        borderRight: `1px solid ${project.color}`,
        opacity: hovered ? 0.8 : 0.2,
        transition: "opacity 0.3s ease",
      }} />

      {/* Visual header */}
      <div style={{
        height: "160px",
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
        background: `radial-gradient(ellipse at center, ${project.color}0a 0%, transparent 70%)`,
      }}>
        {/* Inner grid */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `linear-gradient(${project.color}08 1px, transparent 1px), linear-gradient(90deg, ${project.color}08 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }} />

        {/* Geometric shapes */}
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <div style={{
            width: 56, height: 56,
            border: `1px solid ${project.color}30`,
            transform: `rotate(${hovered ? "90deg" : "45deg"})`,
            transition: "transform 0.8s ease",
            position: "absolute",
          }} />
          <div style={{
            width: 80, height: 80,
            border: `1px solid ${project.color}15`,
            transform: `rotate(${hovered ? "-45deg" : "0deg"})`,
            transition: "transform 1.2s ease",
            position: "absolute",
          }} />
          <span style={{
            fontFamily: "'Orbitron', monospace",
            fontSize: "1.4rem", fontWeight: 900,
            color: `${project.color}20`, letterSpacing: "0.05em", zIndex: 1,
          }}>{project.id}</span>
        </div>

        {/* Top-left ID */}
        <div style={{
          position: "absolute", top: 12, left: 14,
          fontFamily: "'Orbitron', monospace",
          fontSize: "0.5rem", letterSpacing: "0.2em",
          color: `${project.color}50`,
        }}>{project.id}</div>

        {/* Status badge */}
        <div style={{
          position: "absolute", top: 10, right: 12,
          fontFamily: "'Orbitron', monospace",
          fontSize: "0.45rem", fontWeight: 700, letterSpacing: "0.2em",
          color: project.status === "LIVE" ? "#00ff88" : "#ffaa00",
          background: project.status === "LIVE" ? "rgba(0,255,136,0.08)" : "rgba(255,170,0,0.08)",
          border: `1px solid ${project.status === "LIVE" ? "rgba(0,255,136,0.25)" : "rgba(255,170,0,0.25)"}`,
          padding: "3px 8px",
          clipPath: "polygon(4px 0%, 100% 0%, calc(100% - 4px) 100%, 0% 100%)",
          display: "flex", alignItems: "center", gap: "5px",
        }}>
          <div style={{
            width: 4, height: 4, borderRadius: "50%",
            background: project.status === "LIVE" ? "#00ff88" : "#ffaa00",
            boxShadow: `0 0 6px ${project.status === "LIVE" ? "#00ff88" : "#ffaa00"}`,
            animation: "blink 1.5s ease-in-out infinite",
          }} />
          {project.status}
        </div>

        {/* Hover action overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: "rgba(2,4,15,0.8)",
          display: "flex", alignItems: "center", justifyContent: "center", gap: "16px",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}>
          {[
            { icon: GitFork, href: project.github, label: "Source" },
            { icon: ExternalLink, href: project.demo, label: "Live" },
          ].map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} style={{
              width: 42, height: 42,
              border: `1px solid ${project.color}60`,
              display: "flex", alignItems: "center", justifyContent: "center",
              color: project.color, textDecoration: "none",
              background: `${project.color}10`,
              clipPath: "polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)",
            }}>
              <Icon size={16} />
            </a>
          ))}
        </div>

        {/* Bottom dots */}
        <div style={{ position: "absolute", bottom: 12, right: 14, display: "flex", gap: "4px" }}>
          {[1,2,3].map((d) => (
            <div key={d} style={{
              width: 3, height: 3,
              background: `${project.color}${hovered ? "60" : "25"}`,
              transition: "background 0.3s ease",
            }} />
          ))}
        </div>
      </div>

      {/* Card body */}
      <div style={{ padding: "1.5rem 1.6rem 1.6rem" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "0.6rem" }}>
          <h3 style={{
            fontFamily: "'Orbitron', monospace",
            fontSize: "0.85rem", fontWeight: 700,
            letterSpacing: "0.06em",
            color: hovered ? project.color : "#e8f4ff",
            textTransform: "uppercase",
            transition: "color 0.3s ease",
            lineHeight: 1.3,
          }}>
            {project.title}
          </h3>
          <span style={{
            fontFamily: "'Orbitron', monospace",
            fontSize: "0.5rem",
            color: "rgba(180,210,255,0.25)",
            letterSpacing: "0.1em",
            flexShrink: 0, marginLeft: "8px",
          }}>{project.year}</span>
        </div>

        <p style={{
          fontFamily: "'Rajdhani', sans-serif",
          fontSize: "0.92rem", lineHeight: 1.75,
          color: "rgba(180,210,255,0.5)",
          marginBottom: "1.2rem", fontWeight: 400,
        }}>
          {project.desc}
        </p>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "1.2rem" }}>
          {project.tags.map((tag) => (
            <span key={tag} style={{
              fontFamily: "'Orbitron', monospace",
              fontSize: "0.48rem", fontWeight: 700,
              letterSpacing: "0.12em", textTransform: "uppercase",
              color: `${project.color}90`,
              background: `${project.color}0c`,
              border: `1px solid ${project.color}25`,
              padding: "3px 10px",
              clipPath: "polygon(5px 0%, 100% 0%, calc(100% - 5px) 100%, 0% 100%)",
            }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.04)",
          paddingTop: "1rem",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <a href={project.demo} style={{
            fontFamily: "'Orbitron', monospace",
            fontSize: "0.5rem", fontWeight: 700,
            letterSpacing: "0.15em", textTransform: "uppercase",
            color: hovered ? project.color : "rgba(180,210,255,0.3)",
            textDecoration: "none",
            display: "flex", alignItems: "center", gap: "6px",
            transition: "color 0.3s ease",
          }}>
            View Project <ChevronRight size={10} />
          </a>
          <span style={{
            fontFamily: "'Orbitron', monospace",
            fontSize: "0.45rem",
            color: `${project.color}35`,
            letterSpacing: "0.1em",
          }}>v1.0.0</span>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.08 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;500;600;700&display=swap');

        #projects {
          font-family: 'Rajdhani', sans-serif;
          background: #02040f;
          padding: 8rem 1.5rem;
          position: relative;
          overflow: hidden;
        }

        #projects::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(0,245,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,245,255,0.025) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }

        .proj-glow-a {
          position: absolute; width: 500px; height: 500px; border-radius: 50%;
          background: radial-gradient(circle, rgba(0,245,255,0.05) 0%, transparent 70%);
          top: 0; right: -100px; pointer-events: none;
        }

        .proj-glow-b {
          position: absolute; width: 400px; height: 400px; border-radius: 50%;
          background: radial-gradient(circle, rgba(123,47,255,0.06) 0%, transparent 70%);
          bottom: 0; left: -100px; pointer-events: none;
        }

        .proj-inner {
          max-width: 1100px; margin: 0 auto;
          position: relative; z-index: 2;
        }

        .proj-eyebrow {
          font-family: 'Orbitron', monospace;
          font-size: 0.6rem; font-weight: 700;
          letter-spacing: 0.35em; text-transform: uppercase;
          color: #00f5ff;
          display: flex; align-items: center; gap: 12px;
          margin-bottom: 1rem;
        }

        .proj-eyebrow::before {
          content: '';
          width: 30px; height: 1px;
          background: linear-gradient(90deg, transparent, #00f5ff);
        }

        .proj-heading {
          font-family: 'Orbitron', monospace;
          font-weight: 900;
          font-size: clamp(2rem, 4vw, 3rem);
          color: #e8f4ff; margin-bottom: 4rem;
        }

        .proj-heading span {
          background: linear-gradient(135deg, #00f5ff, #7b2fff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .proj-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        @media (max-width: 768px) { .proj-grid { grid-template-columns: 1fr; } }

        .fade-up { transition: opacity 0.7s ease, transform 0.7s ease; }
        .fade-up.hidden { opacity: 0; transform: translateY(24px); }
        .fade-up.visible { opacity: 1; transform: translateY(0); }

        @keyframes blink {
          0%,100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>

      <section id="projects" ref={ref}>
        <div className="proj-glow-a" />
        <div className="proj-glow-b" />

        <div className="proj-inner">
          <div className={`fade-up ${visible ? "visible" : "hidden"}`}>
            <div className="proj-eyebrow">Archive_Files</div>
            <h2 className="proj-heading">Recent<span>_Works</span></h2>
          </div>

          <div className="proj-grid">
            {projects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                visible={visible}
                delay={i * 120 + 200}
              />
            ))}
          </div>

          {/* CTA */}
          <div
            className={`fade-up ${visible ? "visible" : "hidden"}`}
            style={{ transitionDelay: "600ms", marginTop: "3rem", display: "flex", justifyContent: "center" }}
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              style={{
                fontFamily: "'Orbitron', monospace",
                fontSize: "0.6rem", fontWeight: 700,
                letterSpacing: "0.2em", textTransform: "uppercase",
                color: "#00f5ff", textDecoration: "none",
                border: "1px solid rgba(0,245,255,0.25)",
                padding: "12px 32px",
                clipPath: "polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)",
                background: "rgba(0,245,255,0.04)",
                display: "flex", alignItems: "center", gap: "10px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(0,245,255,0.08)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,245,255,0.5)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(0,245,255,0.04)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,245,255,0.25)";
              }}
            >
              <GitFork size={13} />
              View All on GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsSection;