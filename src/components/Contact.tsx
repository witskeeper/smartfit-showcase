import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              联系我们
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            期待与您合作，共同创造价值
          </p>

          <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-8">
              <div className="flex flex-col items-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
                  <Mail className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-semibold">商务合作邮箱</h3>
                  <p className="text-sm text-muted-foreground">Business Inquiries</p>
                </div>

                <a 
                  href="mailto:contact@smartfitdesign.com"
                  className="text-2xl font-mono text-primary hover:text-primary-glow transition-colors"
                >
                  contact@smartfitdesign.com
                </a>

                <Button 
                  size="lg"
                  onClick={() => window.location.href = 'mailto:contact@smartfitdesign.com'}
                  className="mt-4"
                >
                  发送邮件
                </Button>
              </div>
            </CardContent>
          </Card>

          <p className="text-sm text-muted-foreground pt-8">
            我们将在 24 小时内回复您的邮件
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
