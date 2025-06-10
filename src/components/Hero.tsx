
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-24 h-24 sm:w-32 sm:h-32 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 sm:w-48 sm:h-48 bg-accent/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 sm:w-24 sm:h-24 bg-primary/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto text-center relative z-10 max-w-5xl">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="gradient-text">Peculiar</span>
            <br />
            <span className="text-foreground">Chukwudi</span>
          </h1>
        </div>
        
        <div className="mb-6 sm:mb-8">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4 px-2">
            <span className="text-primary">Frontend</span> & <span className="text-accent">Backend</span> Developer
          </p>
          <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mb-4 sm:mb-6 px-4">
            <span className="skill-tag text-xs sm:text-sm">React</span>
            <span className="skill-tag text-xs sm:text-sm">TypeScript</span>
            <span className="skill-tag text-xs sm:text-sm">Node.js</span>
            <span className="skill-tag text-xs sm:text-sm">Tailwind CSS</span>
          </div>
        </div>
        
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-8 sm:mb-12 max-w-xl lg:max-w-2xl mx-auto leading-relaxed px-4">
          Crafting beautiful, functional web experiences with modern technologies. 
          I turn complex problems into elegant solutions that users love.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
          <Button
            size="lg"
            onClick={() => scrollToSection('projects')}
            className="px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection('contact')}
            className="px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg border-primary/50 text-primary hover:bg-primary/10 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
