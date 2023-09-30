import React from "react";
import { MdOutlineMenu, MdOutlineNotificationsActive } from "react-icons/md";
import UserMenu from "./UserMenu";
type Props = {
  setToggleSideBar: () => void | null;
};
const Header = ({ setToggleSideBar }: Props) => {
  return (
    <header className="h-[70px] flex items-center sticky top-0 left-0 right-0 bg-white z-[9]">
      <div className="flex items-center justify-between px-6 w-full">
        <button
          onClick={setToggleSideBar}
          className="p-3 hover:bg-gray-100 rounded-full"
        >
          <MdOutlineMenu size={20} />
        </button>

        <div className="flex items-center justify-center space-x-2">
          <button className="rounded-full overflow-hidden p-3 hover:bg-gray-100">
            <MdOutlineNotificationsActive size={20} />
          </button>

          <UserMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
