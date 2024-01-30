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

export interface WithChildren {
  children: ReactNode;
}

export interface AuthLayoutProps extends WithChildren {}
export interface RootLayoutProps extends WithChildren {}
