
import React from 'react';
import { LayoutDashboard } from 'lucide-react';
import { Category } from './types';

export const dashboardComponents: Category = {
  id: 'dashboard',
  name: 'Dashboard Components',
  icon: React.createElement(LayoutDashboard, { className: "h-4 w-4" }),
  subcategories: [
    {
      id: 'dashboard-widgets',
      name: 'Dashboard Widgets',
      icon: LayoutDashboard,
      components: []
    },
  ]
};
