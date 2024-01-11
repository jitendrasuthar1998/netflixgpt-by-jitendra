import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailerVideo from "../hooks/useMovieTrailerVideo";

const VideoBackground = ({ id , videoRef}) => {
  useMovieTrailerVideo(id);

  const mainMovieTrailer = useSelector(
    (store) => store.movies.mainMovieTrailer
  );

  

  return (
    <>
      {mainMovieTrailer?.key ? (
        <iframe
          ref={videoRef}
          className="w-screen object-cover h-full"
          src={`https://www.youtube.com/embed/ns8weNznn1Y?si=${mainMovieTrailer.key}?controls=0&autoplay=1&mute=1`}
          title="YouTube video player"
        ></iframe>
      ) : null}
    </>
  );
};

export default VideoBackground;
