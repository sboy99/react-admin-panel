import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { Stacked, Pie, Button, SparkLine } from "../components";
import {
  earningData,
  SparklineAreaData,
  ecomPieChartData,
} from "../data/dummy";
import { useStateContext } from "../context/contextProvider";

const Ecommerce = () => {
  const { currentColor } = useStateContext();
  return (
    <div className="mt-12">
      <div className="flex flex-wrap justify-center lg:flex-nowrap">
        <div className="m-3 h-44 w-full rounded-xl bg-white bg-hero-pattern bg-cover bg-center bg-no-repeat p-8 pt-9 dark:bg-secondary-dark-bg lg:w-80">
          <div className="flex items-center justify-between">
            <div className="content">
              <p className=" font-bold text-gray-400 ">Earnings</p>
              <p className="text-2xl dark:text-white">$63,889</p>
            </div>
          </div>
          <div className="mt-6">
            <Button
              bgcolor={currentColor}
              color="white"
              size="md"
              text="Download"
              borderRadius="10px"
            />
          </div>
        </div>
        <div className="m-3 flex flex-wrap items-center justify-center gap-2 md:w-auto md:gap-2 ">
          {earningData.map((item) => (
            <div
              className="rounded-2xl bg-white p-4  pt-9  dark:bg-secondary-dark-bg dark:text-gray-400 md:w-56 "
              key={item.title}
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className=" opacity-0.9 rounded-full p-4 text-2xl hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={` text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className=" mt-1 text-gray-400 dark:text-gray-200">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* ChartSection */}
      <div className="flex w-full flex-wrap justify-center gap-10">
        <div className="m-3 max-w-7xl rounded-xl bg-white p-4 drop-shadow-sm dark:bg-secondary-dark-bg md:w-[90%]">
          <div className=" flex flex-wrap justify-between gap-2 md:gap-10">
            <p className="text-xl font-semibold dark:text-gray-200">
              Revenue Updates
            </p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl dark:text-gray-300">
                <span>
                  <GoPrimitiveDot />
                </span>
                Expense
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                Budget
              </p>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 place-items-center gap-10 md:grid-cols-2 md:gap-0">
            <div className="grid w-full place-content-center border-color md:m-4 md:border-r-1">
              <div>
                <p>
                  <span className=" text-xl font-semibold dark:text-white">
                    $93,000
                  </span>
                  <span className=" ml-2 cursor-pointer rounded-full bg-green-400 p-1 text-xs text-white hover:drop-shadow-md">
                    23%
                  </span>
                </p>
                <p className=" mt-1 text-sm text-gray-500 dark:text-gray-300">
                  Budget
                </p>
              </div>
              <div className="mt-2">
                <p>
                  <span className=" text-xl font-semibold dark:text-white">
                    $48,000
                  </span>
                </p>
                <p className=" mt-1 text-sm text-gray-500 dark:text-gray-300">
                  Expence
                </p>
              </div>

              <div className="mt-5">
                <SparkLine
                  id={`line-sparkline`}
                  type="Line"
                  height={`80px`}
                  width={`250px`}
                  data={SparklineAreaData}
                  currentColor={currentColor}
                  color={currentColor}
                />
              </div>
              <div className="mt-10">
                <Button
                  color={`white`}
                  bgcolor={currentColor}
                  text={`Download Report`}
                  borderRadius={`10px`}
                />
              </div>
            </div>
            <Stacked width="320px" height="360px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
