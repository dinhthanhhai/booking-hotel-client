import React from "react";
import { Link } from "react-router-dom";

const RecentlyViewed: React.FC = () => {
  return (
    <div className="px-4 omd:px-[12%] xl:px-[15%] pb-10 bg-white">
      <p className="text-2xl font-semibold">Xem gần đây</p>
      <div className="mt-5 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5">
        {[...Array(6)].map((_, i) => (
          <Link
            key={i}
            to={"#"}
            className="w-full rounded-t-md overflow-hidden"
          >
            <img
              src="/images/hotel.webp"
              alt="hotel"
              className="h-[135px] w-full object-cover"
            />
            <div className="p-2 flex flex-col rounded-b-md border-[1px] border-slate-300">
              <span className="font-semibold">
                Centara Mirage Resort Mũi Né
              </span>
              <span className="flex mt-1">
                {[...Array(5)].map((_, i) => (
                  <img key={i} src="/icons/star-solid-full.svg" alt="icon" />
                ))}
              </span>
              <div className="flex items-center gap-1 mt-1">
                <span>Thành phố Phan Thiết</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecentlyViewed;
