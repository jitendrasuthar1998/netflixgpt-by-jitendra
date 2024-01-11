import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    mainMovieTrailer:null
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      console.log("addNowPlayingMovies", action.payload);
      state.nowPlayingMovies = action.payload;
    },
    addMovieTrailerVideo:(state, action) => {
      state.mainMovieTrailer = action.payload;
    }
  },
});

export const { addNowPlayingMovies,addMovieTrailerVideo } = moviesSlice.actions;

export default moviesSlice.reducer;
