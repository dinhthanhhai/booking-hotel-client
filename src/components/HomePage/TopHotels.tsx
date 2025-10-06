import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cities } from "@/data/data";

const TopHotels: React.FC = () => {
  const [showAll, setShowAll] = useState<boolean>(false);
  const [isSmall, setIsSmall] = useState<boolean>(false);
  const visibleCities = showAll ? cities : cities.slice(0, 24);

  // Kiểm tra màn hình
  useEffect(() => {
    const handleResize = () => {
      setIsSmall(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="px-4 omd:px-[12%] xl:px-[15%] pt-9 pb-10 bg-white">
      <p className="text-2xl font-semibold">Các khách sạn hàng đầu</p>
      <div className="mt-5 grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
        {!isSmall || showAll
          ? cities.map((item, index) => (
              <Link
                key={index}
                className="font-semibold hover:text-blue-600"
                to={`/khach-san/khach-san-gia-tot/khach-san-tai-${item.cit_alias}`}
              >
                {item.name}
              </Link>
            ))
          : visibleCities.map((item, index) => (
              <Link
                key={index}
                className="font-semibold hover:text-blue-600"
                to={`/khach-san/khach-san-gia-tot/khach-san-tai-${item.cit_alias}`}
              >
                {item.name}
              </Link>
            ))}
      </div>
      {!showAll && isSmall && (
        <button
          onClick={() => setShowAll(true)}
          className="font-semibold text-blue-500 hover:text-blue-700 w-full text-right mt-2 cursor-pointer"
        >
          + Xem thêm
        </button>
      )}
      {showAll && isSmall && (
        <button
          onClick={() => setShowAll(false)}
          className="font-semibold text-blue-500 hover:text-blue-700 w-full text-right mt-2 cursor-pointer"
        >
          - Ẩn bớt
        </button>
      )}
    </div>
  );
};

export default TopHotels;
