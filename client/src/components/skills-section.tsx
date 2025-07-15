import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function SkillsSection() {
  const skills = [
    { name: "HTML", icon: "HTML", color: "bg-orange-500" },
    { name: "CSS", icon: "CSS", color: "bg-blue-500" },
    { name: "Javascript", icon: "JS", color: "bg-yellow-500" },
    { name: "Typescript", icon: "TS", color: "bg-blue-600" },
    { name: "React", icon: "⚛", color: "bg-cyan-500" },
    { name: "Next JS", icon: "▲", color: "bg-black border border-slate-600" },
    { name: "Tailwind", icon: "TW", color: "bg-cyan-400" },
    { name: "MongoDB", icon: "M", color: "bg-green-500" },
    { name: "MySQL", icon: "SQL", color: "bg-blue-800" },
    { name: "Git", icon: "Git", color: "bg-orange-600" },
    { name: "Bootstrap", icon: "B", color: "bg-purple-600" },
    { name: "Figma", icon: "F", color: "bg-red-500" },
    { name: "MaterialUI", icon: "MUI", color: "bg-blue-700" },
    { name: "OpenAI", icon: "AI", color: "bg-green-600" },
    { name: "LangChain", icon: "LC", color: "bg-purple-500" },
    { name: "Node.js", icon: "N", color: "bg-green-700" }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll" ref={useScrollAnimation()}>
          <h2 className="text-4xl font-bold">Skills</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="skill-card rounded-xl p-6 text-center animate-on-scroll"
              ref={useScrollAnimation()}
            >
              <div className={`w-16 h-16 mx-auto mb-4 ${skill.color} rounded-lg flex items-center justify-center`}>
                <span className={`text-2xl font-bold ${skill.color.includes('yellow') ? 'text-black' : 'text-white'}`}>
                  {skill.icon}
                </span>
              </div>
              <p className="font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
