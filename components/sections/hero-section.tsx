import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section 
      id="home" 
      className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background -z-10" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Transforming Ideas Into <span className="text-primary">Digital Reality</span>
              </h1>
              <p className="mt-4 text-xl text-muted-foreground">
                We build exceptional software solutions that power businesses and delight users.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" asChild>
                <Link href="#contact">
                  Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#services">Explore Services</Link>
              </Button>
            </div>
            
            <div className="pt-4 flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div 
                    key={i}
                    className="w-8 h-8 rounded-full bg-primary/10 border-2 border-background flex items-center justify-center text-xs font-medium"
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <span>Trusted by 100+ businesses worldwide</span>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 shadow-xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team collaborating on software development"
                className="w-full h-full object-cover mix-blend-overlay opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-tl from-background/80 via-transparent to-transparent" />
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-background rounded-lg p-4 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">5+</span>
                </div>
                <div>
                  <p className="text-sm font-medium">Years of Excellence</p>
                  <p className="text-xs text-muted-foreground">Delivering Innovation</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-background rounded-lg p-4 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">50+</span>
                </div>
                <div>
                  <p className="text-sm font-medium">Projects Completed</p>
                  <p className="text-xs text-muted-foreground">Across Industries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}