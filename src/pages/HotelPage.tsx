import { useRef, useState, useEffect } from "react";
import Header from "@/layouts/header/Header";
import MiniSearchBar from "@/components/SearchPage/MiniSearchBar";
import { MapPin, Share, Heart } from "lucide-react";

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
      <div
        className={`transition-all duration-500 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <Header ref={headerRef} />
      </div>
      <div
        className={`hidden md:block sticky inset-0 z-40 w-full ${
          visible ? "top-34" : "top-9"
        }`}
      >
        <MiniSearchBar ref={searchRef} />
      </div>
      <div
        className="px-[5%] lg:custom-page-padding bg-[#FAFCFF] h-[1000px]"
        style={{ marginTop: visible ? headerHeight : searchHeight }}
      >
        <div>
          <span>Khách sạn</span>
          <span>{">"}</span>
          <span>Bình Thuận</span>
          <span>{">"}</span>
          <span>Thành Phố Phan Thiết</span>
          <span>{">"}</span>
          <span>Centara Mirage Resort Mũi Né</span>
        </div>
        <div>
          <span>Công viên nước</span>
          <span>Sát biển</span>
        </div>
        <div className="flex justify-between">
          <h1 className="flex-1">Centara Mirage Resort Mũi Né</h1>
          <div className="flex gap-2">
            <div className="flex gap-1">
              <span>Lưu</span>
              <Heart />
            </div>
            <div className="flex gap-1">
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
        <div className="flex">
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
              <span className="text-blue-600">Xem đánh giá</span>
            </div>
            <div className="flex items-center gap-1 mt-1">
              <MapPin className="w-4 h-4 text-slate-500" />
              <span>
                Huỳnh Thúc Kháng, Hàm Tiến, Thành Phố Phan Thiết, Bình Thuận,
                Việt Nam
              </span>
              <span className="text-blue-600">Xem bản đồ</span>
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
            <button className="text-white font-semibold rounded-md bg-[#FF3366] px-4 py-2">
              Chọn phòng
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-2 rounded-lg overflow-hidden">
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
      </div>
    </div>
  );
}
