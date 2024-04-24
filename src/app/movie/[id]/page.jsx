import React from "react";
import "./style.css";
import Image from "next/image";

const getMovieDetails = async (id) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Mjg1Y2M3NWE4YzZhNDE0ZTZkODgzZDM4MjUwZjEwZiIsInN1YiI6IjY1OTkyMDAzYmQ1ODhiMDI1ZTU4MjIwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SPRzjMSDFeyVfcU8Pr7NJ9NyAFxOSZ9Tl3C5Hje8VeY",
    },
  };
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}`, options);
  return res.json();
};

async function MovieDetail({ params }) {
  const movieDetail = await getMovieDetails(params.id);
  return (
    <div className="movieWrapper">
      <h1 className="movieTitle">{movieDetail.title}</h1>
      <div className="moviePoster">
        <div className="moviePosterOverlay"></div>
        <Image
          unoptimized
          src={`https://image.tmdb.org/t/p/original${movieDetail.poster_path}`}
          fill
        />
      </div>
    </div>
  );
}

export default MovieDetail;
