import type { HeaderLink, SidebarLink, StayOption } from "@/types/types";

export const ListLinkHeader: HeaderLink[] = [
  {
    name: "Khách sạn",
    url: "",
  },
  {
    name: "Vé máy bay",
    url: "ve-may-bay",
  },
  {
    name: "Top thương hiệu",
    url: "top-thuong-hieu",
    note: "mall",
  },
  {
    name: "Biệt thự, Homestay",
    url: "homestay",
    note: "plus",
  },
  {
    name: "Khách sạn tiết kiệm",
    url: "khach-san-tiet-kiem",
    note: "-100k",
  },
  {
    name: "Tour nước ngoài",
    url: "tour-nuoc-ngoai",
    note: "-1tr",
  },
  {
    name: "Bảo hiểm",
    url: "bao-hiem",
    note: "-50%",
  },
  {
    name: "Mytour Gift Card",
    url: "mytour-gift",
  },
];

export const ListSidebarLink: SidebarLink[] = [
  {
    name: "Trang chủ",
    url: "",
    icon: "/icons/home.png",
  },
  {
    name: "Yêu thích",
    url: "yeu-thich",
    icon: "/icons/heart.png",
  },
  {
    name: "Vé máy bay",
    url: "ve-may-bay",
    icon: "/icons/plane.png",
  },
  {
    name: "Tour & Sự kiện",
    url: "tour-nuoc-ngoai",
    icon: "/icons/tour.png",
  },
  {
    name: "Cẩm nang du lịch",
    url: "blog",
    icon: "/icons/blog.png",
  },
  {
    name: "Tuyển dụng",
    url: "/tuyen-dung",
    icon: "/icons/tour.png",
  },
  {
    name: "Hỗ trợ",
    url: "ho-tro",
    icon: "/icons/support.png",
  },
  {
    name: "Trở thành đối tác liên kết",
    url: "doi-tac-lien-ket",
    icon: "/icons/money.png",
  },
  {
    name: "Hợp tác với chúng tôi",
    url: "partnership",
    icon: "/icons/hands.png",
  },
  {
    name: "Tải ứng dụng Mytour",
    url: "tai-ung-dung",
    icon: "/icons/phone.png",
  },
  {
    name: "Giới thiệu nhận quà",
    url: "gioi-thieu-nhan-qua",
    icon: "/icons/link.png",
  },
];

export const stayOptionList: StayOption[] = [
  {
    id: 1,
    name: "Đi một mình",
    note: "1 phòng, 1 người lớn",
  },
  {
    id: 2,
    name: "Đi cặp đôi/2 người",
    note: "1 phòng, 2 người lớn",
  },
  {
    id: 3,
    name: "Đi theo gia đình",
  },
  {
    id: 4,
    name: "Đi theo nhóm",
  },
  {
    id: 5,
    name: "Đi công tác",
  },
];
