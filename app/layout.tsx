import { Metadata } from 'next';
import Script from 'next/script';

import './globals.css';
import Logo from '@/components/Logo';
import CarbonAd from '@/components/CarbonAd';
import Footer from '@/components/Footer';

import lang from '@/locales/en/common.json';

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico'
  },
  viewport: 'width=device-width, initial-scale=1',
  title: 'racc.pics',
  description:
    'An API for the awesome racc.pics! Use it in your website to show funny error messages.',
  authors: [{ name: 'venqoi', url: 'https://github.com/venqoi' }],
  openGraph: {
    type: 'website',
    title: 'racc.pics',
    url: 'https://racc.pics',
    images: [
      {
        url: 'https://racc.pics/100.png',
        alt: 'racc.pics',
      },
    ],
    siteName: 'racc.pics, silly raccoon errors',
    description: 'API for racc.pics',
  },
  twitter: {
    card: 'summary_large_image',
    site: 'https://racc.pics',
    creator: '@venqoi',
    title: 'racc.pics',
    description: 'API for racc.pics',
    images: ['https://racc.pics/100'],
  },
  themeColor: '#d0383e',
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
<html lang="en">
  <body>
    <CarbonAd />
    <div className="p-4 sm:px-16 sm:py-4 lg:px-32 lg:py-4">
      <header className="flex">
        <a href="/" className="flex text-interactive no-underline">
          <div className="pt-4">
            <Logo width={80} height={55} color="#d0383e" />
          </div>
          <h1 className="ml-2 text-4xl font-bold my-6" style={{ color: "#cbb1a9" }}>{lang.APP_TITLE}</h1>
        </a>
      </header>
      {children}
      <Footer />

        </div>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
          ga('create', 'UA-27701865-1', 'auto');
          ga('send', 'pageview');
        `}
        </Script>
        <Script
          src="https://www.google-analytics.com/analytics.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
