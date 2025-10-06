import React from "react";
import { MoveRight, Plane } from "lucide-react";

const Flight: React.FC = () => {
  return (
    <div className="flex flex-col w-full bg-white border border-slate-200 rounded-md p-5">
      <div className="flex items-center gap-2">
        <img src="/images/image.webp" alt="logo" className="w-6 h-6" />
        <span className="font-semibold">Vietrvel Airline</span>
      </div>
      <div className="flex gap-2 mt-3 text-base">
        <span className="font-semibold">Tân Sơn Nhất</span>
        <MoveRight className="w-6 h-6" />
        <span className="font-semibold">Nội Bài</span>
      </div>
      <div className="flex items-center gap-2 text-slate-600 font-semibold mt-2">
        <Plane className="w-5 h-5" />
        <span>Khởi hành: 04/10/2025</span>
      </div>
      <p className="mt-4 text-right line-through text-slate-500">327.000 ₫</p>
      <p className="text-right font-bold text-xl">251.000 ₫</p>
      <p className="text-right text-slate-500">Giá sau thuế: 894.000 ₫</p>
    </div>
  );
};

export default Flight;
