import React from "react";
import HotelFullCard from "@/components/hotel/HotelFullCard";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const MytourChoices: React.FC = () => {
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
    <div className="custom-page-padding pt-8 pb-10 bg-white">
      <div className="flex gap-1 justify-between">
        <div>
          <div className="flex gap-2 items-center">
            <span className="text-2xl font-semibold">Mytour lựa chọn</span>
            <img
              src="/icons/icon_omly_price.png"
              alt="icon"
              className="w-8 h-8"
            />
          </div>
          <p className="text-slate-500 mt-1">
            Các khách sạn giá độc quyền trên Mytour
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 h-fit mt-auto">
          <Link
            to={"/khach-san/khach-san-gia-doc-quyen"}
            className="px-3 py-2 font-semibold text-[#FF3366] rounded-md border border-[#FF3366]"
          >
            Xem thêm
          </Link>
        </div>
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
                  currentSlide === idx ? "bg-[#FF3366]" : "bg-slate-200"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MytourChoices;
