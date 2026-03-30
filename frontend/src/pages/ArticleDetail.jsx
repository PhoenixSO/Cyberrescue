import { Link, useParams } from 'react-router-dom';
import Seo from '../components/Seo';
import { articleBySlug } from '../content/articles';
import AuthorTrustBlock from '../components/AuthorTrustBlock';
import { SITE_URL } from '../config';

const toAnchorId = (text) => text.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-');

const ArticleDetail = () => {
  const { slug } = useParams();
  const article = articleBySlug[slug];

  if (!article) {
    return (
      <div className="min-h-screen py-16 px-4 max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-white mb-4">Article Not Found</h1>
        <p className="text-slate-300 mb-6">The article link may be outdated or misspelled.</p>
        <Link to="/articles" className="btn-primary">Back to Articles</Link>
      </div>
    );
  }

  const related = article.related
    .map((relatedSlug) => articleBySlug[relatedSlug])
    .filter(Boolean)
    .slice(0, 3);

  const tableOfContents = article.sections.map((section) => ({
    label: section.heading,
    id: toAnchorId(section.heading),
  }));

  return (
    <article className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <Seo
        title={`${article.title} | CyberRescue`}
        description={article.description}
        path={`/articles/${article.slug}`}
        type="article"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: article.title,
          description: article.description,
          datePublished: article.publishedDate,
          dateModified: article.updatedDate || article.publishedDate,
          author: { '@type': 'Organization', name: 'CyberRescue' },
          publisher: { '@type': 'Organization', name: 'CyberRescue' },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${SITE_URL}/articles/${article.slug}`,
          },
        }}
      />

      <header className="mb-8">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="trust-badge border-neonGreen/40 bg-neonGreen/10 text-neonGreen">Verified Guidance</span>
          <span className="trust-badge border-cyan-300/40 bg-cyan-300/10 text-cyan-300">Reviewed by CyberRescue Editorial Team</span>
          <Link to="/contact" className="trust-badge border-slate-600 bg-slate-900 text-slate-200 hover:border-neonGreen hover:text-neonGreen">Report outdated info</Link>
        </div>
        <p className="text-xs uppercase tracking-wide text-cyan-300 mb-2">{article.category}</p>
        <h1 className="text-4xl font-extrabold text-white mb-3">{article.title}</h1>
        <p className="text-slate-300 text-lg mb-4">{article.description}</p>
        <div className="text-sm text-slate-400">{article.readTime} | Published {article.publishedDate}</div>
      </header>

      <p className="text-slate-200 leading-8 mb-8">{article.intro}</p>

      <section className="card mb-8">
        <h2 className="text-2xl font-bold text-white mb-3">In This Article</h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-300">
          {tableOfContents.map((entry) => (
            <li key={entry.id}>
              <a className="text-cyan-300 hover:text-cyan-200" href={`#${entry.id}`}>{entry.label}</a>
            </li>
          ))}
        </ul>
      </section>

      {article.sections.map((section) => (
        <section key={section.heading} className="mb-8" id={toAnchorId(section.heading)}>
          <h2 className="text-2xl font-bold text-white mb-3">{section.heading}</h2>
          {section.paragraphs?.map((paragraph, index) => (
            <p key={index} className="text-slate-200 leading-8 mb-3">{paragraph}</p>
          ))}
          {section.bullets?.length ? (
            <ul className="list-disc pl-6 text-slate-200 space-y-2">
              {section.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}

      <AuthorTrustBlock publishedDate={article.publishedDate} updatedDate={article.updatedDate} />

      <section className="card mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">FAQ</h2>
        <div className="space-y-4">
          {article.faq.map((item) => (
            <div key={item.question}>
              <h3 className="text-lg font-semibold text-white mb-1">{item.question}</h3>
              <p className="text-slate-300">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="card mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">Take Action</h2>
        <p className="text-slate-300 mb-4">Apply this guidance today and share it with someone who might be at risk.</p>
        <div className="flex flex-wrap gap-3">
          <Link to="/learning" className="btn-outline">Learn More</Link>
          <Link to="/reporting" className="btn-outline">Report a Scam</Link>
          <Link to="/hacked" className="btn-outline">Protect Your Account</Link>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Related Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {related.map((item) => (
            <Link to={`/articles/${item.slug}`} key={item.slug} className="card block hover:border-cyan-300">
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-slate-300">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
};

export default ArticleDetail;
