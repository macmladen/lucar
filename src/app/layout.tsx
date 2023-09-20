import '@/styles/globals.css'
import { Open_Sans, Roboto_Slab } from 'next/font/google'
import Header from '@/components/header'
import React from 'react'
import Footer from '@/components/footer'

const openSans = Open_Sans({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-open-sans',
})

const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  variable: '--font-roboto-slab',
})

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
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
