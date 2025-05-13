
import React from 'react';
import { cn } from '@/lib/utils';

interface ComponentPreviewProps {
  children: React.ReactNode;
  className?: string;
  withBackground?: boolean;
  height?: string;
  padding?: string;
  centered?: boolean;
  orientation?: 'horizontal' | 'vertical';
}

const ComponentPreview: React.FC<ComponentPreviewProps> = ({ 
  children, 
  className,
  withBackground = true,
  height = 'auto',
  padding = 'p-6',
  centered = true,
  orientation = 'horizontal'
}) => {
  return (
    <div className={cn(
      "rounded-lg border flex",
      withBackground && "bg-grid-pattern bg-muted/20",
      padding,
      height === 'auto' ? 'min-h-[200px]' : `min-h-[${height}]`,
      centered && "items-center justify-center",
      orientation === 'vertical' && "flex-col",
      className
    )}>
      <div className="w-full">
        {children}
      </div>
    </div>
  );
};

export default ComponentPreview;
