
import React from 'react';
import { FileText } from 'lucide-react';
import { Category } from './types';

export const pageComponents: Category = {
  id: 'pages',
  name: 'Page Components',
  icon: React.createElement(FileText, { className: "h-4 w-4" }),
  subcategories: [
    {
      id: 'main-pages',
      name: 'Main Pages',
      icon: FileText,
      components: []
    },
  ]
};
