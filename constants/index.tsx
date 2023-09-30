import { NavBarLink, SideBarEnum, SideBarProps } from "@/common.type";
import { BsPostcard } from "react-icons/bs";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { BiSolidContact } from "react-icons/bi";

export const sideBar: SideBarProps[] = [
  {
    type: SideBarEnum.DEFAULT,
    props: {
      path: "/manager/contacts",
      name: "Contacts",
      icon: <BiSolidContact size={20} />,
    },
  },
  {
    type: SideBarEnum.LIST,
    props: {
      name: "Posts",
      icon: <BsPostcard size={20} />,
      list: [
        { path: "/manager/posts", name: "Posts" },
        { path: "/manager/posts/create", name: "Create New Post" },
      ],
    },
  },
  {
    type: SideBarEnum.LIST,
    props: {
      name: "Users",
      icon: <HiOutlineUserCircle size={20} />,
      list: [
        { path: "/manager/users/create", name: "Create" },
        { path: "/manager/users", name: "Detail" },
      ],
    },
  },
];

export const navbarLinks: NavBarLink[] = [
  {
    link: "/about",
    name: "Về I.C.H",
  },
  {
    link: "/cosmetic-processing",
    name: "Gia Công Mỹ Phẩm",
    sublinks: [
      {
        link: "/",
        name: "Gia Công Kem",
      },
      {
        link: "/",
        name: "Gia Công Nước Hoa",
      },
      {
        link: "/",
        name: "Gia Công Sữa Rửa Mặt",
      },
      {
        link: "/",
        name: "Gia Công Serum",
      },
      {
        link: "/",
        name: "Gia Công Dầu Gọi",
      },
      {
        link: "/",
        name: "Gia Công Mặt Nạ",
      },
    ],
  },
  {
    link: "/services",
    name: "Dịch Vụ",
    sublinks: [
      {
        link: "/cosmetic-disclosure-service",
        name: "Công Bố Mỹ Phẩm",
      },
      {
        link: "/barcode-registration",
        name: "Đăng Ký Mã Vạch Sản Phẩm",
      },
      {
        link: "/protect-brand",
        name: "Đăng Ký Bảo Hộ Thương Hiệu",
      },
      {
        link: "/packaging-design",
        name: "Thiết Kế Bao Bì Mỹ Phẩm",
      },
    ],
  },
  {
    link: "/news",
    name: "Tin Tức",
  },
  {
    link: "/contact",
    name: "Liên Hệ",
  },
];

