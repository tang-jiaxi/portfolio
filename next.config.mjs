/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",  
  cleanDistDir: true, 
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
