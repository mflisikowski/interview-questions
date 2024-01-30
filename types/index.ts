import { ReactNode } from "react";

export interface searchParamsProps {
  message: string;
}

export interface formLabelProps {
  htmlFor: string;
  children: string;
}

export interface FormInputProps {
  name: string;
  type: string;
  placeholder?: string;
  required?: boolean;
}

export interface AuthLayoutProps {
  children: ReactNode;
}