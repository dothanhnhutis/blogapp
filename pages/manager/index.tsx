import React, { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import ManagerLayout from "@/components/Layouts/ManagerLayout";
import { useSession } from "next-auth/react";

const Manager: NextPageWithLayout = () => {
  const session = useSession();
  console.log(session);
  return <div>Manager</div>;
};

Manager.getLayout = function getLayout(page: ReactElement) {
  return <ManagerLayout>{page}</ManagerLayout>;
};

export default Manager;
