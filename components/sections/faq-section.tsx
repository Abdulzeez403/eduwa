'use client';

import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: "What is your development process?",
    answer: "Our development process typically includes discovery and planning, design and prototyping, development and testing, and deployment and support. We follow agile methodologies to ensure flexibility and regular client feedback throughout the project."
  },
  {
    question: "How long does it take to develop a website or application?",
    answer: "Project timelines vary depending on the complexity and scope of the project. A simple website might take 4-6 weeks, while a complex application could take several months. During our initial consultation, we'll provide you with a detailed timeline based on your specific requirements."
  },
  {
    question: "Do you provide maintenance and support after launch?",
    answer: "Yes, we offer ongoing maintenance and support services to ensure your website or application continues to run smoothly. Our support packages include regular updates, security patches, performance optimization, and technical assistance."
  },
  {
    question: "What technologies do you work with?",
    answer: "We work with a wide range of technologies including React, Angular, Vue.js, Node.js, Python, PHP, .NET, React Native, Flutter, and many more. We select the most appropriate technology stack based on your project requirements and business goals."
  },
  {
    question: "How do you handle project pricing?",
    answer: "We offer flexible pricing models including fixed-price projects, time and materials, and retainer-based services. After understanding your requirements, we'll provide a detailed proposal with transparent pricing that aligns with your budget and project needs."
  }
];

export function FaqSection() {
  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-3">FAQ</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our services, process, and approach to software development.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Have more questions? We're here to help!
          </p>
          <p className="font-medium mt-2">
            Contact us at{' '}
            <a href="mailto:info@eduwa.com" className="text-primary hover:underline">
              info@eduwa.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}