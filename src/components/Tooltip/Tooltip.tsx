import React, { useState, useRef, type ElementType } from 'react';
import './Tooltip.scss';
import { cn } from '../../utils/utils.ts';
import type { TooltipProps } from '../../types/Tooltip.ts';

export default function Tooltip<T extends ElementType = 'span'>({
  as,
  children,
  contentClassName,
  tooltipClassName,
}: TooltipProps<T>) {
  const Tag = as || 'span';
  const [show, setShow] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const wrapperRef = useRef<HTMLDivElement>(null);

  // При русі миші перевіряємо, чи текст обрізаний і якщо так — показуємо тултіп, позиціонуючи його біля курсора
  const handleMouseMove = (e: React.MouseEvent) => {
    if (wrapperRef.current) {
      const el = wrapperRef.current;
      const isOverflowing = el.scrollWidth > el.clientWidth;
      setShow(isOverflowing);
    }
    setCoords({ x: e.clientX + 10, y: e.clientY + 10 });
  };

  return (
    !!children && (
      <>
        <Tag
          ref={wrapperRef as any} // Типізуємо через any, бо generic типи не співпадають
          className={cn('tooltip-wrapper', contentClassName)}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setShow(false)} // Ховаємо тултіп
        >
          {children}
        </Tag>

        {/* Показуємо тултіп тільки якщо текст обрізаний (show === true) */}
        {show && (
          <div
            className={cn('tooltip', tooltipClassName)}
            style={{ top: coords.y, left: coords.x }}
          >
            {wrapperRef.current?.textContent}
          </div>
        )}
      </>
    )
  );
}
