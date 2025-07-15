import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function ExperienceSection() {
  const experiences = [
    {
      period: "(Jul 2023 - Present)",
      title: "Senior Frontend Engineer",
      company: "NexG"
    },
    {
      period: "(Apr 2021 - Jul 2023)",
      title: "Frontend Software Developer",
      company: "4 Way Technologies"
    },
    {
      period: "(Dec 2020 - Apr 2021)",
      title: "Full Stack Training",
      company: "GUVI GEEK NETWORK"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll" ref={useScrollAnimation()}>
          <h2 className="text-4xl font-bold gradient-text">Experiences</h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative pl-8">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item mb-12 animate-on-scroll" ref={useScrollAnimation()}>
                <div className="timeline-dot"></div>
                <div className="bg-secondary rounded-xl p-6 blur-effect border border-slate-700">
                  <div className="text-accent font-semibold text-sm mb-2">{exp.period}</div>
                  <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                  <p className="text-xl text-slate-400">{exp.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
