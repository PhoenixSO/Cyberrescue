import { Link, useLocation } from 'react-router-dom';

const labelMap = {
  attacks: 'Types of Cyber Attacks',
  hacked: 'What To Do If Hacked',
  tools: 'Tools & Resources',
  reporting: 'Report Cybercrime',
  learning: 'Learning Center',
  articles: 'Articles',
  about: 'About Us',
  contact: 'Contact Us',
  privacy: 'Privacy Policy',
  terms: 'Terms & Conditions',
  disclaimer: 'Disclaimer',
};

const Breadcrumbs = () => {
  const location = useLocation();
  const segments = location.pathname.split('/').filter(Boolean);

  if (segments.length === 0) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
      <ol className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 flex-wrap">
        <li>
          <Link to="/" className="hover:text-cyan-300">Home</Link>
        </li>
        {segments.map((segment, index) => {
          const to = `/${segments.slice(0, index + 1).join('/')}`;
          const isLast = index === segments.length - 1;
          const label = labelMap[segment] || segment.replace(/-/g, ' ');

          return (
            <li key={to} className="flex items-center gap-2">
              <span>/</span>
              {isLast ? (
                <span className="text-slate-200 capitalize">{label}</span>
              ) : (
                <Link to={to} className="hover:text-cyan-300 capitalize">{label}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
