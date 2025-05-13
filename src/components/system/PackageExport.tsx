
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Separator } from '@/components/ui/separator';

const PackageExport = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-white">Package Exports</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Component Exports</CardTitle>
          <CardDescription>
            Component exports available in the package
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Component Name</TableHead>
                <TableHead>Import Path</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Button</TableCell>
                <TableCell><code className="text-xs">@/components/ui/button</code></TableCell>
                <TableCell>Interactive button component with variants</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Card</TableCell>
                <TableCell><code className="text-xs">@/components/ui/card</code></TableCell>
                <TableCell>Container component with header, content, and footer</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Input</TableCell>
                <TableCell><code className="text-xs">@/components/ui/input</code></TableCell>
                <TableCell>Form input component</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Sidebar</TableCell>
                <TableCell><code className="text-xs">@/components/ui/sidebar</code></TableCell>
                <TableCell>Collapsible sidebar navigation component</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Table</TableCell>
                <TableCell><code className="text-xs">@/components/ui/table</code></TableCell>
                <TableCell>Data table component</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Utility Exports</CardTitle>
          <CardDescription>
            Utility functions and hooks
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Import Path</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">useIsMobile</TableCell>
                <TableCell><code className="text-xs">@/hooks/use-mobile</code></TableCell>
                <TableCell>Hook to detect mobile viewport</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">toast</TableCell>
                <TableCell><code className="text-xs">@/components/ui/toast</code></TableCell>
                <TableCell>Toast notification utility</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">cn</TableCell>
                <TableCell><code className="text-xs">@/lib/utils</code></TableCell>
                <TableCell>Class name utility for conditional classes</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Usage Examples</CardTitle>
          <CardDescription>
            Examples of how to use the exports
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Component Import Example</h3>
              <div className="bg-gray-900 p-4 rounded-md">
                <code className="text-sm text-blue-400">
                  {`import { Button } from "@/components/ui/button";

const MyComponent = () => {
  return (
    <Button variant="default">Click Me</Button>
  );
};`}
                </code>
              </div>
            </div>
            
            <Separator />
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Hook Usage Example</h3>
              <div className="bg-gray-900 p-4 rounded-md">
                <code className="text-sm text-blue-400">
                  {`import { useIsMobile } from "@/hooks/use-mobile";

const ResponsiveComponent = () => {
  const isMobile = useIsMobile();
  
  return (
    <div>
      {isMobile ? (
        <MobileView />
      ) : (
        <DesktopView />
      )}
    </div>
  );
};`}
                </code>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PackageExport;
