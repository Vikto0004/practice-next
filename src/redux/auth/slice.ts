import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { refreshUser, registerUser } from './operations';

type User = {
  name: string | null;
  email: string | null;
};

type AuthState = {
  user: User;
  token: string | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  loading: boolean;
  error: null | string;
};

const initialState: AuthState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(registerUser.pending, state => {
      state.loading = true;
      state.isLoggedIn = false;
      state.error = null;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      const { token, user } = action.payload;
      state.loading = false;
      state.isLoggedIn = true;
      state.user.name = user.name;
      state.user.email = user.email;
      state.token = token;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.loading = false;
      state.isLoggedIn = false;
      if (typeof action.payload === 'string') {
        state.error = action.payload;
      } else {
        state.error = 'Oops, something went wrong, try reloading the page';
      }
    });
    builder.addCase(refreshUser.pending, state => {
      state.loading = true;
      state.isLoggedIn = false;
      state.error = null;
      state.isRefreshing = true;
    });
    builder.addCase(refreshUser.fulfilled, (state, action) => {
      state.loading = false;
      state.isLoggedIn = true;
      state.isRefreshing = false;
      state.user.name = action.payload.name;
      state.user.email = action.payload.email;
    });
    builder.addCase(refreshUser.rejected, (state, action) => {
      state.loading = false;
      state.isLoggedIn = false;
      state.isRefreshing = false;
      if (typeof action.payload === 'string') {
        state.error = action.payload;
      } else {
        state.error = 'Oops, something went wrong, try reloading the page';
      }
    });
  },
});

export default authSlice.reducer;
