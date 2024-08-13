import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';

type NewUser = {
  name: string;
  email: string;
  password: string;
};

axios.defaults.baseURL = 'https://connections-api.goit.global';

const setAuthHeader = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const registerUser = createAsyncThunk(
  '/auth/register',
  async (newUser: NewUser, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', newUser);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  '/auth/refresh',
  async (_, thunkAPI) => {
    console.log(34);

    const reduxState: RootState = thunkAPI.getState() as RootState;
    if (typeof reduxState.auth.token === 'string') {
      setAuthHeader(reduxState.auth.token);
    }

    try {
      const response = await axios.get('/users/current');
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, thunkAPI) => {
      const reduxState: RootState = thunkAPI.getState() as RootState;
      return reduxState.auth.token !== null;
    },
  }
);
