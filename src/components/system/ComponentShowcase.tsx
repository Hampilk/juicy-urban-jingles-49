
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SidebarProvider, SidebarInset, SidebarRail } from '@/components/ui/sidebar';
import ShowcaseSidebar from '@/components/showcase/ShowcaseSidebar';
import ShowcaseHome from '@/components/showcase/ShowcaseHome';
import ComponentDetail from '@/pages/showcase/ComponentDetail';
import SearchResults from '@/pages/showcase/SearchResults';
import { componentCategories, getTotalComponentCount } from '@/data/showcase';

const ComponentShowcase = () => {
  const totalComponents = getTotalComponentCount();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredComponents, setFilteredComponents] = useState([]);
  
  // Handle search functionality
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setFilteredComponents([]);
      return;
    }

    // Filter components based on search query
    const results = [];
    componentCategories.forEach(category => {
      category.subcategories.forEach(subcategory => {
        subcategory.components.forEach(component => {
          if (component.name.toLowerCase().includes(query.toLowerCase()) ||
              component.description.toLowerCase().includes(query.toLowerCase())) {
            results.push(component);
          }
        });
      });
    });

    setFilteredComponents(results);
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-b from-gray-950 via-gray-950 to-black">
        <ShowcaseSidebar onSearch={handleSearch} />
        <SidebarRail />
        <SidebarInset>
          {/* Fixed background effects */}
          <div className="fixed inset-0 -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(59,130,246,0.15),transparent_60%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(139,92,246,0.15),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
          </div>
          
          <Routes>
            <Route path="/" element={<ShowcaseHome totalComponents={totalComponents} />} />
            <Route path="/:categoryId/:subcategoryId/:componentId" element={<ComponentDetail />} />
            <Route path="/search" element={
              <SearchResults 
                searchQuery={searchQuery} 
                filteredComponents={filteredComponents} 
              />
            } />
          </Routes>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default ComponentShowcase;
