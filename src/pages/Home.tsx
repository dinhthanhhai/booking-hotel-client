import SearchBar from "@/components/home/SearchBar";
import CouponList from "@/components/home/CouponList";

export default function Home() {
  return (
    <div className="">
      <SearchBar />
      <CouponList />
      <div className="bg-amber-300 h-[1000px]"></div>
    </div>
  );
}
