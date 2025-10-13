import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ImageCarousel: React.FC = () => {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    slides: { perView: 1, spacing: 10 },
  });

  const goPrev = () => slider.current?.prev();
  const goNext = () => slider.current?.next();

  return (
    <div className="mt-5 relative">
      <div ref={sliderRef} className="keen-slider">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="keen-slider__slide">
            <div className="grid grid-cols-3 lg:grid-cols-4 grid-rows-2 gap-2 lg:gap-4">
              <div className="col-start-1 row-span-2 relative group shadow-sm cursor-pointer">
                <img
                  src="/images/hotel.webp"
                  alt="hotel"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="rounded-md w-16 h-16 bg-white absolute top-4 left-4">
                  <img
                    src="/images/logo_vinperal.webp"
                    alt="logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-2xl font-semibold text-white absolute bottom-4 left-4">
                  Chỉ từ 215k/người
                </p>
                <div className="absolute inset-x-0 bottom-0 bg-[#FF3366] h-0 group-hover:h-full transition-all duration-300 z-10 overflow-hidden text-white rounded-lg text-sm lg:text-base xl:text-lg">
                  <ul className="p-4">
                    <li>- Bao trọn bữa sáng</li>
                    <li>- Khách sạn bán chạy nhất</li>
                    <li>- Phong cách đã dạng, phù hợp với mọi loại sở thích</li>
                    <li>- Đảm bảo giá tốt nhất</li>
                  </ul>
                </div>
              </div>
              <div className="col-start-2 row-start-1 relative group shadow-sm cursor-pointer">
                <img
                  src="/images/hotel.webp"
                  alt="hotel"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="rounded-md w-16 h-16 bg-white absolute top-4 left-4">
                  <img
                    src="/images/logo_vinperal.webp"
                    alt="logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-2xl font-semibold text-white absolute bottom-4 left-4">
                  Chỉ từ 215k/người
                </p>
                <div className="absolute inset-x-0 bottom-0 bg-[#FF3366] h-0 group-hover:h-full transition-all duration-300 z-10 overflow-hidden text-white rounded-lg text-sm lg:text-base xl:text-lg">
                  <ul className="p-4">
                    <li>- Bao trọn bữa sáng</li>
                    <li>- Khách sạn bán chạy nhất</li>
                    <li>- Phong cách đã dạng, phù hợp với mọi loại sở thích</li>
                    <li>- Đảm bảo giá tốt nhất</li>
                  </ul>
                </div>
              </div>
              <div className="col-start-2 row-start-2 relative group shadow-sm cursor-pointer">
                <img
                  src="/images/hotel.webp"
                  alt="hotel"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="rounded-md w-16 h-16 bg-white absolute top-4 left-4">
                  <img
                    src="/images/logo_vinperal.webp"
                    alt="logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-2xl font-semibold text-white absolute bottom-4 left-4">
                  Chỉ từ 215k/người
                </p>
                <div className="absolute inset-x-0 bottom-0 bg-[#FF3366] h-0 group-hover:h-full transition-all duration-300 z-10 overflow-hidden text-white rounded-lg text-sm lg:text-base xl:text-lg">
                  <ul className="p-4 overflow-y-auto">
                    <li>- Bao trọn bữa sáng</li>
                    <li>- Khách sạn bán chạy nhất</li>
                    <li>- Phong cách đã dạng, phù hợp với mọi loại sở thích</li>
                    <li>- Đảm bảo giá tốt nhất</li>
                  </ul>
                </div>
              </div>
              <div className="col-start-3 row-span-2 relative group shadow-sm cursor-pointer">
                <img
                  src="/images/hotel.webp"
                  alt="hotel"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="rounded-md w-16 h-16 bg-white absolute top-4 left-4">
                  <img
                    src="/images/logo_vinperal.webp"
                    alt="logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-2xl font-semibold text-white absolute bottom-4 left-4">
                  Chỉ từ 215k/người
                </p>
                <div className="absolute inset-x-0 bottom-0 bg-[#FF3366] h-0 group-hover:h-full transition-all duration-300 z-10 overflow-hidden text-white rounded-lg text-sm lg:text-base xl:text-lg">
                  <ul className="p-4">
                    <li>- Bao trọn bữa sáng</li>
                    <li>- Khách sạn bán chạy nhất</li>
                    <li>- Phong cách đã dạng, phù hợp với mọi loại sở thích</li>
                    <li>- Đảm bảo giá tốt nhất</li>
                  </ul>
                </div>
              </div>
              <div className="col-start-4 row-start-1 relative group shadow-sm cursor-pointer hidden lg:block">
                <img
                  src="/images/hotel.webp"
                  alt="hotel"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="rounded-md w-16 h-16 bg-white absolute top-4 left-4">
                  <img
                    src="/images/logo_vinperal.webp"
                    alt="logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-2xl font-semibold text-white absolute bottom-4 left-4">
                  Chỉ từ 215k/người
                </p>
                <div className="absolute inset-x-0 bottom-0 bg-[#FF3366] h-0 group-hover:h-full transition-all duration-300 z-10 overflow-hidden text-white rounded-lg text-sm lg:text-base xl:text-lg">
                  <ul className="p-4">
                    <li>- Bao trọn bữa sáng</li>
                    <li>- Khách sạn bán chạy nhất</li>
                    <li>- Phong cách đã dạng, phù hợp với mọi loại sở thích</li>
                    <li>- Đảm bảo giá tốt nhất</li>
                  </ul>
                </div>
              </div>
              <div className="col-start-4 row-start-2 relative group shadow-sm cursor-pointer hidden lg:block">
                <img
                  src="/images/hotel.webp"
                  alt="hotel"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="rounded-md w-16 h-16 bg-white absolute top-4 left-4">
                  <img
                    src="/images/logo_vinperal.webp"
                    alt="logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-2xl font-semibold text-white absolute bottom-4 left-4">
                  Chỉ từ 215k/người
                </p>
                <div className="absolute inset-x-0 bottom-0 bg-[#FF3366] h-0 group-hover:h-full transition-all duration-300 z-10 overflow-hidden text-white rounded-lg text-sm lg:text-base xl:text-lg">
                  <ul className="p-4">
                    <li>- Bao trọn bữa sáng</li>
                    <li>- Khách sạn bán chạy nhất</li>
                    <li>- Phong cách đã dạng, phù hợp với mọi loại sở thích</li>
                    <li>- Đảm bảo giá tốt nhất</li>
                  </ul>
                </div>
              </div>
            </div>
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
  );
};

export default ImageCarousel;
