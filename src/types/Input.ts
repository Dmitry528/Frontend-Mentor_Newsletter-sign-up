import { InputHTMLAttributes } from "react";

export interface IInputProps {
  label: string;
  type: 'text';
  placeholder: string;
  inputAttributes: InputHTMLAttributes<HTMLInputElement>;
  errorMessage?: string;
}
