import React from "react";

const VideoTitle = ({ title, overview,playVideo }) => {
  return (
    <div className="w-screen object-cover h-full absolute flex flex-col justify-end pb-20 pl-20  bg-black bg-opacity-40 text-white">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="text-lg mt-8 w-1/3">{overview}</p>
      <div className="mt-4">
        <button onClick={()=> playVideo()} className="p-2 bg-white text-black mr-4 rounded">▶️ Play</button>
        <button className="p-2 bg-gray-500 text-white rounded bg-opacity-80">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
