import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ExperienceSection from "@/components/experience-section";
import SkillsSection from "@/components/skills-section";
import ProjectsSection from "@/components/projects-section";
import EducationSection from "@/components/education-section";
import BlogSection from "@/components/blog-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <div className="h-screen bg-background text-foreground overflow-hidden">
      <div className="h-full overflow-y-auto scroll-smooth scroll-container" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <style>{`
          .scroll-container::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        <div>
          <Navigation />
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <SkillsSection />
          <ProjectsSection />
          <EducationSection />
          <BlogSection />
          <ContactSection />
          
          {/* Footer */}
          <footer className="bg-background py-8 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <p className="text-slate-400">
                © Developer Portfolio by{" "}
                <span className="gradient-text hover:text-accent transition-colors cursor-pointer">
                  Shaik Mohammad Yaseen
                </span>
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
