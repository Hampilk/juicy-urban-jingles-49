
import React from 'react';
import Header from '../components/Header';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CssUtilities from '@/components/system/CssUtilities';
import DesignTokens from '@/components/system/DesignTokens';
import InstallationGuide from '@/components/system/InstallationGuide';
import PackageExport from '@/components/system/PackageExport';

const System = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-950 to-black">
      <Header />
      <div className="container mx-auto px-4 pt-24 pb-16">
        <h1 className="text-3xl font-bold text-white mb-8">System Documentation</h1>
        
        <Tabs defaultValue="design-tokens" className="w-full">
          <TabsList className="mb-8 w-full justify-start bg-gray-900/60">
            <TabsTrigger value="design-tokens">Design Tokens</TabsTrigger>
            <TabsTrigger value="css-utilities">CSS Utilities</TabsTrigger>
            <TabsTrigger value="installation">Installation Guide</TabsTrigger>
            <TabsTrigger value="package-export">Package Export</TabsTrigger>
          </TabsList>
          
          <TabsContent value="design-tokens">
            <DesignTokens />
          </TabsContent>
          
          <TabsContent value="css-utilities">
            <CssUtilities />
          </TabsContent>
          
          <TabsContent value="installation">
            <InstallationGuide />
          </TabsContent>
          
          <TabsContent value="package-export">
            <PackageExport />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default System;
