
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Copy, ArrowRight, GitHub, Package, Bookmark } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { componentCategories } from '@/data/showcase-data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface ShowcaseHomeProps {
  totalComponents: number;
}

const ShowcaseHome: React.FC<ShowcaseHomeProps> = ({ totalComponents }) => {
  // Count components by category
  const categoryCounts = componentCategories.map(category => ({
    id: category.id,
    name: category.name,
    icon: category.icon,
    count: category.subcategories.reduce((sum, sub) => sum + sub.components.length, 0)
  }));

  return (
    <div className="p-6 space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Link to="/" className="p-1.5 rounded-full bg-white/5 hover:bg-white/10">
            <Home className="h-4 w-4 text-gray-400" />
          </Link>
          <h1 className="text-3xl font-bold">Component Library</h1>
        </div>
        <p className="text-gray-400 max-w-2xl">
          Explore {totalComponents} available components, view their code and learn how to use them in your project.
          This library provides a comprehensive collection of UI components and utility functions.
        </p>
        
        <div className="flex flex-wrap gap-3 pt-2">
          <Button variant="outline" className="bg-white/5 border-white/10">
            <Copy className="mr-2 h-4 w-4" />
            Copy Examples
          </Button>
          <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <h2 className="font-semibold text-lg mb-3 flex items-center gap-2">
            <Package className="h-4 w-4" /> 
            Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {categoryCounts.map((category) => (
              <Link 
                key={category.id}
                to={`/component-showcase/${category.id}`}
                className="flex items-center gap-3 p-4 rounded-lg border border-white/10 bg-black/20 hover:bg-black/30 transition-colors"
              >
                <div className="p-2 bg-blue-500/20 rounded-md text-blue-400">
                  {category.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-medium">{category.name}</h3>
                  <p className="text-xs text-gray-400">{category.count} components</p>
                </div>
                <ArrowRight className="h-4 w-4 text-gray-500" />
              </Link>
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="font-semibold text-lg mb-3 flex items-center gap-2">
            <Bookmark className="h-4 w-4" /> 
            Resources
          </h2>
          <Card className="bg-white/5 border-white/10 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Component Documentation</CardTitle>
            </CardHeader>
            <CardContent className="text-xs text-gray-400">
              <p>Access guides, API references and examples for using these components in your applications.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full text-xs h-8 bg-white/10 border-white/10">
                <GitHub className="mr-2 h-3 w-3" />
                View on GitHub
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {componentCategories.map(category => {
          // Only show categories that have components
          const hasComponents = category.subcategories.some(sub => sub.components.length > 0);
          if (!hasComponents) return null;
          
          return (
            <div 
              key={category.id}
              className="p-6 rounded-lg border border-white/10 bg-black/20 hover:bg-black/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-500/20 rounded-md text-blue-400">
                  {category.icon}
                </div>
                <h2 className="text-xl font-bold">{category.name}</h2>
              </div>
              <div className="space-y-4">
                {category.subcategories.map(subcategory => {
                  if (subcategory.components.length === 0) return null;
                  
                  return (
                    <div key={subcategory.id} className="space-y-2">
                      <h3 className="text-sm font-medium text-gray-300">{subcategory.name}</h3>
                      <div className="flex flex-wrap gap-2">
                        {subcategory.components.map(component => (
                          <Link
                            key={component.id}
                            to={`/component-showcase/${category.id}/${subcategory.id}/${component.id}`}
                            className="text-xs px-2 py-1 rounded bg-white/5 hover:bg-white/10 text-blue-400 transition-colors"
                          >
                            {component.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShowcaseHome;
