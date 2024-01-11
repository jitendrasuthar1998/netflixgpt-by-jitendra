import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { apiOptions, movieTrailerUrl } from "../utils/constants";
import { addMovieTrailerVideo } from "../redux/moveisSlice";

const useMovieTrailerVideo = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    getMovieVideos();
  }, []);

  const getMovieVideos = () => {
    fetch(movieTrailerUrl(id), apiOptions)
      .then((res) => res.json())
      .then((json) => {
        const filterMovieTrailer = json.results.filter(
          (video) => video.type === "Trailer"
        );
        const trailer = filterMovieTrailer.length
          ? filterMovieTrailer[0]
          : json.results[0];

        dispatch(addMovieTrailerVideo(trailer));
      })
      .catch((err) => console.error("error:" + err));
  };
};

export default useMovieTrailerVideo;
