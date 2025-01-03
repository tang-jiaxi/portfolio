import './globals.css'; 
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import type { Metadata } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google'

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
      <body>
        <div className="flex flex-col min-h-screen">
          <NavBar/>
            <div className={`flex-grow`}>{children}</div> {/* Main content */}
            <GoogleAnalytics gaId="G-45D1ZXXTF2"/>
          <Footer/>
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
