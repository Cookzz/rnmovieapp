import { 
  createSlice, 
  PayloadAction 
} from '@reduxjs/toolkit'
import { Alert } from 'react-native'
import moment from 'moment'
import * as RNLocalize from "react-native-localize";

import { RootState } from '../store/store'

import { GET_MOVIES, RESPONSE } from '../constants/APIConst'

import { fetchAPI } from '../utils/APIUtils'

export interface MoviesState {
  loading: boolean;
  movie: any;
  movieList: Array<any>;
}

const initialState: MoviesState = {
  loading: false,
  movie: null,
  movieList: []
};

const defaultParam = {
  sort_by: 'popularity.desc',
  page: 1
}

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovieList: (state: MoviesState, action: PayloadAction<any>) => {
      state.movieList = action.payload
    },
    setMovieDetail: (state: MoviesState, action: PayloadAction<any>) => {
      state.movie = action.payload
    },
    setLoading: (state: MoviesState, action: PayloadAction<any>) => {
      state.loading = action.payload
    },
    reset: (state: MoviesState, action: PayloadAction<any>) => {
      return state = { ...initialState }
    }
  }
})

export const { setMovieList, setMovieDetail, setLoading, reset } = moviesSlice.actions

export const getMovies = (param?: any) => async(dispatch: any, getState: any) => {
  const state = getState()
  dispatch(setLoading(true))

  if (!param){
    param = defaultParam
  }

  const country = RNLocalize.getCountry() //uses US by default on a simulator

  //get only available movies instead of everything for booking
  param = {
    ...param,
    with_release_type: '2|3',
    'with_runtime.lte': '400',
    'with_runtime.gte': '0',
    'release_date.lte': moment().add(2, 'days').format('YYYY-MM-DD'),
    certification_country: country,
    region: country 
  }
  
  try {
    const response: any = await fetchAPI(GET_MOVIES, param)

    if (response.status === RESPONSE.SUCCESS && response.data?.results?.length > 0) {
      if (param.page === 1) {
        dispatch(setMovieList(response.data.results))
      } else {
        dispatch(setMovieList([...state.movies.movieList, ...response.data.results]))
      }
    } else {
      Alert.alert("Error", "Unable to retrieve movies")
    }
    dispatch(setLoading(false))
  } catch (error) {
    dispatch(setLoading(false))
  }
}

export const selectMovieList = (state: RootState) => state.movies.movieList
export const selectMovieListLoading = (state: RootState) => state.movies.loading

export default moviesSlice.reducer