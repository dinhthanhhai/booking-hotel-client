import { useRef, useState, useEffect } from "react";
import MiniSearchBar from "@/components/SearchPage/MiniSearchBar";
import { MapPin, Share, Heart } from "lucide-react";
import MainHeader from "@/layouts/header/MainHeader";
import { Breadcrumb } from "antd";
import ListImages from "@/components/HotelPage/ListImages";
import HotelInfo from "@/components/HotelPage/HotelInfo";

export default function HotelPage() {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const searchRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState<boolean>(true);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [searchHeight, setSearchHeight] = useState(0);

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

  return (
    <div className="bg-white w-full">
      <MainHeader />
      <div
        className={`hidden md:block sticky inset-0 z-40 w-full ${
          visible ? "" : "top-9"
        }`}
      >
        <MiniSearchBar ref={searchRef} />
      </div>
      <div
        className="px-[5%] lg:custom-page-padding bg-[#FAFCFF] h-[1000px]"
        style={{ marginTop: visible ? headerHeight : searchHeight }}
      >
        <Breadcrumb
          className="text-12"
          items={[
            {
              title: "Khách sạn",
            },
            {
              title: <a href="">Bình Thuận</a>,
            },
            {
              title: <a href="">Thành Phố Phan Thiết</a>,
            },
            {
              title: "Centara Mirage Resort Mũi Né",
            },
          ]}
        />
        <div className="flex gap-3 mt-3">
          <span className="px-2 py-1 text-white bg-[#FFBC39] rounded-md font-semibold">
            Công viên nước
          </span>
          <span className="px-2 py-1 text-white bg-[#00B6F3] rounded-md font-semibold">
            Sát biển
          </span>
        </div>
        <div className="flex justify-between">
          <h1 className="flex-1 mt-2 font-semibold text-3xl">
            Centara Mirage Resort Mũi Né
          </h1>
          <div className="flex gap-5 text-lg text-slate-800">
            <div className="flex gap-1 items-center">
              <span>Lưu</span>
              <Heart />
            </div>
            <div className="flex gap-1 items-center">
              <span>Chia sẻ</span>
              <Share />
            </div>
          </div>
        </div>
        <div className="flex mt-1">
          {[...Array(5)].map((_, i) => (
            <img key={i} src="/icons/star-solid-full.svg" alt="icon" />
          ))}
        </div>
        <div className="flex mt-1">
          <div className="flex-1">
            <div className="flex items-center gap-2 mt-1">
              <div className="flex items-center px-1 bg-[#FFE1E8] rounded-md">
                <img
                  src="/icons/umbrella-solid-full.svg"
                  alt="icon"
                  className="w-4 h-4"
                />
                <span className="text-sm font-medium text-[#FF3366]">9.0</span>
              </div>
              <span>Tuyệt vời</span>
              <span className="text-slate-700">(28 đánh giá)</span>
              <span className="text-[#00C5F8]">Xem đánh giá</span>
            </div>
            <div className="flex items-center gap-1 mt-1">
              <MapPin className="w-4 h-4 text-slate-500" />
              <span>
                Huỳnh Thúc Kháng, Hàm Tiến, Thành Phố Phan Thiết, Bình Thuận,
                Việt Nam
              </span>
              <span className="text-[#00C5F8]">Xem bản đồ</span>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="flex flex-col">
              <div className="flex gap-1">
                <span className="line-through text-slate-600">2.337.999 ₫</span>
                <span className="text-white font-semibold rounded-md px-1 bg-[#FF3366] ml-auto">
                  -25%
                </span>
              </div>
              <span className="text-xl font-semibold ml-auto">1.748.444 ₫</span>
            </div>
            <button className="text-white font-semibold rounded-md bg-[#FF3366] px-6 py-2 text-lg">
              Chọn phòng
            </button>
          </div>
        </div>
        <ListImages />
        <HotelInfo />
      </div>
    </div>
  );
}
