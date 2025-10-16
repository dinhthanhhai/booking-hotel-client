import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SlideCoupon: React.FC = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = React.useState(false);
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free",
    slides: { perView: 3, spacing: 20 },
    breakpoints: {
      "(max-width: 1280px)": {
        slides: { perView: 2, spacing: 20 },
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
    <div className="custom-page-padding pb-10 bg-white mt-10">
      <div className="relative">
        <div ref={sliderRef} className="keen-slider overflow-x-auto">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="keen-slider__slide flex justify-center">
              <img
                src="/images/coupons.webp"
                alt="coupon"
                className="w-[430px] rounded-lg object-cover"
              />
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
          <div className="absolute flex justify-center gap-2 mt-3 -bottom-3 left-1/2 -translate-x-1/2">
            {Array.from(
              Array(slider.current.track.details.slides.length).keys()
            ).map((idx) => (
              <button
                key={idx}
                onClick={() => slider.current?.moveToIdx(idx)}
                className={`w-4 h-1  ${
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

export default SlideCoupon;
