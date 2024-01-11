import React, { useRef } from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const MainContainer = () => {
  useNowPlayingMovies();

  const movies = useSelector((store) => store.movies.nowPlayingMovies);

  console.log("movies", movies);
  // if (!movies.length) return;
  console.log("movies", movies);
  const mainMovie = movies !== null && movies.results[0];

  const { original_title, overview, id } = mainMovie;

  const videoRef = useRef()

  const playVideo = () => {
    
  }

  console.log("video", videoRef);

  return (
    <>
      {movies?.results && id ? (
        <div className="relative w-full h-[700px] border-red-500 border">
          {/*  MainContainer
      - VideoBackground
      - VideoTitle */}
          <VideoTitle title={original_title} overview={overview} playVideo={playVideo}/>
          <VideoBackground id={id} videoRef={videoRef}/>
        </div>
      ) : null}
    </>
  );
};

export default MainContainer;
