import React from "react";
// import { Button } from "./ui/button";
// import { HiMinus, HiPlus } from "react-icons/hi2";
// import toast from "react-hot-toast";
// import useCartStore from "@/store";
// import { Product } from "@/sanity.types";
import { twMerge } from "tailwind-merge";
import { Product } from "../../../sanity.types";
import { Button } from "../ui/button";
import { Minus, Plus } from "lucide-react";

interface Props {
  product: Product;
  className?: string;
  borderStyle?: string;
}

const QuantityButtons = ({ product, className, borderStyle }: Props) => {
//   const { addItem, removeItem, getItemCount } = useCartStore();
  const itemCount = 0;
  const isOutOfStock = product?.stock === 0;

//   const handleRemoveProduct = () => {
//     removeItem(product?._id);
//     if (itemCount > 1) {
//       toast.success("Quantity Decreased successfully!");
//     } else {
//       toast.success(`${product?.name?.substring(0, 12)} removed successfully!`);
//     }
//   };
  return (
    <div
      className={twMerge(
        "flex items-center gap-1 pb-1 text-base",
        borderStyle,
        className
      )}
    >
      <Button
        variant="outline"
        size="icon"
        className="w-6 h-6 cursor-pointer"
      >
        <Minus />
      </Button>
      <span className="font-semibold w-8 text-center text-darkColor">
        {itemCount}
      </span>
      <Button
        variant="outline"
        size="icon"
        className="w-6 h-6 cursor-pointer"
   
        disabled={isOutOfStock}
      >
        <Plus/>
      </Button>
    </div>
  );
};

export default QuantityButtons;