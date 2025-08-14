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
import useCartStore from "@/store";
import toast from "react-hot-toast";

interface Props {
  product: Product;
  className?: string;
  borderStyle?: string;
}

const QuantityButtons = ({ product, className, borderStyle }: Props) => {
  const { addItem, getItemCount, removeItem } = useCartStore();

  const itemCount = getItemCount(product?._id);
  const isOutOfStock = product?.stock === 0;

  const handleRemoveProduct = () => {
    removeItem(product?._id);
    if (itemCount > 1) {
      toast.success("Quantity Decreased successfully!");
    } else {
      toast.success(`${product?.name?.substring(0, 12)} removed successfully!`);
    }
  };
  return (
    <div
      className={twMerge(
        "flex items-center gap-1 pb-1 text-base",
        borderStyle,
        className
      )}
    >
      <Button
        onClick={handleRemoveProduct}
        disabled={itemCount === 0 || isOutOfStock}
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
        onClick={() => {
          addItem(product);
          toast.success(
            `${product?.name?.substring(0, 12)}... added successfully!`
          );
        }}
        variant="outline"
        size="icon"
        className="w-6 h-6 cursor-pointer"
        disabled={isOutOfStock}
      >
        <Plus />
      </Button>
    </div>
  );
};

export default QuantityButtons;
