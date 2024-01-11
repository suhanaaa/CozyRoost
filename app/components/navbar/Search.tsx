"use client";

import useCountries from "@/app/hooks/useCountries";
import useSearchModal from "@/app/hooks/useSearchModal";
import { differenceInDays } from "date-fns";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  const searchModal = useSearchModal();
  const params = useSearchParams();
  const { getByValue } = useCountries();

  const locationValue = params?.get("locationValue");
  const startDate = params?.get("startDate");
  const endDate = params?.get("endDate");
  const guestCount = params?.get("guestCount");

  // get the location label on the navigation
  const locationLable = useMemo(() => {
    if (locationValue) {
      return getByValue(locationValue as string)?.label;
    }

    return "Explore";
  }, [getByValue, locationValue]);

  // get the duration label on the navigation
  const durationLable = useMemo(() => {
    if (startDate && endDate) {
      const start = new Date(startDate as string);
      const end = new Date(endDate as string);
      let diff = differenceInDays(end, start);

      if (diff === 0) {
        diff = 1;
      }

      return `${diff} Days`;
    }

    return "Find Dates";
  }, [startDate, endDate]);

  // get the guest label on the navigation
  const guestLable = useMemo(() => {
    if (guestCount) {
      return `${guestCount} Guests`;
    }

    return "Guests";
  }, [guestCount]);

  return (
    <div
      onClick={searchModal.onOpen}
      className="border-[1px] w-full md:w-auto py-2 pl-4 pr-1 rounded-md shadow-md hover:shadow-lg transition cursor-pointer bg-white"
    >
      <div className="flex flex-row items-center justify-between">
        <div className="text-sm pr-4 font-semibold text-gray-700">
          {locationLable}
        </div>
        <div className="hidden sm:block pr-4 text-sm font-semibold px-4 border-l flex-1 text-center text-gray-700">
          {durationLable}
        </div>
        <div className="text-sm pl-4 pr-2 text-dark-grey flex flex-row items-center gap-3">
          <div className="hidden sm:block text-gray-700">{guestLable}</div>
          <div className="rounded-sm p-2 bg-[#59968c] square-icon text-white">
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
