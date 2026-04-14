// ProjectsSection.jsx
import React, { useEffect, useRef, useState } from "react";
import { ExternalLink, GitFork, ArrowUpRight } from "lucide-react";

const projects: Project[] = [
  {
    id: "PRJ-001",
    title: "E-Commerce Platform",
    desc: "Modern e-commerce platform with integrated payments, real-time inventory management and analytics dashboard.",
    tags: ["React", "Node.js", "Stripe", "PostgreSQL"],
    status: "LIVE",
    year: "2024",
    github: "#",
    demo: "#",
  },
  // Ajoute tes autres projets ici en suivant la même structure
];

type ProjectStatus = "LIVE" | "WIP" | "ARCHIVED";
type Project = { id: string; title: string; desc: string; tags: string[]; status: ProjectStatus; year: string; github: string; demo: string };

const statusConfig: Record<ProjectStatus, { label: string; className: string }> = {
  LIVE: { label: "LIVE", className: "status-live" },
  WIP: { label: "IN PROGRESS", className: "status-wip" },
  ARCHIVED: { label: "ARCHIVED", className: "status-archived" },
};

const ProjectCard = ({ project, visible, delay }: { project: Project; visible: boolean; delay: number }) => {
  const status = statusConfig[project.status] ?? statusConfig.LIVE;
  return (
    <div
      className="pj-card"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `all 0.7s cubic-bezier(0.2,0.8,0.2,1) ${delay}ms`,
      }}
    >
      <div className="pj-top">
        <div className="pj-meta">
          <span className="pj-year">{project.year}</span>
          <span className={`pj-status ${status.className}`}>{status.label}</span>
        </div>
        <div className="pj-links">
          <a href={project.github} className="pj-icon-link" target="_blank" rel="noreferrer" aria-label="GitHub">
            <GitFork size={14} />
          </a>
          <a href={project.demo} className="pj-icon-link" target="_blank" rel="noreferrer" aria-label="Live demo">
            <ExternalLink size={14} />
          </a>
        </div>
      </div>

      <h3 className="pj-name">{project.title}</h3>
      <p className="pj-desc">{project.desc}</p>

      <div className="pj-tags">
        {project.tags.map((tag) => (
          <span key={tag} className="pj-tag">{tag}</span>
        ))}
      </div>

      <div className="pj-footer">
        <a href={project.demo} className="pj-cta">
          View Project <ArrowUpRight size={14} />
        </a>
        <span className="pj-id">{project.id}</span>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        @keyframes pj-fade-up {
          from { opacity: 0; transform: translateY(22px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pj-pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
        }
        @keyframes pj-shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        #projects {
          font-family: 'Plus Jakarta Sans', sans-serif;
          background: #000000;
          padding: 100px 24px 120px;
          color: #ffffff;
          position: relative;
          overflow: hidden;
        }
        #projects::before {
          content: '';
          position: absolute;
          bottom: -60px; right: -60px;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%);
          pointer-events: none;
        }

        .pj-inner { max-width: 1000px; margin: 0 auto; }

        .pj-eyebrow {
          font-size: 0.7rem; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.12em; color: #8B5CF6; margin-bottom: 12px;
          display: flex; align-items: center; gap: 10px;
          animation: pj-fade-up 0.6s ease both;
        }
        .pj-eyebrow::before {
          content: ''; display: inline-block;
          width: 24px; height: 2px; background: #8B5CF6;
          border-radius: 1px; flex-shrink: 0;
        }

        .pj-head { margin-bottom: 56px; animation: pj-fade-up 0.6s ease 0.05s both; }
        .pj-title {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 800; letter-spacing: -0.03em; line-height: 1.1;
        }
        .pj-title .accent { color: #8B5CF6; }

        .pj-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
        }

        .pj-card {
          background: #080808;
          border: 1px solid #161616;
          border-radius: 20px;
          padding: 28px;
          display: flex; flex-direction: column;
          position: relative; overflow: hidden;
          transition: all 0.35s ease;
        }
        .pj-card::before {
          content: '';
          position: absolute; inset: 0;
          background: radial-gradient(circle at top right, rgba(139,92,246,0.05), transparent 60%);
          opacity: 0; transition: opacity 0.35s ease;
        }
        .pj-card:hover {
          border-color: rgba(139,92,246,0.3);
          transform: translateY(-5px); background: #0c0c0c;
        }
        .pj-card:hover::before { opacity: 1; }

        .pj-top {
          display: flex; justify-content: space-between; align-items: flex-start;
          margin-bottom: 20px;
        }
        .pj-meta { display: flex; gap: 8px; align-items: center; }

        .pj-year {
          font-size: 0.7rem; font-weight: 700; color: #8B5CF6;
          background: rgba(139,92,246,0.1); padding: 4px 10px; border-radius: 6px;
        }
        .pj-status {
          font-size: 0.65rem; font-weight: 700; padding: 4px 10px;
          border-radius: 6px; display: flex; align-items: center; gap: 5px;
        }
        .status-live { color: #10b981; background: rgba(16,185,129,0.08); border: 1px solid rgba(16,185,129,0.2); }
        .status-live::before {
          content: ''; width: 5px; height: 5px; background: #10b981;
          border-radius: 50%; animation: pj-pulse 2s ease-in-out infinite;
        }
        .status-wip { color: #f59e0b; background: rgba(245,158,11,0.08); border: 1px solid rgba(245,158,11,0.2); }
        .status-archived { color: #64748b; background: rgba(100,116,139,0.08); border: 1px solid rgba(100,116,139,0.2); }

        .pj-links { display: flex; gap: 8px; }
        .pj-icon-link {
          width: 32px; height: 32px; border-radius: 8px;
          background: #111; border: 1px solid #1f1f1f;
          display: flex; align-items: center; justify-content: center;
          color: #475569; text-decoration: none;
          transition: all 0.25s ease;
        }
        .pj-icon-link:hover { background: rgba(139,92,246,0.15); border-color: rgba(139,92,246,0.3); color: #a78bfa; }

        .pj-name {
          font-size: 1.2rem; font-weight: 800; letter-spacing: -0.02em;
          margin-bottom: 10px; line-height: 1.2;
        }
        .pj-desc {
          font-size: 0.88rem; line-height: 1.7; color: #475569;
          margin-bottom: 20px; flex: 1;
        }
        .pj-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 24px; }
        .pj-tag {
          font-size: 0.68rem; font-weight: 600; padding: 4px 10px;
          background: #111; border: 1px solid #1f1f1f;
          border-radius: 6px; color: #94a3b8; letter-spacing: 0.02em;
        }

        .pj-footer {
          display: flex; justify-content: space-between; align-items: center;
          padding-top: 18px; border-top: 1px solid #141414; margin-top: auto;
        }
        .pj-cta {
          display: flex; align-items: center; gap: 6px;
          font-size: 0.82rem; font-weight: 700; color: #fff; text-decoration: none;
          transition: all 0.25s ease;
        }
        .pj-cta:hover { color: #a78bfa; }
        .pj-cta:hover svg { transform: translate(2px, -2px); }
        .pj-cta svg { transition: transform 0.25s ease; }
        .pj-id { font-size: 0.68rem; color: #1f1f1f; font-weight: 600; }

        .pj-github-row { text-align: center; margin-top: 52px; }
        .pj-github-btn {
          display: inline-flex; align-items: center; gap: 10px;
          background: #ffffff; color: #000000;
          padding: 13px 32px; border-radius: 12px;
          font-weight: 700; font-size: 0.9rem; text-decoration: none;
          position: relative; overflow: hidden;
          transition: transform 0.2s ease, box-shadow 0.3s ease;
          box-shadow: 0 6px 24px -6px rgba(139,92,246,0.3);
          font-family: inherit;
        }
        .pj-github-btn::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.5) 50%, transparent 70%);
          transform: translateX(-100%); transition: transform 0.5s ease;
        }
        .pj-github-btn:hover::after { transform: translateX(100%); }
        .pj-github-btn:hover { transform: translateY(-3px); box-shadow: 0 12px 32px -6px rgba(139,92,246,0.4); }
      `}</style>

      <section id="projects" ref={ref}>
        <div className="pj-inner">
          <div className="pj-eyebrow">What I've built</div>
          <div className="pj-head">
            <h2 className="pj-title">Selected <span className="accent">Works</span></h2>
          </div>

          <div className="pj-grid">
            {projects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                visible={visible}
                delay={i * 120}
              />
            ))}
          </div>

          <div className="pj-github-row">
            <a href="https://github.com" className="pj-github-btn" target="_blank" rel="noreferrer">
              <GitFork size={16} /> View GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsSection;