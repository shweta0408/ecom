import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Featured() {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl shadow-md overflow-hidden max-w-6xl w-full p-3 mt-32">
      <Carousel showArrows={true} showThumbs={false}>
        <div>
          <img src="/src/assets/banner1.png" alt="Image 1" />
        </div>
        <div>
          <img src="/src/assets/banner2.png" alt="Image 2" />
        </div>
        <div>
          <img src="/src/assets/banner3.png" alt="Image 3" />
        </div>
      </Carousel>
    </div>
  );
}

export default Featured;
