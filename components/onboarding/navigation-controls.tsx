import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
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
      className="fixed right-0 bottom-0 left-0 flex items-center justify-between border-t bg-white/80 px-6 py-4 shadow-lg backdrop-blur-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        {!isFirstStep ? (
          <Button
            variant="ghost"
            size="lg"
            onClick={onPrev}
            className="gap-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Previous
          </Button>
        ) : (
          <div className="w-24"></div>
        )}
      </div>

      <div className="flex items-center gap-1">
        {Array.from({ length: totalSteps }).map((_, i) => {
          let dotClass = "h-2 w-2 rounded-full mx-1 ";

          if (i === currentStep) {
            dotClass += "bg-green-500";
          } else if (i < currentStep) {
            dotClass += "bg-green-300";
          } else {
            dotClass += "bg-gray-300";
          }

          return <div key={i} className={dotClass} />;
        })}
      </div>

      <div>
        {!isLastStep ? (
          <Button
            size="lg"
            onClick={onNext}
            className="gap-2 bg-green-500 text-white hover:bg-green-600"
          >
            Next
            <ArrowRight className="h-4 w-4" />
          </Button>
        ) : (
          <Link href="/sign-up">
            <Button
              size="lg"
              className="gap-2 bg-green-500 text-white hover:bg-green-600"
            >
              <CheckCircle className="h-4 w-4" />
              Get Started
            </Button>
          </Link>
        )}
      </div>
    </motion.div>
  );
}
