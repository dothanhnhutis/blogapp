import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { cosmeticProcessing, products, whyToBook } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <section className="relative z-[3]">
        <Image
          src="/images/bg.jpg"
          alt="background"
          height="1400"
          width="1920"
          className="md:h-[720px] h-[500px] w-full"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white from-15% md:from-5% xl:from-20%">
          <div className="mx-auto max-w-7xl h-full px-5">
            <div className="flex items-start justify-center flex-col h-full">
              <h2 className="text-[40px] leading-normal font-bold max-w-sm md:text-[60px] md:leading-relaxed md:max-w-[500px]">
                Hight Quality Beauty Products For Women
              </h2>

              <p className="text-base font-normal max-w-sm md:max-w-[500px]">
                Đồng hành cùng sự thành công, chúng tôi là nhà gia công mỹ phẩm
                uy tín và chất lượng.
              </p>

              <Link
                href="/contact"
                className="text-white bg-blue-500 text-sm font-normal p-2 rounded mt-2 md:px-4 md:py-2 md:rounded-md md:mt-6 "
              >
                Liên Hệ Ngay
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-5 py-[60px]">
        <div className="flex items-center justify-center flex-col ">
          <h3 className="text-[32px] leading-normal font-medium mb-6 text-center md:text-start">
            SẢN PHẨM GIA CÔNG TẠI I.C.H
          </h3>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 mt-10 w-full;">
            {products.map(({ id, title, link, image }) => (
              <div
                key={id}
                className="group flex justify-center items-center flex-col rounded-2xl drop-shadow-card overflow-hidden "
              >
                <Link
                  href={link}
                  className="flex justify-center items-center relative w-full h-full"
                >
                  <Image
                    className="w-full h-full object-cover rounded-2xl group-hover:scale-x-110 transition-all duration-300 ease-ease"
                    src={image}
                    alt="product"
                    width={600}
                    height={400}
                  />
                  <div className="absolute left-0 top-2/3 right-0 bottom-0 flex justify-center items-center bg-gradient-to-t from-black/80 ">
                    <span className="text-white uppercase text-[18px] font-bold">
                      {title}
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <Link
            href="/contact"
            className="text-white  bg-blue-500 text-sm font-normal p-2 rounded mt-6 md:px-4 md:py-2 md:rounded-md"
          >
            Xem Thêm
          </Link>
        </div>
      </section>
      <section className="bg-section1 bg-cover md:bg-top bg-center">
        <div className="relative flex justify-between px-5 py-[50px] items-center max-w-7xl mx-auto ">
          <div className="flex items-center flex-col md:flex-row md:space-x-4">
            <div className="basis-1/2 order-1 md:order-none ">
              <h3 className="text-[32px] leading-normal font-medium py-3 text-center md:text-start">
                NHÀ MÁY SẢN XUẤT MỸ PHẨM THEO TIÊU CHUẨN ISO 9001:2015 - CGMP –
                FDA
              </h3>
              <p className="text-small mb-5">
                I.C.H là nhà sản xuất Dược Mỹ Phẩm hàng đầu tại Việt Nam. Chúng
                tôi nghiên cứu và sản xuất trọng gói chuẩn bị từ nguyên liệu thô
                đến thành phẩm. Sản phẩm của chúng tôi được nghiên cứu và phát
                triển bởi đội ngũ R&D với nhiều năm kinh nghiệm hoạt động và làm
                việc trong Lĩnh Vực.
              </p>
              <Link
                href="/"
                className="text-white bg-blue-500 text-sm font-normal p-2 rounded mt-2 md:px-4 md:py-2 md:rounded-md md:mt-6 "
              >
                Xem Thêm
              </Link>
            </div>
            <div className="basis-full md:basis-1/2 ">
              <Image
                src="/images/bg.jpg"
                alt="office-image"
                width={900}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-5 py-[60px]">
        <div className="flex items-center justify-center flex-col ">
          <h3 className="text-[32px] leading-normal font-medium mb-6 text-center">
            TẠI SAO LỰA CHỌN GIA CÔNG TRỌN GÓI TẠI I.C.H
          </h3>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 mt-10 w-full;">
            {whyToBook.map(({ id, title, description }) => (
              <div
                key={id}
                className="flex justify-center items-center flex-col rounded-2xl drop-shadow-card overflow-hidden text-center border-blue-700 border-[1px] p-4"
              >
                <p className="text-[22px] font-semibold text-blue-400">
                  {title}
                </p>
                <span className="text-md font-thin mt-2 ">{description}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative bg-section2 bg-cover md:bg-top bg-center pb-[20px]">
        <div className="absolute top-0 left-0 right-0 bg-[#ffffffe0] bottom-0"></div>
        <h3 className="relative text-[32px] leading-normal font-medium py-3 z-[2] text-center px-5">
          QUY TRÌNH GIA CÔNG MỸ PHẨM TẠI I.C.H
        </h3>
        <div className="relative max-w-7xl mx-auto mt-[50px] mb-[60px] px-[20px]">
          <div className="absolute h-full w-1 bg-blue-300 md:left-1/2 top-5 -translate-x-1/2 left-[40px] hidden xs:block ">
            <div className="absolute bg-blue-400 h-10 w-10 text-center leading-10 rounded-[50%] text-white shadow-3xl bottom-0 left-1/2 text-[25px] -translate-x-1/2 flex items-center justify-center">
              <AiFillStar size={28} />
            </div>
          </div>
          {cosmeticProcessing.map(({ id, title, description }) =>
            id % 2 !== 0 ? (
              <div
                key={id}
                className="flex justify-start xs:mt-[30px] xs:ml-[60px] xs:mb-[3px] md:m-0 my-10 mx-0"
              >
                <div className="bg-white drop-shadow-md rounded-md md:w-[calc(50%_-_40px)] w-full p-5 relative before:contents-[''] before:absolute before:h-[15px] before:w-[15px] before:bg-white before:top-[28px] before:z-[2] before:rotate-45 before:right-[-7px] before:-left-[7px] md:before:left-auto before:hidden xs:before:block">
                  <p className="absolute bg-blue-400 h-10 w-10 text-center leading-10 rounded-[50%] text-white text-[17px] shadow-3xl top-[15px] md:-right-[60px] md:left-auto -left-[60px] hidden xs:block">
                    {id}
                  </p>
                  <p className="text-[22px] font-semibold text-blue-400">
                    <span className="xs:hidden">{id}. </span>
                    {title}
                  </p>
                  <p className="mt-[10px] mb-[17px]">{description}</p>
                </div>
              </div>
            ) : (
              <div
                key={id}
                className="flex justify-end xs:mt-[30px] xs:ml-[60px] xs:mb-[3px] md:m-0 my-10 mx-0"
              >
                <div className="bg-white drop-shadow-md rounded-md md:w-[calc(50%_-_40px)] w-full p-5 relative before:contents-[''] before:absolute before:h-[15px] before:w-[15px] before:bg-white before:top-[28px] before:z-[2] before:rotate-45 before:left-[-7px] before:hidden xs:before:block">
                  <p className="absolute bg-blue-400 h-10 w-10 text-center leading-10 rounded-[50%] text-white text-[17px] shadow-3xl top-[15px] left-[-60px] hidden xs:block">
                    {id}
                  </p>
                  <p className="text-[22px] font-semibold text-blue-400">
                    <span className="xs:hidden">{id}. </span>
                    {title}
                  </p>
                  <p className="mt-[10px] mb-[17px]">{description}</p>
                </div>
              </div>
            )
          )}
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-5 py-[60px]">
        <div className="flex items-center justify-center flex-col ">
          <h3 className="text-[32px] leading-normal font-medium mb-6">BLOG</h3>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 mt-10 w-full">
            {products.map(({ id, title, link, image }) => (
              <div
                key={id}
                className="group flex justify-center items-center flex-col drop-shadow-card overflow-hidden shadow-md bg-white"
              >
                <Link
                  href={link}
                  className="flex items-center flex-col relative w-full h-full p-2"
                >
                  <Image
                    className="w-full h-full object-cover transition-all duration-300 ease-ease"
                    src={image}
                    alt="product"
                    width={600}
                    height={400}
                  />
                  <p className="group-hover:text-blue-400 pt-[15px] pb-[17px] w-full px-[7px] text-small ">
                    <span className="line-clamp-2 overflow-hidden">
                      Ghi nhận ý tưởng sản phẩm khách hàng mong muốn. Tiến hành
                      chọn lọc, nghiên cứu và đưa ra chiến lược phù hợp và hiệu
                      quả nhất.
                    </span>
                  </p>
                </Link>
              </div>
            ))}
          </div>
          <Link
            href="/contact"
            className="text-white  bg-blue-500 text-sm font-normal p-2 rounded mt-2 md:px-4 md:py-2 md:rounded-md md:mt-6 "
          >
            Xem Thêm
          </Link>
        </div>
      </section>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Home;
