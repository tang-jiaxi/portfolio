import './globals.css'; 
// import { Zen_Kaku_Gothic_New } from 'next/font/google'; 
// import { DM_Sans } from 'next/font/google'; 
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import type { Metadata } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google'

// const zenKakuGothicNew = Zen_Kaku_Gothic_New({
//   weight: ['300', '400', '500', '700', '900'], 
//   subsets: ['latin'], 
//   display: 'swap', 
// });

// const dmSans = DM_Sans({
//   weight: ['400', '500', '700'],
//   subsets: ['latin'], 
//   display: 'swap',
// });

export const metadata : Metadata = {
  title: {
    template: '%s | Jiaxi Tang',
    default: 'Jiaxi Tang',
  },
  description: 'Hi, Iapos;m Jiaxi Tang! UX Designer. UI Engineer. Currently pursuing a double degree in Computer Science and Graphic Design with a minor in UX Design. Welcome to my portfolio website!',
  icons: [
    {url: 'images/logo.svg', type: 'image/svg+xml'}
  ]
};

interface LayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
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
