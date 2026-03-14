import { Link, useLocation } from 'react-router-dom';
import { ShieldAlert, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Types of Attacks', path: '/attacks' },
    { name: 'I Got Hacked!', path: '/hacked' },
    { name: 'Tools', path: '/tools' },
    { name: 'Reporting', path: '/reporting' },
    { name: 'Learning', path: '/learning' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed w-full z-50 bg-[#050a15]/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <ShieldAlert className="h-8 w-8 text-neonGreen" />
            <span className="font-bold text-xl tracking-wider text-white">
              Cyber<span className="text-neonGreen">rescue</span>
            </span>
          </Link>
          
          <div className="hidden md:flex space-x-6">
            {links.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`transition-colors font-medium ${isActive(link.path) ? 'text-neonGreen' : 'text-gray-300 hover:text-neonGreen'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0A1224] border-b border-gray-800 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md font-medium ${isActive(link.path) ? 'text-neonGreen bg-gray-800' : 'text-gray-300 hover:text-neonGreen hover:bg-gray-800/50'}`}
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
