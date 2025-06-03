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
    question: "What features does Eduwa’s platform offer?",
    answer:
      "Eduwa offers a comprehensive suite of features including course management, student progress tracking, interactive quizzes, video lectures, discussion forums, and personalized learning paths tailored to each student’s needs.",
  },
  {
    question: "Can Eduwa support remote and hybrid learning?",
    answer:
      "Absolutely! Eduwa is designed to facilitate both remote and hybrid learning environments. It supports live virtual classrooms, asynchronous content delivery, and seamless communication between teachers and students.",
  },
  {
    question: "How secure is the Eduwa platform?",
    answer:
      "Security is a top priority. Eduwa uses industry-standard encryption, secure authentication, and regular security audits to protect student data and ensure compliance with privacy regulations like FERPA and GDPR.",
  },
  {
    question: "Is there training available for teachers and administrators?",
    answer:
      "Yes, we provide comprehensive onboarding and continuous training sessions for teachers and administrators to get the most out of the Eduwa platform. Our support team is also available to assist anytime.",
  },
  {
    question: "What kind of support is available if I run into issues?",
    answer:
      "We offer 24/7 support through email, chat, and phone. Additionally, our online knowledge base and community forums provide helpful resources and peer support to quickly resolve common issues.",
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
