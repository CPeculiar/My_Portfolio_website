
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment integration, and admin dashboard.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      isPublic: true,
      liveUrl: "https://example.com",
      codeUrl: "https://github.com/peculiar/ecommerce"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, file sharing, and team collaboration features.",
      technologies: ["Vue.js", "Firebase", "Socket.io"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      isPublic: true,
      liveUrl: "https://example.com",
      codeUrl: "https://github.com/peculiar/taskmanager"
    },
    {
      title: "Internal Analytics Dashboard",
      description: "A comprehensive analytics dashboard built for internal company use, featuring data visualization and reporting tools.",
      technologies: ["React", "Python", "PostgreSQL", "D3.js"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      isPublic: false,
      restrictedReason: "Internal company tool - restricted access"
    },
    {
      title: "Employee Management System",
      description: "A complete HR management system with employee tracking, payroll integration, and performance analytics.",
      technologies: ["Angular", "Java", "MySQL"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      isPublic: false,
      restrictedReason: "Proprietary company software"
    },
    {
      title: "Weather Forecast App",
      description: "A beautiful weather application with location-based forecasts, interactive maps, and weather alerts.",
      technologies: ["React Native", "OpenWeather API", "Redux"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      isPublic: true,
      liveUrl: "https://example.com",
      codeUrl: "https://github.com/peculiar/weather-app"
    },
    {
      title: "Inventory Management Portal",
      description: "A sophisticated inventory tracking system designed for warehouse operations and supply chain management.",
      technologies: ["Laravel", "MySQL", "Vue.js"],
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop",
      isPublic: false,
      restrictedReason: "Client-specific solution"
    }
  ];

  const handleProjectClick = (project: any) => {
    if (project.isPublic && project.liveUrl) {
      window.open(project.liveUrl, '_blank');
    }
  };

  const handleCodeClick = (codeUrl: string) => {
    window.open(codeUrl, '_blank');
  };

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 sm:right-20 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 sm:left-20 w-56 h-56 sm:w-80 sm:h-80 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 animate-fade-in">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-xl lg:max-w-2xl mx-auto animate-fade-in delay-200 px-4">
            A showcase of my work, from public projects to enterprise solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="hover:shadow-2xl transition-all duration-500 flex flex-col group card-glow hover:scale-105 animate-fade-in border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 sm:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-lg sm:text-xl group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="flex-grow p-4 sm:p-6 pt-0">
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 sm:px-3 py-1 bg-gradient-to-r from-primary/20 to-accent/20 text-primary rounded-full text-xs font-medium border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {!project.isPublic && (
                  <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-400/30 rounded-lg p-3 mb-3 sm:mb-4 backdrop-blur-sm">
                    <p className="text-amber-400 text-xs sm:text-sm font-medium flex items-center">
                      🔒 Restricted Access
                    </p>
                    <p className="text-amber-300/80 text-xs mt-1">
                      {project.restrictedReason}
                    </p>
                  </div>
                )}
              </CardContent>

              <CardFooter className="flex gap-2 p-4 sm:p-6 pt-0">
                {project.isPublic ? (
                  <>
                    <Button
                      onClick={() => handleProjectClick(project)}
                      className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-300 hover:scale-105 text-xs sm:text-sm py-2 sm:py-3"
                    >
                      View Live
                    </Button>
                    {project.codeUrl && (
                      <Button
                        variant="outline"
                        onClick={() => handleCodeClick(project.codeUrl)}
                        className="flex-1 border-primary/30 hover:border-primary/60 hover:bg-primary/10 transition-all duration-300 text-xs sm:text-sm py-2 sm:py-3"
                      >
                        View Code
                      </Button>
                    )}
                  </>
                ) : (
                  <Button
                    disabled
                    className="flex-1 cursor-not-allowed opacity-50 text-xs sm:text-sm py-2 sm:py-3"
                    title={project.restrictedReason}
                  >
                    Restricted Access
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
