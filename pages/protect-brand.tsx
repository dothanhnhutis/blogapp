import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Image from "next/image";
import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";

const ProtectBrand: NextPageWithLayout = () => {
  return (
    <section className="bg-gray-50/50">
      <div className="max-w-7xl mx-auto pt-[30px] pb-[60px]">
        <div className="mx-5 px-3 pt-5 pb-8 shadow rounded bg-white">
          <h1 className="block text-center text-2xl font-medium mb-6 text-blue-400">
            GIỚI THIỆU DỊCH VỤ ĐĂNG KÝ BẢO HỘ THƯƠNG HIỆU TẠI I.C.H
          </h1>
          <p className="text-base font-light text-black-100 mb-3">
            Thương hiệu là “dấu hiệu” nhận biết mối liên kết của doanh nghiệp
            với sản phẩm của họ về mặt thương mại thông qua tên gọi hoặc hình
            ảnh. Ngày nay, thương hiệu được xem là tài sản của doanh nghiệp, vì
            vậy chúng cần đăng ký bảo hộ thương hiệu để tránh bị đối thủ cạnh
            tranh chiếm đoạt khi đã có chỗ đứng trên thị trường.
          </p>
          <p className="text-base font-light text-black-100 mb-3">
            Ví dụ: Trong ngành công nghiệp kỹ thuật số không có bất kỳ doanh
            nghiệp nào được phép sử dụng tên “Apple” cho sản phẩm của mình, trừ
            Apple Computers, là một hội đồng theo luật định trực thuộc Bộ Pháp
            luật.
          </p>
          <p className="text-base font-light text-black-100 mb-3">
            Trong bài viết hôm nay, đơn vị gia công mỹ phẩm độc quyền I.C.H sẽ
            nói rõ hơn về thương hiệu và các lợi ích khi đã đăng ký bảo hộ.
          </p>
          <h2 className="text-xl text-red-500 font-bold mb-3">
            Thương hiệu là gì?
          </h2>
          <p className="text-base font-light text-black-100 mb-3">
            Thương hiệu ra đời với chức năng chính là phân biệt hàng hóa, sản
            phẩm và dịch của doanh nghiệp này với doanh nghiệp khác. Đồng thời,
            thương hiệu còn là phương tiện thông báo với khách hàng/người tiêu
            dùng đây là sản phẩm của tổ chức và bất kỳ doanh nghiệp nào sử dụng
            thương hiệu này khi đã được đăng ký bảo hộ thương hiệu đều xem là
            phạm pháp.
          </p>
          <figure className="mb-8 block mx-auto ">
            <div className="flex items-center justify-center">
              <div>
                <Image
                  className="inline-block align-middle max-w-full"
                  alt=""
                  src="/images/dang-ky-bao-ho-thuong-hieu-3.jpg"
                  width={600}
                  height={382}
                />
                <figcaption className="italic text-center text-sm p-2 bg-gray-50/70 ">
                  Đăng ký bảo hộ thương hiệu là gì
                </figcaption>
              </div>
            </div>
          </figure>
          <p className="text-base font-light text-black-100 mb-3">
            Có hai loại thương hiệu hiện nay là thương hiệu thương mại và thương
            hiệu dịch vụ. Về cơ bản chúng khá giống nhau. Tuy nhiên, thương hiệu
            thương mại dùng để quảng bá sản phẩm còn thương hiệu dịch vụ dùng để
            quảng bá các dịch vụ doanh nghiệp cung cấp.
          </p>
          <p className="text-base font-light text-black-100 mb-3">
            ® và ™ là các ký hiệu thông thường liên quan đến đăng ký bảo hộ
            thương hiệu. ® đại diện cho thương hiệu đã được đăng ký và đang được
            bảo hộ theo luật nhãn hiệu. Còn ™ chỉ là ký hiệu được doanh nghiệp
            sử dụng cho mục đích thương mại và có thể chưa đăng ký bảo hộ. Trong
            thị trường kinh doanh, doanh nghiệp không bắt buộc phải sử dụng hai
            ký hiệu này. Tuy nhiên, nếu sử dụng chúng bạn sẽ nhận về hai lợi ích
            sau:
          </p>
          <ul className="text-base font-light text-black-100 mb-3 list-disc ml-5 space-y-2">
            <li>Đầu tiên là tuyên bố chủ quyền với tên thương hiệu.</li>
            <li>
              Cuối cùng tránh cho người khác hoặc doanh nghiệp sử dụng tên
              thương hiệu của doanh nghiệp cho mục đích kinh doanh.
            </li>
          </ul>
          <h2 className="text-xl text-red-500 font-bold mb-3">
            Tại sao phải đăng ký bảo hộ thương hiệu?
          </h2>
          <p className="text-base font-light text-black-100 mb-3">
            Mặc dù doanh nghiệp không bị ép buộc đăng ký bảo hộ thương hiệu mới
            được sử dụng. Thế nhưng, thiện chí và danh tiếng của doanh nghiệp có
            thể bị hoen ố hoặc xuyên tạc nếu đối thủ sử dụng cho mục đích phạm
            pháp, gây bất lợi cho người tiêu dùng bằng cách dùng tên gần giống
            hoặc chính xác với tên thương hiệu bạn đang gầy dựng.
          </p>
          <figure className="mb-8 block mx-auto ">
            <div className="flex items-center justify-center">
              <div>
                <Image
                  className="inline-block align-middle max-w-full"
                  alt=""
                  src="/images/dang-ky-bao-ho-thuong-hieu-1.jpg"
                  width={600}
                  height={382}
                />
                <figcaption className="italic text-center text-sm p-2 bg-gray-50/70 ">
                  Những lợi ích khi đăng ký bảo hộ thương hiêu
                </figcaption>
              </div>
            </div>
          </figure>
          <p className="text-base font-light text-black-100 mb-3">
            Sau cùng, đây là những lợi ích doanh nghiệp sẽ nhận được nếu đăng ký
            bảo hộ thương hiệu:
          </p>
          <ul className="text-base font-light text-black-100 mb-3 list-disc ml-5 space-y-2">
            <li>
              Chủ sở hữu nhãn hiệu có thể ngăn chặn sử dụng tên thương hiệu
              tương tự hoặc trùng lặp khi chưa được cho phép sau khi đăng ký bảo
              hộ.
            </li>
            <li>
              Tạo ra nhận thức đúng đắn của người tiêu dùng và khách hàng về
              quyền sở hữu và chất lượng của sản phẩm.
            </li>
            <li>
              Cho phép chủ sở hữu thương hiệu sử dụng biểu tượng ® trong quá
              trình quảng bá.
            </li>
            <li>Có quyền chuyển nhượng khi không còn nhu cầu sử dụng.</li>
          </ul>
          <h2 className="text-xl text-red-500 font-bold mb-3">
            Dịch vụ đăng ký bảo hộ thương hiệu
          </h2>
          <p className="text-base font-light text-black-100 mb-3">
            Tại Việt Nam, đăng ký nhãn hiệu được thực hiện tại Công báo của Cục
            Sở hữu trí tuệ. Tại đây, họ có nhiệm vụ kiểm tra xem thương hiệu của
            doanh nghiệp có hợp lệ để đăng ký bảo hộ thương hiệu hay không. Quá
            trình này mất từ 2 – 4 tháng để hoàn thành. Các bước và thủ tục đăng
            ký doanh nghiệp có thể thực hiện trực tiếp, nhưng nếu không am hiểu
            hoặc thiếu bộ phận chịu trách nhiệm chính, doanh nghiệp nên nhờ đến
            sự trợ giúp của dịch vụ đăng ký bảo hộ thương hiệu độc quyền để lo
            tất tần tật các khâu. Lợi ích doanh nghiệp có thể nhận được khi hợp
            tác với dịch vụ đăng ký bảo hộ nhãn hiệu gồm:
          </p>

          <ul className="text-base font-light text-black-100 mb-3 list-disc ml-5 space-y-2">
            <li>
              Giảm thiểu trường hợp bị trả lại đơn đăng ký do thiếu giấy tờ hoặc
              sai sót trong quá trình thu thập hồ sơ.
            </li>
            <li>
              Một công ty cung cấp dịch vụ đăng ký bảo hộ thương hiệu độc quyền
              chuyên nghiệp có thể phản hồi một cách thành thạo bất kỳ lời giải
              thích nào mà cơ quan đăng ký nhãn hiệu yêu cầu hoặc bất kỳ phản
              đối nào được đưa ra trong quá trình kiểm tra nhãn hiệu, điều này
              có thể giúp doanh nghiệp tăng cơ hội đăng ký thành công.
            </li>
            <li>
              Doanh nghiệp sẽ tiết kiệm được rất nhiều thời gian và nỗ lực cá
              nhân cần thiết.
            </li>
          </ul>
          <h2 className="text-xl text-red-500 font-bold mb-3">
            Các bước cơ bản trong quy trình đăng ký bảo hộ thương hiệu
          </h2>
          <p className="text-base font-light text-black-100 mb-3">
            Dù doanh nghiệp thuê dịch vụ đăng ký bảo hộ nhãn hiệu hay tự thực
            hiện đều trải qua các giai đoạn sau:
          </p>
          <ul className="text-base font-light text-black-100 mb-3 list-disc ml-5 space-y-2">
            <li>
              Giai đoạn 1: Chọn tên thương hiệu có độ trùng lặp bằng 0 hoặc
              trùng ở mức thấp nhất để tăng tỷ lệ thành công.
            </li>
            <li>
              Giai đoạn 2: Tra cứu tên thương hiệu tại website:
              https://ipvietnam.gov.vn/ hoặc trang của wipo để chắc chắn rằng
              tên thương hiệu đã chọn chưa được đăng ký tại Cục Sở hữu trí tuệ.
            </li>
            <li>Giai đoạn 3: Chuẩn bị hồ sơ và đóng phí dịch vụ.</li>
            <li>
              Giai đoạn 4: Cơ quan Cục sở hữu trí tuệ tiến hành thẩm định hồ sơ
              doanh nghiệp xem đã hợp lệ chưa hay bị loại bỏ.{" "}
            </li>
            <li>
              Giai đoạn 5: Thông báo về đơn đăng ký bảo hộ thương hiệu có thành
              công không hay cần thực hiện lại vào đợt tiếp theo.
            </li>
          </ul>
          <figure className="mb-8 block mx-auto ">
            <div className="flex items-center justify-center">
              <div>
                <Image
                  className="inline-block align-middle max-w-full"
                  alt=""
                  src="/images/dang-ky-bao-ho-thuong-hieu-2.jpg"
                  width={600}
                  height={382}
                />
                <figcaption className="italic text-center text-sm p-2 bg-gray-50/70 ">
                  Các bước đăng ký bảo hộ thương hiệu chuẩn nhất
                </figcaption>
              </div>
            </div>
          </figure>
          <p className="text-base font-light text-black-100 mb-3">
            Đăng ký bảo hộ thương hiệu là hoạt động vô cùng cần thiết, tuy nhiên
            với sự chủ quan và chưa phổ biến, các doanh nghiệp vừa và nhỏ tại
            Việt Nam đã bỏ qua quá trình này vì không muốn mất nhiều thời gian
            cho nó.
          </p>
          <p className="text-base font-light text-black-100 mb-3">
            Nhưng hiện nay đã có dịch vụ đăng ký bảo hộ thương hiệu nên doanh
            nghiệp có thể nhờ đến các đơn vị này để đưa thương hiệu thành tài
            sản của công ty.
          </p>
          <p className="text-base font-light text-black-100 mb-3">
            Điển hình là tại dược mỹ phẩm I.C.H – Khách hàng sẽ được tư vấn
            chuẩn bị các thủ tục pháp lý để đội ngũ có thể cung cấp dịch vụ tốt
            nhất và nhanh chóng cho khách hàng.
          </p>
          <p className="text-base font-light text-black-100 mb-3">
            Ngoài ra chúng tôi còn cung cấp dịch vụ gia công mỹ phẩm trọn gói.
            Hỗ trợ bạn từ việc sản xuất sản phẩm đến dịch vụ thiết kế bao bì mỹ
            phẩm, chiến lược bán hàng & marketing,.. một cách hoàn hảo và tối ưu
            nhất. Liên hệ ngay I.C.H theo thông tin dưới đây để được hỗ trợ chi
            tiết nhất nhé.!
          </p>
        </div>
      </div>
    </section>
  );
};

ProtectBrand.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default ProtectBrand;
