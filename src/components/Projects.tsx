
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment integration, and admin dashboard.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      isPublic: true,
      liveUrl: "https://example.com",
      codeUrl: "https://github.com/peculiar/ecommerce"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, file sharing, and team collaboration features.",
      technologies: ["Vue.js", "Firebase", "Socket.io"],
      isPublic: true,
      liveUrl: "https://example.com",
      codeUrl: "https://github.com/peculiar/taskmanager"
    },
    {
      title: "Internal Analytics Dashboard",
      description: "A comprehensive analytics dashboard built for internal company use, featuring data visualization and reporting tools.",
      technologies: ["React", "Python", "PostgreSQL", "D3.js"],
      isPublic: false,
      restrictedReason: "Internal company tool - restricted access"
    },
    {
      title: "Employee Management System",
      description: "A complete HR management system with employee tracking, payroll integration, and performance analytics.",
      technologies: ["Angular", "Java", "MySQL"],
      isPublic: false,
      restrictedReason: "Proprietary company software"
    },
    {
      title: "Weather Forecast App",
      description: "A beautiful weather application with location-based forecasts, interactive maps, and weather alerts.",
      technologies: ["React Native", "OpenWeather API", "Redux"],
      isPublic: true,
      liveUrl: "https://example.com",
      codeUrl: "https://github.com/peculiar/weather-app"
    },
    {
      title: "Inventory Management Portal",
      description: "A sophisticated inventory tracking system designed for warehouse operations and supply chain management.",
      technologies: ["Laravel", "MySQL", "Vue.js"],
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
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-primary">Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work, from public projects to enterprise solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-sm">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {!project.isPublic && (
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4">
                    <p className="text-amber-800 text-sm font-medium">
                      🔒 Restricted Access
                    </p>
                    <p className="text-amber-700 text-xs mt-1">
                      {project.restrictedReason}
                    </p>
                  </div>
                )}
              </CardContent>

              <CardFooter className="flex gap-2">
                {project.isPublic ? (
                  <>
                    <Button
                      onClick={() => handleProjectClick(project)}
                      className="flex-1"
                    >
                      View Live
                    </Button>
                    {project.codeUrl && (
                      <Button
                        variant="outline"
                        onClick={() => handleCodeClick(project.codeUrl)}
                        className="flex-1"
                      >
                        View Code
                      </Button>
                    )}
                  </>
                ) : (
                  <Button
                    disabled
                    className="flex-1 cursor-not-allowed"
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
