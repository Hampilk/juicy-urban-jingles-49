
import React from 'react';

// Type definitions for component data structure
export interface ComponentData {
  id: string;
  name: string;
  description: string;
  component: React.ReactNode;
  code: string;
  props?: React.ReactNode;
  version?: string;
  lastUpdated?: string;
  status?: 'stable' | 'beta' | 'deprecated' | 'experimental';
}

export interface SubCategory {
  id: string;
  name: string;
  icon: any;
  components: ComponentData[];
}

export interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  subcategories: SubCategory[];
}
