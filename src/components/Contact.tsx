
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can integrate with a form service or backend here
  };

  const contactInfo = [
    {
      title: "Email",
      value: "peculiar.chukwudi@email.com",
      href: "mailto:peculiar.chukwudi@email.com",
      color: "text-blue-400"
    },
    {
      title: "Phone",
      value: "+234 123 456 7890",
      href: "tel:+2341234567890",
      color: "text-green-400"
    },
    {
      title: "LinkedIn",
      value: "linkedin.com/in/peculiar-chukwudi",
      href: "https://linkedin.com/in/peculiar-chukwudi",
      color: "text-purple-400"
    },
    {
      title: "GitHub",
      value: "github.com/peculiar-chukwudi",
      href: "https://github.com/peculiar-chukwudi",
      color: "text-orange-400"
    },
    {
      title: "Location",
      value: "Available for Remote Work",
      href: null,
      color: "text-emerald-400"
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 animate-fade-in">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-xl lg:max-w-2xl mx-auto animate-fade-in delay-200 px-4">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          <Card className="card-glow hover:scale-105 transition-all duration-500 animate-fade-in">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-xl sm:text-2xl gradient-text">Send me a message</CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 pt-0">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground text-sm sm:text-base">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    required
                    className="bg-background/50 border-border/50 focus:border-primary/50 transition-all duration-300 text-sm sm:text-base"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground text-sm sm:text-base">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    className="bg-background/50 border-border/50 focus:border-primary/50 transition-all duration-300 text-sm sm:text-base"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground text-sm sm:text-base">Message</Label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or just say hello!"
                    required
                    className="flex min-h-[100px] sm:min-h-[120px] w-full rounded-md border border-border/50 bg-background/50 px-3 py-2 text-sm sm:text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 resize-none"
                  />
                </div>
                
                <Button type="submit" className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-300 hover:scale-105 text-sm sm:text-base py-3 sm:py-4">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="card-glow hover:scale-105 transition-all duration-500 animate-fade-in delay-200">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-xl sm:text-2xl gradient-text">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6 pt-0">
                {contactInfo.map((info, index) => (
                  <div key={index} className="group">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 rounded-lg bg-gradient-to-r from-background/50 to-background/30 border border-border/30 hover:border-border/60 transition-all duration-300 hover:scale-105 gap-2 sm:gap-0">
                      <span className="font-medium text-xs sm:text-sm text-muted-foreground">
                        {info.title}
                      </span>
                      {info.href ? (
                        <a
                          href={info.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`text-xs sm:text-sm hover:underline transition-colors duration-300 ${info.color} hover:brightness-125 break-all sm:break-normal`}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className={`text-xs sm:text-sm ${info.color}`}>{info.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="card-glow hover:scale-105 transition-all duration-500 animate-fade-in delay-300">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-xl sm:text-2xl gradient-text">Let's Work Together</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                  I'm always interested in new opportunities and exciting projects. 
                  Whether you have a specific project in mind or just want to explore 
                  possibilities, feel free to reach out.
                </p>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  I typically respond within 24 hours and look forward to discussing 
                  how we can work together to bring your ideas to life.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
