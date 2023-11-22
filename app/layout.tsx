import './globals.scss';
import { Inter } from 'next/font/google';

import Menu from '@/components/Menu';
import Logo from '@/components/Logo';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'My page title',
  description: 'Created manually for Dude'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Logo />
          <Menu />
        </header>
        {children}
      </body>
    </html>
  );
}
