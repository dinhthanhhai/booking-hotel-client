import React, { useState } from "react";
import { X } from "lucide-react";

const Coupon: React.FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <div className="flex w-full bg-[#FFF5F7]">
      <div
        className="w-2/3 p-4 relative rounded-lg border-t border-l border-b border-t-pink-500 border-l-pink-500 border-b-pink-500 border-r border-r-pink-500"
        style={{ borderRightStyle: "dashed" }}
      >
        {/* Hình tròn */}
        <div className="w-6 h-3 overflow-hidden  absolute -top-[1px] -right-3">
          <div className="w-6 h-6 bg-white border border-pink-500 rounded-full -translate-y-1/2"></div>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 line-clamp-1">
          Giảm 8% đơn đặt phòng khách sạn
        </h3>
        <p className="text-sm text-gray-500 mt-2">Hạn sử dụng: 30/09</p>
        <p className="text-sm text-gray-500">Nhập mã khi thanh toán</p>
        <p
          className="text-sm text-pink-500 mt-1 underline cursor-pointer"
          onClick={() => setOpenModal(true)}
        >
          Điều kiện &amp; thể lệ chương trình
        </p>
        {/* Hình tròn */}
        <div className="w-6 h-3 overflow-hidden absolute -bottom-[1px] -right-3">
          <div className="w-6 h-6 bg-white border border-pink-500 rounded-full"></div>
        </div>
      </div>

      <div
        className="w-1/3 flex flex-col justify-center items-center p-4 rounded-lg border-t border-r border-b border-t-pink-500 border-r-pink-500 border-b-pink-500 border-l border-l-pink-500"
        style={{ borderLeftStyle: "dashed" }}
      >
        <span className="text-lg">Nhập mã</span>
        <span className="text-pink-500 font-bold text-xl overflow-hidden text-ellipsis whitespace-nowrap max-w-full">
          DIUDANG255
        </span>
        <button className="mt-2 bg-[#FF3366] text-white text-lg px-3 py-1 rounded-lg font-medium">
          Sao chép
        </button>

        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border border-pink-500 rounded-full -translate-x-1/2"></div>
      </div>
      {openModal && (
        <div className="fixed z-50 inset-0 bg-black/30">
          <div className="w-[80%] sm:w-[460px] max-h-[80%] px-5 py-4 bg-white rounded-lg mx-auto mt-[110px] overflow-y-auto">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold">
                Điều kiện & thể lệ chương trình
              </span>
              <X onClick={() => setOpenModal(false)} />
            </div>
            <div className="mt-5 text-slate-900 tracking-tight">
              <p>
                - Giảm ngay 8% cho đơn phòng khách sạn (mức giảm áp dụng cho giá
                trị đơn chưa bao gồm thuế phí).
              </p>
              <p>- Ưu đãi được áp dụng cho một số hạng phòng của khách sạn</p>
              <p>
                - Ưu đãi không được áp dụng cùng các chương trình khuyến mãi
                khác.
              </p>
              <p>
                - Mỗi khách hàng chỉ được hưởng ưu đãi 01 lần/ chương trình.
                Chương trình chỉ áp dụng cho khách hàng cá nhân.
              </p>
              <p>
                - Nếu phát hiện các đặt phòng có dấu hiệu lạm dụng, trục lợi ưu
                đãi, Mytour có quyền từ chối áp dụng.
              </p>
              <p>- Áp dụng hoàn hủy theo chính sách khách sạn.</p>
              <p>
                - Mytour có quyền thay đổi điều khoản và thể lệ của chương trình
                khuyến mại mà không cần thông báo trước. Vui lòng truy cập
                Mytour.vn để cập nhật các ưu đãi và chính sách mới nhất.
              </p>
              <p>- Mọi quyết định của Mytour là kết quả cuối cùng.</p>
              <p>***Mọi thắc mắc vui lòng liên hệ 1900 2083.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Coupon;
