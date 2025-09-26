import React from "react";
import PartnerHotelCard from "@/components/hotel/PartnerHotelCard";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const StrategicPartner: React.FC = () => {
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
    <div className="px-[10%] xl:px-[12%] pb-10 bg-white">
      <div>
        <p className="text-2xl font-semibold">
          Vinpearl - Đối tác chiến lược giá độc quyền
        </p>
        <p className="text-slate-500 mt-1">
          Các khách sạn HOT nhất của chuỗi Vinpearl đang có nhiều ưu đãi dành
          cho khách hàng
        </p>
      </div>
      <div className="mt-5 relative">
        <div ref={sliderRef} className="keen-slider">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="keen-slider__slide">
              <PartnerHotelCard />
            </div>
          ))}
        </div>

        {/* Prev Button */}
        <button
          onClick={goPrev}
          className="absolute top-[50%] -left-6 transform -translate-y-1/2 bg-slate-50 rounded-full p-2 shadow-sm hover:bg-gray-100"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>

        {/* Next Button */}
        <button
          onClick={goNext}
          className="absolute top-[50%] -right-6 transform -translate-y-1/2 bg-slate-50 rounded-full p-2 shadow-sm hover:bg-gray-100"
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>
    </div>
  );
};

export default StrategicPartner;
