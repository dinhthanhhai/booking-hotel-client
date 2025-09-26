import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <div className="bg-[#F7FAFC] px-[10%] xl:px-[12%] py-8">
      <p className="text-5xl text-[#FF3366] font-bold">mytour</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 xs:gap-5 pt-10 pb-7 border-b-2 border-slate-300">
        <div className="text-12 text-slate-600 flex flex-col gap-2">
          <p className="font-semibold text-base text-black">
            Công ty cổ phần du lịch Việt Nam VNTravel
          </p>
          <div className="flex gap-1 items-center mt-1">
            <img
              src="/icons/Icon_of_Zalo.svg.webp"
              className="w-4 h-4"
              alt="zalo-logo"
            />
            <span className="text-blue-600">Zalo Mytour</span>
          </div>
          <p>Email: hotro@mytour.vn</p>
          <p>Văn phòng Hà Nội: Tầng 20, Tòa HUD Tower, số 37 Lê Văn Lương,</p>
          <p>Phường Thanh Xuân, Thành phố Hà Nội, Việt Nam</p>
          <div className="flex gap-2 flex-wrap justify-between">
            <img src="/images/logo-blue.png" className="w-26 rounded-lg" />
            <img src="/images/logo-mytour.png" className="w-26" />
            <img src="/images/iata.webp" className="w-24" />
          </div>
        </div>
        <div className="text-12 text-slate-600 flex flex-col gap-2">
          <p className="font-semibold text-base text-black">
            Chính sách & Quy định
          </p>
          <Link to={"#"}>Điều khoản và điều kiện</Link>
          <Link to={"#"}>Quy định về thanh toán</Link>
          <Link to={"#"}>Chính sách bảo mật thông tin</Link>
          <Link to={"#"}>Quy chế hoạt động</Link>
          <Link to={"#"}>Chương trình khách hàng thân thiết</Link>
          <Link to={"#"}>Chương trình đánh giá trải nghiệm khách sạn</Link>
        </div>
        <div className="text-12 text-slate-600 flex flex-col gap-2">
          <p className="font-semibold text-base text-black">
            Khách hàng và đối tác
          </p>
          <Link to={"#"}>Giới thiệu nhận quà</Link>
          <Link to={"#"}>Hợp tác với chúng tôi</Link>
          <Link to={"#"}>Đăng nhập HMS</Link>
          <Link to={"#"}>Tuyển dụng</Link>
        </div>
      </div>
      <div className="pt-5 flex flex-col items-center tracking-tighter text-sm text-slate-500">
        <p className="text-center">
          Mytour là thành viên của VNTravel Group - Một trong những tập đoàn
          đứng đầu Đông Nam Á về du lịch trực tuyến và các dịch vụ liên quan.
        </p>
        <img
          src="/banner/icon_company_group_l.svg"
          className="h-8 mt-5"
          alt="logo"
        />
        <p className="pt-7 text-center">
          Copyright © 2020 - CÔNG TY CỔ PHẦN DU LỊCH VIỆT NAM VNTRAVEL - Đăng ký
          kinh doanh số 0108886908 - do Sở Kế hoạch và Đầu tư thành phố Hà Nội
          cấp lần đầu ngày 04 tháng 09 năm 2019
        </p>
      </div>
    </div>
  );
};

export default Footer;
