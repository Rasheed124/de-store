"use client";

import React from "react";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

const CartIcon = () => {
  const itemCount = 3; // You can later make this dynamic via props or context

  return (
    <Link href={'/cart'} className="relative group cursor-pointer">
      <ShoppingBag className="w-6 h-6 text-gray-700 transition-colors group-hover:text-black" />
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-black text-white text-xs font-semibold px-1.5 py-0.5 rounded-full transition-transform group-hover:scale-110">
          {itemCount}
        </span>
      )}
    </Link>
  );
};

export default CartIcon;
