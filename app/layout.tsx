import './globals.css'; 
import { Zen_Kaku_Gothic_New } from 'next/font/google'; 
import { DM_Sans } from 'next/font/google'; 
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import type { Metadata } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google'

const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  weight: ['300', '400', '500', '700', '900'], // Specify font weights
  subsets: ['latin'], // Specify subsets
  display: 'swap', // Font loading optimization
});

const dmSans = DM_Sans({
  weight: ['400', '500', '700'], // Specify font weights
  subsets: ['latin'], // Specify subsets
  display: 'swap', // Font loading optimization
});

export const metadata : Metadata = {
  title: 'Jiaxi Tang',
  description: 'Jiaxi Tang Portfolio',
  icons: [
    {url: 'images/logo.svg', type: 'image/svg+xml'}
  ],
};

interface LayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={zenKakuGothicNew.className}>
        <div className="flex flex-col min-h-screen">
          <NavBar/>
            <div className={`flex-grow ${dmSans.className}`}>{children}</div> {/* Main content */}
            <GoogleAnalytics gaId="G-45D1ZXXTF2"/>
          <Footer/>
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
