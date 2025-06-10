
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download } from 'lucide-react';

const About = () => {
  const handleDownloadCV = () => {
    // Replace this URL with your actual Google Drive CV link
    const cvUrl = "https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing";
    window.open(cvUrl, '_blank');
  };

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-primary">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn more about my journey, passion, and what drives me as a developer
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face"
                    alt="Peculiar Chukwudi"
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Hello, I'm Peculiar!</h3>
              <p className="text-muted-foreground mb-4">
                I'm a passionate software developer with a strong foundation in modern web technologies. 
                My journey in programming began with a curiosity to understand how things work, and it has 
                evolved into a career dedicated to creating impactful solutions.
              </p>
              <p className="text-muted-foreground mb-4">
                I enjoy tackling complex challenges and transforming ideas into functional, user-friendly 
                applications. My approach combines technical expertise with creative problem-solving to 
                deliver results that exceed expectations.
              </p>
              <p className="text-muted-foreground mb-6">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or sharing knowledge with the developer community.
              </p>
            </div>

            <Button
              onClick={handleDownloadCV}
              className="px-6 py-3"
              size="lg"
            >
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
