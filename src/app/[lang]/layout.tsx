import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/app/[lang]/components/Header/Header';
import StoreProvider from './StoreProvider';
import './styles/globals.css';

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Contact Master',
  description: 'Streamline Your Contact Management',
};

export default async function RootLayout({
  children,
  params: { lang },
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  const messages = await getMessages();

  return (
    <html lang={lang}>
      <body>
        <StoreProvider>
          <NextIntlClientProvider messages={messages}>
            <Header />
            <main>{children}</main>
          </NextIntlClientProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
