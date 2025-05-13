
import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import ComponentTabs from '@/components/showcase/ComponentTabs';
import CategoryBadge from '@/components/showcase/CategoryBadge';
import { componentCategories, ComponentData, Category, SubCategory } from '@/data/showcase';

const ComponentDetail: React.FC = () => {
  const { categoryId, subcategoryId, componentId } = useParams();
  const [component, setComponent] = useState<ComponentData | null>(null);
  const [category, setCategory] = useState<Category | null>(null);
  const [subcategory, setSubcategory] = useState<SubCategory | null>(null);
  const navigate = useNavigate();

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
        version={component.version || "1.0"}
        lastUpdated={component.lastUpdated}
        status={component.status || "stable"}
      />
    </div>
  );
};

export default ComponentDetail;
