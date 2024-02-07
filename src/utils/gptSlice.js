import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptSearchText: "",
    tmdbMovieNames: [],
    tmdbSearchResults: [],
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
  },
});

export const { toggleGptSearch, addTmdbResults, addMovieNames, addSearchText } =
  gptSlice.actions;
export default gptSlice.reducer;
