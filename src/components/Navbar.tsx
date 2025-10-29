import { Button } from "@/components/ui/button";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <h2 className="text-xl font-bold text-primary">
          恰巧合适科技
        </h2>
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("services")}
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            服务
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            关于
          </button>
          <Button onClick={() => scrollToSection("contact")} size="sm">
            联系我们
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
