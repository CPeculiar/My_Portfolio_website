import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

const Hero2 = () => {
  const [currentRole, setCurrentRole] = useState(0);
  
  const roles = [
    "Full-Stack Developer",
    "Creative Innovator", 
    "Business Strategist",
    "Spoken Word Artist",
    "Tech Entrepreneur",
    "Digital Creator"
  ];

  const skillSets = [
    { category: "Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { category: "Backend", skills: ["Node.js", "Python", "Django", "PostgreSQL"] },
    { category: "Creative", skills: ["Video Editing", "Content Creation", "Figma"] },
    { category: "Business", skills: ["Strategy", "Growth Hacking", "Leadership"] }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-24 h-24 sm:w-32 sm:h-32 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 sm:w-48 sm:h-48 bg-accent/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 sm:w-24 sm:h-24 bg-primary/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        <div className="absolute top-32 right-1/3 w-20 h-20 sm:w-28 sm:h-28 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute bottom-32 left-1/4 w-18 h-18 sm:w-26 sm:h-26 bg-emerald-500/10 rounded-full blur-2xl animate-pulse delay-300"></div>
      </div>
      
      <div className="container mx-auto text-center relative z-10 max-w-6xl">
        <div className="mb-4 sm:mb-6 md:mb-8">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight px-2">
            <span className="gradient-text">Peculiar</span>
            <br />
            <span className="text-foreground">Chukwudi</span>
          </h1>
        </div>
        
        {/* Dynamic role display */}
        <div className="mb-4 sm:mb-6 md:mb-8">
          <div className="h-12 xs:h-14 sm:h-16 md:h-20 flex items-center justify-center">
            <p className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold px-2">
              <span className="text-primary transition-all duration-500 ease-in-out">
                {roles[currentRole]}
              </span>
            </p>
          </div>
          
          {/* Mobile-first skill display */}
          <div className="mb-4 sm:mb-6 px-2 xs:px-4">
            {/* Mobile: Show skills in a more compact grid */}
            <div className="block sm:hidden">
              <div className="grid grid-cols-2 gap-2 max-w-sm mx-auto">
                {skillSets.map((skillSet, index) => (
                  <div 
                    key={skillSet.category}
                    className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-2 border border-primary/20 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <h4 className="text-xs font-semibold text-primary mb-1 text-center">
                      {skillSet.category}
                    </h4>
                    <div className="flex flex-wrap justify-center gap-1">
                      {skillSet.skills.slice(0, 2).map((skill) => (
                        <span 
                          key={skill}
                          className="px-1.5 py-0.5 bg-background/50 rounded text-xs text-muted-foreground border border-primary/10"
                        >
                          {skill}
                        </span>
                      ))}
                      {skillSet.skills.length > 2 && (
                        <span className="px-1.5 py-0.5 bg-background/50 rounded text-xs text-muted-foreground/60 border border-primary/10">
                          +{skillSet.skills.length - 2}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop: Show full skill tags */}
            <div className="hidden sm:block space-y-3 md:space-y-4">
              {skillSets.map((skillSet, index) => (
                <div 
                  key={skillSet.category}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex flex-wrap justify-center gap-1 md:gap-2 items-center">
                    <span className="text-xs md:text-sm font-medium text-muted-foreground/80 mr-2">
                      {skillSet.category}:
                    </span>
                    {skillSet.skills.map((skill, skillIndex) => (
                      <span 
                        key={skill}
                        className="skill-tag text-xs md:text-sm transition-all duration-300 hover:scale-105"
                        style={{ 
                          animationDelay: `${(index * 150) + (skillIndex * 50)}ms`,
                          background: `linear-gradient(135deg, rgba(var(--primary-rgb), 0.1) 0%, rgba(var(--accent-rgb), 0.1) 100%)`
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mb-6 sm:mb-8 md:mb-12 space-y-3 sm:space-y-4">
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xs sm:max-w-xl lg:max-w-3xl mx-auto leading-relaxed px-2 xs:px-4">
            Multidisciplinary innovator bridging technology, creativity, and business strategy. 
            I craft elegant solutions that drive growth, inspire audiences, and transform ideas into reality.
          </p>
          
          {/* Key differentiators - Mobile responsive grid */}
          <div className="px-2 xs:px-4 animate-fade-in delay-1000">
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-2 sm:gap-3 max-w-sm sm:max-w-none mx-auto">
              <span className="px-2 xs:px-3 py-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full text-xs sm:text-sm font-medium border border-primary/30 text-center">
                🚀 Tech Entrepreneur
              </span>
              <span className="px-2 xs:px-3 py-1 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-full text-xs sm:text-sm font-medium border border-violet-500/30 text-center">
                🎤 Spoken Word Artist
              </span>
              <span className="px-2 xs:px-3 py-1 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full text-xs sm:text-sm font-medium border border-emerald-500/30 text-center">
                🎹 Keyboardist
              </span>
              <span className="px-2 xs:px-3 py-1 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full text-xs sm:text-sm font-medium border border-orange-500/30 text-center">
                📈 Growth Strategist
              </span>
            </div>
          </div>
        </div>
        
        <div className="px-2 xs:px-4 animate-fade-in delay-1200">
          {/* Mobile: Stack buttons vertically */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center max-w-sm sm:max-w-none mx-auto">
            <Button
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="px-4 xs:px-6 sm:px-8 py-3 xs:py-4 sm:py-6 text-sm xs:text-base sm:text-lg bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto shadow-lg hover:shadow-xl"
            >
              🔥 Explore My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('about')}
              className="px-4 xs:px-6 sm:px-8 py-3 xs:py-4 sm:py-6 text-sm xs:text-base sm:text-lg border-primary/50 text-primary hover:bg-primary/10 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              💡 Discover My Story
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="px-4 xs:px-6 sm:px-8 py-3 xs:py-4 sm:py-6 text-sm xs:text-base sm:text-lg border-accent/50 text-accent hover:bg-accent/10 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              🤝 Let's Connect
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;