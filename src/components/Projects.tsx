
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import FALATA from '/falata.png';
import PORTFOLIO from '/portfolio.png';
import INSURANCE from '/insurance.png';
import Payment from '/payment.png';
import HR from '/HR.png';
import OUTSOURCE from '/outsource.png';

const Projects = () => {
  const projects = [
    {
      title: "Leadership and Tech Academy Website", 
      description: "A dynamic educational platform, designed for Future Leadership and Tech Academy, which features basic information about the Academy and an application form.",
      technologies: ["React", "Typescript", "Firebase", "Tailwind CSS"],
      image: FALATA,
      isPublic: true,
      liveUrl: "https://www.futureafricaleadandtech.org/",
      codeUrl: "https://github.com/CPeculiar/Future-Africa-Leadership-and-Tech-Academy"
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing my skills, projects, and experience. Built with React and Tailwind CSS.",
      technologies: ["React", "Typescript", "Firebase", "Tailwind CSS"],
      image: PORTFOLIO,
      isPublic: true,
      liveUrl: "https://peculiarchukwudi.vercel.app/",
      codeUrl: "https://github.com/CPeculiar/peculiar-portfolio-forge"
    },
    {
      title: "Outsourcing HR Management System",
      description: "A full-featured outsourcing HR management system designed to streamline employee outsourcing operations and for internal use with restricted access.",
      technologies: ["React", "Python", "PostgreSQL", "Typescript"],
      image: OUTSOURCE,
      isPublic: false,
      restrictedReason: "Internal company tool - restricted access"
    },
    {
      title: "HR Employee Management System",
      description: "A complete HR management system with employee and events management, PayStack integration, etc.",
      technologies: ["React", "Typescript", "Django", "PostgreSQL"],
      image: HR,
      isPublic: false,
      restrictedReason: "Proprietary company software"
    },
    {
      title: "Commercial Payment Solution",
      description: "A comprehensive payment solution for commercial transactions, featuring secure payment processing.",
      technologies: ["React", "Typescript", "Django", "PostgreSQL"],
      image: Payment,
      isPublic: false,
      liveUrl: "https://example.com",
      codeUrl: "https://github.com/peculiar/weather-app"
    },
    {
      title: "Insurance Claims Portal",
      description: "An insurance claims management portal that simplifies the claims process for users and administrators.",
      technologies: ["React", "Typescript", "Redux", "Django"],
      image: INSURANCE,
      isPublic: false,
      restrictedReason: "Client-specific solution"
    },
    {
      title: "E-Commerce Dashboard",
      description: "A comprehensive e-commerce management dashboard with analytics, inventory management, and order processing capabilities.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop",
      isPublic: true,
      liveUrl: "https://example-ecommerce.com",
      codeUrl: "https://github.com/peculiar/ecommerce-dashboard"
    },
    {
      title: "Real Estate Platform",
      description: "A modern real estate platform connecting buyers, sellers, and agents with advanced search and listing features.",
      technologies: ["Vue.js", "Laravel", "MySQL", "Redis"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop",
      isPublic: true,
      liveUrl: "https://example-realestate.com",
      codeUrl: "https://github.com/peculiar/realestate-platform"
    },
    {
      title: "Learning Management System",
      description: "A comprehensive LMS platform for educational institutions with course management, student tracking, and assessment tools.",
      technologies: ["Angular", "Django", "PostgreSQL", "Docker"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
      isPublic: false,
      restrictedReason: "Educational institution proprietary system"
    },
    {
      title: "Healthcare Management System",
      description: "A complete healthcare management solution for hospitals and clinics with patient records, appointment scheduling, and billing.",
      technologies: ["React", "Spring Boot", "Oracle", "Microservices"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=300&fit=crop",
      isPublic: false,
      restrictedReason: "HIPAA compliant - healthcare data protection"
    },
    {
      title: "Social Media Analytics Tool",
      description: "An advanced social media analytics platform providing insights, engagement metrics, and campaign performance tracking.",
      technologies: ["React", "Python", "Apache Kafka", "ElasticSearch"],
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=500&h=300&fit=crop",
      isPublic: true,
      liveUrl: "https://example-analytics.com",
      codeUrl: "https://github.com/peculiar/social-analytics"
    },
    {
      title: "Financial Trading Platform",
      description: "A sophisticated trading platform with real-time market data, portfolio management, and algorithmic trading capabilities.",
      technologies: ["React", "WebSocket", "Redis", "Docker"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop",
      isPublic: false,
      restrictedReason: "Financial services - regulatory compliance required"
    },
    {
      title: "Supply Chain Management",
      description: "An enterprise supply chain management system with inventory tracking, vendor management, and logistics optimization.",
      technologies: ["Angular", "ASP.NET Core", "SQL Server", "Azure"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop",
      isPublic: true,
      liveUrl: "https://example-supply.com",
      codeUrl: "https://github.com/peculiar/supply-chain"
    },
    {
      title: "Restaurant Management System",
      description: "A complete restaurant management solution with POS integration, inventory management, and customer loyalty programs.",
      technologies: ["Vue.js", "Node.js", "MongoDB", "Stripe API"],
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&h=300&fit=crop",
      isPublic: true,
      liveUrl: "https://example-restaurant.com",
      codeUrl: "https://github.com/peculiar/restaurant-management"
    },
    {
      title: "Event Management Platform",
      description: "A comprehensive event management platform with ticket sales, attendee management, and virtual event capabilities.",
      technologies: ["React", "Django", "PostgreSQL", "AWS"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop",
      isPublic: false,
      restrictedReason: "Client proprietary event management solution"
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
