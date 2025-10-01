import { Card } from "@/components/ui/card";
import { Terminal } from "lucide-react";

export default function About() {
  return (
    <section className="py-24 relative" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in" data-testid="text-about-title">
            <span className="text-primary">$</span> whoami
          </h2>
          
          <Card className="p-8 border-primary/20 animate-slide-up">
            <div className="flex items-start gap-3 mb-4">
              <Terminal className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div className="flex-1">
                <div className="text-sm text-muted-foreground mb-2 font-mono">
                  phantompawn@security:~$ cat professional_summary.txt
                </div>
              </div>
            </div>
            
            <div className="space-y-4 pl-8 text-card-foreground leading-relaxed" data-testid="text-summary">
              <p>
                I am an aspiring Offensive Security Expert with nearly 2 years of hands-on experience in the field of cybersecurity. My expertise spans Vulnerability Assessment and Penetration Testing (VAPT), Web Application Security (WAPT), and security analysis, where I focus on identifying weaknesses, assessing risks, and providing actionable solutions.
              </p>
              
              <p>
                Currently pursuing my Bachelor's degree in Computer Science, I bring a balance of academic knowledge and practical skills. Passionate about offensive security, I continuously explore tools, exploit techniques, and real-world attack scenarios to strengthen digital defenses.
              </p>
              
              <p className="text-primary/90 font-medium">
                My mission is to contribute to building safer and more resilient systems while growing as a professional who learns, adapts, and innovates.
              </p>
            </div>
            
            <div className="mt-6 pl-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono">
                <span className="text-primary">└─$</span>
                <span className="animate-pulse">_</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
