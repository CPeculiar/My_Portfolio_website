
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        "React", "TypeScript", "JavaScript", "HTML5", "CSS3",
        "Tailwind CSS", "Next.js", "Vue.js", "Responsive Design"
      ],
      gradient: "from-blue-500/20 to-cyan-500/20",
      border: "border-blue-500/30"
    },
    {
      title: "Backend Development",
      skills: [
        "Node.js", "Python", "Express.js", "REST APIs", "GraphQL",
        "Database Design", "PostgreSQL", "MongoDB", "Firebase"
      ],
      gradient: "from-green-500/20 to-emerald-500/20",
      border: "border-green-500/30"
    },
    {
      title: "Tools & Technologies",
      skills: [
        "Git", "Docker", "AWS", "Linux", "CI/CD",
        "Jest", "Webpack", "Vite", "Figma"
      ],
      gradient: "from-purple-500/20 to-pink-500/20",
      border: "border-purple-500/30"
    },
    {
      title: "Soft Skills",
      skills: [
        "Problem Solving", "Team Collaboration", "Project Management",
        "Communication", "Code Review", "Mentoring"
      ],
      gradient: "from-orange-500/20 to-red-500/20",
      border: "border-orange-500/30"
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className={`card-glow hover:scale-105 transition-all duration-300 bg-gradient-to-br ${category.gradient} border ${category.border} backdrop-blur-sm`}>
              <CardHeader>
                <CardTitle className="text-xl text-center text-foreground">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="skill-tag text-primary"
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
