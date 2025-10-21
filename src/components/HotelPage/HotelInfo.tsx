import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import ReviewsModal from "@/components/HotelPage/ReviewsModal";
import AmenitiesModal from "@/components/HotelPage/AmenitiesModal";
import { amenities } from "@/data/data";

const animation = { duration: 2000, easing: (t: number) => t };

const HotelInfo: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isOpenAmen, setIsOpenAmen] = useState<boolean>(false);
  const arr = [1, 15, 18, 14, 35, 76, 81];
  const showModal = () => {
    setIsModalOpen(true);
  };

  // Slide hiển thị trong 2s rồi trượt
  useEffect(() => {
    if (!slider || !slider.current) return;

    const s = slider.current;
    let timeout: ReturnType<typeof setTimeout>;

    const next = () => {
      timeout = setTimeout(() => {
        s.moveToIdx(s.track.details.abs + 1, true, animation);
      }, 2000);
    };

    s.on("animationEnded", next);
    next();

    return () => clearTimeout(timeout);
  }, [slider]);

  const goPrev = () => slider.current?.prev();
  const goNext = () => slider.current?.next();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 820px)");
    const handleResize = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) {
        setIsModalOpen(false);
        setIsOpenAmen(false);
      }
    };
    handleResize(mediaQuery);
    mediaQuery.addEventListener("change", handleResize);
    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return (
    <>
      <div className="grid grid-cols-3 gap-4 mt-5">
        {/* Reviews */}
        <div className="h-[175px] border border-slate-200 hover:shadow-sm hover:border-[#FF3366] rounded-md p-3">
          <div className="flex justify-between items-center gap-2 flex-nowrap min-w-0">
            <div className="flex flex-shrink-0 gap-2 items-center">
              <span className="bg-[#FFEAEF] px-2 rounded-md tracking-wider text-[#FF3366] font-semibold">
                9.0
              </span>
              <span className="font-semibold text-lg whitespace-nowrap">
                Tuyệt vời
              </span>
            </div>
            <div
              className="flex items-center text-[#00C6F8] cursor-pointer min-w-0 flex-1 justify-end"
              onClick={() => {
                setIsModalOpen(true);
              }}
            >
              <span className="truncate text-right">
                Xem tất cả 33 đánh giá
              </span>
              <ChevronRight className="w-6 h-6 flex-shrink-0" />
            </div>
          </div>
          {/* Slider */}
          <div className="relative group py-5">
            <div ref={sliderRef} className="keen-slider">
              {[...Array(8)].map((_, index) => (
                <div
                  key={index}
                  className="keen-slider__slide flex flex-col space-y-2"
                >
                  <span className="font-bold">Good Services {index + 1}</span>
                  <p className="line-clamp-2">
                    Lần thứ {index + 1} ở tại Centara, resort đẹp, đồ ăn sáng
                    hơi kém đa dạng so với khẩu vị của mình.
                  </p>
                </div>
              ))}
            </div>
            {/* Nút điều hướng */}
            <ChevronLeft
              className={`w-5 h-5 absolute top-[52%] left-1 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 text-[#FF3366] cursor-pointer`}
              onClick={goPrev}
            />
            <ChevronRight
              className={`w-5 h-5 absolute top-[52%] right-1 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 text-[#FF3366] cursor-pointer`}
              onClick={goNext}
            />
            {/* Dots */}
            {loaded && slider.current && (
              <div className="absolute flex justify-center gap-2 mt-3 bottom-2 left-1/2 -translate-x-1/2">
                {Array.from(
                  Array(slider.current.track.details.slides.length).keys()
                ).map((idx) => (
                  <button
                    key={idx}
                    onClick={() => slider.current?.moveToIdx(idx)}
                    className={`w-4 h-[1.5px] ${
                      currentSlide === idx ? "bg-[#FF3366]" : "bg-slate-200"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
        {/* Tiện ích */}
        <div
          className="h-[175px] border border-slate-200 hover:shadow-sm hover:border-[#FF3366] rounded-md p-3"
          onClick={() => {
            setIsOpenAmen(true);
          }}
        >
          <div className="flex justify-between items-center gap-2 flex-nowrap min-w-0">
            <span className="font-semibold text-lg whitespace-nowrap">
              Tiện nghi
            </span>
            <div className="flex items-center text-[#00C6F8] cursor-pointer min-w-0 flex-1 justify-end">
              <span className="truncate text-right">Xem tất cả</span>
              <ChevronRight className="w-6 h-6 flex-shrink-0" />
            </div>
          </div>
          <div className="flex gap-3 flex-wrap mt-3 overflow-hidden max-h-[100px]">
            {amenities
              .filter((item) => arr.includes(item.id))
              .map(({ id, name, icon: Icon }) => (
                <div key={id} className="flex items-center gap-2">
                  <Icon className="w-5 h-5 text-[#FF3366]" />
                  <span>{name}</span>
                </div>
              ))}
          </div>
        </div>
        {/* Điểm vị trí */}
        <div className="h-[175px] border border-slate-200 hover:shadow-sm hover:border-[#FF3366] rounded-md p-3 bg-[url('/images/bg-krakow.png')] bg-cover">
          <div className="flex justify-between items-center gap-2 flex-nowrap min-w-0">
            <span className="font-semibold text-lg whitespace-nowrap truncate">
              Điểm vị trí tuyệt vời : 9.2
            </span>
            <div className="flex items-center text-[#00C6F8] cursor-pointer min-w-0 flex-1 justify-end">
              <span className="truncate text-right">Xem bản đồ</span>
              <ChevronRight className="w-6 h-6 flex-shrink-0" />
            </div>
          </div>
          <div className="flex flex-col gap-1 mt-1">
            <p className="font-medium">Xung quanh đây có gì:</p>
            <p className="truncate">
              Điểm du lịch: MANTA Sail Training Centre{" "}
              <span className="text-slate-400">(130m)</span>
            </p>
            <p className="truncate">
              Nhà hàng: Phố Làng Chài{" "}
              <span className="text-slate-400">(91m)</span>
            </p>
            <p className="truncate">
              Nhà hàng: Vien Phuong Restaurant{" "}
              <span className="text-slate-400">(156m)</span>
            </p>
          </div>
        </div>
      </div>
      <ReviewsModal
        isModalOpen={isModalOpen}
        handleCancel={() => {
          setIsModalOpen(false);
        }}
      />
      <AmenitiesModal
        isModalOpen={isOpenAmen}
        handleCancel={() => {
          setIsOpenAmen(false);
        }}
      />
    </>
  );
};

export default HotelInfo;
