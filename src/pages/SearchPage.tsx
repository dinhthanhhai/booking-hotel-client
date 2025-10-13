import { useRef, useState, useEffect } from "react";
import Header from "@/layouts/header/Header";
import MiniSearchBar from "@/components/SearchPage/MiniSearchBar";
import Filter from "@/components/SearchPage/Filter";
import HotelResultCard from "@/components/hotel/HotelResultCard";

export default function SearchPage() {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const searchRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState<boolean>(true);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [searchHeight, setSearchHeight] = useState(0);
  const [openFilter, setOpenFilter] = useState<boolean>(false);

  // Nếu cuộn quá chiều cao Header thì ẩn Header
  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current) return;
      const height = headerRef.current.offsetHeight;
      const scrollY = window.scrollY;
      if (scrollY > height) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Lấy chiều cao header khi mount & resize
  useEffect(() => {
    if (!headerRef.current) return;
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.getBoundingClientRect().height);
      }
    };
    updateHeaderHeight();

    const observer = new ResizeObserver(updateHeaderHeight);
    observer.observe(headerRef.current);

    return () => observer.disconnect();
  }, []);

  // Lấy chiều cao searchbar khi mount & resize
  useEffect(() => {
    if (!searchRef.current) return;
    const updateSearchHeight = () => {
      if (searchRef.current) {
        setSearchHeight(searchRef.current.getBoundingClientRect().height);
      }
    };
    updateSearchHeight();

    const observer = new ResizeObserver(updateSearchHeight);
    observer.observe(searchRef.current);

    return () => observer.disconnect();
  }, []);

  // Mở bộ lọc
  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  // Đóng bộ lọc
  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  return (
    <div className="bg-white w-full">
      <div
        className={`transition-all duration-500 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <Header ref={headerRef} />
      </div>
      <div
        className={`sticky inset-0 z-40 w-full ${visible ? "top-34" : "top-9"}`}
      >
        <MiniSearchBar ref={searchRef} open={handleOpenFilter} />
      </div>
      <div
        className={`md:hidden h-full w-full ${
          openFilter ? "fixed insert-0 top-9 z-50 overflow-auto" : "hidden"
        }`}
      >
        <Filter close={handleCloseFilter} />
      </div>
      <div
        className="px-[5%] lg:custom-page-padding flex gap-5 bg-[#FAFCFF]"
        style={{ marginTop: visible ? headerHeight : searchHeight }}
      >
        <div className="w-[24%] min-w-[230px] hidden md:block">
          <p className="mt-2 flex gap-1 text-sm">
            <span className="text-blue-600">Khách sạn</span>
            <span>{">"}</span>
            <span className="text-blue-600">Hà Nội</span>
            <span>{">"}</span>
          </p>
          <p className="text-xl font-semibold mt-3">485 khách sạn tại Hà Nội</p>
          <div className="relative mt-4">
            <img
              src="/images/bg_krakow_light.png"
              className="h-[100px] w-full rounded-2xl overflow-hidden"
            />
            <span className="absolute font-semibold text-lg top-[60%] left-1/2 -translate-x-1/2">
              Xem bản đồ
            </span>
          </div>
          <div className="mt-5">
            <Filter close={handleCloseFilter} />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex flex-col gap-4">
            {[...Array(10)].map((_, i) => (
              <div key={i}>
                <HotelResultCard />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
