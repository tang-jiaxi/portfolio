import React from 'react';
import Image from 'next/image'
import Filter from '@/components/filter'
import NavBar from '@/components/navbar'
import Footer from '@/components/footer'
import DraggingIcons from '@/components/draggingIcons';

const Home = () => {
  return (
    <div className="flex flex-col gap-8 w-full h-auto mb-60 mx-auto">
      <Image 
        src="/images/hero.png"
        alt="Hero image"
        fill
        className="object-cover"
      />
      <NavBar></NavBar>
      <DraggingIcons></DraggingIcons>
      <Filter></Filter>
      <Footer></Footer>
    </div>
  );
};

export default Home;