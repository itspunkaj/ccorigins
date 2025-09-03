import '@/app/globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type React from 'react';

import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import WhatsappButton from '@/components/ui/whatsapp-button';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CCORIGINS - Interior Design & Advertising Agency',
  description: 'Premium interior design and creative advertising services under one roof',
  generator: 'v0.dev',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning={true}>
      <body>
        <Navbar />
        <main className="min-h-screen font-bahn">{children}</main>
        <WhatsappButton />
        <Footer />
      </body>
    </html>
  );
}
