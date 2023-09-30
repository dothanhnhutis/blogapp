import Image from "next/image";
import Link from "next/link";
import {
  FaHome,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaChevronRight,
  FaPhoneAlt,
} from "react-icons/fa";
import { BsBookmarkFill } from "react-icons/bs";
import { MdMail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <section className="flex flex-col md:flex-row p-5 md:space-x-3 max-w-7xl mx-auto">
        <div className="md:basis-1/4 flex flex-col items-center">
          <Image src="/images/logo.png" width={110} height={110} alt="Logo" />
          <p className="font-bold text-lg pb-1 text-blue-900 pt-2 text-center uppercase">
            CÔNG TY TNHH MTV TM SẢN XUẤT I.C.H
          </p>
          <span className="text-gray-500 justify-self-start w-full text-base mb-2">
            <BsBookmarkFill
              size={20}
              className="text-blue-400 inline-block mr-1 align-middle"
            />
            MST: 2200773307
          </span>
          <p className="text-gray-500 justify-self-start w-full align-middle text-base mb-2 ">
            <FaHome size={20} className="text-blue-400 inline-block mr-1 " />
            159 Nguyễn Đình Chiễu, Khóm 3, Phường 4, Sóc Trăng.
          </p>
          <p className="text-gray-500 justify-self-start w-full align-middle text-base mb-2">
            <MdMail size={20} className="text-blue-400 inline-block mr-1" />
            ichcosmetic@gmail.com
          </p>
          <p className="text-gray-500 justify-self-start w-full align-middle text-base mb-2">
            <FaPhoneAlt size={20} className="text-blue-400 inline-block mr-1" />
            070 700 0004
          </p>
        </div>
        <div className="md:basis-1/4">
          <p className="font-bold text-lg pb-1 text-blue-900 pt-2 uppercase">
            Thông Tin
          </p>
          <ul>
            <li className="mb-2 align-middle">
              <Link
                href="/about"
                className="text-gray-500 justify-self-start w-full align-middle text-base"
              >
                <FaChevronRight
                  size={16}
                  className="text-blue-400 inline-block mr-1 "
                />
                Giới Thiệu
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/contact"
                className="text-gray-500 justify-self-start w-full align-middle text-base"
              >
                <FaChevronRight
                  size={16}
                  className="text-blue-400 inline-block mr-1 "
                />
                Liên Hệ
              </Link>
            </li>
          </ul>
          <div className="flex space-x-4 pt-4 mb-4">
            <Link href="#">
              <FaFacebook size={24} className="text-blue-400 hover:scale-125" />
            </Link>
            <Link href="#">
              <FaTwitter size={24} className="text-blue-400 hover:scale-125" />
            </Link>
            <Link href="#">
              <FaYoutube size={24} className="text-blue-400 hover:scale-125" />
            </Link>
          </div>
        </div>

        <div className="md:basis-1/4">
          <p className="font-bold text-lg pb-1 text-blue-900 pt-2 uppercase">
            Gia Công Mỹ Phẩm
          </p>
          <ul>
            <li className="mb-2 align-middle">
              <Link
                href="#"
                className="text-gray-500 justify-self-start w-full align-middle text-base"
              >
                <FaChevronRight
                  size={16}
                  className="text-blue-400 inline-block mr-1 "
                />
                Gia Công Kem
              </Link>
            </li>
            <li className="mb-2 align-middle">
              <Link
                href="#"
                className="text-gray-500 justify-self-start w-full align-middle text-base"
              >
                <FaChevronRight
                  size={16}
                  className="text-blue-400 inline-block mr-1 "
                />
                Gia Công Nước Hoa
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="#"
                className="text-gray-500 justify-self-start w-full align-middle text-base"
              >
                <FaChevronRight
                  size={16}
                  className="text-blue-400 inline-block mr-1 "
                />
                Gia Công Sửa Rửa Mặt
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="#"
                className="text-gray-500 justify-self-start w-full align-middle text-base"
              >
                <FaChevronRight
                  size={16}
                  className="text-blue-400 inline-block mr-1 "
                />
                Gia Công Serum
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="#"
                className="text-gray-500 justify-self-start w-full align-middle text-base"
              >
                <FaChevronRight
                  size={16}
                  className="text-blue-400 inline-block mr-1 "
                />
                Gia Công Dầu Gội
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="#"
                className="text-gray-500 justify-self-start w-full align-middle text-base"
              >
                <FaChevronRight
                  size={16}
                  className="text-blue-400 inline-block mr-1 "
                />
                Gia Công Mặt Nạ
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:basis-1/4">
          <p className="font-bold text-lg pb-1 text-blue-900 pt-2 uppercase">
            Dịch Vụ
          </p>
          <ul>
            <li className="mb-2 align-middle">
              <Link
                href="/cosmetic-disclosure-service"
                className="text-gray-500 justify-self-start w-full align-middle text-base"
              >
                <FaChevronRight
                  size={16}
                  className="text-blue-400 inline-block mr-1 "
                />
                Công Bố Mỹ Phẩm
              </Link>
            </li>
            <li className="mb-2 align-middle">
              <Link
                href="/barcode-registration"
                className="text-gray-500 justify-self-start w-full align-middle text-base"
              >
                <FaChevronRight
                  size={16}
                  className="text-blue-400 inline-block mr-1 "
                />
                Đăng Ký Mã Vạch Sản Phẩm
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/protect-brand"
                className="text-gray-500 justify-self-start w-full align-middle text-base"
              >
                <FaChevronRight
                  size={16}
                  className="text-blue-400 inline-block mr-1 "
                />
                Đăng Ký Bảo Hộ Thương Hiệu
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/packaging-design"
                className="text-gray-500 justify-self-start w-full align-middle text-base"
              >
                <FaChevronRight
                  size={16}
                  className="text-blue-400 inline-block mr-1 "
                />
                Thiết Kế Bao Bì Mỹ Phẩm
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <section className="  bg-blue-500">
        <div className="flex flex-col md:flex-row justify-start md:justify-between items-start sm:items-center md:text-center text-start mx-auto max-w-7xl p-5">
          <p className="text-white text-sm order-1 md:order-none mt-1 sm:mt-0">
            © 2023 All rights reserved
          </p>
          <ul className="flex sm:space-x-3 space-y-1 sm:space-y-0 flex-col sm:flex-row ">
            <li>
              <Link href="/payment-policy">
                <p className="text-white text-sm">Chính sách thanh toán</p>
              </Link>
            </li>
            <li>
              <Link href="/warranty-policy">
                <p className="text-white text-sm">Chính sách bảo hành</p>
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy">
                <p className="text-white text-sm">Chính sách bảo mật</p>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
