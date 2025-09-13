import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap } from "lucide-react";
import { Badge } from "../ui/badge";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative pt-10 pb-16 md:pb-24 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {/* Top Badge */}
            <div className="flex items-center gap-2 animate-in fade-in slide-in-from-top-4 duration-1000">
              <Badge variant="outline" className="py-1.5">
                <GraduationCap className="w-4 h-4 mr-2" />
                Empowering 10,000+ Learners
              </Badge>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-in fade-in slide-in-from-left-4 duration-1000">
                Transforming Education
                <br />
                <span className="text-primary">With Technology</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl animate-in fade-in slide-in-from-left-4 duration-1000 delay-200">
                We build impactful digital solutions that solve real problems in
                education — from learning platforms to school management
                systems.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Let’s Build for Education{" "}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">Our Solutions</Link>
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
              <span>Trusted by educators and institutions globally</span>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 shadow-xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/4144223/pexels-photo-4144223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Students using technology in a classroom"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tl from-background/80 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-background rounded-lg p-4 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">5+</span>
                </div>
                <div>
                  <p className="text-sm font-medium">Years in EdTech</p>
                  <p className="text-xs text-muted-foreground">
                    Driving Innovation in Learning
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-background rounded-lg p-4 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">50+</span>
                </div>
                <div>
                  <p className="text-sm font-medium">Educational Projects</p>
                  <p className="text-xs text-muted-foreground">
                    Across Schools & Institutions
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
