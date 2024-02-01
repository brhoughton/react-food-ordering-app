import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-12 md:h-24 p-4 lg:p-20 xl:p-40 text-red-700 flex items-center justify-between">
      <Link href="/" className="text-xl font-bold text-red-700 uppercase">
        Wally's
      </Link>
      <p>© ALL RIGHTS RESERVED</p>
    </div>
  );
};

export default Footer;
