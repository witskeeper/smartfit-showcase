import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Code2, GraduationCap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Lightbulb,
      title: "系统研发咨询服务",
      subtitle: "System R&D Consulting",
      description: "为企业提供专业的技术架构设计、系统规划与研发策略咨询，帮助您制定最优的技术方案",
      features: ["技术架构设计", "系统规划咨询", "技术选型指导", "研发流程优化"]
    },
    {
      icon: Code2,
      title: "软件研发交付服务",
      subtitle: "Software Development & Delivery",
      description: "从需求分析到产品上线，提供全流程的软件研发与交付服务，确保项目高质量完成",
      features: ["需求分析设计", "敏捷开发交付", "质量保障测试", "持续集成部署"]
    },
    {
      icon: GraduationCap,
      title: "研发团队培训服务",
      subtitle: "R&D Team Training",
      description: "针对企业研发团队提供定制化技术培训，提升团队整体技术能力与协作效率",
      features: ["技术技能培训", "敏捷实践指导", "团队协作优化", "最佳实践分享"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            核心服务
          </h2>
          <p className="text-muted-foreground text-lg">
            专业的技术服务，助力企业数字化转型
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/50"
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-xs">{service.subtitle}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
