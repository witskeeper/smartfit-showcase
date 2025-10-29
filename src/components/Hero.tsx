import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary-glow)/0.1),transparent_50%)] -z-10" />
      
      <div className="container mx-auto px-4 pt-20 pb-16 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
              恰巧合适科技
            </span>
            <br />
            <span className="text-3xl md:text-5xl text-foreground/90 mt-4 block">
              精准匹配您的研发需求
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            专注于系统研发咨询、软件交付与团队培训
            <br />
            <span className="text-sm">Professional R&D Solutions & Team Excellence</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="group"
            >
              开始合作
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            >
              了解服务
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
