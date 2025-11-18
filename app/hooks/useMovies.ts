import { useQuery } from "@tanstack/react-query";
import { getAllMovies } from "../api/movies";

export const useMovies = (limit: number) => {
  return useQuery({
    queryKey: ["movies"],
    queryFn: () => {
      return getAllMovies(limit);
    },
    staleTime: 1000 * 60 * 5, // Data is fresh for 5 minutes
  });
};
