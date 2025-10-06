import React, { useState } from "react";
import { MoveRight, Plane } from "lucide-react";

const Flight: React.FC = () => {
  return (
    <div className="flex w-full bg-[#FFF5F7] border border-slate-200 rounded-md p-5">
      <div className="flex items-center gap-2">
        <img src="/images/vnairline.webp" alt="logo" className="w-6 h-6" />
        <span className="font-semibold">Vietrvel Airline</span>
      </div>
      <div className="flex gap-2">
        <span className="font-semibold">Tân Sơn Nhất</span>
        <MoveRight />
        <span className="font-semibold">Nội Bài</span>
      </div>
      <div className="flex gap-2">
        <Plane />
        <span>Khởi hành: 04/10/2025</span>
      </div>
      <p className="mt-4 text-right line-through text-slate-500">2.337.999 ₫</p>
      <p className="text-right font-bold text-xl tracking-widest text-[#FF3366]">
        2.337.999 ₫
      </p>
      <p className="text-right font-bold text-xl tracking-widest text-[#FF3366]">
        2.337.999 ₫
      </p>
    </div>
  );
};

export default Flight;
