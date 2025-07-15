import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function ProjectsSection() {
  const projects = [
    {
      name: "E-commerce Project (European Client)",
      tools: ["NextJs", "Typescript", "Tailwind CSS", "Zustand", "useSWR"],
      role: "Sr. Frontend Engineer",
      description: "Me and my team built an E-commerce web application. I have Developed features including authentication, product listing, shopping cart, and payment integration following industry best practices."
    },
    {
      name: "HRMS Platform (Corporate Client)",
      tools: ["ReactJS", "Tailwind CSS", "TypeScript", "Mantine UI", "Zustand", "useSWR"],
      role: "Frontend Developer",
      description: "I have designed and developed a web app, Led the development of a comprehensive HRMS offering services like employee onboarding, attendance tracking, leave management, project submission, and timesheet management."
    },
    {
      name: "AI Powered Real Estate",
      tools: ["React", "Bootstrap", "SCSS", "Stripe", "TypeScript", "OpenAI API"],
      role: "Frontend Developer",
      description: "My team built an AI-based real estate app. We utilized NextJS, Formik, TailwindCSS, and other npm libraries for the UI. We have trained multiple AI assistants using the latest GPT model and integrated Replicate API for image processing."
    },
    {
      name: "Customer Support ChatBot",
      tools: ["ReactJS", "Flowise AI", "Open AI", "RAG", "LangChain"],
      role: "ChatBot AI Developer",
      description: "This project involved developing an intelligent chatbot system designed to provide exceptional customer support and information. The chatbot leverages Retrieval Augmented Generation (RAG) techniques to retrieve relevant information from a vast knowledge base."
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll" ref={useScrollAnimation()}>
          <h2 className="text-4xl font-bold gradient-text">PROJECTS</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card rounded-xl p-6 animate-on-scroll"
              ref={useScrollAnimation()}
            >
              <h3 className="text-2xl font-bold mb-4 gradient-text">{project.name}</h3>
              <div className="bg-slate-900 rounded-lg p-4 mb-4 font-mono text-sm overflow-x-auto">
                <pre className="text-slate-300">
{`const project = {
  name: '${project.name}',
  tools: [${project.tools.map(tool => `'${tool}'`).join(', ')}],
  myRole: '${project.role}',
  Description: '${project.description}'
};`}
                </pre>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
