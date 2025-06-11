
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import FALATA from '/falata.png';
import PORTFOLIO from '/portfolio.png';
import INSURANCE from '/insurance.png';
import Payment from '/payment.png';
import HR from '/HR.png';
import OUTSOURCE from '/outsource.png';
import TLBC24 from '/tlbc24.png';
import TLBC from '/tlbc.png';
import CJART from '/cjart.png';
import APP from '/app.png';
import Data from '/data.png';
import Portal from '/cjportal.png';
import Media from '/media.png';
import Tech from '/tech.png';
import CCP from '/ccp.png';

const Projects = () => {
  const projects = [
    {
      title: "Leadership and Tech Academy Website", 
      description: "A dynamic educational platform, designed for Future Leadership and Tech Academy, which features basic information about the Academy and an application form.",
      technologies: ["React", "Tailwind CSS", "Typescript", "Firebase" ],
      image: FALATA,
      isPublic: true,
      liveUrl: "https://www.futureafricaleadandtech.org/",
      codeUrl: "https://github.com/CPeculiar/Future-Africa-Leadership-and-Tech-Academy"
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing my skills, projects, and experience. Built with React and Tailwind CSS.",
      technologies: ["React", "Tailwind CSS", "Typescript", "Firebase" ],
      image: PORTFOLIO,
      isPublic: true,
      liveUrl: "https://peculiarchukwudi.vercel.app/",
      codeUrl: "https://github.com/CPeculiar/peculiar-portfolio-forge"
    },
    {
      title: "Outsourcing HR Management System",
      description: "A full-featured outsourcing HR management system designed to streamline employee outsourcing operations and for internal use with restricted access.",
      technologies: ["React", "Django", "PostgreSQL", "Typescript"],
      image: OUTSOURCE,
      isPublic: false,
      restrictedReason: "Internal company portal - restricted access"
    },
    {
      title: "HR Employee Management System",
      description: "A centralized HR platform for managing employees, attendance, appraisals etc with Paystack integration.",
      technologies: ["React", "Tailwind CSS", "Django", "PostgreSQL"],
      image: HR,
      isPublic: false,
      restrictedReason: "Proprietary organisation software"
    },
    {
      title: "Commercial Payment Solution",
      description: "A comprehensive payment solution for commercial transactions, featuring secure payment processing.",
      technologies: ["React", "Typescript", "Django", "PostgreSQL"],
      image: Payment,
      isPublic: false,
      restrictedReason: "Proprietary enterprise software"
    },
    {
      title: "Insurance Claims Portal",
      description: "An insurance claims management portal that simplifies the insurance claims process for admins.",
      technologies: ["React", "Typescript", "Redux", "Django"],
      image: INSURANCE,
      isPublic: false,
      restrictedReason: "For internal use only - restricted access"
    },
    {
      title: "Church Event Website",
      description: "A church event management website for The Lord's Brethren Church featuring event registration.",
      technologies: ["React", "JavaScript",  "Email JS", "Firebase"],
      image: TLBC24,
      isPublic: true,
      liveUrl: "https://tlbc.thelordsbrethrenchurch.org/",
      codeUrl: "https://github.com/CPeculiar/tlbcPortal"
    },
    {
      title: "CJ ART Company Website",
      description: "A modern company website for showcasing services, team, and contact information with a sleek design.",
      technologies: ["React", "JavaScript",  "Email JS", "Firebase"],
      image: CJART,
      isPublic: true,
      liveUrl: "https://cj-art.vercel.app/",
      codeUrl: "https://github.com/CPeculiar/CJ-ART"
    },
    {
      title: "TLBC Application Platform",
      description: "An application platform for The Lord's Brethren Church, designed to manage applications for church programs.",
      technologies: ["React", "JavaScript",  "Email JS", "Firebase"],
      image: APP,
      isPublic: false,
       restrictedReason: "For internal use only - restricted access"
    },
    {
      title: "TLBC Data Management System",
      description: "An internal data management system for The Lord's Brethren Church, featuring member management, event scheduling, and resource allocation.",
      technologies: ["React", "JavaScript",  "Email JS", "Firebase"],
      image: Data,
      isPublic: false,
       restrictedReason: "For internal use only - restricted access"
    },
    {
      title: "TLBC Church Website",
       description: "A modern church website for The Lord's Brethren Church, featuring service schedules, events, sermons, and contact information.",      
      technologies: ["React", "JavaScript",  "Email JS", "Firebase"],
      image: TLBC,
      isPublic: true,
      liveUrl: "https://thelordsbrethrenchurch.org/",
      codeUrl: "https://github.com/CPeculiar/tlbc-website"
    },
    {
      title: "CJ ART Company's Portal",
      description: "A consolidated portal for managing employee records, payroll, and performance reviews with secure access controls.",
      technologies: ["React", "JavaScript",  "Email JS", "Firebase"],
      image: Portal,
      isPublic: false,
      restrictedReason: "Proprietary enterprise software"
    },
    {
      title: "Roadside Media Agency Website",
      description: "Rodeside media agency website showcasing services, portfolio, contact information and client testimonials with a modern design.",
      technologies: ["React", "JavaScript",  "Email JS", "Firebase"],
      image: Media,
      isPublic: true,
      liveUrl: "https://roadside-media-agency.vercel.app/",
      codeUrl: "https://github.com/CPeculiar/Roadside-Media-Agency"
    },
    {
      title: "Tech Academy Website",
      description: "A tech academy website for FALATech Academy, featuring course information and listings, the academy’s profile, and an application form.",
      technologies: ["React", "JavaScript",  "Email JS", "Firebase"],
      image: Tech,
      isPublic: true,
      liveUrl: "https://pef-tech-academy.vercel.app/",
      codeUrl: "https://github.com/CPeculiar/Tech-Academy"
    },
    {
      title: "Consolidated Collection Portal",
      description: "A centralized platform designed to manage internal collection processes efficiently with secure access controls.",
      technologies: ["React", "Typescript", "Django", "PostgreSQL"],
      image: CCP,
      isPublic: false,
      restrictedReason: "For internal use only - restricted access"
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

                <CardFooter className="flex flex-col sm:flex-row gap-2 p-3 sm:p-4 lg:p-6 pt-0">
                {project.isPublic ? (
                  <>
                    <Button
                      onClick={() => handleProjectClick(project)}
                     className="w-full sm:flex-1 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-300 hover:scale-105 text-xs sm:text-sm py-2 px-3 sm:py-3 h-8 sm:h-auto"
                    >
                      View Live
                    </Button>
                    {project.codeUrl && (
                      <Button
                        variant="outline"
                        onClick={() => handleCodeClick(project.codeUrl)}
                       className="w-full sm:flex-1 border-primary/30 hover:border-primary/60 hover:bg-primary/10 transition-all duration-300 text-xs sm:text-sm py-2 px-3 sm:py-3 h-8 sm:h-auto"
                      >
                        View Code
                      </Button>
                    )}
                  </>
                ) : (
                  <Button
                    disabled
                    className="w-full cursor-not-allowed opacity-50 text-xs sm:text-sm py-2 px-3 sm:py-3 h-8 sm:h-auto"
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
