
import { ExportFormat } from "../types/component-export";

// Interface for package.json
interface PackageJson {
  name: string;
  version: string;
  description: string;
  main?: string;
  module?: string;
  types?: string;
  license?: string;
  dependencies?: Record<string, string>;
  peerDependencies?: Record<string, string>;
  keywords?: string[];
  author?: string;
  repository?: {
    type: string;
    url: string;
  };
}

/**
 * Creates a package.json file for the exported components
 */
export function createPackageJson(
  packageName: string,
  version: string,
  format: ExportFormat = 'module',
  dependencies: Record<string, string> = {},
  peerDependencies: Record<string, string> = {},
): string {
  const packageJson: PackageJson = {
    name: packageName,
    version,
    description: 'WinMix UI Component Library',
    author: 'WinMix',
    license: 'MIT',
    keywords: ['react', 'components', 'ui', 'design-system', 'winmix'],
    repository: {
      type: 'git',
      url: 'https://github.com/winmix/ui-components'
    },
    peerDependencies: {
      'react': '^18.0.0',
      'react-dom': '^18.0.0',
      ...peerDependencies
    }
  };

  // Configure exports based on format
  if (format === 'module') {
    packageJson.module = './dist/index.js';
    packageJson.types = './dist/index.d.ts';
  } else if (format === 'commonjs') {
    packageJson.main = './dist/index.js';
    packageJson.types = './dist/index.d.ts';
  } else if (format === 'standalone') {
    packageJson.main = './dist/index.js';
  }

  // Add dependencies if not empty
  if (Object.keys(dependencies).length > 0) {
    packageJson.dependencies = dependencies;
  }

  return JSON.stringify(packageJson, null, 2);
}

/**
 * Creates an index.ts file that exports all components
 */
export function createIndexFile(componentNames: string[]): string {
  return componentNames.map(name => `export { default as ${name} } from './components/${name}';`).join('\n');
}

/**
 * Creates a README.md file for the package
 */
export function createReadme(packageName: string, componentNames: string[]): string {
  return `# ${packageName}

A UI component library from WinMix Design System.

## Installation

\`\`\`bash
npm install ${packageName}
# or
yarn add ${packageName}
\`\`\`

## Available Components

${componentNames.map(name => `- \`${name}\``).join('\n')}

## Basic Usage

\`\`\`jsx
import { ${componentNames[0]} } from '${packageName}';

const App = () => {
  return <${componentNames[0]} />;
};
\`\`\`

## License

MIT
`;
}

/**
 * Creates a tsconfig.json file for the package
 */
export function createTsConfig(): string {
  return JSON.stringify({
    "compilerOptions": {
      "target": "es5",
      "lib": ["dom", "dom.iterable", "esnext"],
      "allowJs": true,
      "skipLibCheck": true,
      "esModuleInterop": true,
      "allowSyntheticDefaultImports": true,
      "strict": true,
      "forceConsistentCasingInFileNames": true,
      "noFallthroughCasesInSwitch": true,
      "module": "esnext",
      "moduleResolution": "node",
      "resolveJsonModule": true,
      "isolatedModules": true,
      "jsx": "react-jsx",
      "declaration": true,
      "outDir": "./dist"
    },
    "include": ["src"],
    "exclude": ["node_modules", "**/*.test.ts", "**/*.test.tsx"]
  }, null, 2);
}
