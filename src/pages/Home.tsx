import SearchBar from "@/components/home/SearchBar";
import CouponList from "@/components/home/CouponList";
import FlashSale from "@/components/home/FlashSale";

export default function Home() {
  return (
    <div className="">
      <SearchBar />
      <CouponList />
      <FlashSale />
      <div className="bg-amber-300 h-[1000px]"></div>
    </div>
  );
}
