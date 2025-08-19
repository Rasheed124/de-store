"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Category } from "../../sanity.types";

const HeaderMenu = ({ categories }: { categories: Category[] }) => {
  const pathname = usePathname();

  return (
    <div className="hidden lg:inline-flex items-center gap-5 text-lg capitalize font-semibold w-1/3  ">
      {/* {headerData.map((item) => (
        <Link
          className={`hover:text-black font-bold group relative hoverEffect ${
            pathname === item?.href && "text-black/50"
          }`}
          key={item?.title}
          href={item?.href}
        >
          {item?.title}
          <span
            className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-black hoverEffect group-hover:w-1/2 group-hover:left-0  ${
              pathname === item?.href && "w-1/2"
            }`}
          ></span>
          <span
            className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-black hoverEffect group-hover:w-1/2 group-hover:right-0  ${
              pathname === item?.href && "w-1/2"
            }`}
          ></span>
        </Link>
      ))} */}

      <Link
        href={"/"}
        className={`hover:text-black hoverEffect relative group ${pathname === "/" && "text-black"}`}
      >
        Home
        <span
          className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-1/2 group-hover:left-0 ${
            pathname === "/" && "w-1/2"
          }`}
        />
        <span
          className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-1/2 group-hover:right-0 ${
            pathname === "/" && "w-1/2"
          }`}
        />
      </Link>

      {categories?.map((category: Category) => (
        <Link
          key={category?._id}
          href={`/category/${category?.slug?.current}`}
          className={`hover:text-black hoverEffect relative group ${pathname === `/category/${category?.slug?.current}` && "text-black"}`}
        >
          {category?.title}
          <span
            className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-1/2 group-hover:left-0 ${
              pathname === `/category/${category?.slug?.current}` && "w-1/2"
            }`}
          />
          <span
            className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-darkColor transition-all duration-300 group-hover:w-1/2 group-hover:right-0 ${
              pathname === `/category/${category?.slug?.current}` && "w-1/2"
            }`}
          />
        </Link>
      ))}
    </div>
  );
};

export default HeaderMenu;
