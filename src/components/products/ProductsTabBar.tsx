import { productType } from "@/constants";
import { Repeat } from "lucide-react";
import React from "react";

interface Props {
  selectedTab: string;
  onTabSelect: (tab: string) => void;
}

const ProductsTabBar = ({ selectedTab, onTabSelect }: Props) => {
  return (
    <div className="flex items-center gap-1.5 text-sm font-semibold">
      <div className="flex items-center gap-1.5">
        {productType?.map((item) => (
          <button
            key={item.title}
            onClick={() => onTabSelect(item?.title)}
            className={`border border-black  px-4 py-1 md:px-2 md:py-2 rounded-full hover:bg-black/50 hoverEffect hover:text-white ${selectedTab === item?.title && "bg-black text-white"}`}
          >
            {item?.title}
          </button>
        ))}
      </div>

      <button className="border border-black  px-4 py-1 md:px-2 md:py-2 rounded-full hover:bg-black/50 hover:text-white hoverEffect">
        <Repeat className="w-5 h-5" />
      </button>
    </div>
  );
};

export default ProductsTabBar;
