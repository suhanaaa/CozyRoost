"use client";

import { MouseEvent, useState } from "react";
import Button from "../Button";
import Container from "../Container";
import Input from "./Input";
import Counter from "./Counter";
import CountrySelect, { CountrySelectValue } from "./CountrySelect";
import DateRangePicker from "./DateRangePicker";
import Categories from "../navbar/Categories";
import Sidebar from "./sidebar";

const Details = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [guests, setGuests] = useState({
    adults: 0,
    childrens: 0,
    rooms: 0,
  });

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleGuestChange = (type: any, value: number) => {
    setGuests((prevGuests) => ({ ...prevGuests, [type]: value }));
  };

  const handleClick = (option: any) => {
    setIsDropdownVisible(false);
  };

  const totalGuests = guests.adults + guests.childrens + guests.rooms;
  const displayValue = `Adults ${guests.adults} | Children ${guests.childrens} | Rooms ${guests.rooms}`;

  return (
    <>
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between">
            <div className="mr-4">
              <Sidebar />
            </div>
            <div className="flex-grow mr-4">
              <input
                type="text"
                placeholder="Where are you going?"
                className="w-full p-4 shadow-md focus:outline-[#59968c]"
              />
              {/* <CountrySelect
                className="w-full p-4  focus:outline-[#59968c] cursor-pointer"
                onChange={function (value: CountrySelectValue): void {}}
              /> */}
            </div>
            <div className="mr-4">
              <DateRangePicker />
            </div>
            <div className="relative w-50% flex-grow mr-4">
              <input
                type="text"
                placeholder="How many guests?"
                className="w-full p-4 shadow-md focus:outline-[#59968c] text-neutral-500 cursor-pointer"
                onClick={toggleDropdown}
                value={displayValue}
              />
              {isDropdownVisible && (
                <div className="absolute top-full left-0 mt-2 bg-white border border-[#59968c] rounded-md shadow-md py-4 px-6 lg:w-full">
                  {/* Dropdown options */}
                  <Counter
                    value={guests.adults}
                    title="Adults"
                    className="p-2 cursor-pointer hover:bg-gray-100"
                    onChange={(value) => handleGuestChange("adults", value)}
                  />

                  <Counter
                    value={guests.childrens}
                    title="Childrens"
                    className="p-2 cursor-pointer hover:bg-gray-100"
                    onChange={(value) => handleGuestChange("childrens", value)}
                  />

                  <Counter
                    value={guests.rooms}
                    title="Rooms"
                    className="p-2 cursor-pointer hover:bg-gray-100"
                    onChange={(value) => handleGuestChange("rooms", value)}
                  />
                  <div className="flex justify-center items-center mt-4">
                    <button
                      className="p-2 px-32 bg-[#59968c] text-white cursor-pointer hover:text-[#59968c] hover:bg-transparent hover:border hover:border-[#59968c] lg:w-full"
                      onClick={handleClick}
                    >
                      Apply
                    </button>
                  </div>
                </div>
              )}
            </div>
            <button className="bg-[#59968c] px-4 py-2 shadow-lg rounded-sm text-white">
              Search
            </button>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Details;
