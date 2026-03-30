import { Link } from 'react-router-dom';
import { EDITORIAL_INFO } from '../config';

const AuthorTrustBlock = ({ publishedDate, updatedDate }) => {
  return (
    <aside className="card mb-8" aria-label="Article trust details">
      <h2 className="text-xl font-bold text-white mb-4">Author and Review Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-sm">
        <div>
          <p className="text-slate-400 uppercase tracking-wide mb-1">Written by</p>
          <p className="text-slate-100 font-semibold">{EDITORIAL_INFO.authorName}</p>
          <p className="text-slate-300 mt-1">Original guidance focused on practical online safety steps.</p>
        </div>
        <div>
          <p className="text-slate-400 uppercase tracking-wide mb-1">Reviewed by</p>
          <p className="text-slate-100 font-semibold">{EDITORIAL_INFO.reviewerName}</p>
          <p className="text-slate-300 mt-1">{EDITORIAL_INFO.reviewerTitle}</p>
        </div>
      </div>
      <div className="mt-5 pt-4 border-t border-slate-700 text-sm text-slate-300">
        <p>Published: {publishedDate}</p>
        <p>Last reviewed: {updatedDate || publishedDate}</p>
        <p className="mt-2">
          Editorial approach: <Link to={EDITORIAL_INFO.methodologyPath} className="text-cyan-300 hover:text-cyan-200">accuracy checks, plain-language guidance, and periodic updates</Link>.
        </p>
      </div>
    </aside>
  );
};

export default AuthorTrustBlock;
