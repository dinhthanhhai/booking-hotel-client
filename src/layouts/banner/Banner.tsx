import React from "react";

const Banner: React.FC = () => {
  return (
    <div className="fixed z-50 top-0 w-full h-9 text-white bg-[#FF3366] flex justify-center items-center">
      <a href="https://mytour.vn/khach-san" className="truncate px-3">
        Trang web này nhằm mục đích học tập. Trang thật ở đây!
      </a>
    </div>
  );
};

export default Banner;
