import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";
import { NextPageWithLayout } from "./_app";
import { ReactElement } from "react";
const CustomerServices: NextPageWithLayout = () => {
  return (
    <section className="mt-[80px] max-w-7xl mx-auto px-5 py-6">
      <div className="grid grid-flow-row md:grid-flow-col md:grid-cols-2 gap-5">
        <div>
          <div className="relative ">
            <Image
              className="w-full h-[300px]"
              width={600}
              height={300}
              alt=""
              src="/images/cong-bo-my-pham-3.jpg"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-[#1212125c] backdrop-blur-sm text-white p-3">
              <div className="flex justify-between items-center h-full">
                <div>
                  <p className="text-base font-bold">
                    Cách làm trắng da mặt bằng bã cà phê đơn giản tại nhà
                  </p>
                  <span className="text-xs">ngay</span>
                </div>
                <div>Tag</div>
              </div>
            </div>
          </div>
          <div className="pt-2 px-3">
            <p className="text-base font-bold pb-2">
              Cách làm trắng da mặt bằng bã cà phê đơn giản tại nhà
            </p>
            <span className="line-clamp-2 overflow-hidden text-xs text-gray mb-3">
              Hiện nay, nhu cầu làm trắng da luôn tiên quyết đối với chị em phụ
              nữ. Ngoài áp dụng những phương pháp sử dụng mỹ phẩm, ứng dụng thẩm
              mỹ công nghệ thì làm trắng da từ nguyên liệu thiên nhiên đang dần
              tạo nên sức hút đối với mọi người.
            </span>
            <p className="text-sm">
              Đọc ngay <BsArrowUpRight className="inline-block" />
            </p>
          </div>
        </div>

        <div>
          <div className="relative">
            <Image
              className="w-full h-[300px]"
              width={600}
              height={300}
              alt=""
              src="/images/cong-bo-my-pham-3.jpg"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-[#1212125c] backdrop-blur-sm text-white p-3">
              <div className="flex justify-between items-center h-full">
                <div>
                  <p className="text-base font-bold">
                    Cách làm trắng da mặt bằng bã cà phê đơn giản tại nhà
                  </p>
                  <span className="text-xs">ngay</span>
                </div>
                <div>sd</div>
              </div>
            </div>
          </div>
          <div className="pt-2">
            <p className="text-base font-bold pb-2">
              Cách làm trắng da mặt bằng bã cà phê đơn giản tại nhà
            </p>
            <span className="line-clamp-2 overflow-hidden text-xs text-gray mb-3">
              Hiện nay, nhu cầu làm trắng da luôn tiên quyết đối với chị em phụ
              nữ. Ngoài áp dụng những phương pháp sử dụng mỹ phẩm, ứng dụng thẩm
              mỹ công nghệ thì làm trắng da từ nguyên liệu thiên nhiên đang dần
              tạo nên sức hút đối với mọi người.
            </span>
            <p className="text-sm">
              Đọc ngay <BsArrowUpRight className="inline-block" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

CustomerServices.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default CustomerServices;
