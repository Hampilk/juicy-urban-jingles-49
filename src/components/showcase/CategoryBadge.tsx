
import React from 'react';
import { Badge } from '@/components/ui/badge';

type CategoryColor = {
  [key: string]: string;
};

const categoryColors: CategoryColor = {
  'ui': 'bg-blue-500/20 text-blue-400 hover:bg-blue-500/30',
  'layout': 'bg-green-500/20 text-green-400 hover:bg-green-500/30',
  'form': 'bg-amber-500/20 text-amber-400 hover:bg-amber-500/30',
  'navigation': 'bg-purple-500/20 text-purple-400 hover:bg-purple-500/30',
  'feedback': 'bg-red-500/20 text-red-400 hover:bg-red-500/30',
  'data': 'bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30',
  'match': 'bg-indigo-500/20 text-indigo-400 hover:bg-indigo-500/30',
  'team': 'bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30',
  'page': 'bg-pink-500/20 text-pink-400 hover:bg-pink-500/30',
  'hero': 'bg-orange-500/20 text-orange-400 hover:bg-orange-500/30',
  'dashboard': 'bg-violet-500/20 text-violet-400 hover:bg-violet-500/30',
  'default': 'bg-gray-500/20 text-gray-400 hover:bg-gray-500/30',
};

interface CategoryBadgeProps {
  category: string;
}

const CategoryBadge: React.FC<CategoryBadgeProps> = ({ category }) => {
  const lowerCategory = category.toLowerCase();
  const colorClass = categoryColors[lowerCategory] || categoryColors.default;
  
  return (
    <Badge 
      variant="outline" 
      className={`${colorClass} border-none`}>
      {category}
    </Badge>
  );
};

export default CategoryBadge;
