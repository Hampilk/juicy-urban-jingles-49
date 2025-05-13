
import { saveAs } from 'file-saver';
import JSZip from 'jszip';
import { ExportFormat } from '../types/component-export';
import { createPackageJson, createReadme, createIndexFile, createTsConfig } from './package-generator';

// Interface for component structure
export interface ComponentFile {
  name: string;
  content: string;
  dependencies?: string[];
}

/**
 * Export components as a zip file
 */
export async function exportComponentsAsZip(
  packageName: string,
  version: string,
  componentNames: string[],
  format: ExportFormat = 'module',
): Promise<void> {
  try {
    const zip = new JSZip();
    
    // Add package.json
    zip.file('package.json', createPackageJson(packageName, version, format));
    
    // Add README.md
    zip.file('README.md', createReadme(packageName, componentNames));
    
    // Add index file
    zip.file('src/index.ts', createIndexFile(componentNames));
    
    // Add tsconfig.json
    zip.file('tsconfig.json', createTsConfig());
    
    // Generate the zip file
    const content = await zip.generateAsync({ type: 'blob' });
    
    // Save the zip file
    saveAs(content, `${packageName}-${version}.zip`);
  } catch (error) {
    console.error('Error exporting components:', error);
    throw new Error('Failed to export components');
  }
}
