import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";

interface NavigationControlsProps {
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onPrev: () => void;
}

export function NavigationControls({
  currentStep,
  totalSteps,
  onNext,
  onPrev,
}: NavigationControlsProps) {
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === totalSteps - 1;

  return (
    <motion.div
      className="fixed right-0 bottom-8 left-0 flex items-center justify-center gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {!isFirstStep && (
        <Button variant="outline" size="lg" onClick={onPrev} className="gap-2">
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>
      )}

      {!isLastStep && (
        <Button size="lg" onClick={onNext} className="gap-2">
          Next
          <ChevronRight className="h-4 w-4" />
        </Button>
      )}

      {isLastStep && (
        <Link href="/sign-up">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
          >
            Get Started
            <ChevronRight className="h-4 w-4" />
          </Button>
        </Link>
      )}
    </motion.div>
  );
}
