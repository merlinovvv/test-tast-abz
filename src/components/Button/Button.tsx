import './Button.scss';
import type { ButtonProps } from '../../types/Button.ts';

/**
 * Button
 *
 * @param children - content
 * @param href - link (if there is, then the element <a/> is created)
 * @param onClick - click function
 * @param variant - color variant ('primary' | 'secondary')
 * @param className - className
 * @param props
 * */
function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) {
  const classes = `btn btn-${variant} ${className}`;

  // Якщо є href, то створюємо елемент a
  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button {...props} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
export default Button;
