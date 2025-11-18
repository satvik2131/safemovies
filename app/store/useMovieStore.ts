import { create } from "zustand";

type MovieState = {
  movies: string[];
  setMovies: (movies: string[]) => void;
};

const useMoviestore = create<MovieState>((set) => ({
  movies: [],
  setMovies: (mvies) => {
    set({ movies: mvies });
  },
}));
