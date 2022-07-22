import React from "react";

import {
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  Day,
  Week,
  Month,
  WorkWeek,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import { scheduleData } from "../data/dummy";
import { Header } from "../components";

//*Calender Component*//
const Calendar = () => {
  return (
    <>
      <div className=" m-2 mt-24 rounded-3xl bg-white p-2 md:m-10 md:p-10">
        <Header category={`App`} title={`Calender`} />
        <ScheduleComponent
          height={`650px`}
          eventSettings={{
            dataSource: scheduleData,
          }}
          selectedDate={new Date(2021, 0, 10)}
        >
          {/* <ViewsDirective>
            {scheduleData.map((item, index) => (
              <ViewDirective key={index} {...item} />
            ))}
          </ViewsDirective> */}
          <Inject
            services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}
          />
        </ScheduleComponent>
      </div>
    </>
  );
};

export default Calendar;
