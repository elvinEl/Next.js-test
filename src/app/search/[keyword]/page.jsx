import Link from "next/link";
import React from "react";
const API_URL = "https://api.themoviedb.org/3";

const getSearchResult = async ({ keyword }) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Mjg1Y2M3NWE4YzZhNDE0ZTZkODgzZDM4MjUwZjEwZiIsInN1YiI6IjY1OTkyMDAzYmQ1ODhiMDI1ZTU4MjIwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SPRzjMSDFeyVfcU8Pr7NJ9NyAFxOSZ9Tl3C5Hje8VeY",
    },
  };
  const res = await fetch(
    `${API_URL}/search/movie?query=${keyword}&language=en-US&page=1`,
    options
  );
  return res.json();
};

async function SearchPage({ params }) {
  const keyword = params.keyword;
  const searchResult = await getSearchResult({ keyword });
  const data = searchResult && searchResult.results;
  return (
    <div className="grid grid-cols-6 gap-4 max-w-[95%] mx-auto">
      {data &&
        data.map((item, index) => (
          <div className="col-span-1" key={index}>
            <Link className="" key={index} href={`/movie/${item.id}`}>
              {item.title}
              <img
                src={`https://image.tmdb.org/t/p/original${
                  item?.poster_path || item?.backdrop_path
                }`}
                alt=""
              />
            </Link>
          </div>
        ))}
    </div>
  );
}

export default SearchPage;
