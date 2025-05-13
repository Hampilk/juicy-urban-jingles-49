
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
import { Input } from '@/components/ui/input';
import { 
  LayoutDashboard, 
  Search, 
  Box, 
  Users, 
  Calendar, 
  BarChart3, 
  Layout, 
  FileText, 
  Home, 
  List 
} from 'lucide-react';
import { componentCategories } from '@/data/showcase-data';

interface ShowcaseSidebarProps {
  onSearch: (query: string) => void;
}

const ShowcaseSidebar: React.FC<ShowcaseSidebarProps> = ({ onSearch }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <Sidebar side="left" variant="inset" collapsible="icon">
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2 py-1.5">
          <Box className="w-6 h-6 text-blue-400" />
          <span className="font-semibold text-lg">Component Library</span>
        </div>
        <div className="px-2">
          <Input 
            placeholder="Search components..." 
            onChange={handleSearchChange}
            className="bg-background/50"
          />
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
                      <subcategory.icon className="h-4 w-4" />
                      <span>{subcategory.name}</span>
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
        <div className="p-2 text-xs text-gray-500">
          <p>Component library for visualizing and using all available components in the project.</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default ShowcaseSidebar;
