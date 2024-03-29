"use client";

import { SafeUser } from "@/app/types";
import React from "react";
import HeartButton from "../HeartButton";
import Image from "next/image";
import Heading from "../Heading";
import useCountries from "@/app/hooks/useCountries";

interface ListingHeadProps {
  title: string;
  locationValue: string;
  imageSrc: string;
  id: string;
  currentUser?: SafeUser | null;
}

const ListingHead: React.FC<ListingHeadProps> = ({
  title,
  locationValue,
  imageSrc,
  id,
  currentUser,
}) => {
  const { getByValue } = useCountries();

  const location = getByValue(locationValue);

  return (
    <>
      <div className="mt-20 w-full">
        <Heading
          title={title}
          subtitle={`${location?.region}, ${location?.label}`}
        />
        <div
          className="
            w-full
            h-[60vh]
            overflow-hidden
            rounded-xl
            relative
          "
        >
          <Image
            src={imageSrc}
            fill
            className="w-full object-cover"
            alt="Image"
          />
          <div
            className="
              absolute
              top-5
              right-5
            "
          >
            <HeartButton listingId={id} currentUser={currentUser} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ListingHead;
