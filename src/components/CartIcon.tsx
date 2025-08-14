"use client";

import React from "react";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useStore } from "zustand";
import useCartStore from "@/store";

const CartIcon = () => {
  const { items } = useCartStore();

  return (
    <Link href={"/cart"} className="relative group cursor-pointer">
      <ShoppingBag className="w-6 h-6 text-gray-700 transition-colors group-hover:text-black" />
      <span className="absolute -top-2 -right-2 bg-black text-white text-xs font-semibold px-1.5 py-0.5 rounded-full transition-transform group-hover:scale-110">
        {items.length ? items.length : 0}
      </span>
    </Link>
  );
};

export default CartIcon;
