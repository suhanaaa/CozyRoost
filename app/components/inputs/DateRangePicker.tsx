"use client";

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { CiCalendarDate } from "react-icons/ci";

import "react-datepicker/dist/react-datepicker.css";

const DateRangePicker = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const handleDateChange = (dates: [any, any]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const openDatePicker = () => {
    setIsDatePickerOpen(true);
  };

  return (
    <div className="relative">
      <div className="relative">
        <DatePicker
          selectsRange
          startDate={startDate}
          endDate={endDate}
          onChange={handleDateChange}
          placeholderText="Select your date!"
          className="w-full p-4 pr-10 focus:outline-[#59968c] shadow-md text-neutral-500"
          open={isDatePickerOpen}
          onClickOutside={() => setIsDatePickerOpen(false)}
        />
        <CiCalendarDate
          className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
          size={28}
          onClick={openDatePicker}
        />
      </div>
    </div>
  );
};

export default DateRangePicker;
