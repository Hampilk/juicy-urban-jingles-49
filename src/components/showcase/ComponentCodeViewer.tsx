
import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ComponentCodeViewerProps {
  code: string;
  language?: string;
}

const ComponentCodeViewer: React.FC<ComponentCodeViewerProps> = ({ 
  code, 
  language = 'jsx' 
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-lg bg-black/90 text-white overflow-hidden">
      <div className="flex items-center justify-between p-2 bg-black/50 border-b border-white/10">
        <div className="text-xs text-gray-400">{language.toUpperCase()}</div>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={handleCopy} 
          className="h-7 text-xs"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 mr-1" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5 mr-1" />
              <span>Copy code</span>
            </>
          )}
        </Button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default ComponentCodeViewer;
