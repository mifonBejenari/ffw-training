import './globals.scss';
import { Inter } from 'next/font/google';

import Menu from '@/components/Menu';
import Logo from '@/components/Logo';
import { getSession } from '@/lib/actions';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'My page title',
  description: 'Created manually for Dude'
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  const { theme } = session;

  return (
    <html lang="en" className={theme === 'light' ? 'light-mode' : 'dark-mode'}>
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
