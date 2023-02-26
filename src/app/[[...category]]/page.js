import React from "react";
import  HomeContainer  from "@/containers/home";
import Movies from '@/mocks/movies.json'

// import {
//   fetchPopularMovies,
//   fetchTopRatedMovies,
//   fetchGenres,
//   fetchMoviesByGenre,
// } from "@/services/movie";

async function HomePage({ params }) {
  // const pagePromises = [
  //   fetchPopularMovies(),
  //   fetchTopRatedMovies(),
  //   fetchGenres(),
  // ];

  // if (!!params.category?.length) {
  //   pagePromises.push(fetchMoviesByGenre(params.category[0]));
  // }

  // const [popularMovies, topRatedMovies, genres, selectedCategoryMovies] =
  //   await Promise.all(pagePromises);

  let selectedCategory;

  if(params.category?.length>0){
    selectedCategory=true
  }

  return (
    <HomeContainer
      // categories={genres}
      // popularMovies={popularMovies}
      // topRatedMovies={topRatedMovies}
      selectedCategory={{
        id: params.category?.[0] ?? "",
        movies: selectedCategory? Movies.results.slice(0,7) : []
      }}
    />
  );
}

export default HomePage;
