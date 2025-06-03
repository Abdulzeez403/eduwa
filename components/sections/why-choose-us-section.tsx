import { Badge } from "@/components/ui/badge";
import { Award, Clock, ShieldCheck, Smile, BadgeCheck } from "lucide-react";

const features = [
  {
    title: "Proven Educational Quality",
    description:
      "Our solutions are designed with pedagogical best practices to enhance learning outcomes and engagement.",
    icon: Award,
  },
  {
    title: "Experienced EdTech Professionals",
    description:
      "We bring deep expertise in education technology, crafting tools that meet the unique needs of schools, teachers, and students.",
    icon: BadgeCheck,
  },
  {
    title: "On-Time Project Delivery",
    description:
      "We understand academic calendars and deadlines, ensuring your platform launches when you need it most.",
    icon: Clock,
  },
  {
    title: "Data Security & Privacy",
    description:
      "Protecting student data is our priority. We implement strict security measures aligned with educational compliance standards.",
    icon: ShieldCheck,
  },
  {
    title: "User-Focused Support",
    description:
      "We work closely with educators and administrators to tailor solutions and provide ongoing support for success.",
    icon: Smile,
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-3">
            Why Choose Us
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Empowering Education{" "}
            <span className="text-primary">Through Technology</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We create innovative education solutions that engage learners,
            simplify administration, and drive academic success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-background p-6 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 relative rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 -z-10" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Our Education-Focused Development Process
              </h3>
              <p className="text-muted-foreground mb-6">
                We follow a collaborative process tailored to education
                stakeholders, ensuring we build tools that truly meet classroom
                and administrative needs.
              </p>

              <div className="space-y-4">
                {[
                  {
                    number: "01",
                    title: "Needs Assessment & Curriculum Alignment",
                  },
                  {
                    number: "02",
                    title: "Design & User Experience Tailored for Educators",
                  },
                  {
                    number: "03",
                    title: "Development with Continuous Feedback",
                  },
                  { number: "04", title: "Launch, Training & Ongoing Support" },
                ].map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <span className="text-sm font-medium text-primary">
                        {step.number}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-medium">{step.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold mb-2">
                  Clear Communication With Stakeholders
                </h4>
                <p className="text-sm text-muted-foreground">
                  We keep educators, administrators, and IT teams involved and
                  informed throughout development to ensure alignment.
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold mb-2">
                  Scalable & Adaptive Solutions
                </h4>
                <p className="text-sm text-muted-foreground">
                  Our platforms grow with your institution, adapting to new
                  teaching methods and expanding user bases without hassle.
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold mb-2">
                  Dedicated Post-Implementation Support
                </h4>
                <p className="text-sm text-muted-foreground">
                  From training to troubleshooting, we’re here to ensure your
                  education technology continues to deliver long-term value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
