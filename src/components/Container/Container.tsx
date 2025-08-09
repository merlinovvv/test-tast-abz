import type { HTMLAttributes, JSX, ReactNode } from 'react';
import { cn } from '../../utils/utils.ts';
import './Container.scss';

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode;
  className?: string;
};

/**
 * Container - aligns and centers page content
 * @param children - content in container
 * @param className - additional classes
 * @param props
 * */
export function Container({ children, className, ...props }: ContainerProps): JSX.Element {
  return (
    <div {...props} className={cn('container', className)}>
      {children}
    </div>
  );
}
