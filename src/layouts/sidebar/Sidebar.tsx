import React from "react";
import { X } from "lucide-react";
import { ListSidebarLink } from "@/data/data";
import { useEffect } from "react";
import { Link } from "react-router-dom";

type SidebarProps = {
  isOpen: boolean;
  closeSidebar: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen, closeSidebar }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 top-9"
      onClick={closeSidebar}
    >
      <div
        className="absolute top-0 right-0 h-full w-full omd:w-[320px] bg-white shadow-lg p-4 overflow-y-auto"
        onClick={(e) => e.stopPropagation()} // chặn click bên trong sidebar không đóng
      >
        <button className="mb-4 omd:mb-8" onClick={closeSidebar}>
          <X size={28} />
        </button>
        <div className="omd:hidden rounded-lg p-4 flex flex-col items-center gap-5 bg-[#E5F8FE]">
          <p className="font-semibold">Nhận giá thấp hơn khi đăng nhập</p>
          <div className="flex w-full gap-[8%]">
            <button className="flex-1 text-sm font-medium text-[#FF3366] border border-[#FF3366] py-[6px] rounded-lg bg-white hover:bg-pink-50">
              Đăng ký
            </button>
            <button className="flex-1 text-sm font-medium text-white bg-[#FF3366] py-[6px] rounded-lg hover:bg-[#FF3366]">
              Đăng nhập
            </button>
          </div>
        </div>
        <nav className="mt-5 omd:mt-0 flex flex-col space-y-3 overscroll-contain">
          {ListSidebarLink.map((item, index) => (
            <div key={index} className="flex flex-col gap-2">
              <div className="flex gap-5 items-center">
                <img src={item.icon} alt="icon" className="w-5 h-5" />
                <Link to={`/${item.url}`} className="text-base">
                  {item.name}
                </Link>
              </div>
              {ListSidebarLink.length !== index + 1 && (
                <hr className="text-slate-300 w-full" />
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
