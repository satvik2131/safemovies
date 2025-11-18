import { movie_routes } from "../constant";
import { apiClient } from "./client";
import { Movies } from "../types/movies";

//Searching the movie
export function getSearchedMovies(search: string) {}

//fetches popular movies (not the same everytime)
export const getAllMovies = async (limit: number): Promise<Movies> => {
  const url = process.env.NEXT_PUBLIC_MOVIE_URI + movie_routes.popularmovies; // creating uri for getting top movies
  const popularMovies = apiClient.get<Movies>(url);
  const movies = await popularMovies;
  const requiredMovies = movies.length - limit;
  const finalMovies = movies.slice(0, -requiredMovies);
  return finalMovies;
};
