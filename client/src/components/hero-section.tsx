import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function HeroSection() {
  const animationRef = useScrollAnimation();

  const handleContactClick = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fadeInUp">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hello,<br />
            This is <span className="gradient-text">Shaik Mohammad Yaseen</span>,<br />
            I'm a Professional Frontend Developer.
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={handleContactClick}
              className="gradient-bg text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Contact me
            </Button>
            <Button 
              variant="outline"
              className="border-accent text-accent px-8 py-3 rounded-lg font-semibold hover:bg-accent hover:text-white transition-all"
            >
              Get Resume
            </Button>
          </div>
        </div>
        
        {/* Code Block */}
        <div className="max-w-2xl mx-auto animate-slideInUp" ref={animationRef}>
          <div className="code-block rounded-xl p-6 text-left">
            <div className="flex items-center mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>
            <pre className="text-sm text-slate-300 font-mono overflow-x-auto">
{`const coder = {
  name: 'Shaik Mohammad Yaseen',
  skills: ['React', 'NextJS', 'Redux', 'Express', 'MySQL', 'MongoDB', 'NodeJs'],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  hireable: function() {
    return (
      this.hardWorker &&
      this.problemSolver &&
      this.skills.length >= 5
    );
  }
};`}
            </pre>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 gradient-bg rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 gradient-bg rounded-full opacity-10 animate-pulse-slow"></div>
    </section>
  );
}
