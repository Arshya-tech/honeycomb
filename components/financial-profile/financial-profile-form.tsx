"use client";

import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { motion } from "motion/react";
import { useForm } from "react-hook-form";

import { FormStep, MultiSelectStep, SingleSelectStep } from "@/config/types";
import { FinancialProfileFormData } from "@/lib/validations/financial-profile";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";

interface FinancialProfileFormProps {
  currentStep: number;
  steps: FormStep[];
  formData: Partial<FinancialProfileFormData>;
  onNext: (data: Partial<FinancialProfileFormData>) => void;
  onPrev: () => void;
  isSubmitting: boolean;
}

export function FinancialProfileForm({
  currentStep,
  steps,
  formData,
  onNext,
  onPrev,
  isSubmitting,
}: FinancialProfileFormProps) {
  const currentStepData = steps[currentStep];
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === steps.length - 1;

  // Initialize the form with default values
  const form = useForm({
    defaultValues: {
      ...formData,
    },
  });

  // Handle form submission for the current step
  const onSubmit = (data: Partial<FinancialProfileFormData>) => {
    onNext(data);
  };

  // Render the appropriate form fields based on the step type
  const renderFormFields = () => {
    switch (currentStepData.type) {
      case "single_select":
        return (
          <FormField
            control={form.control}
            name={currentStepData.id}
            render={({ field }) => (
              <FormItem className="space-y-6">
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="space-y-4"
                  >
                    {(currentStepData as SingleSelectStep).options.map(
                      (option) => (
                        <motion.div
                          key={option.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          <div className="group relative">
                            <FormLabel
                              htmlFor={option.id}
                              className="relative block cursor-pointer transition-colors duration-300"
                            >
                              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-400/20 to-yellow-500/20 opacity-0 blur transition-opacity group-hover:opacity-50" />
                              <div className="relative flex items-center space-x-3 rounded-2xl border-2 border-yellow-200 bg-white/95 p-5 shadow-sm backdrop-blur-sm transition-colors duration-300 hover:border-yellow-300 hover:bg-white">
                                <RadioGroupItem
                                  id={option.id}
                                  value={option.id}
                                  className="size-5"
                                />
                                <div>
                                  <div className="font-medium">
                                    {option.label}
                                  </div>
                                  {option.description && (
                                    <div className="text-muted-foreground mt-1 text-sm">
                                      {option.description}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </FormLabel>
                          </div>
                        </motion.div>
                      ),
                    )}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        );

      case "multi_select":
        return (
          <FormField
            control={form.control}
            name={currentStepData.id}
            render={({ field }) => (
              <FormItem className="space-y-6">
                <FormControl>
                  <div className="space-y-4">
                    {(currentStepData as MultiSelectStep).options.map(
                      (option) => (
                        <motion.div
                          key={option.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          <div
                            className="group relative cursor-pointer"
                            onClick={() => {
                              const currentValue = field.value || [];
                              const isChecked = currentValue.includes(
                                // @ts-expect-error - field.value is string[] for multi-select
                                option.id,
                              );
                              if (!isChecked) {
                                field.onChange([...currentValue, option.id]);
                              } else {
                                field.onChange(
                                  // @ts-expect-error - field.value is string[] for multi-select
                                  currentValue.filter(
                                    (value: string) => value !== option.id,
                                  ),
                                );
                              }
                            }}
                          >
                            <FormLabel
                              htmlFor={option.id}
                              className="relative block cursor-pointer transition-colors duration-300"
                            >
                              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-400/20 to-yellow-500/20 opacity-0 blur transition-opacity group-hover:opacity-50" />
                              <div className="relative flex items-center space-x-3 rounded-2xl border-2 border-yellow-200 bg-white/95 p-5 shadow-sm backdrop-blur-sm transition-colors duration-300 hover:border-yellow-300 hover:bg-white">
                                <FormControl>
                                  <Checkbox
                                    id={option.id}
                                    className="size-5"
                                    checked={(field.value || []).includes(
                                      // @ts-expect-error - field.value is string[] for multi-select
                                      option.id,
                                    )}
                                  />
                                </FormControl>
                                <div>
                                  <div className="font-medium">
                                    {option.label}
                                  </div>
                                  {option.description && (
                                    <div className="text-muted-foreground mt-1 text-sm">
                                      {option.description}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </FormLabel>
                          </div>
                        </motion.div>
                      ),
                    )}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        );

      case "text_input":
        return (
          <FormField
            control={form.control}
            name={currentStepData.id}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder={currentStepData.placeholder}
                    className="h-32 resize-none rounded-2xl border-2 border-yellow-200 bg-white/95 p-4 shadow-sm backdrop-blur-sm transition-colors duration-300 hover:border-yellow-300 focus:border-yellow-300 focus:bg-white focus:ring-2 focus:ring-yellow-100"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        );

      default:
        return null;
    }
  };

  return (
    <motion.div
      key={currentStep}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="relative rounded-2xl border-2 border-yellow-200 bg-gradient-to-br from-yellow-50/80 via-yellow-100/50 to-yellow-50/80 p-8 shadow-xl"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_120%,rgba(251,191,36,0.1),transparent_80%)]" />
      <div className="mb-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="rounded-xl bg-gradient-to-br from-yellow-100 to-yellow-200 p-2.5 shadow-md">
            <span className="text-2xl">🍯</span>
          </div>
          <h2 className="bg-gradient-to-r from-yellow-600 to-yellow-700 bg-clip-text text-2xl font-bold text-transparent">
            {currentStepData.title}
          </h2>
        </div>
        <div className="relative overflow-hidden rounded-xl border-2 border-yellow-100 bg-white/80 p-4 shadow-sm backdrop-blur-sm">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_107%,rgba(251,191,36,0.05),transparent_45%)]" />
          <p className="text-muted-foreground relative z-10">
            {currentStepData.description}
          </p>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {renderFormFields()}

          <div className="flex justify-between pt-6">
            {!isFirstStep && (
              <Button
                type="button"
                variant="outline"
                onClick={onPrev}
                disabled={isSubmitting}
                className="rounded-2xl border-2 border-yellow-200 bg-white px-6 font-medium text-yellow-700 transition-colors duration-300 hover:border-yellow-300 hover:bg-yellow-50"
              >
                <ChevronLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>
            )}
            <div className={isFirstStep ? "ml-auto" : ""}>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="rounded-2xl bg-gradient-to-r from-yellow-500 to-yellow-600 px-6 font-semibold text-white shadow-md transition-colors duration-300 hover:from-yellow-600 hover:to-yellow-700 disabled:opacity-50"
              >
                <div className="flex items-center gap-2">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>{isLastStep ? "Submitting..." : "Next..."}</span>
                    </>
                  ) : (
                    <>
                      <span>{isLastStep ? "Complete Profile" : "Next"}</span>
                      {!isLastStep && <ChevronRight className="h-4 w-4" />}
                    </>
                  )}
                </div>
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </motion.div>
  );
}
