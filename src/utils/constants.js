export const userLogo =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const apiOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_TOKEN}`,
  },
};

export const movieTrailerUrl = (movieId) => {
  return `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;
};
