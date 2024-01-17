import {
  configureStore,
  createSlice,
} from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: { darkTheme: true },
  reducers: {
    toggleTheme(state) {
      state.darkTheme = !state.darkTheme;
    },
  },
});

//...............................................................

const articlesSlice = createSlice({
  name: 'articles',
  initialState: null,
  reducers: {
    addData(state, action) {
      return action.payload;
    },
  },
});

const speakingSlice = createSlice({
  name: 'speaking',
  initialState: null,
  reducers: {
    addData(_, action) {
      return action.payload;
    },
  },
});

//................................................

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    isUserLoggedIn: false,
    userInformation: {
      email: '',
      password: '',
    },
  },
  reducers: {
    addData(state, action) {
      return {
        ...state,
        users: action.payload,
      };
    },
    signIn(state) {
      localStorage.setItem('isUserLoggedIn', true);
      return {
        ...state,
        isUserLoggedIn: true,
      };
    },
  },
});

//........................................

const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    posts: articlesSlice.reducer,
    speaking: speakingSlice.reducer,
    users: usersSlice.reducer,
  },
});

export const themeActions = themeSlice.actions;
export const postsActions = articlesSlice.actions;
export const speakingActions = speakingSlice.actions;
export const userActions = usersSlice.actions;

export default store;
