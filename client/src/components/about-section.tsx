import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function AboutSection() {
  const animationRef = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll" ref={animationRef}>
          <h2 className="text-4xl font-bold mb-4">ABOUT ME</h2>
          <p className="text-xl text-slate-400 mb-8">Who I am?</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll" ref={useScrollAnimation()}>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              My name is Shaik Mohammad Yaseen. I am a professional and enthusiastic Frontend Engineer in my daily life. 
              I am a quick learner with a self-learning attitude. I love to learn and explore new technologies and am 
              passionate about problem-solving. I love almost all the stacks of web application development and love to 
              make the web more open to the world.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              My core skill is based on JavaScript and I love to do most of the things using JavaScript. I am available 
              for any kind of job opportunity that suits my skills and interests.
            </p>
          </div>
          
          <div className="animate-on-scroll text-center" ref={useScrollAnimation()}>
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&h=640" 
              alt="Shaik Mohammad Yaseen" 
              className="rounded-2xl shadow-2xl mx-auto w-80 h-80 object-cover border-4 border-accent/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
