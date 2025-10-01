import { Card } from "@/components/ui/card";
import { 
  Shield, 
  Globe, 
  Smartphone, 
  Search, 
  Lock, 
  Eye 
} from "lucide-react";

const skills = [
  {
    id: 1,
    name: "VAPT",
    description: "Vulnerability Assessment & Penetration Testing",
    icon: Shield,
  },
  {
    id: 2,
    name: "WAPT",
    description: "Web Application Penetration Testing",
    icon: Globe,
  },
  {
    id: 3,
    name: "Mobile App Security",
    description: "Android & iOS Security Assessment",
    icon: Smartphone,
  },
  {
    id: 4,
    name: "Digital Forensics",
    description: "Cyber Investigation & Evidence Analysis",
    icon: Search,
  },
  {
    id: 5,
    name: "Cryptography",
    description: "Encryption & Decryption Techniques",
    icon: Lock,
  },
  {
    id: 6,
    name: "Steganography",
    description: "Hidden Data Detection & Analysis",
    icon: Eye,
  },
];

export default function Skills() {
  return (
    <section className="py-24 relative" id="skills">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" data-testid="text-skills-title">
            <span className="text-primary">{'{'}</span> Skills & Expertise <span className="text-primary">{'}'}</span>
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <Card 
                key={skill.id}
                className="p-6 border-primary/20 hover-elevate relative overflow-hidden group"
                data-testid={`card-skill-${skill.id}`}
              >
                <div className="absolute top-0 right-0 w-24 h-24 -mr-12 -mt-12 opacity-5">
                  <skill.icon className="w-full h-full" />
                </div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-primary/10 rounded-md border border-primary/20 flex items-center justify-center mb-4">
                    <skill.icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <h3 
                    className="text-xl font-bold text-primary mb-2"
                    data-testid={`text-skill-name-${skill.id}`}
                  >
                    {skill.name}
                  </h3>
                  
                  <p 
                    className="text-sm text-card-foreground leading-relaxed"
                    data-testid={`text-skill-desc-${skill.id}`}
                  >
                    {skill.description}
                  </p>
                </div>
                
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary/50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
