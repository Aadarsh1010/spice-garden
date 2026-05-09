import { Helmet } from 'react-helmet-async';

const SEOHead = ({ 
  title = "Spice Garden | Premium Indian Fine Dining in Mumbai",
  description = "Experience authentic Indian cuisine at Spice Garden, Mumbai's most awarded fine dining restaurant. Book your table for an unforgettable culinary journey.",
  image = "https://picsum.photos/id/1015/1200/630",
  url = "https://spicegarden.com",
  type = "website"
}) => {
  const siteName = "Spice Garden";
  
  return (
    <Helmet>
      {/* Basic Meta */}
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="keywords" content="indian restaurant mumbai, fine dining mumbai, best indian food mumbai, michelin restaurant mumbai, tandoori, butter chicken, private dining mumbai" />
      <link rel="canonical" href={url} />
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <meta name="theme-color" content="#2C1810" />
    </Helmet>
  );
};

export default SEOHead;
