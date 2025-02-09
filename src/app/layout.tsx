import GoogleAnalytics from '@/components/Analytics/GoogleAnalytics';
import Footer from '@/components/Navigation/Footer';
import Navbar from '@/components/Navigation/Navbar';
import Providers from '@/components/Providers';
import { Toaster } from '@/components/ui/toaster';
import { constructMetadata } from '@/lib/utils';
import { Recursive } from 'next/font/google';
import './globals.css';

const recursive = Recursive({ subsets: ['latin'] });

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={recursive.className}>
        <GoogleAnalytics />
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
