
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { SidebarInset } from '@/components/ui/sidebar';

const CssUtilities = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-white">CSS Utilities</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Tailwind CSS Utilities</CardTitle>
          <CardDescription>
            Essential CSS utility classes used throughout the application
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Layout & Spacing</h3>
              <div className="space-y-2">
                <div className="p-3 bg-gray-900/50 rounded-md">
                  <code className="text-sm text-blue-400">p-{'{size}'}</code>
                  <p className="text-sm text-gray-300 mt-1">Padding on all sides (p-1 to p-12)</p>
                </div>
                <div className="p-3 bg-gray-900/50 rounded-md">
                  <code className="text-sm text-blue-400">m-{'{size}'}</code>
                  <p className="text-sm text-gray-300 mt-1">Margin on all sides (m-1 to m-12)</p>
                </div>
                <div className="p-3 bg-gray-900/50 rounded-md">
                  <code className="text-sm text-blue-400">gap-{'{size}'}</code>
                  <p className="text-sm text-gray-300 mt-1">Gap between flex/grid items</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Colors & Backgrounds</h3>
              <div className="space-y-2">
                <div className="p-3 bg-gray-900/50 rounded-md">
                  <code className="text-sm text-blue-400">bg-{'{color}'}-{'{shade}'}</code>
                  <p className="text-sm text-gray-300 mt-1">Background colors (e.g., bg-blue-500)</p>
                </div>
                <div className="p-3 bg-gray-900/50 rounded-md">
                  <code className="text-sm text-blue-400">text-{'{color}'}-{'{shade}'}</code>
                  <p className="text-sm text-gray-300 mt-1">Text colors (e.g., text-white)</p>
                </div>
                <div className="p-3 bg-gray-900/50 rounded-md">
                  <code className="text-sm text-blue-400">border-{'{color}'}-{'{shade}'}</code>
                  <p className="text-sm text-gray-300 mt-1">Border colors</p>
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-6" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Typography</h3>
              <div className="space-y-2">
                <div className="p-3 bg-gray-900/50 rounded-md">
                  <code className="text-sm text-blue-400">text-{'{size}'}</code>
                  <p className="text-sm text-gray-300 mt-1">Font size (text-xs to text-5xl)</p>
                </div>
                <div className="p-3 bg-gray-900/50 rounded-md">
                  <code className="text-sm text-blue-400">font-{'{weight}'}</code>
                  <p className="text-sm text-gray-300 mt-1">Font weight (font-light to font-extrabold)</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Flexbox & Grid</h3>
              <div className="space-y-2">
                <div className="p-3 bg-gray-900/50 rounded-md">
                  <code className="text-sm text-blue-400">flex flex-{'{direction}'}</code>
                  <p className="text-sm text-gray-300 mt-1">Flex container with direction</p>
                </div>
                <div className="p-3 bg-gray-900/50 rounded-md">
                  <code className="text-sm text-blue-400">grid grid-cols-{'{number}'}</code>
                  <p className="text-sm text-gray-300 mt-1">Grid with column count</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Common Patterns</CardTitle>
          <CardDescription>
            Frequently used combinations of utility classes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Card Pattern</h3>
              <div className="p-4 bg-gray-900/50 rounded-md">
                <code className="text-sm text-purple-400">
                  className="p-6 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow"
                </code>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Button Pattern</h3>
              <div className="p-4 bg-gray-900/50 rounded-md">
                <code className="text-sm text-purple-400">
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                </code>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Center Content Pattern</h3>
              <div className="p-4 bg-gray-900/50 rounded-md">
                <code className="text-sm text-purple-400">
                  className="flex items-center justify-center"
                </code>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CssUtilities;
