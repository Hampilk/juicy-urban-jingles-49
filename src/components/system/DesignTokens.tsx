
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const DesignTokens = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-white">Design Tokens</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Color Palette</CardTitle>
          <CardDescription>
            Primary color tokens used throughout the application
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* Primary Colors */}
            <div className="space-y-2">
              <div className="h-20 bg-blue-500 rounded-md flex items-end p-2">
                <span className="text-white font-medium text-sm">Primary Blue</span>
              </div>
              <p className="text-sm font-medium">Primary Blue</p>
              <p className="text-xs text-gray-400">bg-blue-500</p>
            </div>
            
            <div className="space-y-2">
              <div className="h-20 bg-purple-600 rounded-md flex items-end p-2">
                <span className="text-white font-medium text-sm">Purple</span>
              </div>
              <p className="text-sm font-medium">Purple</p>
              <p className="text-xs text-gray-400">bg-purple-600</p>
            </div>
            
            <div className="space-y-2">
              <div className="h-20 bg-gray-900 rounded-md flex items-end p-2">
                <span className="text-white font-medium text-sm">Background</span>
              </div>
              <p className="text-sm font-medium">Background</p>
              <p className="text-xs text-gray-400">bg-gray-900</p>
            </div>
          </div>

          <Separator className="my-6" />

          {/* Secondary Colors */}
          <h3 className="text-lg font-medium mb-4">Secondary Colors</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <div className="h-16 bg-green-500 rounded-md"></div>
              <p className="text-sm font-medium">Success</p>
              <p className="text-xs text-gray-400">bg-green-500</p>
            </div>
            
            <div className="space-y-2">
              <div className="h-16 bg-red-500 rounded-md"></div>
              <p className="text-sm font-medium">Error</p>
              <p className="text-xs text-gray-400">bg-red-500</p>
            </div>
            
            <div className="space-y-2">
              <div className="h-16 bg-yellow-500 rounded-md"></div>
              <p className="text-sm font-medium">Warning</p>
              <p className="text-xs text-gray-400">bg-yellow-500</p>
            </div>
            
            <div className="space-y-2">
              <div className="h-16 bg-blue-400 rounded-md"></div>
              <p className="text-sm font-medium">Info</p>
              <p className="text-xs text-gray-400">bg-blue-400</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Typography</CardTitle>
          <CardDescription>
            Font families, sizes, and weights
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold">Heading 1</h1>
              <p className="text-sm text-gray-400 mt-1">text-4xl font-bold</p>
            </div>
            
            <div>
              <h2 className="text-3xl font-semibold">Heading 2</h2>
              <p className="text-sm text-gray-400 mt-1">text-3xl font-semibold</p>
            </div>
            
            <div>
              <h3 className="text-2xl font-medium">Heading 3</h3>
              <p className="text-sm text-gray-400 mt-1">text-2xl font-medium</p>
            </div>
            
            <div>
              <h4 className="text-xl font-medium">Heading 4</h4>
              <p className="text-sm text-gray-400 mt-1">text-xl font-medium</p>
            </div>
            
            <div>
              <p className="text-base">Body text</p>
              <p className="text-sm text-gray-400 mt-1">text-base</p>
            </div>
            
            <div>
              <p className="text-sm">Small text</p>
              <p className="text-sm text-gray-400 mt-1">text-sm</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Spacing & Sizing</CardTitle>
          <CardDescription>
            Common spacing and sizing values
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium mb-4">Spacing Scale</h3>
              <div className="flex flex-wrap gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-blue-500 rounded"></div>
                  <span className="text-xs mt-2">4px (1)</span>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 bg-blue-500 rounded"></div>
                  <span className="text-xs mt-2">6px (1.5)</span>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-blue-500 rounded"></div>
                  <span className="text-xs mt-2">8px (2)</span>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-blue-500 rounded"></div>
                  <span className="text-xs mt-2">12px (3)</span>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-blue-500 rounded"></div>
                  <span className="text-xs mt-2">16px (4)</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Border Radius</h3>
              <div className="flex flex-wrap gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-purple-500 rounded-sm"></div>
                  <span className="text-xs mt-2">rounded-sm</span>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-purple-500 rounded"></div>
                  <span className="text-xs mt-2">rounded</span>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-purple-500 rounded-md"></div>
                  <span className="text-xs mt-2">rounded-md</span>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-purple-500 rounded-lg"></div>
                  <span className="text-xs mt-2">rounded-lg</span>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-purple-500 rounded-full"></div>
                  <span className="text-xs mt-2">rounded-full</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DesignTokens;
