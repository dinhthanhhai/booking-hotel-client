import React from "react";

type Props = {
  className?: string;
};

const PartnerHotelCard: React.FC<Props> = ({ className }) => {
  return (
    <div className={`${className} flex flex-col w-full relative`}>
      <div className="h-[228px] w-full overflow-hidden rounded-t-lg relative">
        <img
          src="/images/top_brand_img.webp"
          alt="hotel img"
          className="w-full h-full object-cover"
        />
        <span className="bg-[#FFBC39] text-[12px] text-white px-1 font-semibold rounded-md absolute left-4 bottom-12">
          Giá độc quyền
        </span>
        <div className="w-12 h-10 bg-[#FF3366] rounded-br-full absolute top-0 left-0"></div>
        <span className="absolute text-white font-semibold top-1 left-[2px]">
          - 16%
        </span>
        <img
          src="/icons/icon_tag_travellers_2023.svg"
          alt="icon"
          className="w-10 h-12 absolute bottom-12 right-4"
        />
        <div className="w-16 h-16 rounded-lg bg-white absolute top-4 right-4 flex justify-center items-center">
          <img src="/images/logo_vinperal.webp" alt="hotel" className="" />
        </div>
      </div>
      <div className="h-[160px] w-full bg-[#2A398C] rounded-b-lg"></div>
      <div className="absolute left-1/2 -translate-x-1/2 bottom-3 p-3 h-[180px] w-[90%] bg-white rounded-lg">
        <span className="font-semibold">Vinpearl Resort & Spa Phú Quốc</span>
        <span className="flex mt-1">
          {[...Array(5)].map((_, i) => (
            <img key={i} src="/icons/star-solid-full.svg" alt="icon" />
          ))}
          <span className="border border-[#FF3366] rounded-md text-[#FF3366] text-[12px] px-1 ml-2 line-clamp-1">
            Khu nghỉ dưỡng
          </span>
        </span>
        <div className="flex items-center gap-2 mt-1 whitespace-nowrap overflow-hidden text-ellipsis">
          <div className="flex items-center px-1 bg-[#FFE1E8] rounded-md flex-shrink-0">
            <img
              src="/icons/umbrella-solid-full.svg"
              alt="icon"
              className="w-4 h-4"
            />
            <span className="text-sm font-medium text-pink-600">9.0</span>
          </div>
          <span className="truncate">Tuyệt vời</span>
          <span className="text-slate-700">(28 đánh giá)</span>
        </div>
        <p className="mt-4 text-right line-through text-slate-500">896.642 ₫</p>
        <p className="text-right font-semibold text-xl leading-4">846.642 ₫</p>
      </div>
    </div>
  );
};

export default PartnerHotelCard;
