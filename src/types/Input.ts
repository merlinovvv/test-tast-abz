import type { InputHTMLAttributes } from 'react';

/**
 * Input types
 * */
export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  helpText?: string;
  error?: string[] | string;
};

/**
 * InputFile types
 * */
export type InputFileProps = InputHTMLAttributes<HTMLInputElement> & {
  helpText?: string;
  error?: string[] | string;
  buttonLabel?: string;
};

/**
 * InputRadio types
 * */
export type InputRadioProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};
