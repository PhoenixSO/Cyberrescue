import { useEffect } from 'react';
import { SITE_URL } from '../config';

const DEFAULT_OG_IMAGE = `${SITE_URL}/og-cover.png`;

const ensureMetaTag = (attr, value) => {
  const selector = `meta[${attr}="${value}"]`;
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attr, value);
    document.head.appendChild(element);
  }

  return element;
};

const ensureCanonical = () => {
  let element = document.head.querySelector('link[rel="canonical"]');

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }

  return element;
};

const Seo = ({
  title,
  description,
  path = '/',
  image = DEFAULT_OG_IMAGE,
  type = 'website',
  jsonLd,
}) => {
  useEffect(() => {
    document.title = title;

    const canonicalUrl = `${SITE_URL}${path}`;
    const imageUrl = image.startsWith('http') ? image : `${SITE_URL}${image.startsWith('/') ? image : `/${image}`}`;

    const descriptionMeta = ensureMetaTag('name', 'description');
    descriptionMeta.setAttribute('content', description);

    const ogTitle = ensureMetaTag('property', 'og:title');
    ogTitle.setAttribute('content', title);

    const ogDescription = ensureMetaTag('property', 'og:description');
    ogDescription.setAttribute('content', description);

    const ogUrl = ensureMetaTag('property', 'og:url');
    ogUrl.setAttribute('content', canonicalUrl);

    const ogType = ensureMetaTag('property', 'og:type');
    ogType.setAttribute('content', type);

    const ogImage = ensureMetaTag('property', 'og:image');
    ogImage.setAttribute('content', imageUrl);

    const twitterCard = ensureMetaTag('name', 'twitter:card');
    twitterCard.setAttribute('content', 'summary_large_image');

    const twitterTitle = ensureMetaTag('name', 'twitter:title');
    twitterTitle.setAttribute('content', title);

    const twitterDescription = ensureMetaTag('name', 'twitter:description');
    twitterDescription.setAttribute('content', description);

    const twitterImage = ensureMetaTag('name', 'twitter:image');
    twitterImage.setAttribute('content', imageUrl);

    const canonical = ensureCanonical();
    canonical.setAttribute('href', canonicalUrl);

    let script;
    if (jsonLd) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }

    return () => {
      if (script) {
        document.head.removeChild(script);
      }
    };
  }, [title, description, path, image, type, jsonLd]);

  return null;
};

export default Seo;
