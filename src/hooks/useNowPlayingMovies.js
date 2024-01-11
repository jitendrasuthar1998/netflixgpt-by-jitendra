import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { apiOptions } from "../utils/constants";
import { addNowPlayingMovies } from "../redux/moveisSlice";
import moviesData from "../data/nowPlayingMovies.json";

const useNowPlayingMovies = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    getMovieList();
  }, []);

  const url = "https://api.themoviedb.org/3/movie/now_playing?&page=1";

  const getMovieList = () => {
    // fetch(url, apiOptions)
    //   .then((res) => res.json())
    //   .then((json) => {
    //     dispatch(addNowPlayingMovies(json));
    //     console.log(json);
    //   })
    //   .catch((err) => console.error("error:" + err));
    dispatch(addNowPlayingMovies(moviesData));
  };
};

export default useNowPlayingMovies;
