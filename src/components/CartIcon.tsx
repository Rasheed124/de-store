"use client";

import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import useCartStore from "@/store";

const CartIcon = () => {
  const groupedItems = useCartStore((state) => state.getGroupedItems());

  const totalCount = groupedItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Link href={"/cart"} className="relative group cursor-pointer">
      <ShoppingBag className="w-6 h-6 text-gray-700 transition-colors group-hover:text-black" />
      <span className="absolute -top-2 -right-2 bg-black text-white text-xs font-semibold px-1.5 py-0.5 rounded-full transition-transform group-hover:scale-110">
        {/* {groupedItems.length ? groupedItems.length : 0} */}

        {totalCount}
      </span>
    </Link>
  );
};

export default CartIcon;
