import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaShoppingBag } from "react-icons/fa";
import { BsChatFill } from "react-icons/bs";
import { RiNotification2Fill } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";

import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Cart, Chat, Notification, UserProfile } from ".";
import { useStateContext } from "../context/contextProvider";
import avatar from "../data/avatar.jpg";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative rounded-full p-3 text-xl hover:bg-light-gray dark:hover:bg-secondary-dark-bg"
    >
      <span
        style={{ background: dotColor }}
        className="absolute right-2 top-2 inline-flex h-2 w-2 rounded-full"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
    screenSize,
    setScreenSize,
    currentColor,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (screenSize <= 1024) setActiveMenu(false);
    else setActiveMenu(true);
  }, [screenSize]);

  return (
    <div className="relative flex justify-between p-2 md:mx-6">
      <NavButton
        title="Menu"
        icon={<AiOutlineMenu />}
        color={currentColor}
        customFunc={() => setActiveMenu((prev) => !prev)}
      />
      <div className="flex">
        <NavButton
          title="Cart"
          icon={<FaShoppingBag />}
          color={currentColor}
          customFunc={() => handleClick("cart")}
        />
        <NavButton
          title="Chat"
          icon={<BsChatFill />}
          color={currentColor}
          dotColor="red"
          customFunc={() => handleClick("chat")}
        />
        <NavButton
          title="Notifications"
          icon={<RiNotification2Fill />}
          color={currentColor}
          dotColor="cyan"
          customFunc={() => handleClick("notifications")}
        />

        <div
          onClick={() => handleClick("userProfile")}
          className="ml-2 flex cursor-pointer items-center gap-2 rounded-lg px-3 py-1 hover:bg-light-gray dark:hover:bg-secondary-dark-bg"
        >
          <TooltipComponent content="Profile" position="BottomCenter">
            {" "}
            <img src={avatar} alt="name" className="h-7 w-7 rounded-full" />
          </TooltipComponent>{" "}
          <p>
            <span className="top-14 text-gray-400">Hi, </span>
            <span className=" ml-1 text-14 font-bold text-gray-400">
              Michale
            </span>
          </p>
          <MdKeyboardArrowDown className="top-14 text-gray-400" />
        </div>

        {isClicked.chat && <Chat />}
        {isClicked.cart && <Cart />}
        {isClicked.notifications && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
