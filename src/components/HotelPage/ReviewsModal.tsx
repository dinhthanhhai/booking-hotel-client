import React, { useState } from "react";
import { Modal, Dropdown, Radio, Space, Avatar } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { filterComment } from "@/data/constants";
import {
  Pencil,
  BedDouble,
  Calendar,
  BriefcaseBusiness,
  ThumbsUp,
  X,
} from "lucide-react";

interface ReviewsModalProps {
  isModalOpen: boolean;
  handleCancel: () => void;
}

const ReviewsModal: React.FC<ReviewsModalProps> = ({
  isModalOpen,
  handleCancel,
}) => {
  const score = 9.2;
  const radius = 85;
  const circumference = 2 * Math.PI * radius;
  const progress = (score / 10) * circumference;
  const [value, setValue] = useState<string>("Hữu ích nhất");
  const [open, setOpen] = useState<boolean>(false);
  const [filterId, setFilterId] = useState<number>(1);

  const options = [
    "Mới nhất",
    "Cũ nhất",
    "Điểm thấp nhất",
    "Điểm cao nhất",
    "Hữu ích nhất",
  ];

  const menu = (
    <div
      className="bg-white p-2 rounded-lg shadow-lg w-70"
      onClick={(e) => e.stopPropagation()}
    >
      <Radio.Group
        onChange={(e) => {
          setValue(e.target.value);
          setOpen(false);
        }}
        value={value}
        className="flex flex-col gap-1"
      >
        {options.map((opt) => (
          <Radio
            key={opt}
            value={opt}
            style={{ color: "#000", fontSize: 14 }}
            className="hover:bg-gray-50 rounded-md px-2 py-1 !text-lg"
          >
            {opt}
          </Radio>
        ))}
      </Radio.Group>
    </div>
  );

  return (
    <>
      <Modal
        title={
          <div className="px-5 pt-5 pb-3 flex justify-between">
            <span className="text-[26px] font-semibold">Đánh giá</span>
            <X onClick={handleCancel} className="cursor-pointer w-7 h-7" />
          </div>
        }
        style={{ top: 36 }}
        open={isModalOpen}
        closable={false}
        footer={null}
        width={{
          sm: "90%",
          xl: "80%",
        }}
        wrapClassName="custom-modal"
      >
        <div className="flex flex-col">
          <div className="px-5 pb-5 flex justify-between">
            <p className="text-[#48BB78] text-lg">
              Centara Mirage Resort Mũi Né
            </p>
            <Dropdown
              open={open}
              onOpenChange={setOpen}
              dropdownRender={() => menu}
              placement="bottomLeft"
              trigger={["click"]}
              className="w-70 text-lg"
            >
              <button className="flex items-center gap-2 border border-slate-200 rounded-md px-3 py-2 bg-white hover:bg-gray-50">
                <span className="text-gray-600">Sắp xếp:</span>
                <Space className="flex-1 flex items-center justify-between">
                  <span className="font-medium">{value}</span>
                  <DownOutlined style={{ fontSize: 16 }} />
                </Space>
              </button>
            </Dropdown>
          </div>
          <div className="h-[70vh] overflow-y-auto scroll-custom flex">
            <div className="w-1/3 flex flex-col text-base">
              <div className="relative w-full flex flex-col items-center justify-center">
                <svg width="200" height="200" className="-rotate-90">
                  <circle
                    cx="100"
                    cy="100"
                    r={radius}
                    stroke="#E2E8F0"
                    strokeWidth="10"
                    fill="none"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r={radius}
                    stroke="#FF3366"
                    strokeWidth="10"
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={circumference - progress}
                    strokeLinecap="round"
                    className="transition-all duration-700 ease-in-out"
                  />
                </svg>
                <div className="text-center absolute">
                  <p className="text-4xl font-bold text-[#FF3366] tracking-wider">
                    {score}
                  </p>
                  <p className="font-medium">Tuyệt vời</p>
                </div>
              </div>
              <p className="text-center text-slate-500 text-base xl:text-[17px] px-8">
                100% đánh giá từ đối tác và khách hàng đặt phòng trên Mytour
              </p>
              <div className="flex flex-col gap-3 text-sm lg:text-base xl:text-lg p-5 border-b border-b-slate-300">
                <div className="flex items-center gap-1 xl:gap-3">
                  <span className="w-20 text-sm lg:text-base font-medium">
                    Tuyệt vời
                  </span>
                  <div className="relative flex-1 h-1.5 bg-slate-300 rounded-full overflow-hidden">
                    <div
                      className="absolute top-0 left-0 h-full bg-[#FF3366]"
                      style={{ width: `${(9.2 / 10) * 100}%` }}
                    ></div>
                  </div>
                  <span className="w-10 text-right font-semibold">9.2</span>
                </div>
                <div className="flex items-center gap-1 xl:gap-3">
                  <span className="w-20 text-sm lg:text-base font-medium">
                    Xuất sắc
                  </span>
                  <div className="relative flex-1 h-1.5 bg-slate-300 rounded-full overflow-hidden">
                    <div
                      className="absolute top-0 left-0 h-full bg-[#FF3366]"
                      style={{ width: `${(9.2 / 10) * 100}%` }}
                    ></div>
                  </div>
                  <span className="w-10 text-right font-semibold">9.2</span>
                </div>
                <div className="flex items-center gap-1 xl:gap-3">
                  <span className="w-20 text-sm lg:text-base font-medium">
                    Tốt
                  </span>
                  <div className="relative flex-1 h-1.5 bg-slate-300 rounded-full overflow-hidden">
                    <div
                      className="absolute top-0 left-0 h-full bg-[#FF3366]"
                      style={{ width: `${(9.2 / 10) * 100}%` }}
                    ></div>
                  </div>
                  <span className="w-10 text-right font-semibold">9.2</span>
                </div>
                <div className="flex items-center gap-1 xl:gap-3">
                  <span className="w-20 text-sm lg:text-base font-medium">
                    Trung bình
                  </span>
                  <div className="relative flex-1 h-1.5 bg-slate-300 rounded-full overflow-hidden">
                    <div
                      className="absolute top-0 left-0 h-full bg-[#FF3366]"
                      style={{ width: `${(9.2 / 10) * 100}%` }}
                    ></div>
                  </div>
                  <span className="w-10 text-right font-semibold">9.2</span>
                </div>
                <div className="flex items-center gap-1 xl:gap-3">
                  <span className="w-20 text-sm lg:text-base font-medium">
                    Kém
                  </span>
                  <div className="relative flex-1 h-1.5 bg-slate-300 rounded-full overflow-hidden">
                    <div
                      className="absolute top-0 left-0 h-full bg-[#FF3366]"
                      style={{ width: `${(9.2 / 10) * 100}%` }}
                    ></div>
                  </div>
                  <span className="w-10 text-right font-semibold">9.2</span>
                </div>
              </div>
              <div className="flex flex-col gap-3 text-sm lg:text-base xl:text-lg p-5">
                <div className="flex items-center gap-1 xl:gap-3">
                  <span className="w-20 text-sm lg:text-base font-medium">
                    Vị trí
                  </span>
                  <div className="relative flex-1 h-1.5 bg-slate-300 rounded-full overflow-hidden">
                    <div
                      className="absolute top-0 left-0 h-full bg-slate-500"
                      style={{ width: `${(9.2 / 10) * 100}%` }}
                    ></div>
                  </div>
                  <span className="w-10 text-right font-semibold">9.2</span>
                </div>
                <div className="flex items-center gap-1 xl:gap-3">
                  <span className="w-20 text-sm lg:text-base font-medium">
                    Giá cả
                  </span>
                  <div className="relative flex-1 h-1.5 bg-slate-300 rounded-full overflow-hidden">
                    <div
                      className="absolute top-0 left-0 h-full bg-slate-500"
                      style={{ width: `${(9.2 / 10) * 100}%` }}
                    ></div>
                  </div>
                  <span className="w-10 text-right font-semibold">9.2</span>
                </div>
                <div className="flex items-center gap-1 xl:gap-3">
                  <span className="w-20 text-sm lg:text-base font-medium">
                    Phục vụ
                  </span>
                  <div className="relative flex-1 h-1.5 bg-slate-300 rounded-full overflow-hidden">
                    <div
                      className="absolute top-0 left-0 h-full bg-slate-500"
                      style={{ width: `${(9.2 / 10) * 100}%` }}
                    ></div>
                  </div>
                  <span className="w-10 text-right font-semibold">9.2</span>
                </div>
                <div className="flex items-center gap-1 xl:gap-3">
                  <span className="w-20 text-sm lg:text-base font-medium">
                    Vệ sinh
                  </span>
                  <div className="relative flex-1 h-1.5 bg-slate-300 rounded-full overflow-hidden">
                    <div
                      className="absolute top-0 left-0 h-full bg-slate-500"
                      style={{ width: `${(9.2 / 10) * 100}%` }}
                    ></div>
                  </div>
                  <span className="w-10 text-right font-semibold">9.2</span>
                </div>
                <div className="flex items-center gap-1 xl:gap-3">
                  <span className="w-20 text-sm lg:text-base font-medium">
                    Tiện nghi
                  </span>
                  <div className="relative flex-1 h-1.5 bg-slate-300 rounded-full overflow-hidden">
                    <div
                      className="absolute top-0 left-0 h-full bg-slate-500"
                      style={{ width: `${(9.2 / 10) * 100}%` }}
                    ></div>
                  </div>
                  <span className="w-10 text-right font-semibold">9.2</span>
                </div>
              </div>
            </div>
            <div className="w-2/3 flex flex-col p-5 text-base xl:text-lg">
              <p className="w-full border-b border-slate-200 pb-3">
                Có 338 đánh giá
              </p>
              <div className="flex flex-wrap gap-3 py-3">
                {filterComment.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setFilterId(item.id)}
                    className={`px-3 py-2 rounded-md font-semibold ${
                      filterId === item.id
                        ? "bg-[#FF3366] text-white"
                        : "bg-[#CBCBCB] text-black"
                    }`}
                  >
                    {item.name} (333)
                  </button>
                ))}
              </div>
              <div className="flex flex-col">
                {[...Array(10)].map((_, index) => (
                  <div key={index} className="flex my-5">
                    <div className="w-[30%] flex flex-col gap-1 text-sm text-slate-700">
                      <Avatar
                        size={68}
                        icon={<UserOutlined className="text-[#FF3366]" />}
                        className="bg-[#FFD6E0]"
                      />
                      <span className="font-semibold text-black text-xl">
                        Anonymous
                      </span>
                      <div className="flex gap-2">
                        <Pencil className="w-4 h-4" />
                        <span>07/08/2025</span>
                      </div>
                      <div className="flex gap-2">
                        <BedDouble className="w-4 h-4" />
                        <span>Deluxe King</span>
                      </div>
                      <div className="flex gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>1 đêm tháng 5, 2025</span>
                      </div>
                      <div className="flex gap-2">
                        <BriefcaseBusiness className="w-4 h-4" />
                        <span>Gia đình có em bé</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-base xl:text-lg font-medium">
                        Dịch vụ ổn, đi đầu tuần nên xe điện có nhanh
                      </p>
                      <div className="flex gap-2 items-center">
                        <span className="bg-[#FF3366] text-white rounded-md px-2 text-12 font-semibold">
                          10
                        </span>
                        <span>Tuyệt vời</span>
                      </div>
                      <div className="flex gap-2 items-center mt-5 ml-auto justify-end">
                        <ThumbsUp className="text-slate-500" />
                        <span>1 |</span>
                        <span className="truncate">
                          Đánh giá này có hữu ích với bạn không?
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ReviewsModal;
