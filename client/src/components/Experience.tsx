import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
  return (
    <section className="py-24 relative" id="experience">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in" data-testid="text-experience-title">
            <span className="text-primary">{'<'}</span> Experience <span className="text-primary">{'>'}</span>
          </h2>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block animate-timeline-grow" />
            
            <Card className="p-8 border-primary/20 hover-elevate relative animate-slide-up" data-testid="card-experience-1">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-md border border-primary/20 flex items-center justify-center relative z-10">
                    <Briefcase className="w-8 h-8 text-primary" />
                  </div>
                </div>
                
                <div className="flex-1 space-y-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-primary" data-testid="text-role">
                        VAPT Analyst
                      </h3>
                      <Badge variant="outline" className="border-primary/30 text-primary" data-testid="badge-internship">
                        Internship
                      </Badge>
                    </div>
                    <p className="text-lg text-card-foreground font-medium mb-2" data-testid="text-company">
                      Trios Cyber
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span data-testid="text-duration">3 Months</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 text-card-foreground">
                    <p className="flex items-start gap-2">
                      <span className="text-primary mt-1 flex-shrink-0">▹</span>
                      <span>Conducted comprehensive Vulnerability Assessment and Penetration Testing (VAPT) for client applications and infrastructure</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-primary mt-1 flex-shrink-0">▹</span>
                      <span>Identified security vulnerabilities and provided detailed remediation recommendations</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-primary mt-1 flex-shrink-0">▹</span>
                      <span>Analyzed web applications, mobile applications, and network systems for potential security risks</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-primary mt-1 flex-shrink-0">▹</span>
                      <span>Prepared comprehensive security assessment reports and presented findings to stakeholders</span>
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
