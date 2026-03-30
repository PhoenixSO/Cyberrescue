import { Link, useLocation } from 'react-router-dom';
import { ShieldAlert, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Learning', path: '/learning' },
    { name: 'Types of Attacks', path: '/attacks' },
    { name: 'If You Were Hacked', path: '/hacked' },
    { name: 'Tools & Resources', path: '/tools' },
    { name: 'Report Scams', path: '/reporting' },
    { name: 'Articles', path: '/articles' },
  ];

  const utilityLinks = [
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }

    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  return (
    <nav className="fixed w-full z-50 bg-[#050a15]/95 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <ShieldAlert className="h-8 w-8 text-neonGreen" />
            <span className="font-bold text-xl tracking-wide text-white">
              Cyber<span className="text-neonGreen">Rescue</span>
            </span>
          </Link>
          
          <div className="hidden xl:flex space-x-5">
            {links.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`transition-colors text-sm font-medium ${isActive(link.path) ? 'text-neonGreen' : 'text-slate-300 hover:text-neonGreen'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {utilityLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium ${isActive(link.path) ? 'text-neonGreen' : 'text-slate-300 hover:text-neonGreen'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="btn-primary text-sm px-3 py-2">Get Help</Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-white" aria-label="Toggle navigation menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0A1224] border-b border-slate-800 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {[...links, ...utilityLinks].map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md font-medium ${isActive(link.path) ? 'text-neonGreen bg-slate-800' : 'text-slate-300 hover:text-neonGreen hover:bg-slate-800/50'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
