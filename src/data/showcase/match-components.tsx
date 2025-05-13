
import React from 'react';
import { Calendar } from 'lucide-react';
import { Category } from './types';

export const matchComponents: Category = {
  id: 'match',
  name: 'Match Components',
  icon: React.createElement(Calendar, { className: "h-4 w-4" }),
  subcategories: [
    {
      id: 'match-display',
      name: 'Match Display',
      icon: Calendar,
      components: []
    },
  ]
};
