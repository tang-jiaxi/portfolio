import './globals.css'; 
import { zenKaku } from './fonts/fonts';
import type { Metadata } from 'next'
import { Analytics } from "@vercel/analytics/react"
import { GoogleAnalytics } from "@next/third-parties/google";
import ClientLayout from './ClientLayout';
import { SpeedInsights } from "@vercel/speed-insights/next"

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
        url: '/images/opengraph-image.png',
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
      <head>
        <meta content="Hi, I am Jiaxi Tang! UX Designer. UI Engineer. Currently pursuing a double degree in Computer Science and Graphic Design with a minor in UX Design. Welcome to my portfolio website!"></meta>
        <title>Jiaxi Tang Portfolio</title>
        <meta name="description" content='Hi, I am Jiaxi Tang! UX Designer. UI Engineer. Currently pursuing a double degree in Computer Science and Graphic Design with a minor in UX Design. Welcome to my portfolio website!'/>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <meta property="og:site_name" content="Jiaxi Tang Portfolio"></meta>
        <meta property="og:url" content="https://www.jiaxitang.com"></meta>
      </head>
      <body className={`${zenKaku.className} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
        <GoogleAnalytics gaId="G-45D1ZXXTF2"/>
        <Analytics/>
        <SpeedInsights/>
      </body>
    </html>
  );
}

export default RootLayout;
