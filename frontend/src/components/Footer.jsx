import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#02050a] border-t border-gray-800 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} Cyberrescue. All rights reserved.</p>
        <p className="text-gray-500 text-sm mt-2">Promoting cyber security awareness and digital safety in an interconnected world.</p>
        <div className="mt-4">
          <Link to="/privacy" className="text-gray-500 hover:text-neonGreen text-sm transition-colors">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
