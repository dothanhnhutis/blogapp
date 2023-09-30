import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
type Props = {
  children: React.ReactNode;
};
const DefaultLayout = ({ children }: Props) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default DefaultLayout;
