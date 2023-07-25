import '@/styles/globals.css';
import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'Lucar | Autogas, Segmentna vrata, Pergola, Komarnici',
  description:
    'Ugradnja gasa u sve tipove vozila. Segmentna vrata, Pergola, Komarnici.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr-Latn-RS">
      <body className={openSans.className}>{children}</body>
    </html>
  );
}
