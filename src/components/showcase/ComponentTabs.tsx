
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ComponentPreview from './ComponentPreview';
import ComponentCodeViewer from './ComponentCodeViewer';

interface ComponentTabsProps {
  component: React.ReactNode;
  code: string;
  props?: React.ReactNode;
}

const ComponentTabs: React.FC<ComponentTabsProps> = ({ component, code, props }) => {
  return (
    <Tabs defaultValue="preview" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
        <TabsTrigger value="props">Props</TabsTrigger>
      </TabsList>
      <TabsContent value="preview" className="mt-4">
        <ComponentPreview>
          {component}
        </ComponentPreview>
      </TabsContent>
      <TabsContent value="code" className="mt-4">
        <ComponentCodeViewer code={code} />
      </TabsContent>
      <TabsContent value="props" className="mt-4">
        <div className="rounded-lg border p-6">
          {props || (
            <p className="text-muted-foreground text-sm">
              No props documentation available for this component.
            </p>
          )}
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default ComponentTabs;
