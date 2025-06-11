
import { Card, CardContent } from '@/components/ui/card';
import { Code2, Database, Globe, Smartphone, Server, GitBranch, Users, Lightbulb } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      name: "Frontend Development",
      icon: Globe,
      skills: ["React", "Next.js", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS", "Redux", "Zustand"]
    },
    {
      name: "Backend Development",
      icon: Server,
      skills: ["Node.js", "Express.js", "Python", "Django", "RESTful APIs", "GraphQL", "gRPC"]
    },
    {
      name: "Mobile Development",
      icon: Smartphone,
      skills: ["React Native", "Flutter", "Swift", "Kotlin"]
    },
    {
      name: "Databases",
      icon: Database,
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "SQL", "NoSQL"]
    },
    {
      name: "Version Control",
      icon: GitBranch,
      skills: ["Git", "GitHub", "GitLab", "Bitbucket"]
    },
    {
      name: "DevOps & Cloud",
      icon: Users,
      skills: ["Docker", "Kubernetes", "AWS", "Azure", "CI/CD", "Jenkins", "Terraform"]
    },
    {
      name: "Other",
      icon: Lightbulb,
      skills: ["Data Structures", "Algorithms", "System Design", "Object-Oriented Programming", "Design Patterns"]
    },
    {
      name: "Programming Languages",
      icon: Code2,
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "C#", "Go", "Rust"]
    }
  ];

  const softSkills = [
    "Problem Solving", "Team Collaboration", "Communication", "Adaptability",
    "Critical Thinking", "Leadership", "Time Management", "Creativity"
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 sm:right-20 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 sm:left-20 w-56 h-56 sm:w-80 sm:h-80 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 animate-fade-in">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-xl lg:max-w-2xl mx-auto animate-fade-in delay-200 px-4">
            A comprehensive overview of my technical expertise and development capabilities
          </p>
        </div>

        {/* Technical Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-2xl transition-all duration-500 flex flex-col group card-glow hover:scale-105 animate-fade-in border-border/50" style={{ animationDelay: `${index * 100}ms` }}>
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center mb-3 sm:mb-4">
                  <category.icon className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-primary" />
                  <h3 className="text-lg sm:text-xl font-semibold gradient-text">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 sm:px-3 py-1 bg-gradient-to-r from-primary/20 to-accent/20 text-primary rounded-full text-xs font-medium border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Soft Skills Section */}
        <div className="mt-16 sm:mt-20">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 animate-fade-in">
              <span className="gradient-text">Soft Skills</span>
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-lg mx-auto animate-fade-in delay-200 px-4">
              Essential interpersonal and professional skills that complement my technical abilities
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto text-center">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="skill-tag animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
