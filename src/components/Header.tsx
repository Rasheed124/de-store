import React from "react";
import Container from "./Container";
import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import SearchBar from "./SearchBar";
import CartIcon from "./CartIcon";
import { auth } from "@clerk/nextjs/server";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { ListOrdered } from "lucide-react";
import { getAllCategories, getMyOrders } from "@/sanity/helpers";

const Header = async () => {
  const { userId } = await auth();

  let orders = null;
  if (userId) {
    orders = await getMyOrders(userId);
  }

  const categories = await getAllCategories();

  return (
    <header className=" border border-gray-400 py-5">
      <Container className="flex justify-between  items-center">
        {/* Header Menu Left */}
        <HeaderMenu categories={categories} />

        {/* Header Logo Centered */}
        <div className="w-auto md:w-1/3 flex items-center justify-center gap-2.5">
          <MobileMenu />
          <Logo className="">DeStore</Logo>
        </div>

        {/* Header Right */}
        <div className="w-auto md:w-1/3 flex items-center justify-end gap-5 ">
          <SearchBar />
          <CartIcon />

          <SignedIn>
            <Link href={"/orders"} className="relative group cursor-pointer">
              <ListOrdered className="w-6 h-6 text-gray-700 transition-colors group-hover:text-black" />
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs font-semibold px-1.5 py-0.5 rounded-full transition-transform group-hover:scale-110">
                {orders?.length ? orders?.length : 0}
              </span>
            </Link>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <button className="text-sm font-semibold hover:text-black hoverEffect">
                Login
              </button>
            </SignInButton>
          </SignedOut>
        </div>
      </Container>
    </header>
  );
};

export default Header;
