import { useState, useEffect, useRef, forwardRef } from "react";
import {
  Search,
  Moon,
  History,
  Building,
  ChevronRight,
  Funnel,
} from "lucide-react";
import { DateRange } from "react-date-range";
import type { RangeKeyDict, Range as DateRangeType } from "react-date-range";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { stayOptionList } from "@/data/data";
import type { StayOption } from "@/types/types";
type MiniSearchBarProps = {
  open?: () => void;
};

const MiniSearchBar = forwardRef<HTMLDivElement, MiniSearchBarProps>(
  ({ open }, ref) => {
    const refTime = useRef<HTMLDivElement>(null);
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
        if (refTime.current && !refTime.current.contains(target)) {
          setOpenTime(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    return (
      <div className="w-full bg-[#F4F8FA]">
        <div ref={ref} className="w-full h-full relative py-5">
          <div className="custom-page-margin bg-white shadow rounded-lg flex flex-col xl:flex-row overflow-hidden">
            {/* Địa điểm */}
            <div className="flex-1 flex">
              <div
                className="flex-1 flex flex-col xl:w-1/3 relative px-6 py-3
            after:absolute after:left-6 after:bottom-1 after:h-[2px] after:bg-[#FF3366] after:w-0 after:transition-all after:duration-300 
            focus-within:after:w-[calc(100%-48px)]"
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
              <button className="md:hidden flex flex-col items-center p-3 cursor-pointer">
                <Funnel
                  className="w-5 h-5 text-slate-600"
                  onClick={() => open?.()}
                />
                <span>Bộ lọc</span>
              </button>
            </div>
            {/* Thời gian + Phòng + Người */}
            <div className={"flex flex-col sm:flex-row xl:w-2/3"}>
              <div
                className={`flex gap-2 justify-between flex-1 px-6 py-3 relative
              after:absolute after:left-6 after:bottom-1 after:h-[2px] after:bg-[#FF3366]
              after:transition-all after:duration-300
              ${openTime ? "after:w-[calc(100%-48px)]" : "after:w-0"}
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
                  className={`flex flex-col mt-1 relative after:absolute after:left-0 after:-bottom-[6px] after:h-[2px] after:bg-[#FF3366] after:transition-all after:duration-300 ${
                    openRoom ? "after:w-full" : "after:w-0"
                  } `}
                  onClick={() => setOpenRoom(true)}
                >
                  <p className="text-sm text-gray-500">Số phòng, số khách</p>
                  <p className="w-full font-medium text-gray-800">
                    1 phòng, 2 người lớn, 0 trẻ em
                  </p>
                </div>
                <button className="bg-[#FF3366] flex items-center justify-center  rounded-lg px-6 h-12 hover:bg-[#FF3366] cursor-pointer">
                  <Search className="w-7 h-7 text-white" />
                </button>
              </div>
            </div>
          </div>
          {openLocation && (
            <div className="w-[80%] base:max-w-[1200px] p-4 bg-white shadow-sm  rounded-lg flex flex-col sm:flex-row absolute left-1/2 -translate-x-1/2 bottom:0 mt-2 z-10">
              <div className="w-full sm:w-1/3 min-w-[220px]">
                <div className="flex justify-between items-center rounded-lg bg-slate-50 p-4">
                  <span className="font-semibold text-xl">
                    Tìm kiếm gần đây
                  </span>
                  <button className="text-[#FF3366] font-medium">
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
              <div className="w-full sm:w-2/3 px-4 mt-4 sm:mt-0">
                <span className="text-lg font-semibold">Địa điểm nổi bật</span>
                <div className="flex gap-3 md:gap-[6%] md:gap-y-4 justify-start md:justify-between flex-wrap sm:px-3 py-2">
                  {[
                    [...Array(18)].map((_, index) => (
                      <div
                        key={index}
                        className="flex-shink-0 flex flex-col justify-center"
                      >
                        <img
                          src="/images/nha-trang.webp"
                          className="w-20 h-20 object-cover rounded-full hidden md:block"
                        />
                        <span className="md:px-0 px-3 md:py-0 py-2 md:rounded-none rounded-md md:bg-white bg-slate-100">
                          Nha Trang
                        </span>
                      </div>
                    )),
                  ]}
                </div>
              </div>
            </div>
          )}
          {openTime && (
            <div
              ref={refTime}
              className="w-[80%] base:max-w-[800px] p-4 bg-white shadow-sm rounded-lg flex absolute left-1/2 -translate-x-1/2 bottom:0 mt-2 z-10"
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
              className="mx-auto mt-2 bg-white shadow-sm rounded-lg overflow-hidden flex justify-center w-[80%] md:w-fit absolute z-10 left-1/2 -translate-x-1/2 bottom:0"
            >
              <div
                className={`md:w-[200px] flex flex-col bg-slate-100 ${
                  stayOption && stayOption?.id >= 3 ? "w-1/3" : "w-full"
                }`}
              >
                {stayOptionList?.map((item, index) =>
                  item.note ? (
                    <div
                      key={index}
                      onClick={() => setStayOption(item)}
                      className={`relative flex flex-col px-4 py-2 border-b border-slate-300 hover:text-[#FF3366] cursor-pointer ${
                        stayOption?.id === item.id
                          ? "after:absolute after:h-full after:w-[3px] after:top-0 after:left-0 after:bg-[#FF3366] bg-white"
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
                      className={`relative flex justify-between px-4 py-4 border-b border-slate-300 hover:text-[#FF3366] cursor-pointer ${
                        stayOption?.id === item.id
                          ? "after:absolute after:h-full after:w-[3px] after:top-0 after:left-0 after:bg-[#FF3366] bg-white"
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
  }
);

export default MiniSearchBar;
