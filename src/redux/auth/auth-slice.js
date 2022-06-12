import { createSlice } from '@reduxjs/toolkit';
import { authOperations } from 'redux/auth';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.login.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logout.fulfilled](state) {
      state.user = initialState.user;
      state.token = initialState.token;
      state.isLoggedIn = initialState.isLoggedIn;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, { payload }) {
      state.user = payload;
      state.isLoggedIn = true;
    },
  },
});

export default authSlice.reducer;
