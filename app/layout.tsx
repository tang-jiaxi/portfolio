import './globals.css'; 
import { zenKaku } from './fonts/fonts';
import type { Metadata } from 'next'
import ClientLayout from './ClientLayout';

export const metadata : Metadata = {
  title: {
    template: '%s | Jiaxi Tang',
    default: 'Jiaxi Tang',
  },
  description: 'Hi, Iapos;m Jiaxi Tang! UX Designer. UI Engineer. Currently pursuing a double degree in Computer Science and Graphic Design with a minor in UX Design. Welcome to my portfolio website!',
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
      <meta content="Hi, Iapos;m Jiaxi Tang! UX Designer. UI Engineer. Currently pursuing a double degree in Computer Science and Graphic Design with a minor in UX Design. Welcome to my portfolio website!"></meta>
      <body className={`${zenKaku.className} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

export default RootLayout;
