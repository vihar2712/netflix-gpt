
export const USER_LOGO =
  "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg";

export const BACKGROUND_IMAGE =
  "https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const NOW_PLAYING_MOVIES_API_URL =
  "https://api.themoviedb.org/3/movie/now_playing";

export const POPULAR_MOVIES_API_URL =
  "https://api.themoviedb.org/3/movie/popular?page=2";

export const TOP_RATED_MOVIES_API_URL =
  "https://api.themoviedb.org/3/movie/top_rated";

export const UPCOMING_MOVIES_API_URL =
  "https://api.themoviedb.org/3/movie/upcoming?page=1";

export const MOVIE_IMAGE_URL = "https://image.tmdb.org/t/p/w500/";

export const OPEN_AI_KEY = process.env.REACT_APP_OPEN_AI_KEY;

export const SEARCH_MOVIES_API_URL =
  "https://api.themoviedb.org/3/search/movie?query=";

export const MOVIE_INFO_URL = "https://api.themoviedb.org/3/movie/";

export const IMDB_LINK = "https://m.imdb.com/title/";
