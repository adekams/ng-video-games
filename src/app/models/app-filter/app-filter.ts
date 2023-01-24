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
  parent_platform: Array<ParentPlatform>;
  publishers: Array<Publishers>;
  ratings: Array<Ratings>;
  screenshots: Array<Screenshots>;
  trailers: Array<Trailers>;
}

export interface APIResponse<T> {
  results: Array<T>;
}

interface Genre {
  name: string;
}

interface ParentPlatform {
  platform: {
    name: string;
  };
}

interface Publishers {
  name: string;
}

interface Ratings {
  id: number;
  count: number;
  title: string;
}

interface Screenshots {
  image: string;
}
interface Trailers {
  data: {
    max: string;
  };
}
