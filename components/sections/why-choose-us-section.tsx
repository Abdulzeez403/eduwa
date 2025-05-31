import { Badge } from '@/components/ui/badge';
import { 
  Award, 
  Clock, 
  ShieldCheck, 
  Smile, 
  BadgeCheck 
} from 'lucide-react';

const features = [
  {
    title: "Quality Assurance",
    description: "We maintain rigorous quality standards throughout the development process to deliver reliable, bug-free software.",
    icon: Award
  },
  {
    title: "Expertise & Experience",
    description: "Our team of skilled developers brings years of experience across various technologies and industries.",
    icon: BadgeCheck
  },
  {
    title: "Timely Delivery",
    description: "We understand the importance of deadlines and ensure your project is completed on time and within budget.",
    icon: Clock
  },
  {
    title: "Security Focus",
    description: "We implement robust security measures to protect your data and ensure compliance with industry standards.",
    icon: ShieldCheck
  },
  {
    title: "Client Satisfaction",
    description: "Your satisfaction is our priority. We work closely with you to ensure the final product exceeds your expectations.",
    icon: Smile
  }
];

export function WhyChooseUsSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-3">Why Choose Us</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            What Sets Us <span className="text-primary">Apart</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We combine technical excellence with a client-centered approach to deliver exceptional software solutions.
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
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 relative rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 -z-10" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Development Process</h3>
              <p className="text-muted-foreground mb-6">
                Our structured yet flexible approach ensures we deliver high-quality solutions efficiently and effectively.
              </p>
              
              <div className="space-y-4">
                {[
                  { number: "01", title: "Discovery & Planning" },
                  { number: "02", title: "Design & Prototyping" },
                  { number: "03", title: "Development & Testing" },
                  { number: "04", title: "Deployment & Support" }
                ].map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <span className="text-sm font-medium text-primary">{step.number}</span>
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
                <h4 className="font-semibold mb-2">Transparent Communication</h4>
                <p className="text-sm text-muted-foreground">
                  We maintain clear and consistent communication throughout the project, keeping you informed at every stage.
                </p>
              </div>
              
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold mb-2">Scalable Solutions</h4>
                <p className="text-sm text-muted-foreground">
                  We build software that can grow with your business, adapting to changing needs and increasing demands.
                </p>
              </div>
              
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold mb-2">Post-Launch Support</h4>
                <p className="text-sm text-muted-foreground">
                  Our relationship doesn't end at deployment. We provide ongoing support and maintenance to ensure long-term success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}