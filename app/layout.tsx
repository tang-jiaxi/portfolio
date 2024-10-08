import "./globals.css"
import { Zen_Kaku_Gothic_New } from 'next/font/google';  // Import your font from Google

const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  weight: ['300', '400', '500', '700', '900'],  // Specify font weights you need
  subsets: ['latin'],  // Specify subsets
  display: 'swap',  // Use 'swap' for font loading optimization
});

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={zenKakuGothicNew.className}>
        {children}
      </body>
    </html>
  )
}
