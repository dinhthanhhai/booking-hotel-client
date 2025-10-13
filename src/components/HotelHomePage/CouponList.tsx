import React from "react";
import Coupon from "@/components/coupon/Coupon";

const CouponList: React.FC = () => {
  return (
    <div className="custom-page-margin mt-8 mb-10">
      <p className="text-2xl font-semibold">
        Mã giảm giá <span className="text-[#FF3366]">(2)</span>
      </p>
      <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-5">
        <Coupon />
        <Coupon />
      </div>
    </div>
  );
};

export default CouponList;
