import React from "react";

import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Inject,
  Toolbar,
  Edit,
  Sort,
  Filter,
  Selection,
} from "@syncfusion/ej2-react-grids";
import { customersData, customersGrid } from "../data/dummy";
import { Header } from "../components";

//*Component Function*//
const Customers = () => {
  return (
    <div className="m-3 rounded-xl bg-white p-3 dark:bg-secondary-dark-bg md:m-10 md:p-10">
      <Header category="Page" title="Customers" />
      <GridComponent
        width="auto"
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={["Delete"]}
        editSettings={{ allowDeleting: true, allowEditing: true }}
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
          <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]} />
        </ColumnsDirective>
      </GridComponent>
    </div>
  );
};

export default Customers;
