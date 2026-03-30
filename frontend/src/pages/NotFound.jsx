import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

const NotFound = () => {
  return (
    <div className="min-h-screen py-20 px-4 text-center">
      <Seo
        title="Page Not Found | CyberRescue"
        description="The page you are looking for does not exist. Explore CyberRescue learning resources and guides."
        path="/404"
      />

      <h1 className="text-4xl font-bold text-white mb-4">Page Not Found</h1>
      <p className="text-slate-300 mb-8">This page may have moved or the URL may be incorrect.</p>
      <div className="flex flex-wrap justify-center gap-3">
        <Link to="/" className="btn-primary">Go Home</Link>
        <Link to="/articles" className="btn-outline">Read Articles</Link>
      </div>
    </div>
  );
};

export default NotFound;
