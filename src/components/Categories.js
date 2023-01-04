import React from "react";

export const Categories = () => {
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
      name: "Romance",
      id: 10749,
    },
    {
      name: "Horror",
      id: 27,
    },
  ];
  const genreBtnArray = genres.map((item) => {
    return <CategoryBtn genre={item} />;
  });
  return (
    <div className="flex flex-wrap flex-row   items-center justify-center gap-[40px] mt-[50px] mb-[20px] ">
      {genreBtnArray}
    </div>
  );
};
function CategoryBtn({ genre }) {
  async function getData(id) {
    console.log(id);
    fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${id}&api_key=389d5483d89b4b005f9a423bae3fd0ce
    `)
      .then((res) => res.json())
      .then((data) => console.log(data.results));
  }
  return (
    <button
      className=" w-[150px] md:w-1/4 px-[30px] py-[10px] text-center font-bold text-[110%] bg-gray-300  rounded shadow-md shadow-gray-500 hover:text-gray-300 hover:bg-black hover:shadow-md hover:shadow-black hover:transition-shadow hover:duration-500 "
      onClick={() => getData(genre.id)}
    >
      {genre.name}
    </button>
  );
}
