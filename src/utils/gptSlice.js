import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptSearchText: null,
    tmdbMovieNames: [],
    tmdbSearchResults: [],
    loadingText: "Search for movies....",
    movieLang: "all",
  },
  reducers: {
    toggleGptSearch: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addTmdbResults: (state, action) => {
      state.tmdbSearchResults = action.payload;
    },
    addMovieNames: (state, action) => {
      state.tmdbMovieNames = action.payload;
    },
    addSearchText: (state, action) => {
      state.gptSearchText = action.payload;
    },
    changeMovieLang: (state, action) => {
      state.movieLang = action.payload;
    },
    changeLoadingText: (state, action) => {
      state.loadingText = action.payload;
    },
  },
});

export const {
  toggleGptSearch,
  addTmdbResults,
  addMovieNames,
  addSearchText,
  changeMovieLang,
  changeLoadingText,
} = gptSlice.actions;
export default gptSlice.reducer;
