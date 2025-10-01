import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Terminal } from "lucide-react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Certifications", href: "#certifications" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    console.log('Navigation clicked:', href);
    setMobileMenuOpen(false);
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    console.log('Scroll to top');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover-elevate px-3 py-2 rounded-md"
            data-testid="button-logo"
          >
            <Terminal className="w-5 h-5 text-primary" />
            <span className="font-bold text-primary" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              PhantomPawn
            </span>
          </button>
          
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                size="sm"
                onClick={() => handleNavClick(item.href)}
                className="text-card-foreground hover:text-primary"
                data-testid={`link-nav-${item.name.toLowerCase()}`}
              >
                {item.name}
              </Button>
            ))}
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-menu-toggle"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-primary/20 bg-background">
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                className="w-full justify-start text-card-foreground hover:text-primary"
                onClick={() => handleNavClick(item.href)}
                data-testid={`link-mobile-${item.name.toLowerCase()}`}
              >
                <span className="text-primary mr-2">▹</span>
                {item.name}
              </Button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
