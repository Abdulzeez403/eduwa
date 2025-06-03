"use client";

import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Rocket,
  Users,
  Zap,
  Target,
  ArrowRight,
  Code,
  Globe,
  Award,
} from "lucide-react";
import Link from "next/link";

function CountUpAnimation({ end = 2, duration = 2000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return <span>{count}+</span>;
}

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-3">
            About Us
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Empowering <span className="text-primary">Education</span> Through
            Innovation
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            At Eduwa, we transform traditional learning into dynamic digital
            experiences by building powerful, accessible, and scalable
            educational solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl transform -rotate-3"></div>
            <div className="relative bg-card rounded-3xl p-8 shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Our Journey</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Eduwa was founded with a vision to revolutionize the way
                knowledge is delivered. What started as a small edtech
                initiative is now a comprehensive learning platform impacting
                students, educators, and institutions globally.
              </p>
              <div className="flex items-center gap-4">
                <Button variant="outline" asChild>
                  <Link href="#contact">
                    Partner with Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="p-6 bg-primary text-primary-foreground">
              <div className="text-3xl font-bold mb-2">
                <CountUpAnimation end={500} />
              </div>
              <p className="text-primary-foreground/80">Courses Delivered</p>
            </Card>
            <Card className="p-6">
              <div className="text-3xl font-bold mb-2 text-primary">
                <CountUpAnimation end={120} />
              </div>
              <p className="text-muted-foreground">Institutions Served</p>
            </Card>
            <Card className="p-6">
              <div className="text-3xl font-bold mb-2 text-primary">
                <CountUpAnimation end={80} />
              </div>
              <p className="text-muted-foreground">Qualified Instructors</p>
            </Card>
            <Card className="p-6 bg-accent text-accent-foreground">
              <div className="text-3xl font-bold mb-2">
                <CountUpAnimation end={6} />
              </div>
              <p className="text-accent-foreground/80">Years of Impact</p>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <Card className="relative bg-background/50 backdrop-blur-sm p-6 h-full">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Presence</h3>
              <p className="text-muted-foreground">
                Our educational tools reach learners across continents, breaking
                the barriers of location and access.
              </p>
            </Card>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <Card className="relative bg-background/50 backdrop-blur-sm p-6 h-full">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Trusted Quality</h3>
              <p className="text-muted-foreground">
                Accredited platforms and tools recognized by educators and
                academic institutions worldwide.
              </p>
            </Card>
          </div>

          <div className="relative group md:col-span-2 lg:col-span-1">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <Card className="relative bg-background/50 backdrop-blur-sm p-6 h-full">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Focus</h3>
              <p className="text-muted-foreground">
                Building an engaged learning ecosystem that supports students,
                parents, and teachers alike.
              </p>
            </Card>
          </div>
        </div>

        <div className="bg-muted/30 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Our Core Educational Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Rocket,
                title: "Innovation",
                description:
                  "Empowering learning through the latest technology",
              },
              {
                icon: Target,
                title: "Excellence",
                description: "Delivering top-tier digital learning experiences",
              },
              {
                icon: Zap,
                title: "Accessibility",
                description:
                  "Making education available to all, anytime, anywhere",
              },
              {
                icon: Users,
                title: "Collaboration",
                description:
                  "Partnering with educators, institutions, and students",
              },
            ].map((value, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <value.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
