import React from "react";
import Header from "../Header";
import SiderBar from "../SiderBar";
type Props = {
  children: React.ReactNode;
};

const ManagerLayout = ({ children }: Props) => {
  const ref = React.useRef<{ toggleSideBar: () => void }>(null);
  return (
    <div className="relative xl:flex bg-white h-screen overflow-hidden">
      <SiderBar ref={ref} />
      <div className="relative flex-auto max-h-full overflow-scroll pb-16">
        <Header setToggleSideBar={() => ref.current?.toggleSideBar()} />
        <div className="xl:max-w-7xl xl:mx-auto px-6">{children}</div>
      </div>
    </div>
  );
};

export default ManagerLayout;
