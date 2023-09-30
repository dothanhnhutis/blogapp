import React from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { Menu, Transition } from "@headlessui/react";
import { HiOutlineMail } from "react-icons/hi";

const UserMenu = () => {
  return (
    <Menu as={"div"} className="relative">
      {({ open }) => (
        <>
          <Menu.Button className="rounded-full overflow-hidden p-3 hover:bg-gray-100">
            <img
              className="w-9 h-9 overflow-hidden rounded-full"
              src="https://modernize-nextjs.adminmart.com/images/profile/user-1.jpg"
              alt="avatar"
            />
          </Menu.Button>
          <Transition
            enter="[transform-origin:_360px_0px]"
            enterFrom="scale-x-75 scale-y-[0.5625] opacity-0 invisible [transition:opacity_395ms_cubic-bezier(0.4,0,0.2,1)_0ms,transform_263ms_cubic-bezier(0.4,0,0.2,1)_132ms]"
            enterTo="scale-1 transform-none opacity-100 [transition:opacity_395ms_cubic-bezier(0.4,0,0.2,1)_0ms,transform_263ms_cubic-bezier(0.4,0,0.2,1)_0ms]"
            leave="[transform-origin:_360px_0px]"
            leaveFrom="scale-1 transform-none opacity-100 [transition:opacity_395ms_cubic-bezier(0.4,0,0.2,1)_0ms,transform_263ms_cubic-bezier(0.4,0,0.2,1)_0ms]"
            leaveTo="scale-x-75 scale-y-[0.5625] opacity-0 [transition:opacity_395ms_cubic-bezier(0.4,0,0.2,1)_0ms,transform_263ms_cubic-bezier(0.4,0,0.2,1)_132ms]"
          >
            <Menu.Items className="w-[360px] absolute top-full right-0 bg-white p-4 rounded-xl shadow ">
              <h5 className="font-semibold text-lg">User Profile</h5>
              <div className="flex items-center space-x-4 py-6">
                <img
                  className="w-24 h-24 overflow-hidden rounded-full"
                  src="/images/user-1.jpg"
                  alt="User Avatar"
                />
                <div>
                  <p className="font-medium text-lg">Mathew Anderson</p>
                  <p className="font-normal text-base text-gray-500">
                    Designer
                  </p>
                  <div className="flex items-center space-x-2 text-gray-500">
                    <HiOutlineMail size={16} />
                    <span className="text-base">info@gmail.com</span>
                  </div>
                </div>
              </div>
              <hr />
              <ul>
                <li>
                  <Menu.Item>
                    <Link
                      href=""
                      className="flex space-x-4 items-center py-4 group"
                    >
                      <img
                        className="p-3 bg-[#ecf2ff] rounded-lg"
                        src="/images/svgs/icon-account.svg"
                        alt="Icon Account"
                      />
                      <div>
                        <p className="text-base font-medium group-hover:text-[#5D87FF]">
                          My Profile
                        </p>
                        <p className="text-base font-light">Account Settings</p>
                      </div>
                    </Link>
                  </Menu.Item>
                </li>
              </ul>
              <Menu.Item>
                <button
                  onClick={() => signOut()}
                  className="flex items-center justify-center w-full py-2 rounded-lg border border-[#5D87FF] hover:bg-[#5D87FF] text-[#5D87FF] hover:text-white"
                >
                  <span className="text-base font-light ">Logout</span>
                </button>
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};

export default UserMenu;
