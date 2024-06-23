import React, { ReactNode, useRef } from 'react';
import classNames from 'classnames';

const Button = ({
  children,
  duration = 700,
  rounded = 'md',
  size = 'sm',
  icon = false,
  customStyles,
  disabled,
  onClick,
}: {
  children?: ReactNode;
  duration?: number;
  rounded?: 'sm' | 'md' | 'full';
  size?: 'sm' | 'md' | 'lg';
  icon?: boolean;
  customStyles?: string;
  disabled?: boolean;
  onClick?: () => void;
}) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = buttonRef.current;

    if (button) {
      const rect = button.getBoundingClientRect();
      const ripple = document.createElement('span');
      ripple.className = 'ripple';

      const { left, top } = rect;
      const leftPos = e.clientX - left;
      const topPos = e.clientY - top;

      ripple.style.left = `${leftPos}px`;
      ripple.style.top = `${topPos}px`;
      ripple.style.animationDuration = duration / 1000 + 's';
      ripple.style.background = 'var(--ripple-bg)';

      button.appendChild(ripple);

      ripple.addEventListener('animationend', () => {
        button.removeChild(ripple);
      });
    }
  };

  return (
    <button
      ref={buttonRef}
      onMouseDown={handleMouseDown}
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        `w-full relative overflow-hidden border hover:-translate-y-0.5 active:scale-[0.98] text-body-md ${customStyles} disabled:translate-y-0 disabled:opacity-80 disabled:active:scale-100`,
        {
          'rounded-sm': rounded === 'sm',
          'rounded-md': rounded === 'md',
          'rounded-full': rounded === 'full',
          'h-sm': size === 'sm',
          'h-md': size === 'md',
          'h-lg': size === 'lg',
        }
      )}
    >
      <span
        className={classNames({
          'inline-flex justify-center items-center p-0 size-9': icon,
          'px-4': !icon,
        })}
      >
        {children}
      </span>
    </button>
  );
};

export default Button;
