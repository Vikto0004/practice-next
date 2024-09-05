import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/app/[locale]/components/Header/Header';
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
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <StoreProvider>
          {/* <Refreshing> */}
          <NextIntlClientProvider messages={messages}>
            <Header />
            <main>{children}</main>
          </NextIntlClientProvider>
          {/* </Refreshing> */}
        </StoreProvider>
      </body>
    </html>
  );
}
