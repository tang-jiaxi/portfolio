import React from 'react';
import Filter from '@/components/Filter'
import MatterSvgIcons from '@/components/sketch';
// import DraggingIcons from '@/components/draggingIcons';

const Home = () => {
  return (
    <div className="flex flex-col gap-0 w-full h-auto mb-60 mx-auto">
      {/* MatterP5Sketch component with its own vertical space */}
      <div className="w-full mx-auto">
        <MatterSvgIcons />
      </div>

      {/* Filter component below the sketch */}
      <div className="w-full bg-red-light pt-20">
        <Filter />
      </div>
    </div>
  );
};

export default Home;