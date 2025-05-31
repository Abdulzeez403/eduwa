"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, HelpCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

const webPricing = [
  {
    name: "Basic",
    price: "2,999",
    description: "Perfect for small businesses getting started",
    features: [
      "Responsive Design",
      "5 Pages",
      "Contact Form",
      "Basic SEO Setup",
      "Mobile-Friendly",
      "2 Rounds of Revisions",
      "1 Month Support",
    ],
  },
  {
    name: "Standard",
    price: "5,999",
    description: "Ideal for growing businesses",
    popular: true,
    features: [
      "Everything in Basic",
      "10 Pages",
      "CMS Integration",
      "Advanced SEO",
      "Blog Setup",
      "Social Media Integration",
      "Analytics Integration",
      "3 Rounds of Revisions",
      "3 Months Support",
    ],
  },
  {
    name: "Premium",
    price: "9,999",
    description: "For businesses requiring complex solutions",
    features: [
      "Everything in Standard",
      "Unlimited Pages",
      "E-commerce Integration",
      "Custom Animations",
      "Performance Optimization",
      "Security Hardening",
      "Multi-language Support",
      "5 Rounds of Revisions",
      "6 Months Support",
    ],
  },
];

const mobilePricing = [
  {
    name: "Basic",
    price: "9,999",
    description: "Essential mobile app features",
    features: [
      "Native iOS or Android",
      "Basic UI/UX Design",
      "User Authentication",
      "Push Notifications",
      "Basic Analytics",
      "2 Rounds of Revisions",
      "3 Months Support",
    ],
  },
  {
    name: "Standard",
    price: "19,999",
    description: "Advanced features and integrations",
    popular: true,
    features: [
      "Everything in Basic",
      "Both iOS and Android",
      "Custom UI/UX Design",
      "Social Integration",
      "Offline Support",
      "API Integration",
      "Advanced Analytics",
      "3 Rounds of Revisions",
      "6 Months Support",
    ],
  },
  {
    name: "Premium",
    price: "29,999",
    description: "Full-featured enterprise solution",
    features: [
      "Everything in Standard",
      "Admin Dashboard",
      "Payment Gateway",
      "Real-time Features",
      "Advanced Security",
      "Custom Animations",
      "Performance Optimization",
      "5 Rounds of Revisions",
      "12 Months Support",
    ],
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-3">
            Pricing
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Transparent <span className="text-primary">Pricing</span> Plans
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your business needs. All plans include
            our core quality standards and dedicated support.
          </p>
        </div>

        <div className="space-y-16">
          {/* Website Development Pricing */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8">
              Website Development
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {webPricing.map((plan) => (
                <Card
                  key={plan.name}
                  className={`relative ${
                    plan.popular ? "border-primary shadow-lg" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-0 right-0 mx-auto w-fit">
                      <Badge
                        variant="default"
                        className="bg-primary text-primary-foreground"
                      >
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                    <p className="text-muted-foreground text-sm">
                      {plan.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <span className="text-4xl font-bold">${plan.price}</span>
                      <span className="text-muted-foreground ml-1">USD</span>
                    </div>
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className="w-full"
                      variant={plan.popular ? "default" : "outline"}
                      asChild
                    >
                      <Link href="#contact">Get Started</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          {/* Mobile Development Pricing */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8">
              Mobile App Development
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {mobilePricing.map((plan) => (
                <Card
                  key={plan.name}
                  className={`relative ${
                    plan.popular ? "border-primary shadow-lg" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-0 right-0 mx-auto w-fit">
                      <Badge
                        variant="default"
                        className="bg-primary text-primary-foreground"
                      >
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                    <p className="text-muted-foreground text-sm">
                      {plan.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <span className="text-4xl font-bold">${plan.price}</span>
                      <span className="text-muted-foreground ml-1">USD</span>
                    </div>
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className="w-full"
                      variant={plan.popular ? "default" : "outline"}
                      asChild
                    >
                      <Link href="#contact">Get Started</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              Need a custom solution? Contact us for a tailored quote.
            </p>
            <Button size="lg" variant="outline" asChild>
              <Link href="#contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
