import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Discover: React.FC = () => {
  return (
    <div className="custom-page-padding pt-10 pb-12 bg-[#FFF5F7]">
      <div className="text-2xl font-semibold">Sang trọng & Đẳng cấp</div>
      <div className="text-slate-500">
        Nâng tầm du lịch với các top thương hiệu khách sạn, biệt thự hàng đầu
      </div>
      <div className="mt-4 flex flex-col xs:px-10 sm:px-0 items-center sm:grid sm:grid-cols-2 md:flex md:flex-row gap-5">
        {/* Top thương hiệu */}
        <Link
          to={"/top-thuong-hieu"}
          className="flex flex-col w-full omd:max-w-[280px] shadow-sm rounded-b-lg"
        >
          <div className="h-[160px] overflow-hidden rounded-t-lg relative">
            <img
              src="/images/top_brand_img.webp"
              alt="hotel img"
              className="w-full h-full object-cover"
            />
            <span className="bg-[#FF3366] text-sm text-white px-1 font-semibold rounded-md absolute right-2 top-2">
              Mall
            </span>
          </div>
          <div className=" px-3 pt-2 pb-4 rounded-b-lg bg-white flex flex-col">
            <span className="font-semibold text-lg">Top thương hiệu</span>
            <span className="text-slate-500 h-14">
              Vinpearl, FLC, Mường Thanh...
            </span>
            <div className="flex gap-1 items-center ml-auto rounded-md px-1 hover:bg-pink-50">
              <span className="text-[#FF3366]">Khám phá</span>
              <ChevronRight className="w-4 h-4 text-[#FF3366]" />
            </div>
          </div>
        </Link>
        {/* Homestay, biệt thự */}
        <Link
          to={"/homestay"}
          className="flex flex-col w-full omd:max-w-[280px] shadow-sm rounded-b-lg"
        >
          <div className="h-[160px] overflow-hidden rounded-t-lg relative">
            <img
              src="/images/homestay_img.webp"
              alt="hotel img"
              className="w-full h-full object-cover"
            />
            <span className="bg-[#FF3366] text-sm text-white px-1 font-semibold rounded-md absolute right-2 top-2">
              Plus
            </span>
          </div>
          <div className="bg-white px-3 pt-2 pb-4 rounded-b-lg flex flex-col">
            <span className="font-semibold text-lg">Homestay, biệt thự</span>
            <span className="text-slate-500 h-14">
              Sang trọng, hiện đại, có bể bơi, sân vườn...
            </span>
            <div className="flex gap-1 items-center ml-auto rounded-md px-1 hover:bg-pink-50">
              <span className="text-[#FF3366]">Khám phá</span>
              <ChevronRight className="w-4 h-4 text-[#FF3366]" />
            </div>
          </div>
        </Link>
        {/* Mytour lựa chọn */}
        <Link
          to={"/mytour-choices"}
          className="flex flex-col w-full omd:max-w-[280px] shadow-sm rounded-b-lg"
        >
          <div className="h-[160px] overflow-hidden rounded-t-lg relative">
            <img
              src="/images/mytour_choice_img.webp"
              alt="hotel img"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-white px-3 pt-2 pb-4 rounded-b-lg flex flex-col">
            <span className="font-semibold text-lg">Mytour lựa chọn</span>
            <span className="text-slate-500 h-14">
              Giảm 20% giá phòng khách sạn
            </span>
            <div className="flex gap-1 items-center ml-auto rounded-md px-1 hover:bg-pink-50">
              <span className="text-[#FF3366]">Khám phá</span>
              <ChevronRight className="w-4 h-4 text-[#FF3366]" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Discover;
