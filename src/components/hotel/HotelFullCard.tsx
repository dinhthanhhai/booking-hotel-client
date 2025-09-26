import React from "react";
import { Milestone } from "lucide-react";

type Props = {
  className?: string;
};

const HotelFullCard: React.FC<Props> = ({ className }) => {
  return (
    <div className={`${className} flex flex-col w-full shadow-sm`}>
      <div className="h-[155px] w-full overflow-hidden  rounded-t-lg relative">
        <img
          src="/images/hotel.webp"
          alt="hotel img"
          className="w-full h-full object-cover"
        />
        <span className="bg-[#FFBC39] text-[12px] text-white px-1 font-semibold rounded-md absolute left-2 bottom-1">
          Giá độc quyền
        </span>
        <div className="w-12 h-10 bg-[#FF3366] rounded-br-full absolute top-0 left-0"></div>
        <span className="absolute text-white font-semibold top-1 left-[2px]">
          - 16%
        </span>
        <img
          src="/icons/icon_tag_travellers_2023.svg"
          alt="icon"
          className="w-10 h-12 absolute bottom-1 right-1"
        />
        <img
          src="/icons/heart-regular-full.svg"
          alt="icon"
          className="w-7 h-7 absolute top-1 right-1"
        />
      </div>
      <div className="bg-white px-3 pt-2 pb-4 rounded-b-lg border-[1px] border-slate-200">
        <span className="font-semibold">Centara Mirage Resort Mũi Né</span>
        <span className="flex mt-1">
          {[...Array(5)].map((_, i) => (
            <img key={i} src="/icons/star-solid-full.svg" alt="icon" />
          ))}
          <span className="border border-[#FF3366] rounded-md text-[#FF3366] text-[12px] px-1 ml-2">
            Khu nghỉ dưỡng
          </span>
        </span>
        <div className="flex items-center gap-1 mt-1">
          <Milestone className="w-4 h-4 text-slate-500" />
          <span>Thành phố Phan Thiết</span>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <div className="flex items-center px-1 bg-[#FFE1E8] rounded-md">
            <img
              src="/icons/umbrella-solid-full.svg"
              alt="icon"
              className="w-4 h-4"
            />
            <span className="text-sm font-medium text-pink-600">9.0</span>
          </div>
          <span>Tuyệt vời</span>
          <span className="text-slate-700">(28 đánh giá)</span>
        </div>
        <div className="rounded-md bg-[#E5F8FE] text-[#00B6F3] px-1 mt-2 w-fit font-semibold">
          Vừa được đặt 3 giờ trước
        </div>
        <p className="mt-4 text-right line-through text-slate-500">896.642 ₫</p>
        <p className="text-right font-semibold text-xl leading-4">846.642 ₫</p>
        <div className="mt-3 px-2 flex gap-1 justify-between items-center border-[1px] border-dashed border-slate-300 rounded-md">
          <div className="flex gap-1 items-center text-[12px]">
            <span className="font-semibold">Mã:</span>
            <span className="font-semibold text-[#00B6F3]">DIUDANG25</span>
            <span className="bg-[#00B6F3] text-white px-1 rounded-md">-8%</span>
          </div>
          <p className="text-[#FF3366] text-lg font-semibold overflow-hidden text-ellipsis whitespace-nowrap max-w-full">
            846.642 <span className="text-sm">₫</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HotelFullCard;
