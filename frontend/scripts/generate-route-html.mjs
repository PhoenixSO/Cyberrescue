import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const distDir = path.resolve('dist');
const indexPath = path.join(distDir, 'index.html');

const routes = [
  'attacks',
  'hacked',
  'tools',
  'reporting',
  'learning',
  'privacy',
];

async function generateRouteFiles() {
  const indexHtml = await readFile(indexPath, 'utf8');

  for (const route of routes) {
    const routeDir = path.join(distDir, route);
    const routeHtmlPath = path.join(routeDir, 'index.html');

    await mkdir(routeDir, { recursive: true });
    await writeFile(routeHtmlPath, indexHtml, 'utf8');
  }

  console.log(`Generated static route HTML for ${routes.length} routes.`);
}

generateRouteFiles().catch((error) => {
  console.error('Failed to generate route HTML files:', error);
  process.exit(1);
});
