import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { NextPageWithLayout } from "./_app";
import { ReactElement } from "react";

const CosmeticProcessing: NextPageWithLayout = () => {
  return (
    <section className="max-w-7xl mx-auto px-5 py-6">GIA CÔNG MỸ PHẨM</section>
  );
};

CosmeticProcessing.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default CosmeticProcessing;
