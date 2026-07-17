import { Helmet } from 'react-helmet-async';

interface FAQSchemaItem {
  question: string;
  answer: string;
}

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  robots?: string;
  faqItems?: FAQSchemaItem[];
}

function SEO({
  title = 'Heidi Stone Hospitality | Advisory for Independent Hotels',
  description = 'Advisory firm supporting independent hotel owners, boards, and leadership teams navigating complex decisions and long-term value.',
  keywords,
  image = '/Translucent_Logo_on_home_page.webp',
  url = 'https://heidistonehospitality.com',
  type = 'website',
  robots,
  faqItems,
}: SEOProps) {
  const fullTitle = title.includes('|') ? title : `${title} | Heidi Stone Hospitality`;

  const faqSchema = faqItems && faqItems.length > 0
    ? JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqItems.map(({ question, answer }) => ({
          '@type': 'Question',
          name: question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: answer.replace(/\n/g, ' ').trim(),
          },
        })),
      })
    : null;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {robots && <meta name="robots" content={robots} />}

      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <link rel="canonical" href={url} />

      {faqSchema && (
        <script type="application/ld+json">{faqSchema}</script>
      )}
    </Helmet>
  );
}

export default SEO;
