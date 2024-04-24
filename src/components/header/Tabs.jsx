"use client";
import Link from "next/link";
import React from "react";
import { useSearchParams } from "next/navigation";

function Tabs() {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  const tabs = [
    { name: "Popular", url: "popular" },
    { name: "Latest", url: "latest" },
    { name: "Come soon", url: "upcoming" },
  ];
  return (
    <div className="dark:bg-gray-900 p-5 m-3 flex justify-center items-center gap-4 bg-gray-100">
      {tabs.map((tab, index) => (
        <Link
          className={`hover:opacity-75 transition-opacity ${
            tab.url === genre ? "underline underline-offset-8 text-lime-300" : ""
          }`}
          key={index}
          href={`/?genre=${tab.url}`}
        >
          {tab.name}
        </Link>
      ))}
    </div>
  );
}

export default Tabs;
