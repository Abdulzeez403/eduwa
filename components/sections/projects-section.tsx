import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    title: "HealthTrack Mobile App",
    description: "A comprehensive health tracking application for iOS and Android that helps users monitor their fitness goals.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Mobile Development",
    tags: ["React Native", "Firebase", "Health API"]
  },
  {
    title: "E-Commerce Platform",
    description: "A fully-featured online shopping platform with inventory management, payment processing, and analytics.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Web Development",
    tags: ["Next.js", "Node.js", "Stripe"]
  },
  {
    title: "Smart Home IoT System",
    description: "An integrated system for controlling and monitoring smart home devices with voice commands and mobile app.",
    image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Embedded Systems",
    tags: ["IoT", "Embedded C", "Cloud Integration"]
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-3">Our Portfolio</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Projects That <span className="text-primary">Inspire</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our showcase of innovative software solutions that have helped businesses transform and grow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <Badge className="absolute top-3 left-3 bg-background/80 backdrop-blur-sm">
                  {project.category}
                </Badge>
              </div>
              
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter>
                <Button variant="ghost" size="sm" className="ml-auto group" asChild>
                  <Link href="#contact">
                    View Details
                    <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="#contact">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}