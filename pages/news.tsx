import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { NextPageWithLayout } from "./_app";
import { ReactElement } from "react";

const News: NextPageWithLayout = () => {
  return <section className="max-w-7xl mx-auto px-5 py-6">News</section>;
};

News.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default News;
