import React from "react";
import Flight from "@/components/HomePage/Flight";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const ListFlight: React.FC = () => {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    slides: { perView: 4, spacing: 15 },
    breakpoints: {
      "(max-width: 1280px)": {
        slides: { perView: 3, spacing: 10 },
      },
      "(max-width: 800px)": {
        slides: { perView: 2, spacing: 10 },
      },
      "(max-width: 500px)": {
        slides: { perView: 1, spacing: 10 },
      },
    },
  });

  const goPrev = () => slider.current?.prev();
  const goNext = () => slider.current?.next();

  return (
    <div className="px-4 omd:px-[12%] xl:px-[15%] pt-8 pb-10 bg-white">
      <div className="flex flex-col gap-1">
        <div className="flex flex-col sm:flex-row gap-2">
          <span className="text-2xl font-semibold">Chuyến bay giá tốt từ</span>
          <div className="flex gap-2 flex-1 items-center">
            <span className="text-2xl font-bold text-[#FF3366]">
              Hồ Chí Minh
            </span>
            <ChevronDown className="text-[#FF3366]" />
          </div>
        </div>
        <div className="flex gap-3 justify-between">
          <p className="text-slate-500 mt-1 w-full line-clamp-2 flex-1">
            Những chuyến bay giá tốt nhất trong tháng khởi hành từ Hồ Chí Minh
          </p>
          <div className="flex flex-col sm:flex-row gap-3 h-fit mt-auto">
            <Link
              to={"#"}
              className="px-3 py-2 font-semibold text-[#FF3366] rounded-md border border-[#FF3366]"
            >
              Khám phá ngay
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-5 relative">
        <div ref={sliderRef} className="keen-slider">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="keen-slider__slide">
              <Flight />
            </div>
          ))}
        </div>

        {/* Prev Button */}
        <button
          onClick={goPrev}
          className="absolute top-[52%] -left-5 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>

        {/* Next Button */}
        <button
          onClick={goNext}
          className="absolute top-[52%] -right-5 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>
    </div>
  );
};

export default ListFlight;
