import React, { useEffect, useState } from "react";
import { Movies } from "./Movies";
import { genres } from "../config";
export const Categories = () => {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState();

  useEffect(() => {
    async function getData(id, event) {
      // event.preventDefault();
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
    }
    getData(37);
  }, []);
  async function getData(id, event) {
    // event.preventDefault();
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
        onClick={(e) => {
          e.preventDefault();
          getData(item.id);
        }}
      >
        {item.name}
      </button>
    );
  });
  async function getQuery() {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=5c154ee0124acaaa75525eb289958657&language=en-US&query=${search}&page=1&include_adult=false`;
    try {
      setLoader(true);
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
      setLoader(false);
    } catch (err) {
      console.log(err);
    }
    setSearch("");
  }
  const [search, setSearch] = useState("");
  return (
    <>
      <div className="flex  my-[10px]">
        <input
          type="text"
          placeholder="Enter Film Name"
          className="px-[30px] rounded-tl rounded-bl text-[90%]"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="px-[15px] py-[10px] font-bold text-[90%] bg-gray-300 "
          onClick={getQuery}
        >
          Find
        </button>
      </div>
      <div className="flex flex-wrap flex-row   items-center justify-center gap-[25px] mt-[20px] mb-[20px] ">
        {genreBtnArray}
      </div>
      {loader ? (
        <p className="text-white text-[160%] font-bold flex items-center justify-center my-[50px]">
          Loading.....
        </p>
      ) : (
        <Movies data={movies} />
      )}
    </>
  );
};
