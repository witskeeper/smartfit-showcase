const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-glow to-primary bg-clip-text text-transparent">
            恰巧合适科技有限公司
          </h3>
          <p className="text-sm text-secondary-foreground/70">
            专业研发服务 · 精准技术匹配 · 卓越团队培养
          </p>
          <div className="pt-8 border-t border-secondary-foreground/10">
            <p className="text-xs text-secondary-foreground/60">
              © {new Date().getFullYear()} 恰巧合适科技有限公司. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
