import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Award } from "lucide-react";

const certifications = [
  {
    id: 1,
    name: "CIOSE",
    fullName: "Certified Information and Offensive Security Expert",
    icon: Shield,
  },
  {
    id: 2,
    name: "CCDP",
    fullName: "Certified Cyber Defence Professional",
    icon: Award,
  },
];

export default function Certifications() {
  return (
    <section className="py-24 relative" id="certifications">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in" data-testid="text-certifications-title">
            <span className="text-primary">[</span> Certifications <span className="text-primary">]</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={cert.id} 
                className="p-8 border-primary/20 hover-elevate relative overflow-hidden group animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
                data-testid={`card-certification-${cert.id}`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 opacity-5">
                  <cert.icon className="w-full h-full" />
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-md border border-primary/20">
                      <cert.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <Badge 
                        variant="outline" 
                        className="mb-2 border-primary/30 text-primary"
                        data-testid={`badge-cert-${cert.id}`}
                      >
                        Certified
                      </Badge>
                      <h3 
                        className="text-2xl font-bold text-primary mb-2"
                        data-testid={`text-cert-name-${cert.id}`}
                      >
                        {cert.name}
                      </h3>
                      <p 
                        className="text-sm text-card-foreground leading-relaxed"
                        data-testid={`text-cert-full-${cert.id}`}
                      >
                        {cert.fullName}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
