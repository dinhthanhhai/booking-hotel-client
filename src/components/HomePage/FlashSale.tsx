import React from "react";
import HotelCard from "@/components/hotel/HotelCard";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const FlashSale: React.FC = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = React.useState(false);
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
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  const goPrev = () => slider.current?.prev();
  const goNext = () => slider.current?.next();

  return (
    <div className="custom-page-padding pt-8 pb-10 bg-linear-to-tr from-[#FE5F31] to-[#F23175] omd:bg-none omd:bg-[#FFF5F7]">
      <div className="flex gap-1 justify-between">
        <div>
          <img
            src="/images/flashsale.png"
            alt="flashsale"
            className="w-[198px] hidden omd:block"
          />
          <img
            src="/images/fsale.webp"
            alt="flashsale"
            className="w-[198px] block omd:hidden"
          />
          <div className="flex flex-col md:flex-row gap-2 font-bold">
            <span className="font-normal text-white omd:text-black">
              Chương trình sẽ kết thúc trong
            </span>
            <div className="flex gap-2">
              <span className="px-1 rounded-md bg-[#FF3366] text-white text-sm flex items-center">
                00
              </span>
              <span className="text-[#FF3366]">:</span>
              <span className="px-1 rounded-md bg-[#FF3366] text-white text-sm flex items-center">
                00
              </span>
              <span className="text-[#FF3366]">:</span>
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

        {/* Dots */}
        {loaded && slider.current && (
          <div className="omd:hidden absolute flex justify-center gap-2 mt-3 -bottom-3 left-1/2 -translate-x-1/2">
            {Array.from(
              Array(slider.current.track.details.slides.length).keys()
            ).map((idx) => (
              <button
                key={idx}
                onClick={() => slider.current?.moveToIdx(idx)}
                className={`w-1 h-1 rounded-full ${
                  currentSlide === idx ? "bg-slate-300" : "bg-white"
                }`}
              />
            ))}
          </div>
        )}
      </div>
      <div className="w-full mt-5 flex justify-center">
        <button className="px-4 py-2 rounded-md border border-[#FF3366] text-[#FF3366] bg-white omd:bg-transparent">
          Xem thêm
        </button>
      </div>
    </div>
  );
};

export default FlashSale;
