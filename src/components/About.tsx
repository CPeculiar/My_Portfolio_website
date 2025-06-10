
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download } from 'lucide-react';

const About = () => {
  const handleDownloadCV = () => {
    // Create a temporary link element to download the CV
    const link = document.createElement('a');
    link.href = '/cv.pdf'; // This should be the path to your CV file in the public folder
    link.download = 'Peculiar_Chukwudi_CV.pdf'; // The filename for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 animate-fade-in">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in delay-200">
            Learn more about my journey, passion, and what drives me as a developer
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6 animate-fade-in">
            <Card className="overflow-hidden card-glow hover:scale-105 transition-all duration-500 group">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face"
                    alt="Peculiar Chukwudi"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6 animate-fade-in delay-300">
            <Card className="card-glow hover:scale-105 transition-all duration-500 bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-3xl font-semibold mb-6 gradient-text">Hello, I'm Peculiar!</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    I'm a passionate software developer with a strong foundation in modern web technologies. 
                    My journey in programming began with a curiosity to understand how things work, and it has 
                    evolved into a career dedicated to creating impactful solutions.
                  </p>
                  <p className="leading-relaxed">
                    I enjoy tackling complex challenges and transforming ideas into functional, user-friendly 
                    applications. My approach combines technical expertise with creative problem-solving to 
                    deliver results that exceed expectations.
                  </p>
                  <p className="leading-relaxed">
                    When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                    projects, or sharing knowledge with the developer community.
                  </p>
                </div>

                <div className="mt-8">
                  <Button
                    onClick={handleDownloadCV}
                    className="px-8 py-4 text-lg bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                    size="lg"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download CV
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
