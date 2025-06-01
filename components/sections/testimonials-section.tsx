import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Eduwa transformed our business with their exceptional web development services. They delivered a platform that exceeded our expectations and has significantly increased our online sales.",
    name: "Sarah Johnson",
    position: "CEO, RetailTech",
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    quote:
      "The mobile app developed by Eduwa has revolutionized how we interact with our customers. Their attention to detail and user experience expertise has set us apart from competitors.",
    name: "Michael Chen",
    position: "CTO, HealthConnect",
    image:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    quote:
      "Working with Eduwa on our IoT solution was a game-changer. Their expertise in embedded systems and seamless integration capabilities delivered a product that's now central to our operations.",
    name: "Emily Rodriguez",
    position: "Product Manager, SmartTech Industries",
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
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Hear from our satisfied clients
            about their experience working with Eduwa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background relative">
              <CardContent className="pt-10 pb-6">
                <div className="absolute -top-5 left-6">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Quote className="h-5 w-5 text-primary" />
                  </div>
                </div>

                <p className="italic text-muted-foreground mb-6">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-primary/5 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-primary mb-2">98%</p>
              <p className="text-sm text-muted-foreground">
                Client Satisfaction
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary mb-2">94%</p>
              <p className="text-sm text-muted-foreground">
                Projects Delivered On Time
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary mb-2">89%</p>
              <p className="text-sm text-muted-foreground">Repeat Business</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary mb-2">100%</p>
              <p className="text-sm text-muted-foreground">
                Commitment to Excellence
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
