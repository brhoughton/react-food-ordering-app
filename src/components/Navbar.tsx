import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";

const Navbar = () => {
  const user = false;

  return (
    <div className="h-12 text-black p-4 flex items-center justify-between border-b-2 border-b-red-700 uppercase md:h-24 lg:px-20 xl:px-40">
      {/* LEFT SIDE LINKS */}
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
      </div>

      {/* LOGO */}
      <div className="text-xl md:font-bold text-red-700 flex-1 md:text-center">
        <Link href="/">Wally's</Link>
      </div>

      {/* MOBILE MENU */}
      <div className="md:hidden">
        <Menu />
      </div>

      {/* RIGHT SIDE LINKS */}
      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        <div className="md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-red-700 px-1 rounded-md">
          <Image src="/phone.png" alt="phone icon" width={20} height={20} />
          <span className="text-white">(530) 677-5205</span>
        </div>
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/orders">Orders</Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
