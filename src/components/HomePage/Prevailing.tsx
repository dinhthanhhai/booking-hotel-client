import React from "react";
import HotelFullCard from "@/components/hotel/HotelFullCard";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Prevailing: React.FC = () => {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    slides: { perView: 4, spacing: 10 },
    breakpoints: {
      "(max-width: 1280px)": {
        slides: { perView: 3, spacing: 10 },
      },
      "(max-width: 800px)": {
        slides: { perView: 2, spacing: 10 },
      },
      "(max-width: 640px)": {
        slides: { perView: 1, spacing: 10 },
      },
    },
  });

  const goPrev = () => slider.current?.prev();
  const goNext = () => slider.current?.next();

  return (
    <div className="custom-page-padding pb-10 bg-white">
      <div>
        <p className="text-2xl font-semibold">Đang thịnh hành</p>
        <p className="text-slate-500 mt-1">
          Các khách sạn được tìm kiếm & đặt nhiều nhất do Mytour đề xuất
        </p>
      </div>
      <div className="mt-5 relative">
        <div ref={sliderRef} className="keen-slider">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="keen-slider__slide">
              <HotelFullCard />
            </div>
          ))}
        </div>

        {/* Prev Button */}
        <button
          onClick={goPrev}
          className="hidden omd:block absolute top-[52%] -left-5 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-sm hover:bg-gray-100"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>

        {/* Next Button */}
        <button
          onClick={goNext}
          className="hidden omd:block absolute top-[52%] -right-5 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-sm hover:bg-gray-100"
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>
    </div>
  );
};

export default Prevailing;
