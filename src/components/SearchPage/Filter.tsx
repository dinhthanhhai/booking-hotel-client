import React, { useState } from "react";
import * as Slider from "@radix-ui/react-slider";
import { Star, ChevronUp, ChevronDown, X } from "lucide-react";
import { hotelTypes, amenities, brands, tags } from "@/data/data";

type Props = {
  className?: string;
  close?: () => void;
};

const Filter: React.FC<Props> = ({ className, close }) => {
  const minPrice = 0;
  const maxPrice = 5_000_000;
  const [range, setRange] = useState<[number, number]>([minPrice, maxPrice]);
  const [star, setStar] = useState<number>();
  const [showFullHotel, setShowFullHotel] = useState<boolean>(false);
  const [showAmenities, setShowAmenities] = useState<boolean>(false);
  const [showBrands, setShowBrands] = useState<boolean>(false);
  const [showTags, setShowTags] = useState<boolean>(false);
  const displayedHotels = showFullHotel ? hotelTypes : hotelTypes.slice(0, 5);
  const displayedBrands = showBrands ? brands : brands.slice(0, 5);
  const displayedAmenities = showAmenities ? amenities : amenities.slice(0, 5);
  const displayedTags = showTags ? tags : tags.slice(0, 5);

  return (
    <div
      className={`${className} w-full min-w-[230px] bg-white rounded-lg border border-slate-200`}
    >
      <div className="px-3 py-2 border-b border-slate-200 text-lg font-semibold flex items-center justify-between md:justify-start">
        <X className="w-5 h-5 md:hidden" onClick={() => close?.()} />
        <span>Bộ lọc</span>
        <span className="text-[#FF3366] md:hidden">Xóa tất cả</span>
      </div>
      <div className="p-3 border-b border-slate-200">
        <span className="font-semibold">Giá mỗi đêm</span>
        <Slider.Root
          className="relative flex items-center w-full h-5 mt-4"
          value={range}
          onValueChange={(val) => setRange(val as [number, number])}
          min={minPrice}
          max={maxPrice}
          step={100_000}
        >
          <Slider.Track className="bg-slate-200 relative grow rounded-full h-2">
            <Slider.Range className="absolute bg-[#FF3366] rounded-full h-[6px]" />
          </Slider.Track>
          <Slider.Thumb className="block w-8 h-8 bg-white border border-slate-200 rounded-full shadow-md outline-none focus:outline-none" />
          <Slider.Thumb className="block w-8 h-8 bg-white border border-slate-200 rounded-full shadow-md outline-none focus:outline-none" />
        </Slider.Root>
        <div className="flex gap-2 items-center mt-5">
          <div className="flex-1 flex flex-col items-center p-2 rounded-lg bg-slate-200">
            <span className="font-semibold text-slate-600">Thấp nhất</span>
            <span className="font-semibold">
              {range[0].toLocaleString("vi-VN")} ₫
            </span>
          </div>
          <span>-</span>
          <div className="flex-1 flex flex-col items-center p-2 rounded-lg bg-slate-200">
            <span className="font-semibold text-slate-600">Cao nhất</span>
            <span className="font-semibold">
              {range[1] === maxPrice
                ? "Không giới hạn"
                : range[1].toLocaleString("vi-VN")}{" "}
              ₫
            </span>
          </div>
        </div>
      </div>
      <div className="p-3 border-b border-slate-200">
        <div className="flex justify-between">
          <span className="font-semibold">Bộ lọc phổ biến</span>
          <span className="text-[#FF3366] cursor-pointer">Xóa</span>
        </div>
        <div className="flex flex-col gap-3 mt-5">
          <div className="flex justify-between">
            <span>Bao gồm bữa sáng</span>
            <input type="checkbox" className="w-5 h-5 accent-[#FF3366]" />
          </div>
          <div className="flex justify-between">
            <span>Miễn phí hủy phòng</span>
            <input type="checkbox" className="w-5 h-5 accent-[#FF3366]" />
          </div>
          <div className="flex justify-between">
            <p>
              Đánh giá tuyệt vời{" "}
              <span className="text-sm text-slate-400">(9 điểm trở lên)</span>
            </p>
            <input type="checkbox" className="w-5 h-5 accent-[#FF3366]" />
          </div>
          <div className="flex justify-between">
            <span>Vị trí trung tâm</span>
            <input type="checkbox" className="w-5 h-5 accent-[#FF3366]" />
          </div>
          <div className="flex justify-between">
            <span>Miễn phí phụ thu trẻ em</span>
            <input type="checkbox" className="w-5 h-5 accent-[#FF3366]" />
          </div>
        </div>
      </div>
      <div className="p-3 border-b border-slate-200">
        <div className="flex justify-between">
          <span className="font-semibold">Hạng khách sạn</span>
          <span className="text-[#FF3366] cursor-pointer">Xóa</span>
        </div>
        <div className="flex gap-3 mt-5">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              onClick={() => setStar(index + 2)}
              className={`flex-1 py-1 border  rounded-md flex gap-1 justify-center items-center text-lg  ${
                star === index + 2
                  ? "border-[#FF3366] text-[#FF3366]"
                  : "border-slate-300 text-slate-800"
              }`}
            >
              {index === 0 && <span>≤</span>}
              <span>{index + 2}</span>
              <Star className="w-5 h-5" />
            </div>
          ))}
        </div>
      </div>
      <div className="p-3 border-b border-slate-200">
        <div className="flex justify-between items-center">
          <span className="font-semibold">Loại khách sạn</span>
          <div className="flex gap-3 items-center">
            <span className="text-[#FF3366] cursor-pointer">Xóa</span>
            <div onClick={() => setShowFullHotel((prev) => !prev)}>
              {showFullHotel ? (
                <ChevronDown className="w-5 h-5" />
              ) : (
                <ChevronUp className="w-5 h-5" />
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 mt-5">
          {displayedHotels.map((item, index) => (
            <div key={index} className="flex justify-between">
              <span>{item.name}</span>
              <input type="checkbox" className="w-5 h-5 accent-[#FF3366]" />
            </div>
          ))}
        </div>

        <div
          className="flex gap-1 text-blue-600 items-center mt-3 cursor-pointer"
          onClick={() => setShowFullHotel((prev) => !prev)}
        >
          <span>{showFullHotel ? "Rút gọn" : "Xem thêm"}</span>
          {showFullHotel ? (
            <ChevronUp className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5" />
          )}
        </div>
      </div>
      <div className="p-3 border-b border-slate-200">
        <div className="flex justify-between">
          <span className="font-semibold">Đánh giá của khách</span>
          <span className="text-[#FF3366] cursor-pointer">Xóa</span>
        </div>
        <div className="flex flex-col gap-3 mt-5">
          <div className="flex justify-between">
            <span>Tuyệt vời (9.0+)</span>
            <input type="checkbox" className="w-5 h-5 accent-[#FF3366]" />
          </div>
          <div className="flex justify-between">
            <span>Rất tốt (8.0+)</span>
            <input type="checkbox" className="w-5 h-5 accent-[#FF3366]" />
          </div>
          <div className="flex justify-between">
            <span>Tốt (7.0+)</span>
            <input type="checkbox" className="w-5 h-5 accent-[#FF3366]" />
          </div>
        </div>
      </div>
      <div className="p-3 border-b border-slate-200">
        <div className="flex justify-between items-center">
          <span className="font-semibold">Tiện nghi</span>
          <div className="flex gap-3 items-center">
            <span className="text-[#FF3366] cursor-pointer">Xóa</span>
            <div onClick={() => setShowAmenities((prev) => !prev)}>
              {showAmenities ? (
                <ChevronDown className="w-5 h-5" />
              ) : (
                <ChevronUp className="w-5 h-5" />
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 mt-5">
          {displayedAmenities.map((item, index) => (
            <div key={index} className="flex justify-between">
              <span>{item.name}</span>
              <input type="checkbox" className="w-5 h-5 accent-[#FF3366]" />
            </div>
          ))}
        </div>

        <div
          className="flex gap-1 text-blue-600 items-center mt-3 cursor-pointer"
          onClick={() => setShowAmenities((prev) => !prev)}
        >
          <span>{showAmenities ? "Rút gọn" : "Xem thêm"}</span>
          {showAmenities ? (
            <ChevronUp className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5" />
          )}
        </div>
      </div>
      <div className="p-3 border-b border-slate-200">
        <div className="flex justify-between">
          <span className="font-semibold">Dịch vụ đi kèm</span>
          <span className="text-[#FF3366] cursor-pointer">Xóa</span>
        </div>
        <div className="flex flex-col gap-3 mt-5">
          <div className="flex justify-between">
            <span>Ăn sáng miễn phí</span>
            <input type="checkbox" className="w-5 h-5 accent-[#FF3366]" />
          </div>
          <div className="flex justify-between">
            <span>Hủy linh hoạt</span>
            <input type="checkbox" className="w-5 h-5 accent-[#FF3366]" />
          </div>
          <div className="flex justify-between">
            <span>Khuyến mãi - Giảm giá</span>
            <input type="checkbox" className="w-5 h-5 accent-[#FF3366]" />
          </div>
        </div>
      </div>
      <div className="p-3 border-b border-slate-200">
        <div className="flex justify-between items-center">
          <span className="font-semibold">Thương hiệu</span>
          <div className="flex gap-3 items-center">
            <span className="text-[#FF3366] cursor-pointer">Xóa</span>
            <div onClick={() => setShowBrands((prev) => !prev)}>
              {showBrands ? (
                <ChevronDown className="w-5 h-5" />
              ) : (
                <ChevronUp className="w-5 h-5" />
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 mt-5">
          {displayedBrands.map((item, index) => (
            <div key={index} className="flex justify-between">
              <span>{item.name}</span>
              <input type="checkbox" className="w-5 h-5 accent-[#FF3366]" />
            </div>
          ))}
        </div>

        <div
          className="flex gap-1 text-blue-600 items-center mt-3 cursor-pointer"
          onClick={() => setShowBrands((prev) => !prev)}
        >
          <span>{showBrands ? "Rút gọn" : "Xem thêm"}</span>
          {showBrands ? (
            <ChevronUp className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5" />
          )}
        </div>
      </div>
      <div className="p-3 border-b border-slate-200">
        <div className="flex justify-between items-center">
          <span className="font-semibold">Địa điểm</span>
          <div className="flex gap-3 items-center">
            <span className="text-[#FF3366] cursor-pointer">Xóa</span>
            <div onClick={() => setShowBrands((prev) => !prev)}>
              {showBrands ? (
                <ChevronDown className="w-5 h-5" />
              ) : (
                <ChevronUp className="w-5 h-5" />
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 mt-5"></div>

        <div
          className="flex gap-1 text-blue-600 items-center mt-3 cursor-pointer"
          onClick={() => setShowBrands((prev) => !prev)}
        >
          <span>{showBrands ? "Rút gọn" : "Xem thêm"}</span>
          {showBrands ? (
            <ChevronUp className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5" />
          )}
        </div>
      </div>
      <div className="p-3 mb-10 md:mb-0">
        <div className="flex justify-between items-center">
          <span className="font-semibold">Tag</span>
          <div className="flex gap-3 items-center">
            <span className="text-[#FF3366] cursor-pointer">Xóa</span>
            <div onClick={() => setShowTags((prev) => !prev)}>
              {showTags ? (
                <ChevronDown className="w-5 h-5" />
              ) : (
                <ChevronUp className="w-5 h-5" />
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-5">
          {displayedTags.map((item, index) => (
            <div key={index} className="flex justify-between">
              <span>{item.name}</span>
              <input type="checkbox" className="w-5 h-5 accent-[#FF3366]" />
            </div>
          ))}
        </div>
        <div
          className="flex gap-1 text-blue-600 items-center mt-3 cursor-pointer"
          onClick={() => setShowTags((prev) => !prev)}
        >
          <span>{showTags ? "Rút gọn" : "Xem thêm"}</span>
          {showTags ? (
            <ChevronUp className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Filter;
