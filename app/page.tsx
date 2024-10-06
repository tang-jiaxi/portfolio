import React from 'react';
import Filter from '@/components/filter'
import NavBar from '@/components/navbar'
import Footer from '@/components/footer'

const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Filter></Filter>
      <Footer></Footer>
    </div>
  );
};

export default Home;