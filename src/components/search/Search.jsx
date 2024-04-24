"use client";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
function Search() {
  const [keyword, setKeyword] = useState("");
  const searchFunc = (e) => {
    if (e.code === "Enter" && keyword.length >= 3) {
      window.location.href = `/search/${keyword}`;
    }
  };
  return (
    <div className="flex flex-1 items-center gap-2 border p-3 rounded-lg">
      <input
        onKeyDown={searchFunc}
        onChange={(e) => setKeyword(e.target.value)}
        className="outline-none flex-1 bg-transparent"
        placeholder="Search"
        type="text"
      />
      <CiSearch size={25} />
    </div>
  );
}

export default Search;
