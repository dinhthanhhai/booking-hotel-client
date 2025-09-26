import React, { useEffect, useRef, useState } from "react";
import {
  Menu,
  Gift,
  BriefcaseBusiness,
  NotepadText,
  ChevronDown,
  Bell,
} from "lucide-react";
import { ListLinkHeader } from "@/data/data";
import flag from "@/assets/icons/icon_lang_vi.png";
import Sidebar from "@/layouts/sidebar/Sidebar";
import type { HeaderLink } from "@/types/types";
import { NavLink, Link } from "react-router-dom";

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] =
    useState<HeaderLink[]>(ListLinkHeader);
  const [overflowItems, setOverflowItems] = useState<HeaderLink[]>([]);
  const [open, setOpen] = useState(false);

  const handleCloseSidebar = () => {
    setMobileOpen(false);
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver(() => {
      const containerWidth = containerRef.current?.offsetWidth || 0;

      let usedWidth = 0;
      const newVisible: HeaderLink[] = [];
      const newOverflow: HeaderLink[] = [];

      // dùng getBoundingClientRect thay vì offsetWidth
      ListLinkHeader.forEach((item) => {
        const tempName = document.createElement("span");
        tempName.className = "whitespace-nowrap text-base font-medium px-2";
        tempName.style.visibility = "hidden";
        tempName.style.position = "absolute";
        tempName.innerText = item.name;
        document.body.appendChild(tempName);

        let noteWidth = 0;
        if (item.note) {
          const tempNote = document.createElement("span");
          tempNote.className =
            "whitespace-nowrap rounded-sm bg-pink-600 text-white px-1 text-xs ml-1";
          tempNote.style.visibility = "hidden";
          tempNote.style.position = "absolute";
          tempNote.innerText = item.note;
          document.body.appendChild(tempNote);
          noteWidth = tempNote.getBoundingClientRect().width;
          document.body.removeChild(tempNote);
        }

        const w = tempName.getBoundingClientRect().width + noteWidth + 20;

        document.body.removeChild(tempName);

        if (usedWidth + w < containerWidth - 50) {
          newVisible.push(item);
          usedWidth += w;
        } else {
          newOverflow.push(item);
        }
      });
      setVisibleItems(newVisible);
      setOverflowItems(newOverflow);
      if (newOverflow.length === 0) {
        setOpen(false);
      }
    });

    resizeObserver.observe(containerRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      setOpen(false);
    }
  }, [mobileOpen]);

  return (
    <header className="w-full bg-white h-[100px] fixed z-50 top-9 flex flex-col px-[60px]">
      <div className="mt-1 h-[56px] flex">
        <div className="w-full flex items-center justify-between">
          {/* Logo */}
          <div className="flex flex-col items-center gap-1">
            <Link to="/" className="text-4xl font-bold text-pink-600">
              mytour
            </Link>
            <span className="hidden text-xs text-pink-600 sm:block">
              Yên tâm du lịch quốc tế
            </span>
          </div>
          {/* Utility + Auth */}
          <div className="hidden items-center gap-5 md:flex">
            <div className="hidden xl:flex gap-1 items-center">
              <Gift className="text-pink-600 w-6 h-6" />
              <NavLink to="/uu-dai" className="font-400">
                Mã giảm giá và ưu đãi
              </NavLink>
            </div>
            <div className="hidden xl:flex gap-1 items-center">
              <BriefcaseBusiness className="text-pink-600 w-6 h-6" />
              <NavLink
                to="#"
                className="rounded bg-pink-50 px-2 py-1 flex flex-col"
              >
                <span className="text-sm font-semibold">
                  Mytour for Business
                </span>
                <span className="text-xs text-pink-600">Hoàn tiền tới 5%</span>
              </NavLink>
            </div>
            <div className="hidden lg:flex gap-1 items-center">
              <NotepadText className="text-gray-600 w-6 h-6" />
              <NavLink
                to="/kiem-tra-tinh-trang-dat-ve"
                className="text-gray-600"
              >
                Tìm kiếm đơn hàng
              </NavLink>
            </div>
            <button className="flex gap-1 items-center font-semibold">
              <img src={flag} alt="flag" className="w-5 h-5" />
              <span className="text-gray-600">VND</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <div>
              <Bell className="w-5 h-5" />
            </div>
            <button className="text-sm font-medium text-white bg-pink-600 w-[100px] py-1 rounded-lg hover:bg-pink-700 h-10">
              Đăng nhập
            </button>
            <button className="text-sm font-medium text-pink-600 border border-pink-600 w-[100px] py-1 rounded-lg hover:bg-pink-50 h-10">
              Đăng ký
            </button>
          </div>
        </div>
        {/* Sidebar button */}
        <button className="ml-5" onClick={() => setMobileOpen(!mobileOpen)}>
          <Menu size={28} />
        </button>
      </div>
      {/* Links */}
      <div className="hidden sm:block sm:flex-1">
        <div ref={containerRef} className="flex gap-4 relative h-full">
          {visibleItems.map((item, index) => (
            <NavLink
              key={index}
              to={`/${item.url}`}
              className={({ isActive }) =>
                "font-medium hover:text-pink-600 h-full pt-2 " +
                (isActive ? "text-pink-600 border-b-3 border-pink-600" : "")
              }
            >
              <span className="whitespace-nowrap">{item.name}</span>
              {item?.note && (
                <span className="rounded-sm bg-pink-600 text-white px-1 text-xs h-fit ml-1">
                  {item?.note}
                </span>
              )}
            </NavLink>
          ))}

          {overflowItems.length > 0 && (
            <div className="relative">
              <button
                className="px-2 py-1 font-bold"
                onClick={() => setOpen(!open)}
              >
                ...
              </button>
              {open && (
                <div className="absolute w-[240px] right-0 top-10 bg-white shadow-sm rounded p-2 z-50">
                  {overflowItems.map((item) => (
                    <NavLink
                      key={item.url}
                      to={`/${item.url}`}
                      className={({ isActive }) =>
                        "block p-2 font-medium hover:text-pink-600 whitespace-nowrap" +
                        (isActive
                          ? "text-pink-600 border-b-2 border-pink-600"
                          : "")
                      }
                    >
                      <span className="">{item.name}</span>
                      {item?.note && (
                        <span className="rounded-sm bg-pink-600 text-white px-1 h-fit text-xs ml-1">
                          {item?.note}
                        </span>
                      )}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {mobileOpen && (
        <Sidebar isOpen={mobileOpen} closeSidebar={handleCloseSidebar} />
      )}
    </header>
  );
};

export default Header;
