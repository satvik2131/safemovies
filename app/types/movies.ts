export interface Movie {
  id: string;
  url: string;

  primaryTitle: string;
  originalTitle: string;
  type: string; // or: "movie" | "series" etc.

  description: string;
  primaryImage: string;

  thumbnails: Thumbnail[];

  trailer: string | null;

  contentRating: string | null;

  startYear: number;
  endYear: number | null;
  releaseDate: string; // ISO date string

  interests: string[];

  countriesOfOrigin: string[];

  externalLinks: string[];

  spokenLanguages: string[];

  filmingLocations: string[];

  productionCompanies: ProductionCompany[];

  budget: number;
  grossWorldwide: number;

  genres: string[];

  isAdult: boolean;

  runtimeMinutes: number;

  averageRating: number;
  numVotes: number;

  metascore: number;
}

export interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

export interface ProductionCompany {
  id: string;
  name: string;
}

export type Movies = Movie[];
