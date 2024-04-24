import React from "react";
import Link from "next/link";
function Movies({ item }) {
  return (
    <Link href={`movie/${item?.id}`} className="relative  cursor-pointer">
      {/* <Image
        width={300}
        height={300}
        src={`https://image.tmdb.org/t/p/original${
          item?.poster_path || item?.backdrop_path
        }`}
        alt=""
      /> */}
      <img
        className="h-full w-full"
        src={`https://image.tmdb.org/t/p/original${
          item?.poster_path || item?.backdrop_path
        }`}
        alt=""
      />

      <div className="absolute bottom-0 p-3 text-2xl w-full h-full flex flex-col justify-end opacity-0 hover:opacity-90 duration-200">
        <p>{item?.title}</p>
        <p>{item?.release_date}</p>
      </div>
    </Link>
  );
}

export default Movies;
