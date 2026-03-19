import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const distDir = path.resolve('dist');
const indexPath = path.join(distDir, 'index.html');
const siteUrl = 'https://cyberrescue.space';

const routeMetadata = {
  attacks: {
    title: 'Types of Cyber Attacks | Cyberrescue',
    description:
      'Learn common cyber attack types including phishing, malware, ransomware, and social engineering with practical prevention tips.',
  },
  hacked: {
    title: 'What To Do If Hacked | Cyberrescue',
    description:
      'Step-by-step guidance on what to do after an account compromise, data breach, or online scam to secure your identity quickly.',
  },
  tools: {
    title: 'Cyber Security Tools and Resources | Cyberrescue',
    description:
      'Discover trusted cyber security tools for password safety, malware scanning, account protection, and privacy checks.',
  },
  reporting: {
    title: 'Report Cyber Crime and Scams | Cyberrescue',
    description:
      'Find where and how to report phishing, fraud, hacked accounts, and online abuse to the right authorities and platforms.',
  },
  learning: {
    title: 'Cyber Security Learning Center | Cyberrescue',
    description:
      'Build cyber awareness with beginner-friendly lessons, daily safety practices, and actionable online protection habits.',
  },
  privacy: {
    title: 'Privacy Policy | Cyberrescue',
    description:
      'Read the Cyberrescue privacy policy to understand how website data is handled and protected.',
  },
};

const routes = [
  'attacks',
  'hacked',
  'tools',
  'reporting',
  'learning',
  'privacy',
];

function escapeHtmlAttribute(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function withRouteMetadata(indexHtml, route) {
  const metadata = routeMetadata[route];
  if (!metadata) {
    return indexHtml;
  }

  const routePath = `/${route}`;
  const pageUrl = `${siteUrl}${routePath}/`;
  const title = escapeHtmlAttribute(metadata.title);
  const description = escapeHtmlAttribute(metadata.description);

  return indexHtml
    .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
    .replace(
      /<meta name="description" content=".*?" \/>/,
      `<meta name="description" content="${description}" />`,
    )
    .replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${pageUrl}" />`)
    .replace(
      /<meta property="og:title" content=".*?" \/>/,
      `<meta property="og:title" content="${title}" />`,
    )
    .replace(
      /<meta property="og:description" content=".*?" \/>/,
      `<meta property="og:description" content="${description}" />`,
    )
    .replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${pageUrl}" />`)
    .replace(
      /<meta name="twitter:title" content=".*?" \/>/,
      `<meta name="twitter:title" content="${title}" />`,
    )
    .replace(
      /<meta name="twitter:description" content=".*?" \/>/,
      `<meta name="twitter:description" content="${description}" />`,
    );
}

async function generateRouteFiles() {
  const indexHtml = await readFile(indexPath, 'utf8');

  for (const route of routes) {
    const routeDir = path.join(distDir, route);
    const routeHtmlPath = path.join(routeDir, 'index.html');
    const routeHtml = withRouteMetadata(indexHtml, route);

    await mkdir(routeDir, { recursive: true });
    await writeFile(routeHtmlPath, routeHtml, 'utf8');
  }

  console.log(`Generated static route HTML with SEO metadata for ${routes.length} routes.`);
}

generateRouteFiles().catch((error) => {
  console.error('Failed to generate route HTML files:', error);
  process.exit(1);
});
