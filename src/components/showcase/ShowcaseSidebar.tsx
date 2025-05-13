
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Sidebar, 
  SidebarContent, 
  SidebarFooter, 
  SidebarGroup, 
  SidebarGroupContent, 
  SidebarGroupLabel, 
  SidebarHeader, 
  SidebarMenu, 
  SidebarMenuButton, 
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem
} from '@/components/ui/sidebar';
import { Github } from 'lucide-react';
import { componentCategories } from '@/data/showcase';
import ComponentSearch from './ComponentSearch';
import { Badge } from '@/components/ui/badge';

interface ShowcaseSidebarProps {
  onSearch: (query: string) => void;
}

const ShowcaseSidebar: React.FC<ShowcaseSidebarProps> = ({ onSearch }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <Sidebar side="left" variant="inset" collapsible="icon">
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2 py-1.5">
          <div className="w-6 h-6 text-blue-400">
            {/* Use one of the icons from the first category */}
            {componentCategories[0].icon}
          </div>
          <span className="font-semibold text-lg">Component Library</span>
        </div>
        <div className="px-2">
          <ComponentSearch onSearch={onSearch} />
        </div>
      </SidebarHeader>
      <SidebarContent>
        {componentCategories.map((category) => (
          <SidebarGroup key={category.id}>
            <SidebarGroupLabel className="flex items-center gap-2">
              {category.icon}
              <span>{category.name}</span>
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {category.subcategories.map((subcategory) => (
                  <SidebarMenuItem key={subcategory.id}>
                    <SidebarMenuButton tooltip={subcategory.name}>
                      {React.createElement(subcategory.icon, { className: "h-4 w-4" })}
                      <span>{subcategory.name}</span>
                      {subcategory.components.length > 0 && (
                        <Badge 
                          variant="outline" 
                          className="ml-auto bg-white/5 text-xs border-transparent"
                        >
                          {subcategory.components.length}
                        </Badge>
                      )}
                    </SidebarMenuButton>
                    <SidebarMenuSub>
                      {subcategory.components.map((component) => (
                        <SidebarMenuSubItem key={component.id}>
                          <SidebarMenuSubButton 
                            asChild 
                            isActive={currentPath.includes(`/component-showcase/${category.id}/${subcategory.id}/${component.id}`)}
                          >
                            <Link to={`/component-showcase/${category.id}/${subcategory.id}/${component.id}`}>
                              {component.name}
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <div className="p-2 space-y-2 text-xs text-gray-500">
          <p>Component library for visualizing and using all available components in the project.</p>
          <div className="flex items-center gap-1.5 text-gray-400 hover:text-gray-300 transition-colors">
            <Github className="h-3.5 w-3.5" />
            <a href="https://github.com/shadcn/ui" target="_blank" rel="noopener noreferrer">shadcn/ui components</a>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default ShowcaseSidebar;
