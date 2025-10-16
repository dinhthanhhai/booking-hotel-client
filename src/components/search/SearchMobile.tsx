import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Search,
  History,
  Calendar,
  Moon,
  Users,
  Dot,
  Plus,
  Minus,
} from "lucide-react";
import { Drawer, Input } from "antd";
import { DateRange } from "react-date-range";
import type { RangeKeyDict, Range as DateRangeType } from "react-date-range";
import { vi } from "date-fns/locale";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const SearchMobile: React.FC = () => {
  const [openSearch, setOpenSearch] = useState<boolean>(false);
  const [openDate, setOpenDate] = useState<boolean>(false);
  const [openRoom, setOpenRoom] = useState<boolean>(false);
  const [range, setRange] = useState<DateRangeType[]>([
    {
      startDate: undefined,
      endDate: undefined,
      key: "selection",
    },
  ]);

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

  return (
    <div className="block omd:hidden relative">
      <div className="w-full h-[215px] bg-[url('/banner/banner_hotel.jpg')] bg-center bg-cover bg-no-repeat relative">
        <Link
          to={"/"}
          className="flex gap-1 items-center text-white font-semibold absolute top-4 left-4"
        >
          <ArrowLeft />
          <span className="text-xl">Khách sạn</span>
        </Link>
      </div>
      <div className="mx-4 rounded-2xl bg-white absolute inset-0 top-[185px] h-[300px] z-10 mb-5 p-4 shadow-sm">
        <div
          className="pb-3 mt-1 border-b border-b-slate-200 flex gap-2 items-center"
          onClick={() => setOpenSearch((prev) => !prev)}
        >
          <Search className="w-5 h-5 text-slate-700" />
          <span className="font-semibold text-slate-500">
            Nhập địa điểm, khách sạn
          </span>
        </div>
        <div
          className="py-5 mt-1 border-b border-b-slate-200 flex gap-2 items-center relative"
          onClick={() => setOpenDate((prev) => !prev)}
        >
          <Calendar className="w-6 h-6 text-slate-700 absolute left-0" />
          <div className="flex w-full justify-end">
            <div className="flex-1 flex gap-3 items-center border-r border-r-slate-200 pr-6 xs:pr-12">
              <span className="text-4xl ml-auto">13</span>
              <div className="flex flex-col">
                <span className="text-sm font-semibold">tháng 10</span>
                <span className="leading-3">T2</span>
              </div>
            </div>
            <div className="flex-1 flex gap-3 items-center pl-6 xs:pl-12">
              <span className="text-4xl">14</span>
              <div className="flex flex-col">
                <span className="text-sm font-semibold">tháng 10</span>
                <span className="leading-3">T2</span>
              </div>
            </div>
          </div>
          <div className="flex items-center w-7 h-7 rounded-full bg-white border border-slate-200 text-slate-400 p-1 absolute left-1/2 -translate-x-1/2">
            <span className="text-12">1</span>
            <Moon className="w-4 h-4" />
          </div>
        </div>
        <div
          className="py-5 mt-1 border-b border-b-slate-200 flex gap-2 items-center relative"
          onClick={() => setOpenRoom((prev) => !prev)}
        >
          <Users className="w-6 h-6 text-slate-700" />
          <p className="flex items-center ml-2">
            <span>1 phòng</span>
            <Dot className="font-bold" />
            <span>2 người lớn</span>
            <Dot className="font-bold" />
            <span>0 trẻ em</span>
          </p>
        </div>
        <button className="mt-5 w-full h-12 bg-[#FF3366] text-white rounded-md text-lg cursor-pointer">
          Tìm kiếm
        </button>
      </div>
      <Drawer
        placement="left"
        width="100vw"
        title={
          <div className="flex items-center gap-2 w-full">
            <Input
              placeholder="Nhập tên khách sạn, địa điểm"
              prefix={<Search className="w-5 h-5 text-slate-500" />}
              className="flex-1 text-lg bg-slate-100"
            />
          </div>
        }
        onClose={() => setOpenSearch(false)}
        open={openSearch}
      >
        <div className="text-base">
          <p className="text-xl font-semibold">Tìm kiếm gần đây</p>
          <div className="flex flex-col gap-4 mt-5">
            <div className="flex items-center gap-3 cursor-pointer">
              <History className="w-6 h-6 text-slate-400 font-light" />
              <span>Hà Nội</span>
            </div>
            <div className="flex items-center gap-3 cursor-pointer">
              <History className="w-6 h-6 text-slate-400 font-light" />
              <span>Hồ Chí Minh</span>
            </div>
          </div>
          <p className="text-blue-400 font-semibold mt-5 cursor-pointer">
            Xóa lịch sử tìm kiếm
          </p>
        </div>
        <div className="text-base mt-5">
          <p className="text-xl font-semibold">Phổ biến</p>
          <div className="flex gap-2 flex-wrap mt-5">
            {[...Array(10)].map((_, index) => (
              <span
                key={index}
                className="px-3 py-2 rounded-md bg-slate-100 w-fit font-medium cursor-pointer"
              >
                Hồ Chí Minh
              </span>
            ))}
          </div>
        </div>
      </Drawer>
      <Drawer
        placement="bottom"
        width="100vw"
        height="100vh"
        title={<p className="w-full text-center">Chọn ngày</p>}
        onClose={() => setOpenDate(false)}
        open={openDate}
        bodyStyle={{ display: "flex", flexDirection: "column" }}
      >
        <div className="flex-1 overflow-auto">
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
            direction="vertical"
            rangeColors={["#f36"]}
            showDateDisplay={false}
            showPreview={false}
            minDate={new Date()}
            className="w-full"
          />
        </div>
        <div className="pt-5 mt-1 border-t border-t-slate-200 flex gap-2 items-center sticky inset-0 bottom-0">
          <Calendar className="w-6 h-6 text-slate-700 absolute left-0" />
          <div className="flex w-full justify-end">
            <div className="flex-1 flex gap-3 items-center border-r border-r-slate-200 pr-12">
              <span className="text-4xl ml-auto">13</span>
              <div className="flex flex-col">
                <span className="text-sm font-semibold">tháng 10</span>
                <span className="leading-3">T2</span>
              </div>
            </div>
            <div className="flex-1 flex gap-3 items-center pl-12">
              <span className="text-4xl">14</span>
              <div className="flex flex-col">
                <span className="text-sm font-semibold">tháng 10</span>
                <span className="leading-3">T2</span>
              </div>
            </div>
          </div>
          <div className="flex items-center w-7 h-7 rounded-full bg-white border border-slate-200 text-slate-400 p-1 absolute left-1/2 -translate-x-1/2">
            <span className="text-12">1</span>
            <Moon className="w-4 h-4" />
          </div>
        </div>
      </Drawer>
      <Drawer
        placement="bottom"
        width="100vw"
        height="100vh"
        title={<p className="w-full text-center">Số khách mỗi phòng</p>}
        onClose={() => setOpenRoom(false)}
        open={openRoom}
        bodyStyle={{ display: "flex", flexDirection: "column" }}
      >
        <div className="w-full flex justify-between items-center pb-5">
          <span className="text-lg">Phòng</span>
          <div className="flex gap-8 items-center">
            <span className="p-2 rounded-full bg-slate-200">
              <Plus />
            </span>
            <span className="text-lg font-semibold">1</span>
            <span className="p-2 rounded-full bg-slate-200">
              <Minus />
            </span>
          </div>
        </div>
        <div className="w-full flex justify-between items-center py-5 border-y border-y-slate-200">
          <span className="text-lg">Người lớn</span>
          <div className="flex gap-8 items-center">
            <span className="p-2 rounded-full bg-slate-200">
              <Plus />
            </span>
            <span className="text-lg font-semibold">1</span>
            <span className="p-2 rounded-full bg-slate-200">
              <Minus />
            </span>
          </div>
        </div>
        <div className="w-full flex justify-between items-center py-5">
          <span className="text-lg">Trẻ em</span>
          <div className="flex gap-8 items-center">
            <span className="p-2 rounded-full bg-slate-200">
              <Plus />
            </span>
            <span className="text-lg font-semibold">1</span>
            <span className="p-2 rounded-full bg-slate-200">
              <Minus />
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <button className="bg-slate-200 rounded-md p-2 text-lg font-semibold cursor-pointer">
            Hủy
          </button>
          <button className="bg-[#FF3366] text-white rounded-md p-2 text-lg font-semibold cursor-pointer">
            Chọn
          </button>
        </div>
      </Drawer>
    </div>
  );
};

export default SearchMobile;
