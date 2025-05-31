import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, Smartphone, Cpu, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    title: "Website Development",
    description: "Custom websites that are fast, secure, and responsive across all devices.",
    icon: Globe,
    benefits: [
      "Responsive design for all devices",
      "SEO optimization for better visibility",
      "Fast loading speeds and performance",
      "User-friendly interfaces"
    ]
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    icon: Smartphone,
    benefits: [
      "Native iOS and Android apps",
      "Cross-platform solutions",
      "Intuitive user interfaces",
      "Offline capabilities"
    ]
  },
  {
    title: "Embedded Systems",
    description: "Specialized software for hardware integration and IoT applications.",
    icon: Cpu,
    benefits: [
      "IoT device integration",
      "Real-time processing",
      "Hardware-software optimization",
      "Secure communication protocols"
    ]
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-3">Our Services</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            End-to-End <span className="text-primary">Digital Solutions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive software development services tailored to your specific needs and business goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-md transition-all duration-300 border-border">
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
        
        <div className="mt-16 bg-muted rounded-lg p-8 text-center">
          <h3 className="text-xl md:text-2xl font-bold mb-4">Need a Custom Solution?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We specialize in crafting bespoke digital solutions tailored to your unique business requirements and challenges.
          </p>
          <Button size="lg" asChild>
            <Link href="#contact">Contact Our Team</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}