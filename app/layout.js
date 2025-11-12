import { Space_Grotesk, DM_Sans } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
  preload: true,
  adjustFontFallback: false,
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  preload: true,
  adjustFontFallback: false,
})

// Enhanced metadata for better SEO
export const metadata = {
  title: {
    default: "Rakesh Biswal - Senior Full Stack Developer & Software Engineer",
    template: "%s | Rakesh Biswal"
  },
  description: "Rakesh Biswal - Expert Full Stack Developer specializing in React, Node.js, TypeScript, and modern web technologies. Building scalable web applications and digital solutions.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "TypeScript",
    "Software Engineer",
    "Web Developer",
    "JavaScript Developer",
    "Frontend Developer",
    "Backend Developer",
    "MERN Stack",
    "Next.js Developer",
    "San Francisco Developer"
  ].join(", "),
  authors: [{ name: "Rakesh Biswal" }],
  creator: "Rakesh Biswal",
  publisher: "Rakesh Biswal",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://rks-blog.vercel.app/'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    title: "Rakesh Biswal - Senior Full Stack Developer",
    description: "Expert Full Stack Developer specializing in React, Node.js, TypeScript, and modern web technologies.",
    url: "https://rks-blog.vercel.app/",
    siteName: "Rakesh Biswal Portfolio",
    images: [
      {
        url: "./Rakesh-professional-passport.jpg",
        width: 1200,
        height: 630,
        alt: "Rakesh Biswal - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rakesh Biswal - Senior Full Stack Developer",
    description: "Expert Full Stack Developer specializing in React, Node.js, TypeScript, and modern web technologies.",
    creator: "@rakeshbiswal",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "technology",
}

// Structured data for rich snippets
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Rakesh Biswal',
  url: 'https://rakeshbiswal.com',
  image: 'https://rakeshbiswal.com/profile-image.jpg',
  sameAs: [
    'https://github.com/rakeshbiswal',
    'https://linkedin.com/in/rakeshbiswal',
    'https://twitter.com/rakeshbiswal'
  ],
  jobTitle: 'Senior Full Stack Developer',
  worksFor: {
    '@type': 'Organization',
    name: 'Tech Innovators Inc.'
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Your University Name'
  },
  knowsAbout: [
    'React', 'Node.js', 'TypeScript', 'JavaScript', 'Next.js', 
    'MongoDB', 'PostgreSQL', 'AWS', 'Docker', 'CI/CD'
  ],
  description: 'Expert Full Stack Developer specializing in React, Node.js, TypeScript, and modern web technologies.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'San Francisco',
    addressRegion: 'CA',
    addressCountry: 'USA'
  }
}

export default function RootLayout({ children }) {
  return (
    <html 
      lang="en" 
      className={`${spaceGrotesk.variable} ${dmSans.variable} antialiased`}
      itemScope
      itemType="https://schema.org/WebPage"
    >
      <head>
        {/* Preload critical resources */}
        <link rel="preload" href="/fonts/space-grotesk.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/dm-sans.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="./Rakesh-professional-passport.jpg" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#3B82F6" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#1F2937" media="(prefers-color-scheme: dark)" />
        
        {/* Additional meta tags for SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        
        {/* Performance optimizations */}
        <meta httpEquiv="x-ua-compatible" content="IE=edge" />
        
        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* Additional organization structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Rakesh Biswal Portfolio',
              url: 'https://rakeshbiswal.com',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://rakeshbiswal.com/search?q={search_term_string}',
                'query-input': 'required name=search_term_string'
              }
            })
          }}
        />
      </head>
      <body 
        className="font-sans bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300"
        itemScope
        itemType="https://schema.org/Person"
        itemID="https://rakeshbiswal.com"
      >
        {/* Skip to main content for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-lg z-50"
        >
          Skip to main content
        </a>
        
        {/* Main content with proper semantic markup */}
        <main id="main-content" itemScope itemType="https://schema.org/WebPageElement">
          {children}
        </main>
        
        {/* Performance monitoring script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Performance monitoring
              if ('performance' in window) {
                window.addEventListener('load', function() {
                  setTimeout(function() {
                    const navigation = performance.getEntriesByType('navigation')[0];
                    if (navigation) {
                      const data = {
                        dns: navigation.domainLookupEnd - navigation.domainLookupStart,
                        tcp: navigation.connectEnd - navigation.connectStart,
                        ttfb: navigation.responseStart - navigation.requestStart,
                        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.navigationStart,
                        loaded: navigation.loadEventEnd - navigation.navigationStart
                      };
                      console.log('Performance Metrics:', data);
                    }
                  }, 0);
                });
              }
              
              // Service Worker Registration for PWA
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').then(function(registration) {
                    console.log('SW registered: ', registration);
                  }).catch(function(registrationError) {
                    console.log('SW registration failed: ', registrationError);
                  });
                });
              }
            `
          }}
        />
      </body>
    </html>
  )
}