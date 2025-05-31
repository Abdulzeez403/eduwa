import { Badge } from '@/components/ui/badge';
import { Rocket, Users, Zap, Target } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-3">About Us</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Building Tomorrow's Technology <span className="text-primary">Today</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Eduwa is a forward-thinking software development company dedicated to crafting innovative digital solutions that solve real-world problems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg">
              Founded in 2018, Eduwa has grown from a small team of passionate developers to a full-service software development company. Our mission is to empower businesses with technology that drives growth, efficiency, and exceptional user experiences.
            </p>
            
            <p>
              We combine technical expertise with creative thinking to deliver solutions that not only meet but exceed our clients' expectations. Our team stays at the forefront of technology trends to ensure we're always offering the most innovative solutions.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-background p-4 rounded-lg shadow-sm">
                <p className="text-3xl font-bold text-primary">200+</p>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div className="bg-background p-4 rounded-lg shadow-sm">
                <p className="text-3xl font-bold text-primary">50+</p>
                <p className="text-sm text-muted-foreground">Satisfied Clients</p>
              </div>
              <div className="bg-background p-4 rounded-lg shadow-sm">
                <p className="text-3xl font-bold text-primary">25+</p>
                <p className="text-sm text-muted-foreground">Expert Developers</p>
              </div>
              <div className="bg-background p-4 rounded-lg shadow-sm">
                <p className="text-3xl font-bold text-primary">5+</p>
                <p className="text-sm text-muted-foreground">Years of Excellence</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <h3 className="text-xl font-semibold">Our Core Values</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Innovation</h4>
                  <p className="text-sm text-muted-foreground">
                    We embrace cutting-edge technologies and creative approaches to solve complex problems.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Collaboration</h4>
                  <p className="text-sm text-muted-foreground">
                    We work closely with our clients, valuing their input and building lasting partnerships.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Excellence</h4>
                  <p className="text-sm text-muted-foreground">
                    We are committed to delivering high-quality solutions that exceed expectations.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Results-Driven</h4>
                  <p className="text-sm text-muted-foreground">
                    We focus on delivering tangible outcomes that help our clients achieve their business goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}