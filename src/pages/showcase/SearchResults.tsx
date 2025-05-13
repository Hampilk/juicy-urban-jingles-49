
import React from 'react';
import { Link } from 'react-router-dom';
import { ComponentData, componentCategories } from '@/data/showcase';

interface SearchResultsProps {
  searchQuery: string;
  filteredComponents: ComponentData[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ searchQuery, filteredComponents }) => {
  if (searchQuery.trim() === '') {
    return null;
  }

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">
        Search results for: <span className="text-blue-400">"{searchQuery}"</span>
      </h2>
      
      {filteredComponents.length === 0 ? (
        <div className="text-center p-12 bg-black/20 rounded-lg border border-white/10">
          <p className="text-gray-400">No components found matching your search.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredComponents.map(component => {
            // Find the parent category and subcategory
            let parentCategoryId = "";
            let parentSubcategoryId = "";
            
            componentCategories.forEach(category => {
              category.subcategories.forEach(subcategory => {
                if (subcategory.components.some(c => c.id === component.id)) {
                  parentCategoryId = category.id;
                  parentSubcategoryId = subcategory.id;
                }
              });
            });

            return (
              <Link 
                key={component.id}
                to={`/component-showcase/${parentCategoryId}/${parentSubcategoryId}/${component.id}`}
                className="p-4 rounded-lg border border-white/10 bg-black/20 hover:bg-black/30 transition-colors"
              >
                <h3 className="text-lg font-medium mb-2">{component.name}</h3>
                <p className="text-sm text-gray-400 line-clamp-2">{component.description}</p>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
