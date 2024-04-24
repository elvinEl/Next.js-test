import React from "react";
import MenuItem from "./MenuItem";
import Theme from "./theme/Theme";
import Link from "next/link";
import Search from "./search/Search";

function Header() {
  const menu = [
    { name: "About", url: "/about" },
    { name: "Sign in", url: "/signin" },
  ];

  return (
    <div className="flex items-center gap-3 h-20 p-5">
      <Link href="/" className="bg-lime-500  text-2xl font-bold rounded-lg p-3">
        Movie app
      </Link>
      <Search />
      <Theme />
      {menu.map((item, index) => (
        <MenuItem item={item} key={index} />
      ))}
    </div>
  );
}

export default Header;
