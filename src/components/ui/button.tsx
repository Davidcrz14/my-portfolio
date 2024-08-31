// src/components/ui/button.tsx

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'ghost';
  size?: 'icon' | 'default';
  asChild?: boolean;
  as?: React.ElementType; // Allows for different types of elements
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'default',
  size = 'default',
  className,
  children,
  asChild = false,
  as: Component = 'button',
  ...props
}) => {
  // Ensure that if `asChild` is true, we have a valid `as` component
  if (asChild && !Component) {
    throw new Error('The "as" prop is required when using "asChild"');
  }

  // Render the appropriate component based on the `asChild` prop
  const TagName = asChild ? Component : 'button';

  return (
    <TagName
      {...props}
      className={`btn ${variant} ${size} ${className || ''}`}
    >
      {children}
    </TagName>
  );
};
