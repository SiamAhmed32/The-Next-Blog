"use client";
import Link from "next/link";
import React from "react";
import Footer from "./Footer";
import { useSearchParams } from "next/navigation";
const Sidebar = ({ blogCategories }) => {
  const searchParams = useSearchParams();
  const activeCategories = searchParams.getAll("category");
  return (
    <div className="lg:w-1/3 mt-10 lg:mt-0">
      <div className="sticky top-20">
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-4">
            Discover more of what matters to you
          </h3>
          <div className="flex flex-wrap gap-2">
            {blogCategories.map((category) => {
              const isActive = activeCategories.includes(category);
              let path = "";

              if (isActive) {
                const newActiveCategories = activeCategories.filter(
                  (activeCat) => activeCat !== category
                );
                if (newActiveCategories.length > 0) {
                  path =
                    "/?" +
                    newActiveCategories
                      .map((cat) => `category=${cat}`)
                      .join("&");
                } else {
                  path = "/";
                }
              } else {
                const newActiveCategories = [...activeCategories, category];
                path =
                  "/?" +
                  newActiveCategories.map((cat) => `category=${cat}`).join("&");
              }

              return (
                <Link
                  key={category}
                  href={path}
                  className={`${
                    isActive ? "bg-green-200" : "bg-gray-100 hover:bg-gray-200"
                  } font-medium px-4 py-2 rounded-full text-sm transition-colors`}
                >
                  {category}
                </Link>
              );
            })}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Sidebar;
