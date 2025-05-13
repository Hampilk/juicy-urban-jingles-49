
import { Category } from './types';
import { uiComponents } from './ui-components';
import { teamComponents } from './team-components';
import { matchComponents } from './match-components';
import { dashboardComponents } from './dashboard-components';
import { pageComponents } from './page-components';

// Export all component categories
export const componentCategories: Category[] = [
  uiComponents,
  teamComponents,
  matchComponents,
  dashboardComponents,
  pageComponents
];

// Count total number of components
export const getTotalComponentCount = (): number => {
  let count = 0;
  componentCategories.forEach(category => {
    category.subcategories.forEach(subcategory => {
      count += subcategory.components.length;
    });
  });
  return count;
};

// Export types
export * from './types';
export * from './render-utils';
