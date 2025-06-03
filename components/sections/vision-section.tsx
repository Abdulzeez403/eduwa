"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Lightbulb, Rocket, LineChart } from "lucide-react";
import Link from "next/link";

export function VisionSection() {
  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-3">
            Our Vision
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Shaping the <span className="text-primary">Future</span> of
            Education
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We envision a world where accessible, innovative, and personalized
            education empowers every learner to thrive in a rapidly changing
            world.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-3xl opacity-30" />
            <Card className="relative bg-background/50 backdrop-blur-sm p-8 rounded-3xl border-2 border-primary/20">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Mission Statement
                    </h3>
                    <p className="text-muted-foreground">
                      To provide cutting-edge educational solutions that make
                      learning engaging, inclusive, and tailored to individual
                      needs across the globe.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Core Values</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Equity and Inclusion
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Innovation in Learning
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Learner-Centered Design
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <Button variant="outline" className="mt-8 group" asChild>
                <Link href="/contact">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </Card>
          </div>

          <div className="space-y-6">
            <div className="relative group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              <Card className="relative bg-background/50 backdrop-blur-sm p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Rocket className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Future Goals</h3>
                    <p className="text-muted-foreground">
                      Expand access to quality education through scalable
                      digital platforms, empowering educators and learners
                      worldwide.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="relative group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              <Card className="relative bg-background/50 backdrop-blur-sm p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <LineChart className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Growth Strategy
                    </h3>
                    <p className="text-muted-foreground">
                      Partnering with institutions, leveraging AI, and creating
                      adaptive learning paths to enhance educational outcomes.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="bg-primary text-primary-foreground p-6">
              <h3 className="text-lg font-semibold mb-4">2025 Objectives</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold">1M+</span>
                  </div>
                  <p className="text-sm">Students Empowered Globally</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold">200+</span>
                  </div>
                  <p className="text-sm">Schools & Institutions Supported</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold">10</span>
                  </div>
                  <p className="text-sm">EdTech Innovation Labs Launched</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
