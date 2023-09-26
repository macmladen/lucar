import '@/styles/globals.css'
import { Open_Sans, Roboto_Slab } from 'next/font/google'
import Header from '@/components/header'
import React from 'react'
import Footer from '@/components/footer'
import Script from 'next/script'

const openSans = Open_Sans({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-open-sans',
})

const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  variable: '--font-roboto-slab',
})

const jsonLd = {
  __html: `{
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": "Executive Anvil",
      "image": [
        "https://example.com/photos/1x1/photo.jpg",
        "https://example.com/photos/4x3/photo.jpg",
        "https://example.com/photos/16x9/photo.jpg"
       ],
      "description": "Sleeker than ACME's Classic Anvil, the Executive Anvil is perfect for the business traveler looking for something to drop from a height.",
      "sku": "0446310786",
      "mpn": "925872",
      "brand": {
        "@type": "Brand",
        "name": "ACME"
      },
      "review": {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "4",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Fred Benson"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.4",
        "reviewCount": "89"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://example.com/anvil",
        "priceCurrency": "USD",
        "price": "119.99",
        "priceValidUntil": "2020-11-20",
        "itemCondition": "https://schema.org/UsedCondition",
        "availability": "https://schema.org/InStock"
      }
    }
  `,
}

export const metadata = {
  title: {
    template: '%s | Lucar',
    default: 'Lucar | Autogas, Segmentna vrata, Pergola, Komarnici',
  },
  description:
    'Ugradnja gasa u sve tipove vozila. Segmentna vrata, Pergola, Komarnici.',
  generator: 'Next.js',
  applicationName: 'Lucar',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Lovato',
    'Autogas',
    'TNG',
    'LPG',
    'CNG',
    'Segmentna vrata',
    'Rolo vrata',
    'Komarnici',
    'Pergole',
    'Garažna vrata',
    'Industrijska vrata',
  ],
  authors: [
    { name: 'Marijana Maklenović' },
    { name: 'Đorđe Maklenović', url: 'https://lucar.rs' },
  ],
  colorScheme: 'light',
  creator: 'MacMladen @macmladen',
  publisher: 'Lucar SZTR',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://lucar.rs'),
  openGraph: {
    title: 'Lucar | Autogas, Segmentna vrata, Pergola, Komarnici',
    description:
      'Ugradnja gasa u sve tipove vozila. Segmentna vrata, Pergola, Komarnici.',
    url: 'https://lucar.rs',
    siteName: 'Lucar',
    locale: 'sr-Latn-RS',
    type: 'website',
  },
  twitter: {
    title: 'Lucar | Autogas, Segmentna vrata, Pergola, Komarnici',
    description:
      'Ugradnja gasa u sve tipove vozila. Segmentna vrata, Pergola, Komarnici.',
    // siteId: '1467726470533754880',
    creator: '@macmladen',
    // creatorId: '1467726470533754880',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang='sr-Latn-RS'
      className={`${openSans.variable} ${robotoSlab.variable}`}
    >
      <body>
        {/*<!-- Google Tag Manager -->*/}
        <Script id='google-tag-manager' strategy='afterInteractive'>
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MWMHKCFG');`}
        </Script>
        {/*<!-- End Google Tag Manager -->*/}
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src='https://www.googletagmanager.com/ns.html?id=GTM-MWMHKCFG'
            height='0'
            width='0'
            style={{
              display: 'none',
              visibility: 'hidden',
            }}
          ></iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
        {/* //TODO: Incorporate structured data
        <Script
          id='ld+json'
          type='application/ld+json'
          dangerouslySetInnerHTML={jsonLd}
          key='product-jsonld'
        />
*/}
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
