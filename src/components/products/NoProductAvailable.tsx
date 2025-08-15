import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "motion/react";
import { Loader2 } from "lucide-react";

interface Props {
  selectedTab: string;
  className?: string;
}

const NoProductAvailable = ({ selectedTab, className }: Props) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center min-h-80 w-full space-y-8 text-center bg-gray-100 mt-10 rounded-lg py-10", className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2>No product available</h2>
      </motion.div>
      <motion.p
        className="text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        We&apos;re sorry, but there are no products available in the {""}{" "}
        <span className="text-base font-semibold text-black">
          {" "}
          {selectedTab}
        </span>{" "}
        category at the moment.
      </motion.p>
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="flex
            items-center space-x-2 text-blue-600"
      >
        <Loader2 className="w-4 h- animate-spin" />{" "}
        <span> We&apos;re restoring shortly</span>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-sm text-gray-600"
      >
        Please check back later.
      </motion.p>
    </div>
  );
};

export default NoProductAvailable;
