import SearchBar from "@/components/search/SearchBar";
import CouponList from "@/components/HotelHomePage/CouponList";
import FlashSale from "@/components/HomePage/FlashSale";
// import HotelByLocation from "@/components/HomePage/HotelByLocation";
// import Discover from "@/components/HomePage/Discover";
// import MytourChoices from "@/components/HomePage/MytourChoices";
// import Prevailing from "@/components/HomePage/Prevailing";
// import RecentlyViewed from "@/components/HomePage/RecentlyViewed";
// import StrategicPartner from "@/components/HomePage/StrategicPartner";
// import ShockPriceHotels from "@/components/HomePage/ShockPriceHotels";
import TopHotels from "@/components/HomePage/TopHotels";
import MainHeader from "@/layouts/header/MainHeader";
import SearchMobile from "@/components/search/SearchMobile";

export default function HomePage() {
  return (
    <div className="bg-white">
      <div className="hidden omd:block">
        <MainHeader />
      </div>
      <SearchBar />
      <SearchMobile />
      <div className="mt-[290px] omd:mt-0">
        <CouponList />
      </div>
      <FlashSale />
      {/* <HotelByLocation />
      <Discover />
      <MytourChoices />
      <Prevailing />
      <RecentlyViewed />
      <StrategicPartner />
      <ShockPriceHotels /> */}
      <TopHotels />
      <div className="custom-page-padding pt-8 pb-5 bg-white">
        <div className="flex flex-col gap-5 lg:flex-row items-center rounded-2xl shadow-sm border-[1px] border-slate-100 px-6 py-5">
          <div className="flex items-center">
            <img
              src="/icons/icon_mail_red.svg"
              className="w-16 h-16"
              alt="mail-icon"
            />
            <div className="flex-1 ml-6">
              <p className="font-semibold text-lg">
                Bạn muốn tiết kiệm tới 50% khi đặt phòng khách sạn, vé máy bay?
              </p>
              <p>
                Nhập số điện thoại để Mytour có thể gửi đến bạn những chương
                trình khuyến mại mới nhất!
              </p>
            </div>
          </div>

          <div className="flex h-11">
            <input
              placeholder="Nhập số điện thoại"
              className="bg-slate-200 px-3 py-2 w-[180px] xs:w-[250px] sm:w-[280px] rounded-l-lg outline-0 font-semibold tracking-widest text-lg placeholder:text-sm xs:placeholder:text-base text-slate-700"
            />
            <button className="bg-[#FF3366] text-white px-3 py-2 rounded-r-lg text-lg flex-shrink-0">
              Đăng ký
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
