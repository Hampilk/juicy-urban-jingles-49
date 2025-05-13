
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

// Define component data types
export interface ComponentData {
  id: string;
  name: string;
  description: string;
  category: string;
  version: string;
  dependencies?: string[];
  props?: ComponentProp[];
}

export interface ComponentProp {
  name: string;
  type: string;
  required: boolean;
  description: string;
  defaultValue?: string;
}

// Sample component library data
export const components: ComponentData[] = [
  {
    id: 'button',
    name: 'Button',
    description: 'Interactive button component with various states and variants.',
    category: 'User Interface',
    version: '1.2.0',
    dependencies: ['@radix-ui/react-slot'],
    props: [
      {
        name: 'variant',
        type: 'string',
        required: false,
        description: 'Visual style of the button',
        defaultValue: 'default'
      },
      {
        name: 'size',
        type: 'string',
        required: false,
        description: 'Size of the button',
        defaultValue: 'default'
      }
    ]
  },
  {
    id: 'card',
    name: 'Card',
    description: 'Container component with header, content, and footer sections.',
    category: 'Layout',
    version: '1.0.0',
    props: [
      {
        name: 'className',
        type: 'string',
        required: false,
        description: 'Additional CSS classes'
      }
    ]
  },
  {
    id: 'avatar',
    name: 'Avatar',
    description: 'User or entity avatar with image and fallback.',
    category: 'User Interface',
    version: '1.1.0',
    dependencies: ['@radix-ui/react-avatar'],
    props: [
      {
        name: 'src',
        type: 'string',
        required: false,
        description: 'Image source URL'
      },
      {
        name: 'alt',
        type: 'string',
        required: true,
        description: 'Alternative text for the avatar image'
      }
    ]
  }
];

// Component categories
export const categories = [
  'User Interface',
  'Layout',
  'Data Display',
  'Form',
  'Navigation',
  'Feedback',
  'Overlay'
];

const ComponentLibraryData: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-white">Component Library Data</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Components Overview</CardTitle>
          <CardDescription>
            Detailed information about available components in the library
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Component</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Version</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {components.map((component) => (
                <TableRow key={component.id}>
                  <TableCell className="font-medium">{component.name}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{component.category}</Badge>
                  </TableCell>
                  <TableCell>{component.version}</TableCell>
                  <TableCell>{component.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Component Categories</CardTitle>
          <CardDescription>
            Available categories for organizing components
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge key={category} variant="secondary">{category}</Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ComponentLibraryData;
