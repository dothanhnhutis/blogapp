import Link from "next/link";
import React, { Fragment, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Disclosure, Popover, Transition } from "@headlessui/react";
import { FaChevronUp } from "react-icons/fa";
import { navbarLinks } from "@/constants";
import { useWindowDimensions } from "@/hook/useWindowDimensions";
import { usePathname } from "next/navigation";
import { NavBarLink } from "@/common.type";

type Props = {
  type: "desktop" | "mobile";
  data: NavBarLink;
};

const NavLink = ({ type, data }: Props) => {
  if (type === "mobile") {
    const pathName = usePathname();
    if (data.sublinks) {
      return (
        <Disclosure as="li">
          {({ open }) => (
            <>
              <Disclosure.Button className="uppercase flex items-center justify-between font-medium text-sm w-full md:w-auto md:py-4 py-2 md:hover:text-blue-400 hover:bg-blue-400 hover:text-white md:hover:bg-transparent px-5 md:px-0 cursor-pointer">
                <Link href={data.link}>{data.name}</Link>
                <FaChevronUp
                  size={12}
                  className={`${open ? "rotate-180 transform" : ""}`}
                />
              </Disclosure.Button>
              <Transition
                className="grid"
                enter="[transition:grid-template-rows_250ms]"
                enterFrom="grid-rows-[0fr]"
                enterTo="grid-rows-[1fr]"
                leave="[transition:grid-template-rows_300ms]"
                leaveFrom="grid-rows-[1fr]"
                leaveTo="grid-rows-[0fr]"
              >
                <Disclosure.Panel as={Fragment}>
                  <ul className="overflow-hidden">
                    {data.sublinks &&
                      data.sublinks.map((sublink, index) => (
                        <li key={index}>
                          <Link
                            href={sublink.link}
                            className="md:hover:text-blue-500 font-medium text-sm flex justify-start hover:bg-blue-400 hover:text-white md:hover:bg-transparent pl-7 pr-5 py-2 md:px-0"
                          >
                            {sublink.name}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      );
    } else {
      return (
        <li className="flex items-center justify-start">
          <Link
            href={data.link}
            className="uppercase flex font-medium text-sm w-full md:w-auto md:py-4 py-2 md:hover:text-blue-400 hover:bg-blue-400 hover:text-white md:hover:bg-transparent px-5 md:px-0 cursor-pointer"
          >
            {data.name}
          </Link>
        </li>
      );
    }
  } else {
    if (data.sublinks) {
      const [isOpen, setIsOpen] = useState<boolean>(false);

      // const closePopover = () => {
      //   return buttonRef.current?.dispatchEvent(
      //     new KeyboardEvent("keydown", {
      //       key: "Escape",
      //       bubbles: true,
      //       cancelable: true,
      //     })
      //   );
      // };

      return (
        <li>
          <div
            className="relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <Link
              href={data.link}
              className="hover:text-blue-400 uppercase text-sm font-medium"
            >
              {data.name}
            </Link>

            <Transition
              show={isOpen}
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <div className="absolute top-full right-0 bg-white z-[3] shadow rounded-lg">
                <div className="p-4 min-w-[250px]">
                  <ul>
                    {data.sublinks &&
                      data.sublinks.map((sublink, index) => (
                        <li key={index}>
                          <Link
                            href={sublink.link}
                            className="md:hover:text-blue-500 font-medium text-sm flex justify-start hover:bg-blue-400 hover:text-white md:hover:bg-transparent pl-7 pr-5 py-2 md:px-0"
                          >
                            {sublink.name}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </Transition>
          </div>
        </li>
      );
    } else {
      return (
        <li>
          <Link
            href={data.link}
            className="hover:text-blue-400 uppercase text-sm font-medium"
          >
            {data.name}
          </Link>
        </li>
      );
    }
  }
};

const NavBar = () => {
  const [isOpenMenu, setIsOpenMenu] = React.useState<boolean>(false);
  const { width } = useWindowDimensions();

  useEffect(() => {
    setIsOpenMenu(false);
  }, [width]);

  return (
    <header className="sticky top-0 left-0 right-0 z-[5] xl:shadow xl:bg-white">
      {isOpenMenu && (
        <style jsx global>
          {`
            body {
              overflow: hidden;
            }
          `}
        </style>
      )}
      <div className="flex justify-between px-5 py-2 items-center shadow xl:shadow-none max-w-7xl mx-auto bg-white">
        <Link href="/">
          <Image
            src="/images/logo.png"
            width={64}
            height={64}
            alt="I.C.H logo"
          />
        </Link>

        <div className="hidden md:block">
          <ul className="flex space-x-4">
            {navbarLinks.map((navbarLink, index) => (
              <NavLink key={index} type="desktop" data={navbarLink} />
            ))}
          </ul>
        </div>

        <Transition
          as="div"
          className="absolute top-full left-0 right-0 bg-white -z-[1] md:hidden "
          show={isOpenMenu}
        >
          <Transition.Child
            className="fixed top-0 left-0 right-0 bottom-0 z-[-1] bg-[#1212125c] backdrop-blur-sm"
            enter="transition-all duration-[150ms]"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-all duration-75"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            onClick={() => setIsOpenMenu(false)}
          />

          <Transition.Child
            as="div"
            className="bg-white "
            enter="duration-[150ms] transition-all"
            enterFrom="-translate-y-full"
            enterTo="translate-y-0"
            leave="duration-75 transition-all"
            leaveFrom="translate-y-0"
            leaveTo="-translate-y-full"
          >
            <ul className="flex flex-col py-2 md:flex-row ">
              {navbarLinks.map((navbarLink, index) => (
                <NavLink key={index} type="mobile" data={navbarLink} />
              ))}
            </ul>
          </Transition.Child>
        </Transition>

        <button
          onClick={() => setIsOpenMenu(!isOpenMenu)}
          className={`md:hidden text-gray-700${isOpenMenu ? " mr-[5px]" : ""}`}
        >
          {isOpenMenu ? <AiOutlineClose size={24} /> : <HiMenu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default NavBar;
