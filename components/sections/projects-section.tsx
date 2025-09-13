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
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Passrite",
    description:
      "An EdTech platform with gamified quizzes that make learning fun and rewarding. Learners can study, earn points, and convert their rewards into airtime, data, and more.",
    image: "/images/passrite.png",
    category: "EdTech",
    tags: ["React", "Node.js", "Firebase"],
    link: "https://passrite.vercel.app",
  },
  {
    title: "Eduwa Tools",
    description:
      "A discovery hub for the latest educational tools, helping students and educators find innovative solutions for learning and teaching.",
    image: "/images/eduwatools.png",
    category: "Web Development",
    tags: ["Next.js", "WebRTC", "Tailwind CSS"],
    link: "https://eduwatools.vercel.app",
  },
  {
    title: "Student Performance Analytics",
    description:
      "An advanced analytics dashboard that delivers actionable insights into student performance and learning trends, empowering educators with data-driven decisions.",
    image:
      "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Data Analytics",
    tags: ["Python", "Django", "Chart.js"],
    link: "https://student-analytics.example.com",
  },
];


export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-3">
            Our Portfolio
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Projects That{" "}
            <span className="text-primary">Inspire Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our showcase of innovative education technology solutions
            that empower learners and educators worldwide.
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
                    <Badge key={i} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  variant="ghost"
                  size="sm"
                  className="ml-auto group"
                  asChild
                >
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    View Project
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
