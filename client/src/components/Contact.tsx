import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Send, Phone } from "lucide-react";
import { SiLinkedin } from "react-icons/si";

export default function Contact() {
  const email = "llodhiyameet@gmail.com";
  const linkedinUrl = "https://www.linkedin.com/in/meetlodhiya";
  const phone = "+91 9824385284";

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
    console.log('Email clicked');
  };

  const handleLinkedInClick = () => {
    window.open(linkedinUrl, '_blank', 'noopener,noreferrer');
    console.log('LinkedIn clicked');
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${phone.replace(/\s/g, '')}`;
    console.log('Phone clicked');
  };

  return (
    <section className="py-24 relative" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in" data-testid="text-contact-title">
            <span className="text-primary">{'>'}</span> Get In Touch <span className="text-primary">{'_'}</span>
          </h2>
          
          <Card className="p-8 border-primary/20 animate-slide-up">
            <div className="space-y-6">
              <div className="text-center space-y-4 mb-8">
                <p className="text-card-foreground leading-relaxed">
                  Interested in collaboration, consultation, or just want to discuss cybersecurity? 
                  Feel free to reach out through any of the channels below.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="p-6 border-primary/20 hover-elevate animate-fade-in-delay-1">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-md border border-primary/20 animate-pulse-glow">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-primary mb-2">Email</h3>
                      <p className="text-sm text-muted-foreground mb-3 font-mono break-all" data-testid="text-email">
                        {email}
                      </p>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={handleEmailClick}
                        className="border-primary/30 text-primary hover:bg-primary/10"
                        data-testid="button-email"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Send Email
                      </Button>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 border-primary/20 hover-elevate animate-fade-in-delay-2">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-md border border-primary/20 animate-pulse-glow">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-primary mb-2">Phone</h3>
                      <p className="text-sm text-muted-foreground mb-3 font-mono" data-testid="text-phone">
                        {phone}
                      </p>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={handlePhoneClick}
                        className="border-primary/30 text-primary hover:bg-primary/10"
                        data-testid="button-phone"
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Call Now
                      </Button>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 border-primary/20 hover-elevate animate-fade-in-delay-3">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-md border border-primary/20 animate-pulse-glow">
                      <SiLinkedin className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-primary mb-2">LinkedIn</h3>
                      <p className="text-sm text-muted-foreground mb-3 font-mono break-all" data-testid="text-linkedin">
                        linkedin.com/in/meetlodhiya
                      </p>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={handleLinkedInClick}
                        className="border-primary/30 text-primary hover:bg-primary/10"
                        data-testid="button-linkedin"
                      >
                        <Linkedin className="w-4 h-4 mr-2" />
                        Connect
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
              
              <div className="mt-8 p-6 bg-card/50 rounded-md border border-primary/10">
                <div className="text-sm text-muted-foreground font-mono space-y-1">
                  <p><span className="text-primary">phantompawn@security</span>:~$ echo "Let's build a more secure digital world together"</p>
                  <p className="pl-4 text-card-foreground">Let's build a more secure digital world together</p>
                  <p className="flex items-center gap-2">
                    <span className="text-primary">└─$</span>
                    <span className="animate-pulse">_</span>
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
