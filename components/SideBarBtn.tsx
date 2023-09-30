import Link from "next/link";
import React, { useState, Fragment } from "react";
import { SideBarEnum, SideBarProps } from "@/common.type";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { PiDotOutlineLight } from "react-icons/pi";
import { usePathname } from "next/navigation";
import { Disclosure, Transition } from "@headlessui/react";

const SideBarBtn = ({ type, props }: SideBarProps) => {
  const pathName = usePathname();
  switch (type) {
    case SideBarEnum.DEFAULT:
      return (
        <Link href={props.path}>
          <div
            className={`flex items-center justify-center px-[10px] py-2 mb-0.5 rounded-lg${
              pathName === props.path
                ? " text-white bg-blue-400"
                : " hover:bg-blue-50 hover:text-blue-800"
            }`}
          >
            <div className="min-w-[36px] py-[4px]">{props.icon}</div>
            <div className="my-[4px] flex-auto">
              <p className="truncate">{props.name}</p>
            </div>
          </div>
        </Link>
      );
    case SideBarEnum.NUMBER:
      return (
        <Link href={props.path}>
          <div
            className={`flex items-center justify-center px-[10px] py-2 mb-0.5 rounded-lg${
              pathName === props.path
                ? " text-white bg-blue-400"
                : " hover:bg-blue-50 hover:text-blue-800"
            } `}
          >
            <div className="min-w-[36px] py-[4px]">{props.icon}</div>
            <div className="my-[4px] flex-auto">
              <p className="">{props.name}</p>
            </div>
            <div className="inline-flex items-center justify-center px-2 bg-sky-400 text-white rounded-full ">
              <span className="max-w-[40px] truncate">
                {props.count > 99 ? "99+" : props.count}
              </span>
            </div>
          </div>
        </Link>
      );
    case SideBarEnum.LIST:
      return (
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                as="div"
                className={`flex items-center justify-center px-[10px] py-2 mb-0.5 rounded-lg${
                  props.list.some((l) => l.path === pathName)
                    ? " text-white bg-blue-400"
                    : " hover:bg-blue-50 hover:text-blue-800"
                }`}
              >
                <div className="min-w-[36px] py-[4px]">{props.icon}</div>
                <div className="my-[4px] flex-auto">
                  <p className="truncate">{props.name}</p>
                </div>
                {open ? <BiChevronUp size={20} /> : <BiChevronDown size={20} />}
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
                  <ul className={`overflow-hidden`}>
                    {props.list.map((l, index) => (
                      <li key={index}>
                        <Link href={l.path}>
                          <div
                            className={`flex items-center justify-center px-[10px] py-2 mb-0.5 rounded-lg${
                              pathName === l.path
                                ? " text-blue-800"
                                : " hover:bg-blue-50 hover:text-blue-800"
                            }`}
                          >
                            <div className="min-w-[36px] py-[4px]">
                              <PiDotOutlineLight size={20} />
                            </div>
                            <div className="my-[4px] flex-auto">
                              <p className="truncate">{l.name}</p>
                            </div>
                          </div>
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
    default:
      return <></>;
  }
};

export default SideBarBtn;
