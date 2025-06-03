import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen, Users, Laptop, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Learning Management Systems",
    description:
      "Custom LMS platforms for schools, universities, and training providers.",
    icon: BookOpen,
    benefits: [
      "Course creation and management tools",
      "Interactive assessments and grading",
      "Student tracking and progress analytics",
      "Integration with Zoom, Google Meet, etc.",
    ],
  },
  {
    title: "Virtual Classrooms",
    description:
      "Real-time, interactive online classrooms with video, chat, and whiteboards.",
    icon: Laptop,
    benefits: [
      "Live classes with video and screen sharing",
      "Whiteboard and real-time collaboration",
      "Attendance tracking and breakout rooms",
      "Device-friendly for mobile and desktop",
    ],
  },
  {
    title: "Student Information Systems",
    description:
      "Comprehensive student portals to manage academic and administrative tasks.",
    icon: Users,
    benefits: [
      "Student enrollment and records management",
      "Grade reports and transcripts",
      "Fee tracking and communication tools",
      "Role-based access for teachers, parents, and admins",
    ],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Intro */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-3">
            Our Services
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Tailored <span className="text-primary">Education Solutions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We design and develop digital platforms that enhance teaching,
            simplify administration, and empower learners in the modern
            education landscape.
          </p>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-md transition-all duration-300 border-border"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm" className="group" asChild>
                  <Link href="#contact">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-muted rounded-lg p-8 text-center">
          <h3 className="text-xl md:text-2xl font-bold mb-4">
            Need a Custom Education Platform?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Whether you're an institution, educator, or organization, we build
            tailored digital solutions that meet your unique teaching, learning,
            and administrative goals.
          </p>
          <Button size="lg" asChild>
            <Link href="#contact">Let’s Talk</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
