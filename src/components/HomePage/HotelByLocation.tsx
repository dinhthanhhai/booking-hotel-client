import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HotelByLocation: React.FC = () => {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    slides: { perView: 7, spacing: 10 },
    breakpoints: {
      "(max-width: 1366px)": {
        slides: { perView: 5, spacing: 10 },
      },
      "(max-width: 1024px)": {
        slides: { perView: 4, spacing: 10 },
      },
      "(max-width: 768px)": {
        slides: { perView: 3, spacing: 10 },
      },
      "(max-width: 580px)": {
        slides: { perView: 2, spacing: 10 },
      },
      "(max-width: 400px)": {
        slides: { perView: 1, spacing: 10 },
      },
    },
  });

  const goPrev = () => slider.current?.prev();
  const goNext = () => slider.current?.next();

  return (
    <div className="px-4 omd:px-[12%] xl:px-[15%] pt-10 pb-12">
      <div className="text-2xl font-semibold">Khách sạn theo địa điểm</div>
      <div className="mt-10 relative">
        <div ref={sliderRef} className="keen-slider">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="keen-slider__slide flex flex-col items-center justify-center"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden">
                <img
                  src="/images/nha-trang.webp"
                  alt="city images"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-lg font-semibold mt-2">Nha Trang</span>
              <span className="text-slate-600 text-sm">1208 Khách sạn</span>
            </div>
          ))}
        </div>
        {/* Prev Button */}
        <button
          onClick={goPrev}
          className="absolute top-[40%] -left-5 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-sm hover:bg-gray-100"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>

        {/* Next Button */}
        <button
          onClick={goNext}
          className="absolute top-[40%] -right-5 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-sm hover:bg-gray-100"
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>
    </div>
  );
};

export default HotelByLocation;
