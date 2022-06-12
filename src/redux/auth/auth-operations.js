import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('auth/register', async credential => {
  try {
    const { data } = await axios.post('/users/signup', credential);
    token.set(data.token);
    return data;
  } catch (error) {}
  console.error('Register failed');
});

const login = createAsyncThunk('auth/login', async credential => {
  try {
    const { data } = await axios.post('/users/login', credential);
    token.set(data.token);
    return data;
  } catch (error) {
    console.error('Login failed');
  }
});

const logout = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {}
});

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const localStorageToken = thunkAPI.getState().auth.token;

    if (localStorageToken === null) return thunkAPI.rejectWithValue();

    token.set(localStorageToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {}
  },
);

const operations = { register, login, logout, fetchCurrentUser };
export default operations;
