// En @/components/ui/card.tsx
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ className, children, ...props }) => (
  <div {...props} className={`... ${className}`}>
    {children}
  </div>
);

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

export const CardContent: React.FC<CardContentProps> = ({ className, children, ...props }) => (
  <div {...props} className={`... ${className}`}>
    {children}
  </div>
);
