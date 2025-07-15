import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function EducationSection() {
  const educations = [
    {
      period: "2018 - 2021",
      title: "Bachelor Degree",
      institution: "Chaudhary Charan Singh University, Meerut"
    },
    {
      period: "2013 - 2015",
      title: "Higher Secondary Certificate",
      institution: "BS Inter College, Noida"
    },
    {
      period: "2011 - 2013",
      title: "Secondary School Certificate",
      institution: "Ch. Keshram Inter College, Noida"
    }
  ];

  return (
    <section id="education" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll" ref={useScrollAnimation()}>
          <h2 className="text-4xl font-bold gradient-text">Educations</h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative pl-8">
            {educations.map((edu, index) => (
              <div key={index} className="timeline-item mb-12 animate-on-scroll" ref={useScrollAnimation()}>
                <div className="timeline-dot"></div>
                <div className="bg-background rounded-xl p-6 blur-effect border border-slate-700">
                  <div className="text-accent font-semibold text-sm mb-2">{edu.period}</div>
                  <h3 className="text-2xl font-bold mb-2">{edu.title}</h3>
                  <p className="text-xl text-slate-400">{edu.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
