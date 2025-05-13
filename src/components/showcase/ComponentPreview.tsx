
import React from 'react';
import { cn } from '@/lib/utils';

interface ComponentPreviewProps {
  children: React.ReactNode;
  className?: string;
  withBackground?: boolean;
  height?: string;
}

const ComponentPreview: React.FC<ComponentPreviewProps> = ({ 
  children, 
  className,
  withBackground = true,
  height
}) => {
  return (
    <div className={cn(
      "rounded-lg border p-6 flex items-center justify-center",
      withBackground && "bg-grid-pattern bg-muted/20",
      height && `min-h-[${height}]`,
      className
    )}>
      <div className="w-full">
        {children}
      </div>
    </div>
  );
};

export default ComponentPreview;
