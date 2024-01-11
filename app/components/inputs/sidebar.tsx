// Import necessary libraries and components
import React, { useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import CategoryBox from "../CategoryBox";
import Container from "../Container";
import { categories } from "../navbar/Categories";
import { AiOutlineClose } from "react-icons/ai";

// Categories component
const Categories = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();
  const isMainPage = pathname === "/";

  // Toggle sidebar function
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Close sidebar function
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  if (!isMainPage) {
    return null;
  }

  return (
    <>
      <div className="cursor-pointer" onClick={toggleSidebar}>
        <input
          type="text"
          placeholder="Categories"
          className="w-full p-4 shadow-md focus:outline-[#59968c]"
        />
      </div>

      {/* Sidebar with categories */}
      {isSidebarOpen && (
        <div className="fixed left-0 z-10 top-0 h-screen bg-white w-64 shadow-lg p-4 overflow-y-auto">
          <button className="absolute top-2 right-2" onClick={closeSidebar}>
            <AiOutlineClose size={24} color="gray" />
          </button>

          <Container>
            <div className="flex pt-6 flex-col items-start">
              {categories.map((item) => (
                <CategoryBox
                  key={item.label}
                  label={item.label}
                  icon={item.icon}
                  selected={category === item.label}
                />
              ))}
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default Categories;
