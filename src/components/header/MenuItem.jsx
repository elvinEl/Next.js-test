import React from "react";
import Link from "next/link";
function MenuItem({ item }) {
  return (
    <div>
      <Link href={item.url}>{item.name}</Link>
    </div>
  );
}

export default MenuItem;
