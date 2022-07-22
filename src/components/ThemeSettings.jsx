import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { BsCheck } from "react-icons/bs";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { themeColors } from "../data/dummy";
import { useStateContext } from "../context/contextProvider";

const ThemeSettings = () => {
  const { setColor, setMode, currentMode, currentColor, setThemeSettings } =
    useStateContext();

  return (
    <div className=" nav-item fixed top-0 right-0 w-screen bg-half-transparent backdrop-blur-sm">
      <div className="float-right h-screen w-400 bg-white dark:bg-[#484852] dark:text-gray-200">
        <div className="ml-4 flex items-center justify-between p-4 ">
          <p className=" text-2xl font-semibold "> Setting</p>
          <button
            type="button"
            onClick={() => setThemeSettings(false)}
            className=" dark:hover: rounded-full p-2 text-2xl text-red-500 hover:bg-light-gray dark:hover:bg-secondary-dark-bg "
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className="ml-4 flex flex-col border-t-1 border-color p-4 dark:border-gray-400">
          <p className=" text-lg font-semibold">Theme Options</p>
          <div className="mt-4 flex items-center justify-start gap-4">
            <div className="radio">
              <input
                type="radio"
                id="light"
                name="theme"
                value={`Light`}
                className="cursor-pointer "
                style={{ color: currentColor }}
                onChange={setMode}
                checked={currentMode === "Light"}
              />
              <label
                htmlFor="light"
                className="label"
                style={{ color: currentColor }}
              >
                Light
              </label>
            </div>
            <div className="radio">
              <input
                type="radio"
                id="dark"
                name="theme"
                value={`Dark`}
                className="cursor-pointer "
                style={{ color: currentColor }}
                onChange={setMode}
                checked={currentMode === "Dark"}
              />
              <label
                htmlFor="datk"
                className="label"
                style={{ color: currentColor }}
              >
                Dark
              </label>
            </div>
          </div>
        </div>
        <div className="ml-4 flex flex-col border-t-1 border-color p-4  dark:border-gray-400">
          <p className=" text-lg font-semibold">Theme Colors</p>
          <div className="flex gap-3 ">
            {themeColors.map((item, index) => (
              <TooltipComponent
                key={index}
                content={item.name}
                position={`BottomCenter`}
              >
                <div
                  className=" mt-4 flex h-10 w-10  cursor-pointer items-center justify-center rounded-full"
                  style={{ backgroundColor: item.color }}
                >
                  <button
                    type="button"
                    className=" z-10 flex h-full w-full items-center justify-center text-2xl text-white"
                    onClick={() => setColor(item.color)}
                  >
                    <BsCheck
                      className={`${
                        item.color === currentColor ? `block` : `hidden`
                      }`}
                    />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
