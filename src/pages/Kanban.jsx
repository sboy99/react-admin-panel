import React from "react";

import {
  KanbanComponent,
  ColumnsDirective,
  ColumnDirective,
} from "@syncfusion/ej2-react-kanban";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import { kanbanData, kanbanGrid } from "../data/dummy";
import { Header } from "../components";

const Kanban = () => {
  return (
    <div className="m-2 mt-24 rounded-xl bg-white p-2 shadow-sm dark:bg-secondary-dark-bg md:m-10 md:p-10 ">
      <Header category={`App`} title={`Kanban App`} />
      <KanbanComponent
        id="Kanban"
        cardSettings={{
          contentField: "Summary",
          headerField: "Id",
        }}
        dataSource={kanbanData}
        keyField={`Status`}
      >
        <ColumnsDirective>
          {kanbanGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  );
};

export default Kanban;
