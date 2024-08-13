import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './styles/globals.css';
import Header from '@/components/Header/Header';
import StoreProvider from './StoreProvider';
import { refreshUser } from '@/redux/auth/operations';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import Refreshing from '@/components/Refreshing/Refreshing';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Contact Master',
  description: 'Streamline Your Contact Management',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <StoreProvider>
          <Refreshing>
            <Header />
            <main>{children}</main>
          </Refreshing>
        </StoreProvider>
      </body>
    </html>
  );
}