export const cosmeticProcessing: {
  id: number;
  title: string;
  description: string;
}[] = [
  {
    id: 1,
    title: "Tiếp nhận nhu cầu khách hàng",
    description:
      "Ghi nhận ý tưởng sản phẩm khách hàng mong muốn. Tiến hành chọn lọc, nghiên cứu và đưa ra chiến lược phù hợp và hiệu quả nhất.",
  },
  {
    id: 2,
    title: "Miễn phí mẫu thử",
    description:
      "Đội ngũ chuyên viên R&D tiếp nhận nhu cầu và thực hiện quá trình nghiên cứu công thức rồi đưa ra mẫu thử miễn phí đến khách hàng để kiểm tra mức độ hài lòng và tiến hành thay đổi khi KH có yêu cầu bổ sung.",
  },
  {
    id: 3,
    title: "Tư vấn bao bì",
    description:
      "Hỗ trợ tư vấn và chọn lựa kiểu dáng, màu sắc, chất liệu sản phẩm cùng khách hàng sao cho vừa mang yếu tố tiện lợi, vừa mang tính thẩm mỹ cao, phù hợp với từng loại sản phẩm khác nhau.",
  },
  {
    id: 4,
    title: "Ký hợp đồng",
    description:
      "Sau khi xác nhận mẫu thử, I.C.H cùng khách hàng ký hợp đồng và thực hiện quy trình đặt cọc đơn hàng. Sau đó, I.C.H sẽ tiến hành sản xuất đơn hàng theo yêu cầu.",
  },
  {
    id: 5,
    title: "Sản xuất và kiểm tra chất lượng",
    description:
      "I.C.H tiến hành sản xuất theo công thức đã thỏa thuận và kiểm tra chất lượng trong suốt quá trình. Mọi sai sót đều được ghi nhận và chỉnh sửa ngay trong thời điểm đó nhằm đảm bảo chất lượng sản phẩm luôn ổn định.",
  },
  {
    id: 6,
    title: "Thiết kế và in ấn",
    description:
      "Sau khi thỏa thuận cùng khách hàng về bao bì mẫu mã sản phẩm I.C.H sẽ tiến hành lên bản thiết kế 3D cụ thể. Sau đó thống nhất với khách hàng và tiến hành cho in ấn sản phẩm.",
  },
  {
    id: 7,
    title: "Hoàn thiện pháp lý",
    description:
      "Với kinh nghiệm nhiều năm trong nghề, I.C.H tự tin hỗ trợ quý khách hàng hoàn thiện các thủ tục pháp lý cần thiết cách chuyên nghiệp và nhanh chóng từ giấy tờ kiểm định sản phẩm, hồ sơ công bố sản phẩm đủ tiêu chuẩn lưu hành trên thị trường.",
  },
  {
    id: 8,
    title: "Giao hàng",
    description:
      "I.C.H sẽ tiến hàng đóng gói cẩn thận và giao đến tận tay để khách hàng dễ dàng kiểm tra về số lượng, chất lượng sản phẩm sau khi hoàn thiện.",
  },
];

export const whyToBook: {
  id: number;
  title: string;
  description: string;
}[] = [
  {
    id: 1,
    title: "NHÀ MÁY ĐẠT CHUẨN CGMP",
    description:
      "Nhà máy được đầu tư với quy mô lớn, trang bị đầy đủ các thiết bị và máy móc hiện đại đạt chuẩn cGMP.",
  },
  {
    id: 2,
    title: "QUY TRÌNH KHÉP KÍN",
    description:
      "I.C.H liên tục cập nhật các xu hướng mới cải tiến và nâng cao sản phẩm cho khách hàng.",
  },
  {
    id: 3,
    title: "NGUYÊN LIỆU THIÊN NHIÊN",
    description:
      "Nguyên liệu sản xuất đạt chuẩn có nguồn gốc từ thiên nhiên không độc hại cho sản phẩm.",
  },
  {
    id: 4,
    title: "ĐỘI NGŨ GIÀU KINH NGHIỆM",
    description:
      "Với đội ngũ dày dặn kinh nghiệm chuyên môn luôn mang đến cho khách hàng nhưng sản phẩm tốt nhất.",
  },
  {
    id: 5,
    title: "HỖ TRỢ KH CÔNG BỐ MỸ PHẨM",
    description:
      "Chỉ 7 ngày làm việc khách hàng sẽ sở hữu Giấy phép công bố lưu hành sản phẩm.",
  },
  {
    id: 6,
    title: "MẪU THỬ MIỄN PHÍ",
    description:
      "Khách hàng được trải nghiệm mẫu thử, tuỳ chỉnh theo yêu cầu mong muốn mà không áp dụng thu phí.",
  },
];

export const products = [
  {
    id: 1,
    title: "Kem",
    image: "/images/dau-goi.jpg",
    link: "",
  },
  {
    id: 2,
    title: "Nước Hoa",
    image: "/images/serum.jpg",
    link: "",
  },
  {
    id: 3,
    title: "Sửa Rửa Mặt",
    image: "/images/kem-b5.jpg",
    link: "",
  },
  {
    id: 4,
    title: "Serum",
    image: "/images/kem-b5.jpg",
    link: "",
  },
  {
    id: 5,
    title: "Dầu Gọi",
    image: "/images/product4.png",
    link: "",
  },
  {
    id: 6,
    title: "Mặt Nạ",
    image: "/images/kem-body.jpg",
    link: "",
  },
];
