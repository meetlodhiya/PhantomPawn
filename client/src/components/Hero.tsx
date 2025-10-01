import { Terminal, Shield } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(0deg, transparent 24%, hsl(120 100% 35% / 0.05) 25%, hsl(120 100% 35% / 0.05) 26%, transparent 27%, transparent 74%, hsl(120 100% 35% / 0.05) 75%, hsl(120 100% 35% / 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, hsl(120 100% 35% / 0.05) 25%, hsl(120 100% 35% / 0.05) 26%, transparent 27%, transparent 74%, hsl(120 100% 35% / 0.05) 75%, hsl(120 100% 35% / 0.05) 76%, transparent 77%, transparent)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Shield className="w-12 h-12 text-primary" />
            <Terminal className="w-10 h-10 text-primary" />
          </div>
          
          <h1 
            className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
            data-testid="text-name"
          >
            <span className="text-primary drop-shadow-[0_0_15px_hsl(120_100%_50%/0.5)]">
              PhantomPawn
            </span>
          </h1>
          
          <div className="relative inline-block">
            <p 
              className="text-2xl md:text-3xl tracking-widest uppercase text-primary/90"
              data-testid="text-tagline"
            >
              Security is Myth
            </p>
            <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
          </div>
          
          <p className="text-lg md:text-xl text-card-foreground max-w-2xl mx-auto leading-relaxed" data-testid="text-intro">
            Certified Ethical Hacker | Offensive Security Expert
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              VAPT Specialist
            </span>
            <span className="text-primary/30">|</span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Penetration Tester
            </span>
            <span className="text-primary/30">|</span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Security Analyst
            </span>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </section>
  );
}
