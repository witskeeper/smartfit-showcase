const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              关于我们
            </span>
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              恰巧合适科技有限公司是一家专注于企业研发服务的专业技术公司。
              我们致力于为客户提供精准匹配的技术解决方案，帮助企业在数字化转型的道路上走得更稳、更快。
            </p>
            
            <p>
              凭借多年的行业经验和专业的技术团队，我们深入理解企业在研发过程中面临的挑战。
              无论是系统架构的规划设计、软件产品的研发交付，还是团队能力的培养提升，
              我们都能提供恰到好处的专业支持。
            </p>

            <div className="grid md:grid-cols-3 gap-8 pt-8">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">100+</div>
                <div className="text-sm text-foreground/80">成功项目</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">50+</div>
                <div className="text-sm text-foreground/80">合作企业</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">98%</div>
                <div className="text-sm text-foreground/80">客户满意度</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
