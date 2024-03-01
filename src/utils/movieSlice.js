import { createSlice } from '@reduxjs/toolkit'

const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
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
    addWebSeriesTrailer: (state, action) => {
      state.seriesTrailer = action.payload
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
} = movieSlice.actions
export default movieSlice.reducer
