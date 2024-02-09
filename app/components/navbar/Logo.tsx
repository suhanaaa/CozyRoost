"use client";

import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <span className="hidden md:block cursor-pointer font-extrabold text-xl text-accent">
      CozyRoost
    </span>
  );
};

export default Logo;
