
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { CalendarDays } from 'lucide-react';

interface ComponentVersionProps {
  version: string;
  lastUpdated?: string;
  status?: 'stable' | 'beta' | 'deprecated' | 'experimental';
}

const ComponentVersion: React.FC<ComponentVersionProps> = ({
  version,
  lastUpdated,
  status = 'stable'
}) => {
  const getStatusColor = () => {
    switch (status) {
      case 'stable':
        return 'bg-green-500/20 text-green-500 border-green-500/20';
      case 'beta':
        return 'bg-blue-500/20 text-blue-500 border-blue-500/20';
      case 'deprecated':
        return 'bg-red-500/20 text-red-500 border-red-500/20';
      case 'experimental':
        return 'bg-amber-500/20 text-amber-500 border-amber-500/20';
      default:
        return 'bg-gray-500/20 text-gray-500 border-gray-500/20';
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Badge variant="outline" className="bg-white/5 border-white/10">v{version}</Badge>
      
      <Badge variant="outline" className={getStatusColor()}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
      
      {lastUpdated && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center text-xs text-gray-400 gap-1 cursor-help">
                <CalendarDays className="h-3 w-3" />
                <span>Updated</span>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Last updated: {lastUpdated}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </div>
  );
};

export default ComponentVersion;
