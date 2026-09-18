import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, canonical, schemaData }) {
  const siteName = 'Funngro';
  const fullTitle = title ? `${title} | ${siteName}` : 'Funngro | Paid Remote Opportunities for Teens & Top Brand Talent';
  const metaDescription = description || "India's youth, India's brands. Get paid in UPI or bank transfer for remote tasks, content creation, social media, and freelancing.";
  const canonicalUrl = canonical || 'https://www.funngro.com/';

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonicalUrl} />

      {/* OpenGraph Tags */}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content="https://www.funngro.com/og-image.jpg" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@Funngro" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content="https://www.funngro.com/og-image.jpg" />

      {/* Structured Data (JSON-LD) for SEO */}
      {schemaData && (
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      )}
    </Helmet>
  );
}
