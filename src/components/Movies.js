import React from "react";

export const Movies = ({ data }) => {
  console.log(data);
  const movieArr = data.map((item) => {
    return <MovieCard info={item} />;
  });
  return (
    <div className="flex flex-wrap gap-[10px] items-baseline justify-center">
      {movieArr}
    </div>
  );
};
function MovieCard({ info }) {
  return (
    <div className="max-h-[300px] bg-black rounded max-w-[150px] flex flex-col items-center justify-center p-[10px] m-[10px] ggap-[5px] text-white">
      <img
        src={`https://www.themoviedb.org/t/p/w220_and_h330_face${info?.poster_path}`}
        alt="img"
      />
      <div className="flex flex-col gap-[3px] text-[60%]">
        <p>{info?.title}</p>
        <p>{info?.vote_average} ⭐</p>
      </div>
    </div>
  );
}
