import './globals.css'; 
import { zenKaku } from './fonts/fonts';
import type { Metadata } from 'next'
import { Analytics } from "@vercel/analytics/react"
import { GoogleAnalytics } from "@next/third-parties/google";
import ClientLayout from './ClientLayout';

export const metadata : Metadata = {
  title: {
    template: '%s | Jiaxi Tang',
    default: 'Jiaxi Tang',
  },
  description: 'Hi, I am Jiaxi Tang! UX Designer. UI Engineer. Currently pursuing a double degree in Computer Science and Graphic Design with a minor in UX Design. Welcome to my portfolio website!',
  icons: [
    {url: 'images/logo.svg', type: 'image/svg+xml'}
  ],
  metadataBase: new URL('https://jiaxitang.com'),
  openGraph: {
    images: [
      {
        url: '/opengraph-image.png',
        alt: 'Preview image for Jiaxi Tangapos;s Portfolio'
      }
    ]
  }
};

interface LayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<LayoutProps> = ({ children }) => {

  return (
    <html lang="en">
      <meta content="Hi, I am Jiaxi Tang! UX Designer. UI Engineer. Currently pursuing a double degree in Computer Science and Graphic Design with a minor in UX Design. Welcome to my portfolio website!"></meta>
      <body className={`${zenKaku.className} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
        <GoogleAnalytics gaId="G-45D1ZXXTF2"/>
        <Analytics/>
      </body>
    </html>
  );
}

export default RootLayout;
