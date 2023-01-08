import React from "react";

export const Movies = ({ data }) => {
  console.log(data);
  const movieArr = data
    .filter((item) => item.poster_path)
    .map((item) => {
      return <MovieCard info={item} />;
    });
  return (
    <div className="flex flex-wrap gap-y-[25px] gap-x-[25px] items-baseline justify-center m-[15px]">
      {movieArr}
    </div>
  );
};
function MovieCard({ info }) {
  return (
    <div className="max-h-[300px] bg-black rounded max-w-[150px] flex flex-col items-center justify-center  m-[5px] gap-[5px] text-white shadow-2xl shadow-gray-600 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:shadow-2xl hover:shadow-gray-400">
      <img
        src={`https://www.themoviedb.org/t/p/w220_and_h330_face${info?.poster_path}`}
        alt="img"
        className="rounded-tl rounded-tr"
      />
      <div className="flex flex-col items-center justify-center gap-[3px] text-[60%] my-[3px]">
        <p className="text-center">{info?.title}</p>
        <p className="text-center">{info?.vote_average} ⭐</p>
      </div>
    </div>
  );
}
