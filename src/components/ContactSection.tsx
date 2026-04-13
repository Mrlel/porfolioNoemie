import { useEffect, useRef, useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="contact" ref={ref} className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="font-display text-sm tracking-[0.3em] text-primary uppercase mb-3">Contact</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-12">
            Travaillons ensemble<span className="text-primary">.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div
            className={`transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            style={{ transitionDelay: "150ms" }}
          >
            <p className="text-muted-foreground leading-relaxed mb-8">
              Disponible pour des missions freelance, des postes en CDI ou des collaborations sur des projets ambitieux. N'hésitez pas à me contacter.
            </p>
            <div className="space-y-4">
              {[
                { icon: Mail, label: "contact@noemie.dev" },
                { icon: MapPin, label: "Paris, France" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-primary" />
                  </div>
                  <span className="text-sm">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form
            className={`glass-card p-8 flex flex-col gap-5 transition-all duration-700 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
            style={{ transitionDelay: "300ms" }}
            onSubmit={e => { e.preventDefault(); setSent(true); }}
          >
            {[
              { label: "Nom", type: "text", placeholder: "Votre nom" },
              { label: "Email", type: "email", placeholder: "votre@email.com" },
            ].map(({ label, type, placeholder }) => (
              <div key={label} className="flex flex-col gap-1.5">
                <label className="font-display text-xs tracking-widest uppercase text-muted-foreground">{label}</label>
                <input
                  type={type}
                  placeholder={placeholder}
                  required
                  className="bg-muted/50 border border-primary/20 rounded-lg px-4 py-3 text-sm text-foreground outline-none
                  focus:border-primary/60 transition-colors placeholder:text-muted-foreground/40"
                />
              </div>
            ))}
            <div className="flex flex-col gap-1.5">
              <label className="font-display text-xs tracking-widest uppercase text-muted-foreground">Message</label>
              <textarea
                rows={4}
                placeholder="Votre message..."
                required
                className="bg-muted/50 border border-primary/20 rounded-lg px-4 py-3 text-sm text-foreground outline-none resize-none
                  focus:border-primary/60 transition-colors placeholder:text-muted-foreground/40"
              />
            </div>
            {sent ? (
              <p className="text-primary text-sm font-display tracking-wide">✦ Message envoyé, merci !</p>
            ) : (
              <button
                type="submit"
                className="self-start flex items-center gap-2 px-7 py-3 rounded-lg bg-primary text-primary-foreground font-display text-sm font-semibold tracking-wider uppercase
                  transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:scale-105"
              >
                <Send size={14} /> Envoyer
              </button>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
