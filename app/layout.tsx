import './globals.css';
import type { Metadata } from 'next';
import { Bebas_Neue, Questrial } from 'next/font/google';
import PromotionBar from './_components/ui/header/PromotionBar';
import Header from './_components/ui/header/Header';
import ReduxProvider from './_redux/ReduxProvider';

const bebasNeue = Bebas_Neue({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});

const questrial = Questrial({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Morningstar',
  description: 'Morningstar',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body
        className={`${bebasNeue.className} ${questrial.className} antialiased`}
      >
        <div className='flex h-screen w-screen flex-col items-center overflow-x-hidden bg-pearl'>
          <PromotionBar />
          <Header />
          <main className='w-full grow bg-pearl pb-[64px] sm:pb-0'>
            <ReduxProvider>{children}</ReduxProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
