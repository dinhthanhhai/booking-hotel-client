import React from "react";
import { X } from "lucide-react";
import { ListSidebarLink } from "@/data/data";
import { useEffect } from "react";

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
    <div className="fixed inset-0 z-40 bg-black/50" onClick={closeSidebar}>
      <div
        className="absolute top-0 right-0 h-full w-[320px] bg-white shadow-lg p-4 overflow-y-auto"
        onClick={(e) => e.stopPropagation()} // chặn click bên trong sidebar không đóng
      >
        <button className="mb-8" onClick={closeSidebar}>
          <X size={28} />
        </button>
        <nav className="flex flex-col space-y-3 overscroll-contain">
          {ListSidebarLink.map((item, index) => (
            <div key={index} className="flex flex-col gap-2">
              <div className="flex gap-5 items-center">
                <img src={item.icon} alt="icon" className="w-5 h-5" />
                <a href={`/${item.url}`} className="text-base">
                  {item.name}
                </a>
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
