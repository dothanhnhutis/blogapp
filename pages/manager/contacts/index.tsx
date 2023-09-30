import React, { ReactElement } from "react";
import ManagerLayout from "@/components/Layouts/ManagerLayout";
import { NextPageWithLayout } from "@/pages/_app";

const Contacts = () => {
  return <div>contacts</div>;
};

Contacts.getLayout = function getLayout(page: ReactElement) {
  return <ManagerLayout>{page}</ManagerLayout>;
};

export default Contacts;
