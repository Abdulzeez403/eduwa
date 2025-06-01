"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Timer, Rocket, Sparkles, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function PromoModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [dontShowAgain, setDontShowAgain] = useState(false);

  // Set end date to 30 days from now
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 30);

  useEffect(() => {
    // Check if user has dismissed the modal
    const hasUserDismissed = localStorage.getItem("promoModalDismissed");
    if (!hasUserDismissed) {
      const timer = setTimeout(() => setIsOpen(true), 4000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate.getTime() - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleClose = () => {
    if (dontShowAgain) {
      localStorage.setItem("promoModalDismissed", "true");
    }
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden">
        <div className="relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--primary-50),_transparent_70%)]" />

          <div className="relative p-6">
            {/* Top Badge */}
            <div className="flex justify-center mb-6">
              <Badge
                variant="outline"
                className="bg-background/95 backdrop-blur-sm border-primary/20 px-4 py-1"
              >
                <Sparkles className="h-4 w-4 text-primary mr-2" />
                Limited Time Offer
              </Badge>
            </div>

            {/* Main Content */}
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">
                Get a Free Website Build!🚀
              </h2>

              <p className="text-muted-foreground text-lg max-w-md mx-auto">
                We're selecting{" "}
                <span className="text-primary font-semibold">
                  2 early-stage startups
                </span>{" "}
                for our beta program to build their MVPs completely free!
              </p>

              {/* Countdown Timer */}
              <div className="grid grid-cols-4 gap-3 my-8">
                {[
                  { value: timeLeft.days, label: "Days" },
                  { value: timeLeft.hours, label: "Hours" },
                  { value: timeLeft.minutes, label: "Minutes" },
                  { value: timeLeft.seconds, label: "Seconds" },
                ].map((item, index) => (
                  <div key={index} className="relative group">
                    <div className="absolute inset-0 bg-primary/10 rounded-lg blur-sm group-hover:blur-md transition-all" />
                    <div className="relative bg-background/50 backdrop-blur-sm rounded-lg p-3 border border-primary/20">
                      <div className="text-2xl font-bold text-primary">
                        {item.value}
                      </div>
                      <div className="text-xs text-muted-foreground font-medium">
                        {item.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Benefits */}
              <div className="bg-muted/30 rounded-lg p-4 mb-6">
                <ul className="text-sm text-left space-y-2">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                    Full MVP Development
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                    Technical Consultation
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                    3 Months Support
                  </li>
                </ul>
              </div>

              {/* CTA Button */}

              <Button
                size="lg"
                className="w-full text-base group"
                onClick={() =>
                  window.open(
                    "https://calendly.com/abdulazeezsodiq403",
                    "_blank"
                  )
                }
              >
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              {/* Don't Show Again */}
              <div className="flex items-center justify-center space-x-2 pt-4">
                <Checkbox
                  id="dontShow"
                  checked={dontShowAgain}
                  onCheckedChange={(checked) =>
                    setDontShowAgain(checked as boolean)
                  }
                />
                <label
                  htmlFor="dontShow"
                  className="text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
                >
                  Don't show this again
                </label>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
