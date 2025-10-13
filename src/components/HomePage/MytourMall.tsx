import React from "react";
import ImageCarousel from "@/components/HomePage/ImageCarousel";
const MytourMall: React.FC = () => {
  return (
    <div className="hidden omd:block custom-page-padding pt-8 pb-10 bg-[#FBF3F7]">
      <div>
        <img
          src="/images/icon_mytour_mall_red.svg"
          alt="logo"
          className="w-[180px] h-auto"
        />
        <p className="text-slate-500">
          Các thương hiệu khách sạn đối tác hàng đầu
        </p>
        <div>
          <ImageCarousel />
        </div>
      </div>
    </div>
  );
};

export default MytourMall;
