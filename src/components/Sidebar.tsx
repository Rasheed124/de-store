import React, { FC } from "react";
import { motion } from "motion/react";
import Logo from "./Logo";
import { X } from "lucide-react";
import Link from "next/link";
import { headerData } from "@/constants";
import { usePathname } from "next/navigation";
import SocialMedia from "./SocialMedia";
import { useOuterClick } from "@/hooks/useOuterClick";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: FC<SidebarProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();

  const sideBarRef = useOuterClick<HTMLDivElement>(onClose);
  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 bg-black/45 w-full shadow-xl hoverEffect cursor-auto ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        ref={sideBarRef}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="min-w-72 max-w-96 bg-black text-white/90 h-full p-10 border-r flex border-r-white flex-col gap-6"
      >
        <div className="flex items-center justify-between">
          <button onClick={onClose}>
            <Logo className="text-white ">Hudah Store</Logo>
          </button>
          <button onClick={onClose} className="hover:text-white hoverEffect">
            <X className="w-7 h-7" />
          </button>
        </div>
        <div className="flex flex-col gap-3.5 font-semibold tracking-wide  ">
          {headerData.map((item) => (
            <Link
              onClick={onClose}
              className={`hover:text-white font-bold group relative hoverEffect w-24  ${
                pathname === item?.href && "text-gray-600  "
              }`}
              key={item?.title}
              href={item?.href}
            >
              {item?.title}
            </Link>
          ))}
        </div>

        <SocialMedia />
      </motion.div>
    </div>
  );
};

export default Sidebar;
