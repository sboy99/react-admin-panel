import React from "react";

import { Header, LineChart, lineChartData } from "../../components";

const Line = () => {
  return (
    <div className="m-4 mt-24 rounded-lg bg-white p-3 shadow-md dark:bg-secondary-dark-bg md:m-10 md:p-10">
      <Header category="Charts" title={`Inflation Rate`} />
      <div className="w-full ">
        <LineChart />
      </div>
    </div>
  );
};

export default Line;
