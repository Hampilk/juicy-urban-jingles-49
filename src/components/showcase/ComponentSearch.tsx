
import React, { useState, useEffect, useRef } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, X } from 'lucide-react';
import { componentCategories, ComponentData } from '@/data/showcase';
import { useNavigate } from 'react-router-dom';
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';

interface ComponentSearchProps {
  onSearch: (query: string) => void;
}

const ComponentSearch: React.FC<ComponentSearchProps> = ({ onSearch }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  // Flatten components for search
  const allComponents: {
    id: string;
    name: string;
    description: string;
    path: string;
    category: string;
    subcategory: string;
  }[] = [];

  componentCategories.forEach(category => {
    category.subcategories.forEach(subcategory => {
      subcategory.components.forEach(component => {
        allComponents.push({
          id: component.id,
          name: component.name,
          description: component.description,
          path: `/component-showcase/${category.id}/${subcategory.id}/${component.id}`,
          category: category.name,
          subcategory: subcategory.name
        });
      });
    });
  });

  // Filter components based on search
  const filteredComponents = allComponents.filter(component =>
    component.name.toLowerCase().includes(value.toLowerCase()) ||
    component.description.toLowerCase().includes(value.toLowerCase()) ||
    component.category.toLowerCase().includes(value.toLowerCase()) ||
    component.subcategory.toLowerCase().includes(value.toLowerCase())
  );

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(open => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onSearch(newValue);
  };

  const handleClear = () => {
    setValue('');
    onSearch('');
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleSelectComponent = (path: string) => {
    setOpen(false);
    navigate(path);
  };

  return (
    <>
      <div className="relative w-full">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          ref={inputRef}
          className="pl-10 pr-10 bg-white/5 border-white/10 text-white focus-visible:ring-blue-500/30 w-full"
          placeholder="Search components... (Ctrl+K)"
          value={value}
          onChange={handleChange}
          onClick={() => setOpen(true)}
        />
        {value && (
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-7 w-7 p-0"
            onClick={handleClear}
          >
            <X className="h-4 w-4 text-gray-400" />
          </Button>
        )}
      </div>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput 
          placeholder="Search components..." 
          value={value}
          onValueChange={setValue}
        />
        <CommandList>
          <CommandEmpty>No components found.</CommandEmpty>
          {filteredComponents.length > 0 && (
            <CommandGroup heading="Components">
              {filteredComponents.map(component => (
                <CommandItem
                  key={component.path}
                  onSelect={() => handleSelectComponent(component.path)}
                >
                  <div className="flex flex-col">
                    <span>{component.name}</span>
                    <span className="text-xs text-gray-500">{component.category} / {component.subcategory}</span>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default ComponentSearch;
