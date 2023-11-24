import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type Value = Date | null;

const CalendarComponent = () => {
  const [value] = useState<Value>(new Date());

  return <Calendar value={value} />;
};

export default CalendarComponent;
