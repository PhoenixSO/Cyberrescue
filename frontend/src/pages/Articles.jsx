import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { articles } from '../content/articles';

const Articles = () => {
  const featured = articles.slice(0, 3);
  const categoryCounts = articles.reduce((acc, article) => {
    acc[article.category] = (acc[article.category] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Seo
        title="Cyber Safety Articles | CyberRescue"
        description="Browse practical guides on phishing, ransomware, account recovery, scam reporting, and online privacy."
        path="/articles"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Cyber Safety Articles',
          description: 'Cyber safety knowledge base by CyberRescue',
        }}
      />

      <header className="mb-10">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="trust-badge border-neonGreen/40 bg-neonGreen/10 text-neonGreen">Editorially Reviewed</span>
          <span className="trust-badge border-cyan-300/40 bg-cyan-300/10 text-cyan-300">Updated For 2026 Scam Trends</span>
          <Link to="/contact" className="trust-badge border-slate-600 bg-slate-900 text-slate-200 hover:border-neonGreen hover:text-neonGreen">Request corrections</Link>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Cyber Safety Articles</h1>
        <p className="text-lg text-slate-300 max-w-3xl">
          Explore our original learning guides covering scam awareness, account protection, incident response, and practical digital safety habits.
        </p>
      </header>

      <section className="card mb-8">
        <h2 className="text-2xl font-bold text-white mb-3">Featured Reading</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
          {featured.map((article) => (
            <Link to={`/articles/${article.slug}`} key={article.slug} className="p-4 rounded-lg border border-slate-700 bg-slate-900/40 hover:border-cyan-300">
              <h3 className="text-white font-semibold mb-2">{article.title}</h3>
              <p className="text-sm text-slate-300">{article.description}</p>
            </Link>
          ))}
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">Browse by Category</h3>
        <div className="flex flex-wrap gap-2 text-sm">
          {Object.entries(categoryCounts).map(([category, count]) => (
            <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-200 border border-slate-700" key={category}>
              {category} ({count})
            </span>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <article key={article.slug} className="card h-full flex flex-col">
            <p className="text-xs uppercase tracking-wide text-cyan-300 mb-2">{article.category}</p>
            <h2 className="text-xl font-semibold text-white mb-3">{article.title}</h2>
            <p className="text-slate-300 text-sm mb-4 grow">{article.description}</p>
            <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
              <span>{article.readTime}</span>
              <span>{article.publishedDate}</span>
            </div>
            <Link to={`/articles/${article.slug}`} className="btn-outline text-center">Read Article</Link>
          </article>
        ))}
      </section>

      <section className="card mt-8">
        <h2 className="text-2xl font-bold text-white mb-2">Editorial Commitment</h2>
        <p className="text-slate-300">
          We publish original educational content and review updates regularly as cyber threats evolve. For correction requests or source clarifications, use the contact page.
        </p>
      </section>
    </div>
  );
};

export default Articles;
