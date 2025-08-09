import React, { type ElementType } from 'react';

export type TooltipProps<T extends ElementType> = {
  as?: T;
  children: React.ReactNode;
  contentClassName?: string;
  tooltipClassName?: string;
};
