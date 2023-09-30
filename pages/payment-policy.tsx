import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Image from "next/image";
import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";

const PaymentPolicy: NextPageWithLayout = () => {
  return (
    <section className="bg-gray-50/50">
      <div className="max-w-7xl mx-auto pt-[30px] pb-[60px]">
        <div className="mx-5 px-3 pt-5 pb-8 shadow rounded bg-white">
          <h1 className="block text-center text-2xl font-medium mb-6 text-blue-400">
            CHÍNH SÁCH THANH TOÁN
          </h1>
          <figure className="mb-8 block mx-auto ">
            <div className="flex items-center justify-center">
              <div>
                <Image
                  className="inline-block align-middle max-w-full"
                  alt=""
                  src="/images/payment.jpeg"
                  width={960}
                  height={500}
                />
                <figcaption className="italic text-center text-sm p-2 bg-gray-50/70 ">
                  Chính sách thanh toán tại I.C.H
                </figcaption>
              </div>
            </div>
          </figure>
          <p className="text-base font-light text-black-100 mb-3">
            Nhằm giúp khách hàng thuận tiện hơn trong việc thanh toán hợp đồng.
            I.C.H gửi đến khách hàng 2 phương thức thanh toán chính:
          </p>

          <ul className="text-base font-light text-black-100 mb-3 list-disc ml-5 space-y-2">
            <li>
              Thanh toán bằng <strong className="font-bold">tiền mặt.</strong>
            </li>
            <li>
              Thanh toán <strong className="font-bold">chuyển khoản</strong>{" "}
              ngân hàng đến số tài khoản:
            </li>
          </ul>
          <p className="text-base font-light text-black-100 mb-3">
            Công ty TNHH MTV TM Sản Xuất I.C.H –{" "}
            <strong className="font-bold">
              0321 000 623209 ( Vietcombank )
            </strong>
          </p>
          <p className="text-base font-light text-black-100 mb-3">
            Cá nhân – Giám đốc – anh Lê Minh Đức:{" "}
            <strong className="font-bold">
              0321 000 623209 ( Vietcombank )
            </strong>
          </p>
          <p className="text-base font-light text-black-100 mb-3">
            Quý khách hàng vui lòng{" "}
            <strong className="font-bold">
              thanh toán 100% hoặc trả trước 30% giá trị đơn hàng
            </strong>{" "}
            và thanh toán phần còn lại khi nhận hàng. Sản phẩm sẽ được sản xuất,
            đóng gói và vận chuyển đến khách hàng cách nhanh chóng nhất.
          </p>
          <p className="text-base font-light text-black-100 mb-3">
            Toàn bộ chính sách thanh toán sẽ được thỏa thuận và quy định rõ ràng
            với quý khách trong hợp đồng. I.C.H{" "}
            <strong className="font-bold">cam kết</strong> kinh doanh uy tín,
            minh bạch với các sản phẩm chất lượng nhất.
          </p>
        </div>
      </div>
    </section>
  );
};
PaymentPolicy.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default PaymentPolicy;
