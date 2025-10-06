import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import {
  ChevronLeft,
  ChevronRight,
  Milestone,
  Gift,
  Smartphone,
  KeyRound,
} from "lucide-react";

type Props = {
  className?: string;
};

const HotelResultCard: React.FC<Props> = ({ className }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = React.useState(false);
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slides: {
      perView: 1,
      spacing: 0,
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
    <div
      className={`${className} flex flex-col gap-4 sm:flex-row items-stretch rounded-md border border-slate-200 shadow-sm w-full p-3`}
    >
      <div className="w-full sm:w-[240px] group relative">
        <div ref={sliderRef} className="keen-slider">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="keen-slider__slide !min-w-full">
              <img
                src={"/images/nha-trang.webp"}
                className="w-full min-h-[300px] h-full object-cover rounded-md"
              />
            </div>
          ))}
        </div>
        {/* Prev Button */}
        {loaded && slider.current && (
          <button
            onClick={goPrev}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronLeft className="w-4 h-4 text-gray-700 hover:text-[#FF3366]" />
          </button>
        )}

        {/* Next Button */}
        {loaded && slider.current && (
          <button
            onClick={goNext}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronRight className="w-4 h-4 text-gray-700 hover:text-[#FF3366]" />
          </button>
        )}
        {/* Dots */}
        {loaded && slider.current && (
          <div className="absolute flex justify-center gap-2 mt-3 bottom-1 left-1/2 -translate-x-1/2">
            {Array.from(
              Array(slider.current.track.details.slides.length).keys()
            ).map((idx) => (
              <button
                key={idx}
                onClick={() => slider.current?.moveToIdx(idx)}
                className={`w-1.5 h-1.5 rounded-full ${
                  currentSlide === idx ? "bg-[#FF3366]" : "bg-white"
                }`}
              />
            ))}
          </div>
        )}
      </div>
      <div className="flex-1 flex flex-col">
        <p className="flex items-center gap-2 flex-wrap">
          <span className="text-xl font-semibold">
            Khách Sạn Mường Thanh Hà Nội Centre
          </span>
          <span className="flex mt-1">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src="/icons/star-solid-full.svg"
                alt="icon"
                className="w-4 h-4"
              />
            ))}
          </span>
        </p>
        <div className="flex items-center gap-2 mt-1">
          <div className="flex items-center px-2 bg-[#FF3366] rounded-tl-lg rounded-tr-sm rounded-bl-sm rounded-br-lg">
            <span className="text-sm font-medium text-white">9.0</span>
          </div>
          <span className="text-[#FF3366] font-semibold">Tuyệt vời</span>
          <span className="text-slate-700 line-clamp-2">(28 đánh giá)</span>
        </div>
        <div className="flex items-center gap-1 mt-1">
          <Milestone className="w-5 h-5 text-slate-500" />
          <span className="text-slate-500 line-clamp-2">
            Thợ Nhuộm, Quận Hoàn Kiếm
          </span>
          <span className="text-blue-600 underline underline-offset-2 line-clamp-2">
            Xem bản đồ
          </span>
        </div>
        <div className="flex flex-col xl:flex-row mt-2 gap-3">
          <div className="w-fit flex flex-col gap-1">
            <span className="font-semibold">Phòng Superior King</span>
            <div className="px-2 py-1 bg-gradient-to-r from-[#FFB33D] via-[#FF7251] to-[#FF3864] flex gap-1 items-center text-white rounded-md">
              <Gift className="w-5 h-5" />
              <span className="text-sm">Tặng bảo hiểm du lịch</span>
            </div>
            <span className="text-[#48BB78]">Giá đã bao gồm bữa sáng</span>
            <span className="text-[#EE8B36]">Xác nhận ngay</span>
          </div>
          <div className="flex-1 flex flex-col gap-1 items-end">
            <div className="flex relative">
              <p className="bg-[#FBE8EE] px-1 rounded-md text-sm text-[#FF3366]">
                Áp dụng mã <span className="font-semibold">DIUDANG25</span> giảm
                117.502 ₫
              </p>
              <div className="px-1 bg-[#FF3366] text-white rounded-t-md rounded-bl-md">
                -5%
              </div>
              <div className="w-0 h-0 border-t-8 border-t-[#FF3366] border-l-8 border-l-transparent absolute -bottom-1 right-0"></div>
            </div>
            <div className="flex gap-1 items-center">
              <span className="text-slate-600 line-through">993.649 ₫</span>
              <span className="font-semibold text-2xl">993.649 ₫</span>
            </div>
            {/* <button className="h-9 flex gap-1 items-center px-3 py-2 text-white bg-[#FF3366] rounded-md mt-1">
              <span className="font-semibold">Xem phòng</span>
              <ChevronRight className="w-5 h-5" />
            </button> */}
            <button className="h-9 flex gap-1 items-center px-3 py-2 bg-white text-[#FF3366] rounded-md mt-1 border border-[#FF3366]">
              <span className="font-semibold leading-0">Xem phòng</span>
              <ChevronRight className="w-5 h-5" />
            </button>
            <button className="h-9 flex gap-1 items-center px-3 py-2 text-white bg-[#FF3366] rounded-md mt-1">
              <Smartphone className="w-5 h-5" />
              <span className="font-semibold leading-0">
                Xem giá trên ứng dụng
              </span>
              <ChevronRight className="w-5 h-5" />
            </button>
            <span className="text-sm text-slate-500">-----hoặc-----</span>
            <div className="flex gap-1 items-center font-semibold jus">
              <KeyRound className="w-4 h-4 text-[#FF3366] rotate-90" />
              <p className="inline line-clamp-1">
                <span className="font-semibold text-[#FF3366]">Đăng nhập </span>
                <span>để xem giá</span>
              </p>
            </div>
            {/* <div className="flex items-center px-2 py-1 rounded-md bg-[#FAF1EA] ">
              <img src="/icons/cent.png" alt="icon" className="w-5 h-5" />
              <span className="text-[#ED8936] truncate">
                Hoàn 31.169 ₫ vào Mytour Cash
              </span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelResultCard;
