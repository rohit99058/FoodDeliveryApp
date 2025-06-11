import React, { useRef } from 'react';
import Cards from './Cards';

const TopRestaurants = ({ data }) => {
  const carouselRef = useRef(null);

  const scrollNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 360, behavior: 'smooth' }); // Scroll right
    }
  };

  const scrollPrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -360, behavior: 'smooth' }); // Scroll left
    }
  };

  return (
    <div className="mx-auto w-[80vw] h-fit">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-2xl">Top restaurant chains in Delhi</h2>
        {/* Navigation Buttons */}
        <div className="flex space-x-2">
          <button
            onClick={scrollPrev}
            className="bg-white border border-gray-300 rounded-full shadow-md w-10 h-10 flex items-center justify-center"
          >
            &#8592; {/* Left Arrow */}
          </button>
          <button
            onClick={scrollNext}
            className="bg-white border border-gray-300 rounded-full shadow-md w-10 h-10 flex items-center justify-center"
          >
            &#8594; {/* Right Arrow */}
          </button>
        </div>
      </div>

      {/* Carousel Items */}
      <div
        ref={carouselRef}
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
        className="mt-5 flex overflow-scroll"
      >
        {data &&
          data.map((item, index) => {
            return (
              <Cards
                key={index}
                id={item.info.id}
                c="tr"
                time={item.info.sla.slaString}
                area={item.info.areaName}
                name={item.info.name}
                rating={item.info.avgRating}
                img={item.info.cloudinaryImageId}
                cuisines={item.info.cuisines}
              />
            );
          })}
      </div>
    </div>
  );
};

export default TopRestaurants;
