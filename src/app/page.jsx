import Movies from "@/components/header/movies/Movies";
import React from "react";
const API_URL = "https://api.themoviedb.org/3";

async function getMovies({ searchParams }) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Mjg1Y2M3NWE4YzZhNDE0ZTZkODgzZDM4MjUwZjEwZiIsInN1YiI6IjY1OTkyMDAzYmQ1ODhiMDI1ZTU4MjIwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SPRzjMSDFeyVfcU8Pr7NJ9NyAFxOSZ9Tl3C5Hje8VeY",
    },
  };

  const res = await fetch(
    `${API_URL}/${
      searchParams.genre
        ? "movie/" + searchParams.genre + "?language=en-US&page=1"
        : "trending/all/day"
    }`,
    options
  );
  return res.json();
}

async function Home({ searchParams }) {
  const movies = await getMovies({
    searchParams: { genre: searchParams.genre },
  });
  return (
    <div className="grid grid-cols-5 gap-y-8 gap-x-4">
      {movies?.results?.map((item, index) => (
        <Movies item={item} key={index} />
      ))}
    </div>
  );
}

export default Home;
