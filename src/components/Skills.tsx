
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        "React", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3",
        "Tailwind CSS", "Bootstrap CSS", "Next.js","Redux", "Responsive Design" 
      ],
      gradient: "from-blue-500/20 to-cyan-500/20",
      border: "border-blue-500/30",
      iconBg: "bg-blue-500/20",
      textColor: "text-blue-200"
    },
    {
      title: "Backend Development",
      skills: [
        "Node.js", "Python", "Express.js", "REST APIs", "Django",
        "Database Design", "PostgreSQL", "MongoDB", "Firebase", "Supabase",
      ],
      gradient: "from-purple-500/20 to-violet-500/20",
      border: "border-purple-500/30",
      iconBg: "bg-purple-500/20",
      textColor: "text-purple-200"
    },
    {
      title: "Tools & Technologies",
      skills: [
        "Git", "Docker", "AWS", "Linux", "CI/CD",
        "Jest", "Webpack", "Vite", "Figma", "Vercel", "Netlify"
      ],
      gradient: "from-orange-500/20 to-red-500/20",
      border: "border-orange-500/30",
      iconBg: "bg-orange-500/20",
      textColor: "text-orange-200"
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
      textColor: "text-emerald-200"
    }
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 sm:w-48 sm:h-48 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 animate-fade-in">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-xl lg:max-w-2xl mx-auto animate-fade-in delay-200 px-4">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className={`card-glow hover:scale-105 transition-all duration-500 bg-gradient-to-br ${category.gradient} border ${category.border} backdrop-blur-sm group animate-fade-in`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="text-center p-4 sm:p-6">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-xl ${category.iconBg} flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-primary to-accent rounded-sm"></div>
                </div>
                <CardTitle className="text-lg sm:text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 hover:scale-105 ${category.textColor} border border-current/20 hover:border-current/40 hover:shadow-lg`}
                      style={{
                        background: `linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)`,
                      }}
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
