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
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 blur transition-opacity group-hover:opacity-25" />
                            <div className="relative flex items-center space-x-3 rounded-xl border-2 border-blue-100 bg-white p-5 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-md">
                              <RadioGroupItem
                                value={option.id}
                                className="size-5"
                              />
                              <FormLabel className="cursor-pointer font-normal">
                                <div className="font-medium">
                                  {option.label}
                                </div>
                                {option.description && (
                                  <div className="text-muted-foreground mt-1 text-sm">
                                    {option.description}
                                  </div>
                                )}
                              </FormLabel>
                            </div>
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
                          <FormItem
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
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 blur transition-opacity group-hover:opacity-25" />
                            <div className="relative flex items-center space-x-4 rounded-xl border-2 border-blue-100 bg-white p-5 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-md">
                              <FormControl>
                                <Checkbox
                                  className="size-5"
                                  checked={(field.value || []).includes(
                                    // @ts-expect-error - field.value is string[] for multi-select
                                    option.id,
                                  )}
                                />
                              </FormControl>
                              <FormLabel
                                htmlFor={currentStepData.id}
                                className="font-normal"
                              >
                                <div className="font-medium">
                                  {option.label}
                                </div>
                                {option.description && (
                                  <div className="text-muted-foreground mt-1 text-sm">
                                    {option.description}
                                  </div>
                                )}
                              </FormLabel>
                            </div>
                          </FormItem>
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
                    className="h-32 resize-none rounded-xl border-2 border-blue-100 bg-white p-4 shadow-sm focus:border-blue-200 focus:ring-2 focus:ring-blue-100"
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
      className="rounded-2xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-purple-50 p-8 shadow-lg"
    >
      <div className="mb-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="rounded-xl bg-blue-100 p-2.5 shadow-sm">
            <span className="text-2xl">✨</span>
          </div>
          <h2 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-2xl font-bold text-transparent">
            {currentStepData.title}
          </h2>
        </div>
        <div className="rounded-xl bg-white/60 p-4 shadow-sm backdrop-blur-sm">
          <p className="text-muted-foreground">{currentStepData.description}</p>
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
                className="rounded-xl border-2 border-blue-200 px-6 hover:bg-blue-50"
              >
                <ChevronLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>
            )}
            <div className={isFirstStep ? "ml-auto" : ""}>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 px-6 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50"
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
