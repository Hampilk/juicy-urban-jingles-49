
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const InstallationGuide = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-white">Installation Guide</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Getting Started</CardTitle>
          <CardDescription>
            Follow these steps to set up the project on your local machine
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Prerequisites</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Node.js v16.0.0 or higher</li>
                <li>npm v8.0.0 or higher (or yarn)</li>
                <li>Git</li>
              </ul>
            </div>
            
            <Separator />
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Clone the Repository</h3>
              <div className="bg-gray-900 p-4 rounded-md">
                <code className="text-sm text-green-400">
                  git clone https://github.com/your-username/project-name.git<br />
                  cd project-name
                </code>
              </div>
            </div>
            
            <Separator />
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Install Dependencies</h3>
              <div className="bg-gray-900 p-4 rounded-md">
                <code className="text-sm text-green-400">
                  npm install<br />
                  # or<br />
                  yarn install
                </code>
              </div>
            </div>
            
            <Separator />
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Run Development Server</h3>
              <div className="bg-gray-900 p-4 rounded-md">
                <code className="text-sm text-green-400">
                  npm run dev<br />
                  # or<br />
                  yarn dev
                </code>
              </div>
              <p className="text-sm mt-2">This will start the development server at <span className="font-mono">http://localhost:5173</span></p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Project Structure</CardTitle>
          <CardDescription>
            Key directories and files in the project
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-900 p-4 rounded-md font-mono text-sm text-blue-300">
            <pre>
{`project-root/
├── public/           # Static assets
├── src/
│   ├── components/   # React components
│   │   ├── ui/       # UI components
│   │   └── system/   # System components
│   ├── data/         # Data files
│   ├── hooks/        # Custom React hooks
│   ├── lib/          # Utility libraries
│   ├── pages/        # Page components
│   ├── types/        # TypeScript type definitions
│   └── utils/        # Utility functions
├── index.html        # HTML entry point
├── package.json      # Project dependencies
└── tsconfig.json     # TypeScript configuration`}
            </pre>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Build for Production</CardTitle>
          <CardDescription>
            Steps to build and deploy the application
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Build the App</h3>
              <div className="bg-gray-900 p-4 rounded-md">
                <code className="text-sm text-green-400">
                  npm run build<br />
                  # or<br />
                  yarn build
                </code>
              </div>
              <p className="text-sm mt-2">This will create a production-ready build in the <span className="font-mono">dist/</span> directory.</p>
            </div>
            
            <Separator />
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Serving the Built App</h3>
              <div className="bg-gray-900 p-4 rounded-md">
                <code className="text-sm text-green-400">
                  npm run preview<br />
                  # or<br />
                  yarn preview
                </code>
              </div>
              <p className="text-sm mt-2">This will serve the built app from the <span className="font-mono">dist/</span> directory.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InstallationGuide;
