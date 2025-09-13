"use client";

import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What solutions does Eduwa provide?",
    answer:
      "Eduwa builds impactful digital solutions for education — from learning platforms and student engagement tools to school management systems and analytics dashboards. Every solution is tailored to the unique needs of institutions, educators, and learners.",
  },
  {
    question: "Can Eduwa support remote and hybrid learning?",
    answer:
      "Yes. Eduwa designs solutions that support both remote and hybrid learning environments, enabling virtual classrooms, digital collaboration, and seamless communication between teachers, students, and parents.",
  },
  {
    question: "How secure are Eduwa’s solutions?",
    answer:
      "Security is at the core of everything we build. Eduwa implements industry-standard encryption, secure authentication, and regular security reviews to safeguard sensitive educational data and ensure compliance with global privacy regulations.",
  },
  {
    question: "Do you provide training and onboarding?",
    answer:
      "Absolutely. Eduwa provides comprehensive onboarding and training for educators, administrators, and staff to ensure smooth adoption of our solutions. We also offer ongoing support as needs evolve.",
  },
  {
    question: "What kind of support can we expect?",
    answer:
      "Our team offers responsive support through email, chat, and calls. In addition, we provide documentation, resources, and knowledge-sharing communities to help educators and institutions get the best out of our solutions.",
  },
];


export function FaqSection() {
  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-3">
            FAQ
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Answers to common questions about Eduwa’s education platform,
            features, security, and support.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Have more questions? We're here to help!
          </p>
          <p className="font-medium mt-2">
            Contact us at{" "}
            <a
              href="mailto:support@eduwa.com"
              className="text-primary hover:underline"
            >
              support@eduwa.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
