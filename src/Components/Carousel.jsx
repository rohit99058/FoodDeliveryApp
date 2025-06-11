import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { Cloudinary_URL } from '../Utils/Constants';

const Carousel = ({ data }) => {
  const nav = useNavigate();
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
    <>
      <h2 className="text-[24px] font-bold ml-40 mb-4">What's on your mind?</h2>
      <div className="relative w-[80vw] mx-auto">
        {/* Navigation Buttons */}
        <div className="absolute top-[-10px] right-0 flex space-x-2 z-10">
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

        {/* Carousel Items */}
        <div
          ref={carouselRef}
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
          className="flex overflow-scroll w-full"
        >
          {data &&
            data.map((item, index) => {
              let str = item.action.link.slice(35).split('?');
              return (
                <div key={index} className="flex-shrink-0 text-center">
                  <img
                    onClick={() => {
                      nav(`/carrestaurants/${str[0]}`);
                    }}
                    className="h-[200px] w-[250px] mx-2 cursor-pointer"
                    src={Cloudinary_URL + item.imageId}
                    alt={item.action.name}
                  />
                  <p className="text-sm mt-2">{item.action.name}</p>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Carousel;
