import React from "react";

import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Search,
  Page,
  Inject,
  Toolbar,
} from "@syncfusion/ej2-react-grids";
import { employeesData, employeesGrid } from "../data/dummy";
import { Header } from "../components";
const Employees = () => {
  return (
    <div className="m-3 rounded-xl bg-white p-3 dark:bg-secondary-dark-bg md:m-10 md:p-10">
      <Header category="Page" title="Employees" />
      <GridComponent
        width={`auto`}
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={[`Search`]}
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Search]} />
      </GridComponent>
    </div>
  );
};

export default Employees;
