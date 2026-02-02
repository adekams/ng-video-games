export interface Game {
  ID: number;
  background_image: string;
  name: string;
  released: string;
  metacritic_url: string;
  website: string;
  description: string;
  metacritic: number;
  genres: Array<Genre>;
  parent_platforms: Array<ParentPlatform>;
  publishers: Array<Publishers>;
  ratings: Array<Ratings>;
  screenshots: Array<Screenshots>;
  trailers: Array<Trailers>;
  reviews_count?: number;
  updated?: string;
  short_screenshots?: Array<{ image: string }>;
  tags?: Array<Tag>;
}

export interface APIResponse<T> {
  results: Array<T>;
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
