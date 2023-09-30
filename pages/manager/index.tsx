import React, { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import ManagerLayout from "@/components/Layouts/ManagerLayout";
import { GetStaticProps, InferGetStaticPropsType } from "next";

type Repo = {
  protected: boolean;
  userTypes: string[];
};
export const getStaticProps = (async (context) => {
  const repo = {
    protected: true,
    userTypes: ["admin"],
  };
  console.log(3);
  return { props: { repo } };
}) satisfies GetStaticProps<{
  repo: Repo;
}>;

const Manager: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ repo }) => {
  return <div>Manager</div>;
};

Manager.getLayout = function getLayout(page: ReactElement) {
  // console.log(2);
  return <ManagerLayout>{page}</ManagerLayout>;
};

export default Manager;
