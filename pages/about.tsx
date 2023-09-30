import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Image from "next/image";
import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";
const About: NextPageWithLayout = () => {
  return (
    <section className="bg-gray-50/50">
      <div className="max-w-7xl mx-auto pt-[30px] pb-[60px]">
        <div className="mx-5 px-3 pt-5 pb-8 shadow rounded bg-white">
          <h1 className="block text-center text-2xl font-medium mb-6 text-blue-400">
            GIỚI THIỆU VỀ I.C.H
          </h1>
          <p className="text-base font-light text-black-100 mb-3">
            Ngày 17/04/2020, Công ty TNHH MTV TM Sản Xuất I.C.H chính thức được
            thành lập. Cùng với đó, nhà máy sản xuất mỹ phẩm đầu tiên đặt tại
            Sóc Trăng cũng được ra đời với tổng kinh phí đầu tư hơn 60 tỷ, quy
            mô hơn 1000m2 và gần 70 nhân viên đang làm việc.
          </p>

          <figure className="mb-8 block mx-auto ">
            <div className="flex items-center justify-center">
              <div>
                <Image
                  className="inline-block align-middle max-w-full"
                  alt=""
                  src="/images/gioi-thieu-cong-ty-5.webp"
                  width={800}
                  height={450}
                />
                <figcaption className="italic text-center text-sm p-2 bg-gray-50/70 ">
                  Đội ngũ Dược mỹ phẩm I.C.H (doi hinh)
                </figcaption>
              </div>
            </div>
          </figure>

          <h2 className="text-xl text-red-500 font-bold mb-3">
            Tổng quan về I.C.H
          </h2>
          <p className="text-base font-light text-black-100 mb-3">
            I.C.H chuyên cung cấp dịch vụ gia công mỹ phẩm trọn gói, đồng hành
            cùng quý khách hàng trong suốt hành trình tạo ra thương hiệu mỹ phẩm
            độc quyền. Bên cạnh quá trình sản xuất mỹ phẩm, I.C.H còn cung cấp
            các dịch vụ khác như:
          </p>
          <h3 className="text-lg text-blue-400 font-bold mb-3">
            Công bố mỹ phẩm
          </h3>
          <p className="text-base font-light text-black-100 mb-3">
            Các bước cần thiết để giúp khách hàng đưa sản phẩm đến tay người
            tiêu dùng sẽ được I.C.H hỗ trợ một cách tốt nhất và tận tình nhất.
            Thúc đẩy quá trình này diễn ra một cách dễ dàng, không mất nhiều
            thời gian và công sức.
          </p>
          <h3 className="text-lg text-blue-400 font-bold mb-3">
            Đăng ký mã vạch sản phẩm
          </h3>
          <p className="text-base font-light text-black-100 mb-3">
            Đây là một trong những bước quan trọng trong việc tạo nên một sản
            phẩm hoàn chỉnh. Mã vạch sản phẩm không chỉ giúp nhà sản xuất dễ
            dàng kiểm kê hàng hóa mà còn góp phần bảo vệ sản phẩm của công ty
            khi xảy ra mất cắp.
          </p>
          <h3 className="text-lg text-blue-400 font-bold mb-3">
            Bảo hộ thương hiệu
          </h3>
          <p className="text-base font-light text-black-100 mb-3">
            Bảo hộ thương hiệu là điều không thể thiếu để doanh nghiệp “đánh
            dấu” sản phẩm thuộc quyền sở hữu của mình trên thị trường. Đồng
            thời, điều này cũng giúp người tiêu dùng đảm bảo quyền lợi sử dụng
            hàng chính hãng, chất lượng.
          </p>
          <h3 className="text-lg text-blue-400 font-bold mb-3">
            Thiết kế bao bì mỹ phẩm
          </h3>
          <p className="text-base font-light text-black-100 mb-3">
            Bao bì bắt mắt, ấn tượng cũng là một trong những yếu tố thúc đẩy quá
            trình mua hàng của người tiêu dùng. Một sản phẩm có chất lượng tốt
            cùng vẻ ngoài thẩm mỹ chắc chắn sẽ thu hút khách hàng hơn là một
            thiết kế đơn điệu, nhàm chán.
          </p>
          <p className="text-base font-light text-black-100 mb-3">
            Tháng 04 năm 2020, Dược mỹ phẩm I.C.H được Bộ Y Tế cấp giấy chứng
            nhận cGMP, đạt chuẩn sản xuất mỹ phẩm cách nghiêm ngặt và hợp vệ
            sinh an toàn. Ngoài ra, I.C.H còn đạt được chứng nhận ISO 9001:2015
            – Tiêu chuẩn quản lý chất lượng được thiết kế dành riêng cho sản
            xuất các thiết bị y tế.
          </p>
          <h2 className="text-xl text-red-500 font-bold mb-3">
            Tầm nhìn – Sứ mệnh – Giá trị cốt lỗi
          </h2>
          <figure className="mb-8 block mx-auto ">
            <div className="flex items-center justify-center">
              <div>
                <Image
                  className="inline-block align-middle max-w-full"
                  alt=""
                  src="/images/gioi-thieu-cong-ty-4.jpg"
                  width={600}
                  height={338}
                />
                <figcaption className="italic text-center text-sm p-2 bg-gray-50/70 ">
                  Sứ mệnh – Tầm nhìn – Giá trị cốt lõi
                </figcaption>
              </div>
            </div>
          </figure>

          <h3 className="text-lg text-blue-400 font-bold mb-3">
            Sứ mệnh – Thay đổi người tiêu dùng Việt
          </h3>
          <p className="text-base font-light text-black-100 mb-3">
            Quan điểm hàng Tây tốt hơn hàng Ta dường như đã len lỏi vào sâu
            trong tiềm thức của nhiều người dân Việt Nam. Chính vì thế, bằng đội
            ngũ R&D (Research and Development) lành nghề, chuyên môn cao cùng
            các trang thiết bị tiên tiến bậc nhất,{" "}
            <strong className="font-bold">
              I.C.H mang đến các sản phẩm chất lượng và an toàn.
            </strong>{" "}
          </p>
          <p className="text-base font-light text-black-100 mb-3">
            Giúp người tiêu dùng yên tâm hơn khi sử dụng mỹ phẩm nội địa, đúng
            với phương châm “Hàng Việt Nam chất lượng cao”.
          </p>
          <figure className="mb-8 block mx-auto ">
            <div className="flex items-center justify-center">
              <div>
                <Image
                  className="inline-block align-middle max-w-full"
                  alt=""
                  src="/images/gioi-thieu-cong-ty-5.webp"
                  width={800}
                  height={450}
                />
                <figcaption className="italic text-center text-sm p-2 bg-gray-50/70 ">
                  Đội ngũ sản xuất chuyên nghiệp cùng trang thiết bị hiện đại
                </figcaption>
              </div>
            </div>
          </figure>

          <h3 className="text-lg text-blue-400 font-bold mb-3">
            Tầm nhìn – Vươn tầm quốc tế
          </h3>
          <p className="text-base font-light text-black-100 mb-3">
            Với sự nỗ lực không ngừng cùng những kinh nghiệm thực tiễn có được,
            I.C.H mong muốn mang đến những trải nghiệm tốt nhất cho quý khách
            hàng. Từ đó, hoàn thiện mỗi ngày để trở thành đơn vị dẫn đầu trong
            lĩnh vực gia công mỹ phẩm ở Việt Nam và thị trường quốc tế.
          </p>
          <h3 className="text-lg text-blue-400 font-bold mb-3">
            Giá trị cốt lõi – Trách nhiệm, chuyên nghiệp, hiệu quả
          </h3>
          <p className="text-base font-light text-black-100 mb-3">
            {" "}
            <strong className="font-bold">
              I.C.H luôn lấy khách hàng làm trọng tâm
            </strong>{" "}
            trong những ngày đầu thành lập. Từ khâu tiếp nhận yêu cầu của quý
            khách hàng, I.C.H luôn tận tâm nghiên cứu, thử nghiệm để tạo ra các
            sản phẩm an toàn và hiệu quả nhất. Lắng nghe ý kiến để hoàn thiện
            sản phẩm sao cho đúng ý muốn của khách hàng.
          </p>
          <p className="text-base font-light text-black-100 mb-3">
            Đồng thời,{" "}
            <strong className="font-bold">
              không ngại chịu trách nhiệm với những gì mình làm
            </strong>{" "}
            ra là điều mà I.C.H cam kết.
          </p>
          <h2 className="text-xl text-red-500 font-bold mb-3">
            Sự khác biệt của I.C.H
          </h2>
          <p className="text-base font-light text-black-100 mb-3">
            Với hệ thống các phòng ban, trang thiết bị hiện đại cùng quy trình
            khép kín đạt chuẩn cGMP, tiêu chuẩn ISO 9001:2015 được Bộ Y Tế cấp
            phép. I.C.H luôn cập nhật các xu hướng và nâng cao tay nghề để tạo
            ra sản phẩm chất lượng và an toàn trên da.
          </p>
          <figure className="mb-8 block mx-auto ">
            <div className="flex items-center justify-center">
              <div>
                <Image
                  className="inline-block align-middle max-w-full"
                  alt=""
                  src="/images/gigiay-chung-nhan-du-dieu-kien-sx.jpg"
                  width={800}
                  height={450}
                />
                <figcaption className="italic text-center text-sm p-2 bg-gray-50/70 ">
                  Chứng nhận đủ điều kiện sản xuất mỹ phẩm của Sở y tế
                </figcaption>
              </div>
            </div>
          </figure>

          <p className="text-base font-light text-black-100 mb-3">
            Thêm vào đó,{" "}
            <strong className="font-bold">
              các nguyên liệu sử dụng có nguồn gốc từ thiên nhiên
            </strong>{" "}
            phải được kiểm tra kỹ lưỡng, không độc hại là ưu tiên hàng đầu của
            I.C.H trong việc sản xuất. Thành phần, công thức điều chế của sản
            phẩm cũng được I.C.H gửi gắm đến quý khách hàng cách cẩn thận.
          </p>

          <figure className="mb-8 block mx-auto ">
            <div className="flex items-center justify-center">
              <div>
                <Image
                  className="inline-block align-middle max-w-full"
                  alt=""
                  src="/images/gioi-thieu-cong-ty-5.webp"
                  width={800}
                  height={450}
                />
                <figcaption className="italic text-center text-sm p-2 bg-gray-50/70 ">
                  Hạt nam việt quốc (doi hinh)
                </figcaption>
              </div>
            </div>
          </figure>
          <p className="text-base font-light text-black-100 mb-3">
            Đến với I.C.H,{" "}
            <strong className="font-bold">
              đội ngũ các chuyên viên sẽ thay quý khách hàng thực hiện mọi ý
              tưởng kinh doanh
            </strong>
            . Sau khi lắng nghe những mong muốn và nhu cầu, I.C.H sẽ triển khai
            hoàn thiện sản phẩm chỉ với 5 bước như sau:
          </p>

          <h3 className="text-lg text-blue-400 font-bold mb-3">
            Nghiên cứu, lựa chọn sản phẩm
          </h3>
          <p className="text-base font-light text-black-100 mb-3">
            Hiện nay trên thị trường có rất nhiều các loại mỹ phẩm khác nhau và
            để lựa chọn nên sản xuất sản phẩm nào là một vấn đề khó khăn. I.C.H
            sẽ tiến hành các cuộc khảo sát người tiêu dùng, sau đó phân tích các
            số liệu thu thập được. Từ đó, lựa chọn sản phẩm phù hợp, nguyên liệu
            sản xuất và đưa ra các chiến lược phát triển chất lượng.
          </p>

          <h3 className="text-lg text-blue-400 font-bold mb-3">
            Tư vấn, lựa chọn bao bì phù hợp
          </h3>
          <p className="text-base font-light text-black-100 mb-3">
            Một sản phẩm được nhiều người tiêu dùng yêu thích không chỉ ở “phần
            bên trong” mà còn bao gồm nhiều yếu tố khác. Trong đó không thể
            không kể đến bao bì sản phẩm, màu sắc bắt mắt, thiết kế hài hòa cùng
            chất liệu phù hợp, ấn tượng góp phần rất lớn đến sự thu hút người
            mua.
          </p>
          <figure className="mb-8 block mx-auto ">
            <div className="flex items-center justify-center">
              <div>
                <Image
                  className="inline-block align-middle max-w-full"
                  alt=""
                  src="/images/gioi-thieu-cong-ty-3.jpg"
                  width={600}
                  height={338}
                />
                <figcaption className="italic text-center text-sm p-2 bg-gray-50/70 ">
                  Lựa chọn bao bì sản phẩm phù hợp
                </figcaption>
              </div>
            </div>
          </figure>
          <p className="text-base font-light text-black-100 mb-3">
            I.C.H sẽ cùng quý khách tìm hiểu các giải pháp phù hợp với sản phẩm
            từ chất liệu, ý tưởng về logo, thương hiệu, họa tiết thêm vào… Doanh
            nghiệp có thể tạo ra một sản phẩm độc quyền của mình cách đơn giản
            hơn.
          </p>

          <h3 className="text-lg text-blue-400 font-bold mb-3">
            Đăng ký công bố sản phẩm
          </h3>
          <p className="text-base font-light text-black-100 mb-3">
            Đăng ký công bố là bước không thể thiếu trong quy trình gia công mỹ
            phẩm để đưa sản phẩm đến tay người tiêu dùng. Tuy nhiên, các vấn đề
            liên quan đến thủ tục, giấy tờ thường mất khá nhiều thời gian và
            công sức để thực hiện, đặc biệt là khi doanh nghiệp không am hiểu
            tường tận về nó.
          </p>

          <p className="text-base font-light text-black-100 mb-3">
            Và I.C.H với nhiều năm trong nghề, chúng tôi tự tin trong việc giúp
            khách hàng hoàn tất đăng ký công bố sản phẩm cách nhanh chóng. Các
            thủ tục ra sao? Chuẩn bị giấy tờ thế nào? Tài liệu liên quan hay quy
            trình đăng ký bao gồm những gì? Tất cả những điều này sẽ được I.C.H
            đồng hành cùng quý khách.
          </p>

          <h3 className="text-lg text-blue-400 font-bold mb-3">
            Hỗ trợ marketing, quảng cáo cho sản phẩm
          </h3>
          <p className="text-base font-light text-black-100 mb-3">
            Sau khi sản phẩm hoàn thiện, doanh nghiệp thường sẽ mất một khoản
            chi phí kha khá cho việc marketing sản phẩm đến người tiêu dùng. Bên
            cạnh đó, việc chuẩn bị đó có thể mất nhiều thời gian nên I.C.H sẵn
            sàng hỗ trợ quý khách. Các công việc như thiết kế website, tạo lập
            các trang sàn thương mại điện tử, chạy traffic, quảng cáo số, SEO…
            để mang sản phẩm ra mắt thị trường nhanh hơn sẽ được I.C.H giúp sức
            hết mình.
          </p>

          <h3 className="text-lg text-blue-400 font-bold mb-3">
            Đồng hành cùng khách hàng theo suốt chặng đường
          </h3>
          <p className="text-base font-light text-black-100 mb-3">
            I.C.H lắng nghe ý tưởng, tiếp nhận và biến mọi mong muốn của khách
            hàng thành động lực để sáng tạo ra nhiều sản phẩm chất lượng, uy
            tín. Từ khâu nghiên cứu thị trường đến tạo dựng thương hiệu, quảng
            bá sản phẩm,{" "}
            <strong className="font-bold">
              I.C.H luôn tự hào là đơn vị đồng hành cùng sự thành công của quý
              khách hàng
            </strong>
            .
          </p>
          <p className="text-base font-light text-black-100 mb-3">
            <strong className="font-bold">
              CÔNG TY TNHH MTV TM SẢN XUẤT I.C.H
            </strong>
          </p>
          <p className="text-base font-light text-black-100 mb-3">
            Văn phòng & Nhà máy: 159 Nguyễn Đình Chiễu, Khóm 3, Phường 4, Sóc
            Trăng.
          </p>
          <p className="text-base font-light text-black-100 mb-3">
            Hotline: 094.854.8844
          </p>
          <p className="text-base font-light text-black-100 mb-3">
            Email: ichcosmetic@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
};
About.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default About;
