import Footer from '@/components/Navigation/Footer';
import Navbar from '@/components/Navigation/Navbar';
import Providers from '@/components/Providers';
import { Toaster } from '@/components/ui/toaster';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Case Canvas',
  description: 'A Modern E-Commerce-Store for Custom Phone Cases',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />

        {/* //* Very Important Trick -> Pushing the footer to the end of the screen and the space below footer will be free */}
        <main className="grainy-light flex min-h-[calc(100vh-3.5rem-1px)] flex-col">
          <div className="flex h-full flex-1 flex-col">
            <Providers>{children}</Providers>
          </div>
          {/* //* Flex-1 -> Will take the entire space between the Navbar and Footer */}
          <Footer />
        </main>

        <Toaster />
      </body>
    </html>
  );
}
