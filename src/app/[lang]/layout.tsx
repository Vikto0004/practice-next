import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import Header from '@/app/[lang]/components/Header/Header';
import Hero from './components/Hero/Hero';
import './styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Open Planet',
  description: 'Charitable Foundation “Open Plant UA”',
};

export default async function RootLayout({
  children,
  params: { lang },
}: Readonly<{ children: React.ReactNode; params: { lang: string } }>) {
  const messages = await getMessages();

  return (
    <html lang={lang}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>
            <Hero />
            {children}
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
