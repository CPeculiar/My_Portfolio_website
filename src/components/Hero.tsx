import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8 bg-background"
    >
      {/* Background animations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-24 h-24 sm:w-32 sm:h-32 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 sm:w-48 sm:h-48 bg-accent/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 sm:w-24 sm:h-24 bg-primary/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        {/* Extra animated circles for more depth */}
        <div className="absolute top-32 right-1/3 w-20 h-20 sm:w-28 sm:h-28 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute bottom-32 left-1/4 w-18 h-18 sm:w-26 sm:h-26 bg-emerald-500/10 rounded-full blur-2xl animate-pulse delay-300"></div>
      </div>

      <div className="container mx-auto text-center relative z-10 max-w-5xl animate-fade-in">
        <header className="mb-8 animate-fade-in delay-100">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight transition-all duration-700">
            <span className="gradient-text">Peculiar</span>
            <br />
            <span className="text-foreground">Chukwudi</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl font-semibold text-primary animate-fade-in delay-200">
            Fullstack Developer | Business Strategist | Creative Innovator 
          </p>
        </header>

        <div className="flex flex-wrap justify-center gap-2 mb-6 sm:mb-10 px-4 animate-fade-in delay-300">
          {[
            'React', 'TypeScript', 'Node.js', 'Django', 'PostgreSQL', 'Firebase'
          ].map((skill, idx) => (
            <span
              key={skill}
              className="skill-tag text-xs sm:text-sm bg-muted px-2 py-1 rounded transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              {skill}
            </span>
          ))}
        </div>

        <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-400">
          Multidisciplinary innovator bridging technology, creativity, and business strategy. 
            I build scalable web applications, craft elegant solutions that drive growth, inspire audiences, and transform ideas into reality.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4 animate-fade-in delay-500">
          <Button
            size="lg"
            onClick={() => scrollToSection('projects')}
            className="px-6 py-4 text-base sm:text-lg bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto shadow-lg hover:shadow-xl"
            aria-label="View My Projects"
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection('contact')}
            className="px-6 py-4 text-base sm:text-lg border-primary/50 text-primary hover:bg-primary/10 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto shadow-lg hover:shadow-xl"
            aria-label="Contact Me"
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
