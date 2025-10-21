import React from "react";
import { Modal } from "antd";
import { amenities } from "@/data/data";
import { X } from "lucide-react";

interface ReviewsModalProps {
  isModalOpen: boolean;
  handleCancel: () => void;
}

const AmenitiesModal: React.FC<ReviewsModalProps> = ({
  isModalOpen,
  handleCancel,
}) => {
  return (
    <>
      <Modal
        title={
          <div className="p-5 flex justify-between">
            <span className="text-[26px] font-semibold">
              Tiện nghi khách sạn
            </span>
            <X onClick={handleCancel} className="cursor-pointer w-7 h-7" />
          </div>
        }
        style={{ top: 50 }}
        open={isModalOpen}
        closable={false}
        footer={null}
        width={{
          sm: "90%",
          xl: "50%",
        }}
        wrapClassName="custom-modal"
      >
        <div className="px-5 pt-5 flex flex-col h-[75vh] overflow-y-auto scroll-custom">
          <p className="text-lg font-medium">Phương tiện đi lại</p>
          <div className="grid grid-cols-3 py-4 gap-y-5">
            {amenities.map(({ id, name, icon: Icon }) => {
              return id < 4 ? (
                <div key={id} className="flex items-center gap-2">
                  <Icon className="w-7 h-7 text-slate-600" />
                  <span className="text-base">{name}</span>
                </div>
              ) : null;
            })}
          </div>
          <p className="text-lg font-medium">Thể thao</p>
          <div className="grid grid-cols-3 py-4 gap-y-5">
            {amenities.map(({ id, name, icon: Icon }) => {
              return id < 4 ? (
                <div key={id} className="flex items-center gap-2">
                  <Icon className="w-7 h-7 text-slate-600" />
                  <span className="text-base">{name}</span>
                </div>
              ) : null;
            })}
          </div>
          <p className="text-lg font-medium">Dịch vụ lễ tân</p>
          <div className="grid grid-cols-3 py-4 gap-y-5">
            {amenities.map(({ id, name, icon: Icon }) => {
              return id < 4 ? (
                <div key={id} className="flex items-center gap-2">
                  <Icon className="w-7 h-7 text-slate-600" />
                  <span className="text-base">{name}</span>
                </div>
              ) : null;
            })}
          </div>
          <p className="text-lg font-medium">Internet</p>
          <div className="grid grid-cols-3 py-4 gap-y-5">
            {amenities.map(({ id, name, icon: Icon }) => {
              return id < 4 ? (
                <div key={id} className="flex items-center gap-2">
                  <Icon className="w-7 h-7 text-slate-600" />
                  <span className="text-base">{name}</span>
                </div>
              ) : null;
            })}
          </div>
          <p className="text-lg font-medium">Thư giãn và làm đẹp</p>
          <div className="grid grid-cols-3 py-4 gap-y-5">
            {amenities.map(({ id, name, icon: Icon }) => {
              return id < 4 ? (
                <div key={id} className="flex items-center gap-2">
                  <Icon className="w-7 h-7 text-slate-600" />
                  <span className="text-base">{name}</span>
                </div>
              ) : null;
            })}
          </div>
          <p className="text-lg font-medium">Dịch vụ lau dọn</p>
          <div className="grid grid-cols-3 py-4 gap-y-5">
            {amenities.map(({ id, name, icon: Icon }) => {
              return id < 4 ? (
                <div key={id} className="flex items-center gap-2">
                  <Icon className="w-7 h-7 text-slate-600" />
                  <span className="text-base">{name}</span>
                </div>
              ) : null;
            })}
          </div>
          <p className="text-lg font-medium">Dịch vụ nhà hàng</p>
          <div className="grid grid-cols-3 py-4 gap-y-5">
            {amenities.map(({ id, name, icon: Icon }) => {
              return id < 6 ? (
                <div key={id} className="flex items-center gap-2">
                  <Icon className="w-7 h-7 text-slate-600" />
                  <span className="text-base">{name}</span>
                </div>
              ) : null;
            })}
          </div>
          <p className="text-lg font-medium">Dịch vụ trẻ em</p>
          <div className="grid grid-cols-3 py-4 gap-y-5">
            {amenities.map(({ id, name, icon: Icon }) => {
              return id < 6 ? (
                <div key={id} className="flex items-center gap-2">
                  <Icon className="w-7 h-7 text-slate-600" />
                  <span className="text-base">{name}</span>
                </div>
              ) : null;
            })}
          </div>
          <p className="text-lg font-medium">Dịch vụ cho doanh nhân</p>
          <div className="grid grid-cols-3 py-4 gap-y-5">
            {amenities.map(({ id, name, icon: Icon }) => {
              return id < 10 && id > 5 ? (
                <div key={id} className="flex items-center gap-2">
                  <Icon className="w-7 h-7 text-slate-600" />
                  <span className="text-base">{name}</span>
                </div>
              ) : null;
            })}
          </div>
          <p className="text-lg font-medium">
            Dịch vụ hồ bơi và chăm sóc sức khoẻ
          </p>
          <div className="grid grid-cols-3 py-4 gap-y-5">
            {amenities.map(({ id, name, icon: Icon }) => {
              return id < 10 && id > 5 ? (
                <div key={id} className="flex items-center gap-2">
                  <Icon className="w-7 h-7 text-slate-600" />
                  <span className="text-base">{name}</span>
                </div>
              ) : null;
            })}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AmenitiesModal;
