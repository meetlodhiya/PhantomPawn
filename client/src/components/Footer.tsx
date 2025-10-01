import { Mail, Linkedin } from "lucide-react";
import { SiLinkedin } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleEmailClick = () => {
    window.location.href = 'mailto:llodhiyameet@gmail.com';
    console.log('Footer email clicked');
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/meetlodhiya', '_blank', 'noopener,noreferrer');
    console.log('Footer LinkedIn clicked');
  };

  return (
    <footer className="py-12 border-t border-primary/20 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground font-mono" data-testid="text-copyright">
                <span className="text-primary">phantompawn@security</span>:~$ echo "© {currentYear} PhantomPawn"
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                All rights reserved
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <button
                onClick={handleEmailClick}
                className="p-2 hover-elevate rounded-md border border-primary/20"
                aria-label="Email"
                data-testid="button-footer-email"
              >
                <Mail className="w-5 h-5 text-primary" />
              </button>
              <button
                onClick={handleLinkedInClick}
                className="p-2 hover-elevate rounded-md border border-primary/20"
                aria-label="LinkedIn"
                data-testid="button-footer-linkedin"
              >
                <SiLinkedin className="w-5 h-5 text-primary" />
              </button>
            </div>
          </div>
          
          <div className="mt-8 text-center space-y-2">
            <p className="text-xs text-muted-foreground italic">
              "Security is Myth"
            </p>
            <p className="text-sm text-card-foreground font-mono" data-testid="text-real-name">
              <span className="text-primary">{'>'}</span> Meet Lodhiya
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
