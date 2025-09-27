import React from "react";
import HotelFullCard from "@/components/hotel/HotelFullCard";
import { Link } from "react-router-dom";

const ShockPriceHotels: React.FC = () => {
  return (
    <div className="px-[10%] xl:px-[12%] pt-10 pb-10 bg-[#EDF6F9]">
      <div>
        <p className="text-2xl font-semibold">
          Khách sạn giá sốc chỉ có trên Mytour
        </p>
        <p className="text-slate-600 mt-1">
          Tiết kiệm chi phí với các khách sạn hợp tác chiến lược cùng Mytour,
          cam kết giá tốt nhất và chất lượng dịch vụ tốt nhất dành cho bạn.
        </p>
        <div className="flex flex-wrap gap-3 mt-3">
          {[...Array(5)].map((_, i) => (
            <Link
              to={"#"}
              key={i}
              className="px-2 py-1 rounded-2xl bg-[#EDF6F9] border-[1px] border-slate-400"
            >
              Hồ Chí Minh
            </Link>
          ))}
        </div>
        <div className="mt-3">
          <p className="inline break-words">
            Tìm khách sạn tại Hồ Chí Minh:
            <Link to="#" className="ml-2 text-blue-500">
              #khách_sạn_5_sao
            </Link>
            <Link to="#" className="ml-2 text-blue-500">
              #khách_sạn_4_sao
            </Link>
            <Link to="#" className="ml-2 text-blue-500">
              #khách_sạn_3_sao
            </Link>
            <Link to="#" className="ml-2 text-blue-500">
              #khách_sạn_3-4_sao
            </Link>
            <Link to="#" className="ml-2 text-blue-500">
              #khách_sạn_4-5_sao
            </Link>
          </p>
        </div>
      </div>
      <div className="mt-5 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="">
              <HotelFullCard />
            </div>
          ))}
        </div>
      </div>
      <Link
        to={"#"}
        className="block px-9 py-2 border border-[#FF3366] text-[#FF3366] rounded-lg mx-auto w-fit mt-5"
      >
        Xem tất cả
      </Link>
    </div>
  );
};

export default ShockPriceHotels;
