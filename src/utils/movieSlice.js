import { createSlice } from '@reduxjs/toolkit'

const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularMovies: null,
    upcoming: null,
    trending: null,
    horror: null,
    webSeries: null,
    displayMovie: null,
    displayDetails: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload
    },
    addTrailer: (state, action) => {
      state.trailerVideo = action.payload
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload
    },
    addUpcoming: (state, action) => {
      state.upcoming = action.payload
    },
    addTrending: (state, action) => {
      state.trending = action.payload
    },
    addHorror: (state, action) => {
      state.horror = action.payload
    },
    addWebSeries: (state, action) => {
      state.webSeries = action.payload
    },
    addDisplayMovie: (state, action) => {
      state.displayMovie = action.payload
    },
    addDisplayDetails: (state, action) => {
      state.displayDetails = action.payload
    },
  },
})

export const {
  addNowPlayingMovies,
  addTrailer,
  addWebSeriesTrailer,
  addWebSeries,
  addHorror,
  addTrending,
  addUpcoming,
  addPopularMovies,
  addDisplayMovie,
  addDisplayDetails,
} = movieSlice.actions
export default movieSlice.reducer
