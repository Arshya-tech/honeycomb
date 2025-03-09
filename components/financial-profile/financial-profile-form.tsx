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
                          <div className="bg-card border-border flex items-center space-x-3 rounded-lg border p-4">
                            <RadioGroupItem value={option.id} />
                            <FormLabel className="cursor-pointer font-normal">
                              <div className="font-medium">{option.label}</div>
                              {option.description && (
                                <div className="text-muted-foreground text-sm">
                                  {option.description}
                                </div>
                              )}
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
                          <FormItem
                            className="bg-card border-border hover:bg-muted/50 flex cursor-pointer items-center space-y-0 space-x-4 rounded-lg border p-4 transition-colors"
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
                            <FormControl>
                              <Checkbox
                                className="size-5"
                                checked={(field.value || []).includes(
                                  // @ts-expect-error - field.value is string[] for multi-select
                                  option.id,
                                )}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              <div className="font-medium">{option.label}</div>
                              {option.description && (
                                <div className="text-muted-foreground text-sm">
                                  {option.description}
                                </div>
                              )}
                            </FormLabel>
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
                    className="h-32 resize-none"
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
      className="bg-card border-border rounded-lg border p-6"
    >
      <h2 className="text-primary mb-2 text-2xl font-bold">
        {currentStepData.title}
      </h2>
      <p className="text-muted-foreground mb-6">
        {currentStepData.description}
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {renderFormFields()}

          <div className="flex justify-between pt-4">
            {!isFirstStep && (
              <Button
                type="button"
                variant="outline"
                onClick={onPrev}
                disabled={isSubmitting}
              >
                <ChevronLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>
            )}
            <div className={isFirstStep ? "ml-auto" : ""}>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {isLastStep ? "Submitting..." : "Next..."}
                  </>
                ) : (
                  <>
                    {isLastStep ? "Complete Profile" : "Next"}
                    {!isLastStep && <ChevronRight className="ml-2 h-4 w-4" />}
                  </>
                )}
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </motion.div>
  );
}
