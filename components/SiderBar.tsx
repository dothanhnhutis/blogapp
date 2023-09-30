import React from "react";
import Image from "next/image";
import { isMobile, useWindowDimensions } from "@/hook/useWindowDimensions";
import SideBarBtn from "./SideBarBtn";
import { sideBar } from "@/constants";

const SiderBar = React.forwardRef<{ toggleSideBar: () => void }, {}>(
  (props, ref) => {
    const [isShowSideBar, setIsShowSideBar] = React.useState<{
      mobile: boolean;
      desktop: boolean;
    }>({ mobile: false, desktop: true });

    React.useImperativeHandle(ref, () => ({
      toggleSideBar() {
        isMobile() ? handleToggleMobile() : handleToggleDesktop();
      },
    }));

    const handleToggleMobile = (isOpen?: boolean) => {
      setIsShowSideBar((pre) => ({ ...pre, mobile: isOpen ?? !pre.mobile }));
    };
    const handleToggleDesktop = (isOpen?: boolean) => {
      setIsShowSideBar((pre) => ({ ...pre, desktop: isOpen ?? !pre.desktop }));
    };

    const { width } = useWindowDimensions();

    React.useEffect(() => {
      setIsShowSideBar({ mobile: false, desktop: true });
    }, [width]);
    return (
      <>
        <div
          className={`${
            isShowSideBar.desktop
              ? "[transition:transform_.25s,opacity_.3s_ease,visibility_.2s,width_.2s] translate-x-0 w-[270px] opacity-100 visible"
              : "[transition:transform_.25s,opacity_.1s_ease,visibility_0s,width_.2s] -translate-x-full w-0 opacity-0 invisible"
          } bg-white border-r-[1px] border-gray-300 absolute top-0 left-0 bottom-0 xl:static max-h-full overflow-hidden hidden xl:block flex-shrink-0`}
        >
          <div className="flex items-center justify-start space-x-2 p-6 ">
            <Image src="/images/logo.png" width={40} height={40} alt="Logo" />
            <p className="font-bold text-lg truncate text-gray-700">
              I.C.H Company
            </p>
          </div>
          <div className="px-6 h-full w-full overflow-scroll">
            <ul>
              {sideBar.map((s, index) => (
                <li key={index}>
                  <SideBarBtn {...s} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className={`${
            isShowSideBar.mobile ? "visible" : "invisible"
          } border-r-[1px] border-gray-300 fixed top-0 left-0 bottom-0 right-0 z-10 xl:hidden`}
        >
          <div
            onClick={() => handleToggleMobile(false)}
            className={`${
              isShowSideBar.mobile
                ? "opacity-100 visible [transition:opacity_.8s_ease,visibility_0s]"
                : "opacity-0 invisible [transition:opacity_.25s,visibility_0s_linear_.25s]"
            } w-full h-full bg-[#1212125c] backdrop-blur-sm xl:hidden`}
          />
          <div
            className={`absolute top-0 left-0 bottom-0 w-[270px] bg-white ${
              isShowSideBar.mobile
                ? "[transition:transform_.25s,opacity_.3s_ease,visibility_.2s] translate-x-0 opacity-100 visible"
                : "[transition:transform_.25s,opacity_.1s_ease,visibility_0s] -translate-x-full opacity-0 invisible"
            }`}
          >
            <div className="flex items-center justify-start space-x-2 p-6 ">
              <div className="h-10 w-10 bg-blue-500 overflow-hidden rounded-full"></div>
              <p className="font-bold text-lg truncate">I.C.H Company</p>
            </div>
            <div className="px-6 h-full w-full overflow-scroll">
              <ul>
                {sideBar.map((s, index) => (
                  <li key={index}>
                    <SideBarBtn {...s} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
);

export default SiderBar;
