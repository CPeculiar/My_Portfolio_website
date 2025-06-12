
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download } from 'lucide-react';
import IMG from '/dp.jpg';

const About = () => {
  const handleDownloadCV = () => {
    // Create a temporary link element to download the CV
    const link = document.createElement('a');
    link.href = '/Peculiar_Chukwudi_CV.pdf'; // This should be the path to your CV file in the public folder
    link.download = 'Peculiar_Chukwudi_CV.pdf'; // The filename for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 sm:right-20 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 animate-fade-in">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-xl lg:max-w-2xl mx-auto animate-fade-in delay-200 px-4">
            Learn more about my journey, passion, and what drives me as a developer
          </p>
        </div>

          {/* Mobile image display - shows only on small screens */}
          <div className="lg:hidden mb-8 animate-fade-in">
          <Card className="overflow-hidden card-glow hover:scale-105 transition-all duration-500 group max-w-sm mx-auto">
            <CardContent className="p-0">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative overflow-hidden">
                <img
                  src={IMG}
                  alt="Peculiar Chukwudi"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center max-w-6xl mx-auto">
           {/* Desktop image - hidden on mobile */}
          <div className="space-y-6 animate-fade-in order-2 lg:order-1 hidden lg:block">
             <Card className="overflow-hidden card-glow hover:scale-105 transition-all duration-500 group">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative overflow-hidden">
                  <img
                    src={IMG}
                    alt="Peculiar Chukwudi"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6 animate-fade-in delay-300 order-1 lg:order-2">
            <Card className="card-glow hover:scale-105 transition-all duration-500 bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm">
              <CardContent className="p-4 sm:p-6 lg:p-8">
              <h3 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 gradient-text">Hello, I'm Peculiar!</h3>
                <div className="space-y-3 sm:space-y-4 text-muted-foreground">
                  <p className="leading-relaxed text-sm sm:text-base">
                    I'm a multidisciplinary innovator who bridges the gap between technology, creativity, and business. 
                    As a full-stack developer with expertise spanning from React and Python to mobile development 
                    and cloud technologies, I bring technical excellence to every project.
                  </p>
                  <p className="leading-relaxed text-sm sm:text-base">
                    Beyond coding, I'm a creative force in design, content creation, and multimedia production. 
                    My entrepreneurial spirit drives me to identify market opportunities and develop growth strategies 
                    that disrupt traditional approaches. I combine strategic thinking with hands-on execution to 
                    transform ideas into market-ready solutions.
                  </p>
                    <p className="leading-relaxed text-sm sm:text-base">
                    When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                    projects, mentoring developers or sharing knowledge with the developer community.
                     I believe in the power of authentic communication and collaborative innovation.
                  </p>
                  <p className="leading-relaxed text-sm sm:text-base">
                    My unique blend of technical expertise, creative vision and business acumen allows me to approach 
                    challenges from multiple angles and deliver solutions that are both functionally robust and emotionally resonant.
                  </p>
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
