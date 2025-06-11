
import { Card, CardContent } from '@/components/ui/card';
import { Code2, Database, Globe, Lightbulb } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        "React", "Next.js", "JavaScript (ES6+)", "TypeScript", "HTML5",
        "CSS3", "Tailwind CSS", "Bootstrap CSS", "Redux"
      ],
      gradient: "from-blue-500/20 to-cyan-500/20",
      border: "border-blue-500/30",
      iconBg: "bg-blue-500/20",
      textColor: "text-blue-200",
      icon: Globe
    },
    {
      title: "Backend Development",
      skills: [
        "Node.js", "Python", "Express.js", "REST APIs", "Django",
        "PostgreSQL", "MongoDB", "Firebase", "Supabase"
      ],
      gradient: "from-purple-500/20 to-violet-500/20",
      border: "border-purple-500/30",
      iconBg: "bg-purple-500/20",
      textColor: "text-purple-200",
      icon: Database
    },
    {
      title: "Tools & Technologies",
      skills: [
        "Git", "GitHub", "GitLab", "Docker", "AWS", "Linux", "CI/CD",
        "Jest", "Webpack", "Vite", "Figma", "Vercel", "Netlify"
      ],
      gradient: "from-orange-500/20 to-red-500/20",
      border: "border-orange-500/30",
      iconBg: "bg-orange-500/20",
      textColor: "text-orange-200",
      icon: Code2
    },
    {
      title: "Soft Skills",
      skills: [
        "Problem Solving", "Team Collaboration", "Project Management",
        "Communication", "Code Review", "Mentoring", "Adaptability"
      ],
      gradient: "from-emerald-500/20 to-teal-500/20",
      border: "border-emerald-500/30",
      iconBg: "bg-emerald-500/20",
      textColor: "text-emerald-200",
      icon: Lightbulb
    }
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className={`hover:shadow-2xl transition-all duration-500 flex flex-col group card-glow hover:scale-105 animate-fade-in bg-gradient-to-br ${category.gradient} ${category.border} border`} 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className={`p-2 rounded-lg ${category.iconBg} mr-3`}>
                    <category.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${category.textColor}`} />
                  </div>
                  <h3 className={`text-lg sm:text-xl font-semibold ${category.textColor}`}>{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-2 sm:px-3 py-1 ${category.gradient} ${category.textColor} rounded-full text-xs font-medium ${category.border} border hover:scale-105 transition-all duration-300`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
