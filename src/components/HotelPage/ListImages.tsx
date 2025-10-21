import React, { useState } from "react";
import { X } from "lucide-react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Drawer } from "antd";

const ListImages: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div
        className="grid grid-cols-2 gap-x-2 rounded-lg overflow-hidden mt-5"
        onClick={showDrawer}
      >
        <div className="col-span-1 row-span-2 relative">
          {/* Nếu là video */}
          {/* <video controls className="w-full h-full object-cover">
              <source src="/videos/demo.mp4" type="video/mp4" />
            </video> */}
          {/* Nếu là ảnh */}
          <img
            src="/images/hotel.webp"
            alt="main"
            className="w-full h-full object-cover"
          />
          {/* icon play nếu là video */}
          {/* <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 rounded-full p-2">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M6 4l12 6-12 6V4z" />
              </svg>
            </div> */}
        </div>
        {/* 4 ảnh nhỏ bên phải */}
        <div className="grid grid-cols-2 grid-rows-2 gap-2">
          <img
            src="/images/hotel.webp"
            alt="img1"
            className="w-full h-full object-cover"
          />
          <img
            src="/images/hotel.webp"
            alt="img2"
            className="w-full h-full object-cover"
          />
          <img
            src="/images/hotel.webp"
            alt="img3"
            className="w-full h-full object-cover"
          />
          <div className="relative">
            <img
              src="/images/hotel.webp"
              alt="img4"
              className="w-full h-full object-cover"
            />
            {/* overlay số lượng còn lại */}
            <div className="absolute inset-0 bg-black/20 bg-opacity-40 flex items-center justify-center text-white font-semibold text-xl">
              +40
            </div>
          </div>
        </div>
      </div>
      <Drawer
        title={
          <div className="flex justify-between items-center h-[100px]">
            <div>
              <p className="font-semibold text-[26px]">
                Centara Mirage Resort Mũi Né
              </p>
              <div className="flex mt-[6px]">
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    src="/icons/star-solid-full.svg"
                    alt="icon"
                    className="w-4 h-4"
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col items-end gap-3">
              <button
                onClick={onClose}
                className="rounded-md hover:bg-gray-100 transition"
              >
                <X className="w-6 h-6 text-slate-800" />
              </button>
              <button className="text-white font-semibold rounded-md bg-[#FF3366] px-6 py-2 text-lg">
                Chọn phòng
              </button>
            </div>
          </div>
        }
        width="90vw"
        height="100vh"
        closable={false}
        onClose={onClose}
        open={open}
        className="overflow-hidden"
        styles={{
          body: {
            padding: 0,
            overflow: "hidden",
            height: "100%",
          },
        }}
      >
        <div className="flex h-[calc(100vh-132px)]">
          <div className="w-[70%] flex flex-col bg-[#F7FAFC]">
            <div className="flex gap-5 sticky top-0 p-5 z-10">
              <div className="w-[140px]">
                <img
                  src="/images/hotel.webp"
                  className="h-[90px] rounded-md border-2 border-[#FF3366] object-cover"
                />
                <p className="text-[#FF3366] text-center w-full text-base font-semibold">
                  Tất cả ảnh
                </p>
              </div>
              <div className="w-[140px]">
                <img
                  src="/images/hotel.webp"
                  className="h-[90px] rounded-md object-cover"
                />
                <p className="text-center w-full text-base font-semibold">
                  Ảnh ngoại cảnh
                </p>
              </div>
              <div className="w-[140px]">
                <img
                  src="/images/hotel.webp"
                  className="h-[90px] rounded-md object-cover"
                />
                <p className="text-center w-full text-base font-semibold">
                  Ảnh khác
                </p>
              </div>
              <div className="w-[140px]">
                <img
                  src="/images/hotel.webp"
                  className="h-[90px] rounded-md object-cover"
                />
                <p className="text-center w-full text-base font-semibold">
                  Ảnh người dùng đánh giá
                </p>
              </div>
            </div>
            <div className="grid grid-cols-4 p-5 gap-3 overflow-y-auto flex-1 scroll-custom">
              {Array.from({ length: 20 }).map((_, index) => (
                <img
                  key={index}
                  src="/images/hotel.webp"
                  alt="hotel_img"
                  className="h-50 object-cover"
                />
              ))}
            </div>
          </div>
          <div className="w-[30%] h-full border-l border-slate-200 flex flex-col">
            <div className="p-5 flex items-center gap-2 border-b border-slate-200 shrink-0">
              <span className="p-3 bg-[#FF3366] rounded-md text-white text-2xl font-bold tracking-wider">
                9.0
              </span>
              <div className="flex flex-col">
                <span className="text-xl font-semibold">Tuyệt vời</span>
                <span className="text-slate-400 text-base">(28 đánh giá)</span>
              </div>
            </div>
            <div className="p-5 overflow-y-auto flex-1 scroll-custom">
              <p className="text-xl font-semibold">Điều khách thích nhất:</p>
              <div className="py-5 flex flex-col gap-3 overflow-y-auto flex-1 scroll-custom">
                {[...Array(12)].map((_, index) => (
                  <div key={index} className="flex gap-2">
                    <Avatar
                      size={40}
                      icon={<UserOutlined />}
                      className="shrink-0"
                    />
                    <p className="p-2 rounded-md bg-[#F2F6F8] flex flex-col">
                      <span className="font-semibold text-slate-950">
                        Anonymous
                      </span>
                      <span className="text-base font-medium text-slate-600">
                        Sạch sẽ, rộng rãi, các bộ phận hỗ trợ nhiệt tình. Sẽ trở
                        lại khi có dịp.
                      </span>
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-3 text-lg">
                <p className="text-xl font-semibold">Đánh giá chi tiết</p>
                <div className="flex items-center gap-3 text-slate-700">
                  <span className="w-20">Vị trí</span>
                  <div className="relative flex-1 h-1.5 bg-slate-300 rounded-full overflow-hidden">
                    <div
                      className="absolute top-0 left-0 h-full bg-slate-500"
                      style={{ width: `${(9.2 / 10) * 100}%` }}
                    ></div>
                  </div>
                  <span className="w-10 text-right font-semibold text-slate-700">
                    9.2
                  </span>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <span className="w-20">Giá cả</span>
                  <div className="relative flex-1 h-1.5 bg-slate-300 rounded-full overflow-hidden">
                    <div
                      className="absolute top-0 left-0 h-full bg-slate-500"
                      style={{ width: `${(9.2 / 10) * 100}%` }}
                    ></div>
                  </div>
                  <span className="w-10 text-right font-semibold text-slate-700">
                    9.2
                  </span>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <span className="w-20">Phục vụ</span>
                  <div className="relative flex-1 h-1.5 bg-slate-300 rounded-full overflow-hidden">
                    <div
                      className="absolute top-0 left-0 h-full bg-slate-500"
                      style={{ width: `${(9.2 / 10) * 100}%` }}
                    ></div>
                  </div>
                  <span className="w-10 text-right font-semibold text-slate-700">
                    9.2
                  </span>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <span className="w-20">Vệ sinh</span>
                  <div className="relative flex-1 h-1.5 bg-slate-300 rounded-full overflow-hidden">
                    <div
                      className="absolute top-0 left-0 h-full bg-slate-500"
                      style={{ width: `${(9.2 / 10) * 100}%` }}
                    ></div>
                  </div>
                  <span className="w-10 text-right font-semibold text-slate-700">
                    9.2
                  </span>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <span className="w-20">Tiện nghi</span>
                  <div className="relative flex-1 h-1.5 bg-slate-300 rounded-full overflow-hidden">
                    <div
                      className="absolute top-0 left-0 h-full bg-slate-500"
                      style={{ width: `${(9.2 / 10) * 100}%` }}
                    ></div>
                  </div>
                  <span className="w-10 text-right font-semibold text-slate-700">
                    9.2
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default ListImages;
