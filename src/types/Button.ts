import React, { type ButtonHTMLAttributes } from 'react';

/**
 * Button types
 * */
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
  disabled?: boolean;
};
