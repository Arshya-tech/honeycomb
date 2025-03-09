import { FinancialProfileFormData } from "@/lib/validations/financial-profile";

export interface FormOption {
  id: string;
  label: string;
  description?: string;
  value?: number;
}

interface BaseStep {
  id: keyof FinancialProfileFormData;
  title: string;
  description: string;
}

export interface SingleSelectStep extends BaseStep {
  type: "single_select";
  options: FormOption[];
}

export interface MultiSelectStep extends BaseStep {
  type: "multi_select";
  options: FormOption[];
}

export interface TextInputStep extends BaseStep {
  type: "text_input";
  placeholder: string;
}

export type FormStep = SingleSelectStep | MultiSelectStep | TextInputStep;

// Type guard functions
export function isSingleSelectStep(step: FormStep): step is SingleSelectStep {
  return step.type === "single_select";
}

export function isMultiSelectStep(step: FormStep): step is MultiSelectStep {
  return step.type === "multi_select";
}

export function isTextInputStep(step: FormStep): step is TextInputStep {
  return step.type === "text_input";
}
