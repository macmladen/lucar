import '@/styles/globals.css'
import { Open_Sans, Roboto_Slab } from 'next/font/google'
import Header from '@/components/header'
import React from 'react'

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
  title: 'Lucar | Autogas, Segmentna vrata, Pergola, Komarnici',
  description:
    'Ugradnja gasa u sve tipove vozila. Segmentna vrata, Pergola, Komarnici.',
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
        <Header />
        <main className='prose mx-auto dark:prose-invert'>{children}</main>
      </body>
    </html>
  )
}
