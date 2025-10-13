import { useState, forwardRef } from "react";
import { Menu, ChevronDown, CircleUserRound } from "lucide-react";
import flag from "@/assets/icons/icon_lang_vi.png";
import Sidebar from "@/layouts/sidebar/Sidebar";
import { Link } from "react-router-dom";

const HeaderMobile = forwardRef<HTMLDivElement>((_, ref) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleCloseSidebar = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <header
        ref={ref}
        className="w-full bg-white fixed z-45 top-9 flex flex-col px-4"
      >
        <div className="h-[56px] flex">
          <div className="w-full flex items-center justify-between">
            <div className="flex flex-col items-center gap-1">
              <Link to="/" className="text-4xl font-bold text-[#FF3366]">
                mytour
              </Link>
            </div>
            <div className="items-center gap-3 flex">
              <button className="flex gap-1 items-center font-semibold px-2 py-1 border border-slate-200 rounded-2xl">
                <img src={flag} alt="flag" className="w-5 h-5" />
                <span className="text-gray-600">VND</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <CircleUserRound className="w-6 h-6 text-slate-600" />
            </div>
          </div>
          <button className="ml-3" onClick={() => setMobileOpen(!mobileOpen)}>
            <Menu className="w-6 h-6 text-slate-600" />
          </button>
        </div>
      </header>
      <div className="grid grid-cols-3 gap-5 mt-18">
        <Link
          to={"/khach-san"}
          className="flex flex-col items-center justify-center relative"
        >
          <img
            src="/icons/logo_module_hotel.png"
            className="w-15 h-15 object-cover"
          />
          <span className="font-semibold">Khách sạn</span>
          <span className="absolute top-0 right-5 rounded-md border border-[#FF3366] bg-white text-[#FF3366] text-12 px-1">
            -400k
          </span>
        </Link>
        <Link
          to={"/ve-may-bay"}
          className="flex flex-col items-center justify-center relative"
        >
          <img
            src="/icons/logo_module_flight.png"
            className="w-15 h-15 object-cover"
          />
          <span className="font-semibold text-center">Vé máy bay</span>
          <span className="absolute top-0 right-5 rounded-md border border-[#FF3366] bg-white text-[#FF3366] text-12 px-1">
            -400k
          </span>
        </Link>
        <Link
          to={"/tour-nuoc-ngoai"}
          className="flex flex-col items-center justify-center relative"
        >
          <img src="/icons/tour-icon.png" className="w-15 h-15 object-cover" />
          <span className="font-semibold text-center">Tour nước ngoài</span>
          <span className="absolute top-0 right-5 rounded-md border border-[#FF3366] bg-white text-[#FF3366] text-12 px-1">
            -400k
          </span>
        </Link>
        <Link
          to={"/homestay"}
          className="flex flex-col items-center justify-center relative"
        >
          <img
            src="/icons/logo_module_homestay.png"
            className="w-15 h-15 object-cover"
          />
          <span className="font-semibold text-center">Biệt thự, Homestay</span>
          <span className="absolute top-0 right-5 rounded-md border border-[#FF3366] bg-white text-[#FF3366] text-12 px-1">
            -400k
          </span>
        </Link>
        <Link
          to={"/budgethotels"}
          className="flex flex-col items-center justify-center relative"
        >
          <img
            src="/icons/hotel_budget.svg"
            className="w-15 h-15 object-cover"
          />
          <span className="font-semibold text-center">Khách sạn tiết kiệm</span>
          <span className="absolute top-0 right-5 rounded-md border border-[#FF3366] bg-white text-[#FF3366] text-12 px-1">
            -400k
          </span>
        </Link>
      </div>
      <div className="m-4 grid grid-cols-2 gap-4">
        <Link
          to="/kiem-tra-tinh-trang-dat-ve"
          className="flex gap-2 items-center p-2 bg-[#FCF3E6] rounded-lg"
        >
          <img
            src="/icons/rectangle-list-solid-full.svg"
            alt="icon"
            className="w-6 h-7 object-cover"
          />
          <span className="font-semibold">Tìm kiếm đơn hàng</span>
        </Link>
        <Link
          to={"/uu-dai"}
          className="flex gap-2 items-center p-2 bg-[#E8F9FE] rounded-lg"
        >
          <img
            src="/icons/ticket-solid-full.svg"
            alt="icon"
            className="w-6 h-7 object-cover"
          />
          <span className="font-semibold">Ưu đãi</span>
        </Link>
      </div>

      <Sidebar isOpen={mobileOpen} closeSidebar={handleCloseSidebar} />
    </>
  );
});

export default HeaderMobile;
