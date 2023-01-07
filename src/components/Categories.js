import React, { useState } from "react";
import { Movies } from "./Movies";
export const Categories = () => {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState();
  const genres = [
    {
      name: "Action",
      id: 28,
    },
    {
      name: "Adventure",
      id: 12,
    },
    {
      name: "Animation",
      id: 16,
    },
    {
      name: "Comedy",
      id: 35,
    },
    {
      name: "Crime",
      id: 80,
    },
    {
      name: "Drama",
      id: 18,
    },
    {
      name: "Romance",
      id: 10749,
    },
    {
      name: "Horror",
      id: 27,
    },
  ];
  async function getData(e, id) {
    e.preventDefault();
    console.log(id);
    const url = `https://api.themoviedb.org/3/discover/movie?with_genres=${id}&api_key=389d5483d89b4b005f9a423bae3fd0ce`;
    try {
      setLoader(true);
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
      setLoader(false);
    } catch (err) {
      console.log(err);
    }
    // fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${id}&api_key=389d5483d89b4b005f9a423bae3fd0ce
    // `)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data.results);
    //     setMovies(data.results);
    //   });
  }
  const genreBtnArray = genres.map((item) => {
    return (
      <button
        className=" w-[100px]  px-[5px] py-[10px] text-center font-bold text-[80%] bg-gray-300  rounded shadow-md shadow-gray-500 hover:text-gray-300 hover:bg-black hover:shadow-md hover:shadow-black hover:transition-shadow hover:duration-500 "
        onClick={(e) => getData(e, item.id)}
      >
        {item.name}
      </button>
    );
  });

  return (
    <>
      <div className="flex flex-wrap flex-row   items-center justify-center gap-[25px] mt-[20px] mb-[20px] ">
        {genreBtnArray}
      </div>
      {loader && <p>Loading</p>}
      <Movies data={movies} />
    </>
  );
};
// function CategoryBtn({ genre }) {
//   return (
//     <button
//       className=" w-[100px]  px-[5px] py-[10px] text-center font-bold text-[80%] bg-gray-300  rounded shadow-md shadow-gray-500 hover:text-gray-300 hover:bg-black hover:shadow-md hover:shadow-black hover:transition-shadow hover:duration-500 "
//       onClick={() => getData(genre.id)}
//     >
//       {genre.name}
//     </button>
//   );
// }
