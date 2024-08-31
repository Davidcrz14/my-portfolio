import React from 'react';

interface AvatarProps {
  children?: React.ReactNode;
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({ children, className }) => (
  <div className={className}>
    {children}
  </div>
);

export const AvatarFallback: React.FC<AvatarProps> = ({ children, className }) => (
  <span className={className}>
    {children}
  </span>
);

export const AvatarImage: React.FC<{
  src: string;
  alt: string;
  className?: string;
}> = ({ src, alt, className }) => (
  <img src={src} alt={alt} className={className} />
);
