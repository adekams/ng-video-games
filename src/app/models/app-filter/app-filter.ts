export interface Game {
  ID: number;
  background_image: string;
  name: string;
  released: string;
  metacritic_url: string;
  website: string;
  description: string;
  metacritic: number;
  genres: Genre[];
  parent_platforms: ParentPlatform[];
  publishers: Publishers[];
  ratings: Ratings[];
  screenshots: Screenshots[];
  trailers: Trailers[];
  reviews_count?: number;
  updated?: string;
  short_screenshots?: { image: string }[];
  tags?: Tag[];
}

export interface APIResponse<T> {
  results: T[];
  count?: number;
  next?: string;
  previous?: string;
}

interface Genre {
  name: string;
  slug?: string;
}

interface ParentPlatform {
  platform: {
    name: string;
    slug?: string;
  };
}

interface Publishers {
  name: string;
}

interface Ratings {
  id: number;
  count: number;
  title: string;
  percent?: number;
}

interface Tag {
  id: number;
  name: string;
  slug?: string;
  image_background?: string;
  games_count?: number;
  language?: string;
}

interface Screenshots {
  image: string;
}

interface Trailers {
  data: {
    max: string;
  };
}
