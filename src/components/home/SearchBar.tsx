import React from "react";
import { Search, Moon, History, Building, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { DateRange } from "react-date-range";
import type { RangeKeyDict, Range as DateRangeType } from "react-date-range";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { stayOptionList } from "@/data/data";
import type { StayOption } from "@/types/types";

const SearchBar: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  const [openLocation, setOpenLocation] = useState<boolean>(false);
  const [openTime, setOpenTime] = useState<boolean>(false);
  const [openRoom, setOpenRoom] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<string>("");
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [stayOption, setStayOption] = useState<StayOption>();
  const [range, setRange] = useState<DateRangeType[]>([
    {
      startDate: undefined,
      endDate: undefined,
      key: "selection",
    },
  ]);
  const [roomCount, setRoomCount] = useState<number>(1);
  const [adultCount, setAdultCount] = useState<number>(1);
  const [childCount, setChildCount] = useState<number>(1);

  const handleChange = (ranges: RangeKeyDict) => {
    const { startDate, endDate } = ranges.selection;

    setRange([
      {
        startDate: startDate || undefined,
        endDate: endDate || undefined,
        key: "selection",
      },
    ]);
  };

  // Hiển thị lịch thành cột nếu màn < 480px
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 480);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Đóng popup khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      // check room
      if (popupRef.current && !popupRef.current.contains(target)) {
        setOpenRoom(false);
      }

      // check time
      if (ref.current && !ref.current.contains(target)) {
        setOpenTime(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full h-[420px] bg-[url('/banner/banner_hotel.jpg')] bg-cover bg-center z-0">
      <div className="w-full h-full relative">
        <h2 className="w-[80%] base:max-w-[1200px] mx-auto text-3xl font-semibold text-white pt-12 pb-8 leading-10 font">
          Khách sạn
        </h2>
        <div className="w-[80%] base:max-w-[1200px] bg-white shadow rounded-lg flex flex-col xl:flex-row mx-auto overflow-hidden">
          {/* Địa điểm */}
          <div
            className="flex-1 flex flex-col xl:w-1/3 relative px-6 py-3
            after:absolute after:left-4 after:bottom-1 after:h-[2px] after:bg-pink-600 after:w-0 after:transition-all after:duration-300 
            focus-within:after:w-[95%]"
          >
            <label className="text-sm text-gray-500">Địa điểm</label>
            <input
              type="text"
              value={keyword}
              className="w-full outline-none text-gray-800 font-medium placeholder:font-medium"
              placeholder="Địa điểm, khách sạn trong nước hoặc quốc tế"
              onFocus={() => {
                setOpenLocation(true);
              }}
              onBlur={() => setOpenLocation(false)}
              onChange={(e) => {
                setKeyword(e.target.value);
              }}
            />
          </div>
          {/* Thời gian + Phòng + Người */}
          <div className={"flex flex-col sm:flex-row xl:w-2/3"}>
            <div
              className={`flex gap-2 justify-between flex-1 px-6 py-3 relative
              after:absolute after:left-4 after:bottom-1 after:h-[2px] after:bg-pink-600
              after:transition-all after:duration-300
              ${openTime ? "after:w-full" : "after:w-0"}
            `}
              onClick={() => setOpenTime(true)}
            >
              <div className="flex flex-col">
                <p className="text-sm text-gray-500">Ngày đến</p>
                <p className="font-medium">
                  {range[0].startDate
                    ? format(range[0].startDate, "EEEE, dd/MM/yyyy", {
                        locale: vi,
                      })
                    : "Chọn ngày đi"}
                </p>
              </div>
              <div className="w-9 h-9 rounded-full border-[1px] border-slate-300 flex justify-center items-center">
                <Moon className="w-3 h-3 text-slate-500" />
              </div>
              <div className="flex flex-col">
                <p className="text-sm text-gray-500">Ngày về</p>
                <p className="font-medium">
                  {range[0].endDate
                    ? format(range[0].endDate, "EEEE, dd/MM/yyyy", {
                        locale: vi,
                      })
                    : "Chọn ngày về"}
                </p>
              </div>
            </div>
            <div className="flex-1 px-6 py-2 flex justify-between items-center gap-1">
              <div
                className={`flex flex-col mt-1 relative after:absolute after:left-0 after:-bottom-[6px] after:h-[2px] after:bg-pink-600 after:transition-all after:duration-300 ${
                  openRoom ? "after:w-full" : "after:w-0"
                } `}
                onClick={() => setOpenRoom(true)}
              >
                <p className="text-sm text-gray-500">Số phòng, số khách</p>
                <p className="w-full font-medium text-gray-800">
                  1 phòng, 2 người lớn, 0 trẻ em
                </p>
              </div>
              <button className="bg-pink-600 flex items-center justify-center  rounded-lg px-6 h-12">
                <Search className="w-7 h-7 text-white" />
              </button>
            </div>
          </div>
        </div>
        {openLocation && (
          <div className="w-[80%] base:max-w-[1200px] h-[400px] p-4 bg-white shadow rounded-lg flex absolute left-1/2 -translate-x-1/2 bottom:0 mt-2">
            <div className="w-1/3">
              <div className="flex justify-between items-center rounded-lg bg-slate-50 p-4">
                <span className="font-semibold text-xl">Tìm kiếm gần đây</span>
                <button className="text-pink-500 font-medium">
                  Xóa lịch sử tìm kiếm
                </button>
              </div>
              <div className="flex flex-col mt-2">
                <div className="flex px-4 p-4 items-center border-b-[1px] border-slate-300">
                  <div className="w-10 h-10 rounded-lg bg-slate-200 flex items-center justify-center">
                    <History className="w-5 h-5 text-slate-400" />
                  </div>
                  <div className="flex flex-col ml-4">
                    <span>Hà Nội</span>
                    <span className="text-sm text-slate-600">Việt Nam</span>
                  </div>
                  <div className="flex flex-end ml-auto items-center gap-1">
                    <span className="text-slate-500">1253</span>
                    <Building className="w-5 h-5 text-slate-500" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-2/3 px-4">
              <span className="text-lg font-semibold">Địa điểm nổi bật</span>
              <div className=""></div>
            </div>
          </div>
        )}
        {openTime && (
          <div
            ref={ref}
            className="w-[80%] base:max-w-[800px] p-4 bg-white shadow rounded-lg flex absolute left-1/2 -translate-x-1/2 bottom:0 mt-2"
          >
            <div className="flex-1">
              <DateRange
                locale={vi}
                onChange={handleChange}
                moveRangeOnFirstSelection={false}
                ranges={
                  range[0].startDate && range[0].endDate
                    ? range
                    : [
                        {
                          startDate: new Date(),
                          endDate: new Date(),
                          key: "selection",
                        },
                      ]
                }
                months={2}
                direction={isMobile ? "vertical" : "horizontal"}
                rangeColors={["#f36"]}
                showDateDisplay={false}
                showPreview={false}
                minDate={new Date()}
                className="w-full"
              />
            </div>
          </div>
        )}
        {openRoom && (
          <div
            ref={popupRef}
            className="mx-auto mt-2 bg-white shadow rounded-lg overflow-hidden flex justify-center w-[80%] md:w-fit"
          >
            <div
              className={`md:w-[200px] flex flex-col bg-slate-200 ${
                stayOption && stayOption?.id >= 3 ? "w-1/3" : "w-full"
              }`}
            >
              {stayOptionList?.map((item, index) =>
                item.note ? (
                  <div
                    key={index}
                    onClick={() => setStayOption(item)}
                    className={`relative flex flex-col px-4 py-2 border-b border-slate-300 hover:text-pink-600 cursor-pointer ${
                      stayOption?.id === item.id
                        ? "after:absolute after:h-full after:w-[3px] after:top-0 after:left-0 after:bg-pink-600 bg-white"
                        : ""
                    }`}
                  >
                    <span>{item.name}</span>
                    <span className="text-sm font-light">{item.note}</span>
                  </div>
                ) : (
                  <div
                    key={index}
                    onClick={() => setStayOption(item)}
                    className={`relative flex justify-between px-4 py-4 border-b border-slate-300 hover:text-pink-600 cursor-pointer ${
                      stayOption?.id === item.id
                        ? "after:absolute after:h-full after:w-[3px] after:top-0 after:left-0 after:bg-pink-600 bg-white"
                        : ""
                    }`}
                  >
                    <span>{item.name}</span>
                    <ChevronRight />
                  </div>
                )
              )}
            </div>
            {stayOption && stayOption?.id >= 3 && (
              <div className="w-2/3 md:w-[400px] flex flex-col px-4">
                <div className="flex items-center justify-between py-4 border-b-[1px] border-slate-300">
                  <div>Phòng</div>
                  <div className="flex gap-2">
                    <button
                      className={`w-8 h-8 border-[2px] rounded-full flex items-center justify-center ${
                        roomCount === 1
                          ? "border-slate-300 text-slate-300"
                          : "border-pink-400"
                      }`}
                      disabled={roomCount === 1}
                      onClick={() =>
                        setRoomCount((prev) => Math.max(prev - 1, 0))
                      }
                    >
                      -
                    </button>
                    <div className="mt-1">{roomCount}</div>
                    <button
                      className="w-8 h-8 border-[2px] border-pink-400 rounded-full flex items-center justify-center"
                      onClick={() =>
                        setRoomCount((prev) => Math.max(prev + 1, 0))
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between py-4 border-b-[1px] border-slate-300">
                  <div>Người lớn</div>
                  <div className="flex gap-2">
                    <button
                      className={`w-8 h-8 border-[2px] rounded-full flex items-center justify-center ${
                        adultCount === 1
                          ? "border-slate-300 text-slate-300"
                          : "border-pink-400"
                      }`}
                      disabled={adultCount === 1}
                      onClick={() =>
                        setAdultCount((prev) => Math.max(prev - 1, 0))
                      }
                    >
                      -
                    </button>
                    <div className="mt-1">{adultCount}</div>
                    <button
                      className="w-8 h-8 border-[2px] border-pink-400 rounded-full flex items-center justify-center"
                      onClick={() =>
                        setAdultCount((prev) => Math.max(prev + 1, 0))
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between py-4 border-b-[1px] border-slate-300">
                  <div>Trẻ em</div>
                  <div className="flex gap-2">
                    <button
                      className={`w-8 h-8 border-[2px] rounded-full flex items-center justify-center ${
                        childCount === 0
                          ? "border-slate-300 text-slate-300"
                          : "border-pink-400"
                      }`}
                      disabled={childCount === 0}
                      onClick={() =>
                        setChildCount((prev) => Math.max(prev - 1, 0))
                      }
                    >
                      -
                    </button>
                    <div className="mt-1">{childCount}</div>
                    <button
                      className="w-8 h-8 border-[2px] border-pink-400 rounded-full flex items-center justify-center"
                      onClick={() =>
                        setChildCount((prev) => Math.max(prev + 1, 0))
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
