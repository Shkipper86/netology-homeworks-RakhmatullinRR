import { asyncThunkCreator, buildCreateSlice } from '@reduxjs/toolkit'

const initialState = {
    searchInputs: {
        title: '',
        year: '',
        page: 1
    },
    fetch: {        
        loading: false
    },
    lists: {
        moviesList: [],
        favoriteMovies: [],
        errorLoading: false,
        total: 0
    },
    movieCard: {}
}

const sliceWithThunk = buildCreateSlice({
    creators: {asyncThunk: asyncThunkCreator}
})

const searchSlice = sliceWithThunk({
    name: 'search',
    initialState,
    reducers: (create) => ({
        changeInputTitle: create.reducer((state, action) => {
            state.searchInputs.title = action.payload
        }),
        changeInputYear: create.reducer((state, action) => {
            state.searchInputs.year = action.payload
        }),
        clearMovieCard: create.reducer((state) => {
            state.movieCard = {}
        }),
        clearMoviesList: create.reducer((state) => {
            state.lists.moviesList = []
            state.searchInputs.page = 1
        }),
        addFavorite: create.reducer((state, action) => {
            state.lists.favoriteMovies.push(action.payload)
        }),
        removeFavorite: create.reducer((state, action) => {
            state.lists.favoriteMovies.splice(state.lists.favoriteMovies.findIndex(item => item.imdbID == action.payload), 1)
        }),
        setPage: create.reducer((state, action) => {
            state.searchInputs.page = action.payload
        }),
        fetchMovies: create.asyncThunk(
            async (params, { rejectWithValue }) => {
                try {
                    const response = await fetch(`https://www.omdbapi.com/?apikey=9713c5e7&s=${params.title}&page=${params.page}&y=${params.year}`)

                    if(!response.ok) {
                        return rejectWithValue("Loading error!")
                    }

                    return await response.json()
                } catch (e) {
                    return rejectWithValue(e)
                }
            },
            {
                pending: (state) => {
                    state.fetch.loading = true
                },
                fulfilled: (state, action) => {
                    action.payload.Response == "True"
                      ? (() => {
                          action.payload.Search.forEach(o => {
                            state.lists.moviesList.push(o)
                          })                          
                          state.lists.errorLoading = false;
                          state.lists.total = Number(action.payload.totalResults)
                        })()
                      : (state.lists.errorLoading = true);                   
                },
                rejected: () => {
                    console.log('loading error!');
                },
                settled: (state) => {
                    state.fetch.loading = false
                }
            }
        ),
        getMovieDescription: create.asyncThunk(
            async (imdbID, { rejectWithValue }) => {
                try {
                    const response = await fetch(`https://www.omdbapi.com/?apikey=9713c5e7&i=${imdbID}`)

                    if(!response.ok) {
                        return rejectWithValue("Loading error!")
                    }

                    return await response.json()
                } catch (e) {
                    return rejectWithValue(e)
                }
            },
            {
                pending: (state) => {
                    state.fetch.loading = true
                },
                fulfilled: (state, action) => {
                    console.log(action.payload);
                    state.movieCard = action.payload
                },
                rejected: () => {console.log('loading error!');},
                settled: (state) => {
                    state.fetch.loading = false
                }
            }
        )
    })
})

export const {
  changeInputTitle,
  changeInputYear,
  fetchMovies,
  getMovieDescription,
  clearMovieCard,
  clearMoviesList,
  addFavorite,
  removeFavorite,
  setPage
} = searchSlice.actions;
export default searchSlice.reducer