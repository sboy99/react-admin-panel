import React from "react";

import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
} from "@syncfusion/ej2-react-grids";
import { ordersData, contextMenuItems, ordersGrid } from "../data/dummy";
import { Header } from "../components";
const Orders = () => {
  return (
    <div className="m-3 rounded-xl bg-white p-3 dark:bg-secondary-dark-bg md:m-10 md:p-10">
      <Header category="Page" title="Orders" />
      <GridComponent
        id="gridComp"
        dataSource={ordersData}
        allowPaging
        allowSorting
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, Page, ExcelExport, PdfExport, Edit]} />
      </GridComponent>
    </div>
  );
};

export default Orders;
