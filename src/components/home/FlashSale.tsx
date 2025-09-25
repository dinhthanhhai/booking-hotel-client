import React from "react";
import HotelCard from "@/components/hotel/HotelCard";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const FlashSale: React.FC = () => {
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
    <div className="px-[10%] xl:px-[12%] pt-8 pb-10 bg-[#FFF5F7]">
      <div className="flex gap-1 justify-between">
        <div>
          <img
            src="/images/flashsale.png"
            alt="flashsale"
            className="w-[198px]"
          />
          <div className="flex flex-col md:flex-row gap-2 font-bold">
            <span className="font-normal">Chương trình sẽ kết thúc trong</span>
            <div className="flex gap-2">
              <span className="px-1 rounded-md bg-[#FF3366] text-white text-sm flex items-center">
                00
              </span>
              <span className="text-pink-600">:</span>
              <span className="px-1 rounded-md bg-[#FF3366] text-white text-sm flex items-center">
                00
              </span>
              <span className="text-pink-600">:</span>
              <span className="px-1 rounded-md bg-[#FF3366] text-white text-sm flex items-center">
                00
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 h-fit mt-auto">
          <div className="text-white px-2 py-1 bg-[#FF3366] rounded-md flex flex-col justify-center items-center">
            <div className="font-semibold tracking-wider">
              <span>00:00</span>
              <span>-</span>
              <span>23:59</span>
            </div>
            <div className="flex">
              <span className="uppercase text-[12px]">Đang diễn ra</span>
              <img src="/icons/icon_fire.png" alt="icon" className="w-4 h-4" />
            </div>
          </div>
          <div className="text-[#FF3366] px-2 py-1 bg-[#FFE1E8] rounded-md flex flex-col justify-center items-center">
            <div className="font-semibold tracking-wider">
              <span>00:00</span>
              <span>-</span>
              <span>23:59</span>
            </div>
            <div className="flex">
              <span className="uppercase text-[12px]">Đang diễn ra</span>
              <img src="/icons/icon_fire.png" alt="icon" className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 relative">
        <div ref={sliderRef} className="keen-slider">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="keen-slider__slide">
              <HotelCard />
            </div>
          ))}
        </div>

        {/* Prev Button */}
        <button
          onClick={goPrev}
          className="absolute top-[52%] -left-5 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-sm hover:bg-gray-100"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>

        {/* Next Button */}
        <button
          onClick={goNext}
          className="absolute top-[52%] -right-5 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-sm hover:bg-gray-100"
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>
    </div>
  );
};

export default FlashSale;
