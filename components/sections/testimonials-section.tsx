import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Eduwa’s innovative digital solutions have transformed how our school operates — from streamlining administration to improving classroom engagement. Their approach goes beyond traditional systems and truly addresses our real challenges.",
    name: "Dr. Amanda Blake",
    position: "Principal, Greenfield High School",
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    quote:
      "Partnering with Eduwa has allowed our university to adopt cutting-edge tools tailored to our needs. Their solutions support remote learning, analytics, and collaboration — all in a seamless way that benefits both students and faculty.",
    name: "Prof. Samuel Lee",
    position: "Head of E-Learning, State University",
    image:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    quote:
      "Eduwa’s custom-built tools have boosted student participation and knowledge retention in our classrooms. What sets them apart is their responsiveness and commitment to solving problems that truly matter in education.",
    name: "Jessica Carter",
    position: "Math Teacher, Bright Future Academy",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];


export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-3">
            Testimonials
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            What Educators <span className="text-primary">Say About Us</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See how Eduwa’s education solutions empower schools, teachers, and
            students worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(({ quote, name, position, image }, index) => (
            <Card key={index} className="bg-background relative">
              <CardContent className="pt-10 pb-6">
                <div className="absolute -top-5 left-6">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Quote className="h-5 w-5 text-primary" />
                  </div>
                </div>

                <p className="italic text-muted-foreground mb-6">
                  &quot;{quote}&quot;
                </p>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img
                      src={image}
                      alt={`Photo of ${name}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{name}</p>
                    <p className="text-sm text-muted-foreground">{position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* <div className="mt-16 bg-primary/5 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-primary mb-2">99%</p>
              <p className="text-sm text-muted-foreground">
                Student Engagement Rate
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary mb-2">95%</p>
              <p className="text-sm text-muted-foreground">
                Teacher Satisfaction
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary mb-2">92%</p>
              <p className="text-sm text-muted-foreground">Course Completion</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary mb-2">100%</p>
              <p className="text-sm text-muted-foreground">
                Support & Training Excellence
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
