import React from 'react';
import Filter from '@/components/Filter'
// import DraggingIcons from '@/components/draggingIcons';

const Home = () => {
  return (
    <div className="flex flex-col gap-8 w-full h-auto mb-60 mx-auto">
      {/* <DraggingIcons></DraggingIcons> */}
      <Filter></Filter>
    </div>
  );
};

export default Home;