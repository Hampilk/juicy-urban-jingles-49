
import React from 'react';
import { Users } from 'lucide-react';
import { renderTeamComparison } from './render-utils';
import { teamComparisonCode } from './code-snippets';
import { Category } from './types';

export const teamComponents: Category = {
  id: 'team',
  name: 'Team Components',
  icon: React.createElement(Users, { className: "h-4 w-4" }),
  subcategories: [
    {
      id: 'team-display',
      name: 'Team Display',
      icon: Users,
      components: [
        {
          id: 'team-comparison',
          name: 'Team Comparison',
          description: 'Shows a detailed comparison between two teams.',
          component: renderTeamComparison(),
          code: teamComparisonCode,
          version: "1.0",
          lastUpdated: "2025-05-01",
          status: "beta"
        },
      ]
    },
  ]
};
