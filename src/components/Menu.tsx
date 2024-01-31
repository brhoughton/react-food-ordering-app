"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "menu" },
  { id: 3, title: "Hours", url: "/" },
  { id: 4, title: "Tap List", url: "https://www.beermenus.com/qr_menus/3653" },
  { id: 5, title: "Contact", url: "/" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {!open ? (
        <Image
          src="/open.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          src="/close.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(false)}
        />
      )}
      <div className="bg-red-500 text-white absolute left-0 top-24 h-[calc(100vh-6rem)]">
        {links.map((item) => (
          <Link href={item.url} key={item.id}>
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Menu;

// 21:13, https://youtu.be/gXlcwtS40LA?si=SR2d1c9dSo29qNw0
