import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { ReactElement } from "react";
import { FaPhoneFlip } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { NextPageWithLayout } from "./_app";

const Contact: NextPageWithLayout = () => {
  return (
    <section className="bg-gray-50/50">
      <div className="grid md:grid-flow-col md:grid-cols-2 gap-5 max-w-7xl mx-auto pt-[30px] pb-[60px] px-5">
        <div className="bg-white shadow-md rounded p-6">
          <h2 className="block text-2xl font-medium mb-6 text-blue-400">
            Liên Hệ Gia Công Với I.C.H
          </h2>
          <p className="text-base font-light text-black-100 mb-3">
            Quý khách có nhu cầu tư vấn gia công sản xuất mỹ phẩm, sản phẩm chăm
            sóc gia đình, hãy gửi yêu cầu cho I.C.H theo thông tin hỗ trợ dưới
            đây. Đội ngũ CSKH sẽ liên hệ lại ngay để hỗ trợ cho Quý khách.
          </p>
          <p className="text-base font-light text-black-100 mb-3">
            <strong className="font-bold">Tư Vấn Chuyên Môn</strong>
          </p>
          <button className=" border-blue-400 border-[1px] rounded-full p-3 text-blue-400 mb-3">
            <FaPhoneFlip className="inline-block" size={16} /> Gọi Ngay
          </button>
          <p className="text-base font-light text-black-100 mb-3">
            <strong className="font-bold">Yêu Cầu Báo Giá</strong>
          </p>
          <p className="text-base font-light mb-3 text-blue-400">
            <MdMail className="inline-block" size={16} /> ichcosmetic@gmail.com
          </p>
          <p className="text-base font-light text-black-100 mb-3">
            <strong className="font-bold">Tư Vấn Gia Công</strong>
          </p>
          <p className="text-base font-light mb-3 text-black-100">
            <FaPhoneFlip className="inline-block" size={16} /> Thuỳ Lâm:{" "}
            <span className="text-red-500 font-bold">070.700.0004</span>{" "}
            (Hotline/Zalo)
          </p>
          <p className="text-base font-light text-black-100 mb-3">
            Kết nối Zalo để được tư vấn:{" "}
            <strong className="font-bold">https://zalo.me/0707000004</strong>
          </p>
        </div>
        <div className="bg-white shadow-md rounded p-6">
          <h2 className="block text-2xl font-medium mb-6 text-blue-400">
            Địa Chỉ I.C.H
          </h2>
          <p className="text-base text-blue-400 font-bold mb-3">Sóc Trăng</p>

          <p className="text-base font-light text-black-100 mb-3">
            <strong className="font-bold">VP đại diện: </strong>159 Nguyễn Đình
            Chiễu, Khóm 3, Phường 4, Sóc Trăng.
          </p>
          <p className="text-base font-light mb-3 text-black-100">
            <FaPhoneFlip className="inline-block" size={16} /> Hotline/Zalo Tư
            Vấn Chuyên Môn:{" "}
            <span className="text-red-500 font-bold">070.700.0004</span>{" "}
            (Hotline/Zalo)
          </p>

          <p className="text-base font-light mb-3 text-black-100">
            <FaPhoneFlip className="inline-block" size={16} /> Hotline/Zalo Hỗ
            Trợ Khách Hàng:{" "}
            <span className="text-red-500 font-bold">070.700.0004</span>{" "}
            (Hotline/Zalo)
          </p>
          <p className="text-base font-light text-black-100 mb-3">
            <strong className="font-bold">Thời gian làm việc: </strong> 7h30 –
            17h00 (Thứ 2 – Thứ 7)
          </p>
        </div>
      </div>
    </section>
  );
};

Contact.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Contact;
