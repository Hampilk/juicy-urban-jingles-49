
import React, { useState, useEffect } from 'react';
import { Link, Route, Routes, useParams, useNavigate } from 'react-router-dom';
import { SidebarProvider, SidebarInset, SidebarRail } from '@/components/ui/sidebar';
import ShowcaseSidebar from '@/components/showcase/ShowcaseSidebar';
import ComponentTabs from '@/components/showcase/ComponentTabs';
import CategoryBadge from '@/components/showcase/CategoryBadge';
import ShowcaseHome from '@/components/showcase/ShowcaseHome';
import { componentCategories, ComponentData, SubCategory, Category } from '@/data/showcase-data';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { ArrowLeft, Home } from 'lucide-react';

// Count total number of components
const getTotalComponentCount = (): number => {
  let count = 0;
  componentCategories.forEach(category => {
    category.subcategories.forEach(subcategory => {
      count += subcategory.components.length;
    });
  });
  return count;
};

const ComponentShowcase = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredComponents, setFilteredComponents] = useState<ComponentData[]>([]);
  const navigate = useNavigate();
  const totalComponents = getTotalComponentCount();

  // Handle search functionality
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setFilteredComponents([]);
      return;
    }

    const results: ComponentData[] = [];
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

  // Component detail page
  const ComponentDetail = () => {
    const { categoryId, subcategoryId, componentId } = useParams();
    const [component, setComponent] = useState<ComponentData | null>(null);
    const [category, setCategory] = useState<Category | null>(null);
    const [subcategory, setSubcategory] = useState<SubCategory | null>(null);

    useEffect(() => {
      const foundCategory = componentCategories.find(c => c.id === categoryId);
      if (foundCategory) {
        setCategory(foundCategory);
        const foundSubcategory = foundCategory.subcategories.find(s => s.id === subcategoryId);
        if (foundSubcategory) {
          setSubcategory(foundSubcategory);
          const foundComponent = foundSubcategory.components.find(comp => comp.id === componentId);
          if (foundComponent) {
            setComponent(foundComponent);
          }
        }
      }
    }, [categoryId, subcategoryId, componentId]);

    if (!component) {
      return (
        <div className="p-6 text-center">
          <p className="text-lg text-gray-400">Component not found</p>
        </div>
      );
    }

    return (
      <div className="p-6 space-y-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/component-showcase">Components</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to={`/component-showcase/${category?.id}`}>{category?.name}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to={`/component-showcase/${category?.id}/${subcategory?.id}`}>{subcategory?.name}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              {component?.name}
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <button 
                onClick={() => navigate(-1)}
                className="p-1.5 rounded-full bg-white/5 hover:bg-white/10"
              >
                <ArrowLeft className="h-4 w-4 text-gray-400" />
              </button>
              <h1 className="text-2xl font-bold">{component.name}</h1>
              <CategoryBadge category={category?.name || ''} />
            </div>
          </div>
          <p className="text-gray-400 mb-6">{component.description}</p>
        </div>

        <ComponentTabs 
          component={component.component} 
          code={component.code}
          props={component.props}
          version="1.0"
          lastUpdated="2025-05-01"
          status="stable"
        />
      </div>
    );
  };

  // Search results component
  const SearchResults = () => {
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
            <Route path="/" element={searchQuery ? <SearchResults /> : <ShowcaseHome totalComponents={totalComponents} />} />
            <Route path="/:categoryId/:subcategoryId/:componentId" element={<ComponentDetail />} />
          </Routes>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default ComponentShowcase;
