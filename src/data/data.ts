import type { HeaderLink, SidebarLink, StayOption, City } from "@/types/types";

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

export const cities: City[] = [
  {
    id: "01",
    name: "Hà Nội",
    cit_alias: "ha-noi",
  },
  {
    id: "02",
    name: "Hà Giang",
    cit_alias: "ha-giang",
  },
  {
    id: "04",
    name: "Cao Bằng",
    cit_alias: "cao-bang",
  },
  {
    id: "06",
    name: "Bắc Kạn",
    cit_alias: "bac-kan",
  },
  {
    id: "08",
    name: "Tuyên Quang",
    cit_alias: "tuyen-quang",
  },
  {
    id: "10",
    name: "Lào Cai",
    cit_alias: "lao-cai",
  },
  {
    id: "11",
    name: "Điện Biên",
    cit_alias: "dien-bien",
  },
  {
    id: "12",
    name: "Lai Châu",
    cit_alias: "lai-chau",
  },
  {
    id: "14",
    name: "Sơn La",
    cit_alias: "son-la",
  },
  {
    id: "15",
    name: "Yên Bái",
    cit_alias: "yen-bai",
  },
  {
    id: "17",
    name: "Hoà Bình",
    cit_alias: "hoa-binh",
  },
  {
    id: "19",
    name: "Thái Nguyên",
    cit_alias: "thai-nguyen",
  },
  {
    id: "20",
    name: "Lạng Sơn",
    cit_alias: "lang-son",
  },
  {
    id: "22",
    name: "Quảng Ninh",
    cit_alias: "quang-ninh",
  },
  {
    id: "24",
    name: "Bắc Giang",
    cit_alias: "bac-giang",
  },
  {
    id: "25",
    name: "Phú Thọ",
    cit_alias: "phu-tho",
  },
  {
    id: "26",
    name: "Vĩnh Phúc",
    cit_alias: "vinh-phuc",
  },
  {
    id: "27",
    name: "Bắc Ninh",
    cit_alias: "bac-ninh",
  },
  {
    id: "30",
    name: "Hải Dương",
    cit_alias: "hai-duong",
  },
  {
    id: "31",
    name: "Hải Phòng",
    cit_alias: "hai-phong",
  },
  {
    id: "33",
    name: "Hưng Yên",
    cit_alias: "hung-yen",
  },
  {
    id: "34",
    name: "Thái Bình",
    cit_alias: "thai-binh",
  },
  {
    id: "35",
    name: "Hà Nam",
    cit_alias: "ha-nam",
  },
  {
    id: "36",
    name: "Nam Định",
    cit_alias: "nam-dinh",
  },
  {
    id: "37",
    name: "Ninh Bình",
    cit_alias: "ninh-binh",
  },
  {
    id: "38",
    name: "Thanh Hóa",
    cit_alias: "thanh-hoa",
  },
  {
    id: "40",
    name: "Nghệ An",
    cit_alias: "nghe-an",
  },
  {
    id: "42",
    name: "Hà Tĩnh",
    cit_alias: "ha-tinh",
  },
  {
    id: "44",
    name: "Quảng Bình",
    cit_alias: "quang-binh",
  },
  {
    id: "45",
    name: "Quảng Trị",
    cit_alias: "quang-tri",
  },
  {
    id: "46",
    name: "Thừa Thiên Huế",
    cit_alias: "thua-thien-hue",
  },
  {
    id: "48",
    name: "Đà Nẵng",
    cit_alias: "da-nang",
  },
  {
    id: "49",
    name: "Quảng Nam",
    cit_alias: "quang-nam",
  },
  {
    id: "51",
    name: "Quảng Ngãi",
    cit_alias: "quang-ngai",
  },
  {
    id: "52",
    name: "Bình Định",
    cit_alias: "binh-dinh",
  },
  {
    id: "54",
    name: "Phú Yên",
    cit_alias: "phu-yen",
  },
  {
    id: "56",
    name: "Khánh Hòa",
    cit_alias: "khanh-hoa",
  },
  {
    id: "58",
    name: "Ninh Thuận",
    cit_alias: "ninh-thuan",
  },
  {
    id: "60",
    name: "Bình Thuận",
    cit_alias: "binh-thuan",
  },
  {
    id: "62",
    name: "Kon Tum",
    cit_alias: "kon-tum",
  },
  {
    id: "64",
    name: "Gia Lai",
    cit_alias: "gia-lai",
  },
  {
    id: "66",
    name: "Đắk Lắk",
    cit_alias: "dak-lak",
  },
  {
    id: "67",
    name: "Đắk Nông",
    cit_alias: "dak-nong",
  },
  {
    id: "68",
    name: "Lâm Đồng",
    cit_alias: "lam-dong",
  },
  {
    id: "70",
    name: "Bình Phước",
    cit_alias: "binh-phuoc",
  },
  {
    id: "72",
    name: "Tây Ninh",
    cit_alias: "tay-ninh",
  },
  {
    id: "74",
    name: "Bình Dương",
    cit_alias: "binh-duong",
  },
  {
    id: "75",
    name: "Đồng Nai",
    cit_alias: "dong-nai",
  },
  {
    id: "77",
    name: "Bà Rịa - Vũng Tàu",
    cit_alias: "ba-ria-vung-tau",
  },
  {
    id: "79",
    name: "Hồ Chí Minh",
    cit_alias: "ho-chi-minh",
  },
  {
    id: "80",
    name: "Long An",
    cit_alias: "long-an",
  },
  {
    id: "82",
    name: "Tiền Giang",
    cit_alias: "tien-giang",
  },
  {
    id: "83",
    name: "Bến Tre",
    cit_alias: "ben-tre",
  },
  {
    id: "84",
    name: "Trà Vinh",
    cit_alias: "tra-vinh",
  },
  {
    id: "86",
    name: "Vĩnh Long",
    cit_alias: "vinh-long",
  },
  {
    id: "87",
    name: "Đồng Tháp",
    cit_alias: "dong-thap",
  },
  {
    id: "89",
    name: "An Giang",
    cit_alias: "an-giang",
  },
  {
    id: "91",
    name: "Kiên Giang",
    cit_alias: "kien-giang",
  },
  {
    id: "92",
    name: "Cần Thơ",
    cit_alias: "can-tho",
  },
  {
    id: "93",
    name: "Hậu Giang",
    cit_alias: "hau-giang",
  },
  {
    id: "94",
    name: "Sóc Trăng",
    cit_alias: "soc-trang",
  },
  {
    id: "95",
    name: "Bạc Liêu",
    cit_alias: "bac-lieu",
  },
  {
    id: "96",
    name: "Cà Mau",
    cit_alias: "ca-mau",
  },
];
