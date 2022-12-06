import { authActionTypes } from "../types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userLoginProps } from "../interfaces/auth.interface";

type initialStateProps = {
  authenticated: boolean;
  user?: userLoginProps;
  loading: boolean;
  error: string | null;
};

const INITIAL_STATE: initialStateProps = {
  authenticated: false,
  user: undefined,
  loading: false,
  error: null,
};

export interface actionProps<T> {
  type: authActionTypes;
  payload: T;
}

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  reducers: {
    loginRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action: PayloadAction<userLoginProps>) => {
      state.loading = false;
      state.authenticated = true;
      state.user = action.payload;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.authenticated = false;
      state.user = undefined;
    },
  },
});

export const { loginRequest, loginSuccess, loginFailure, logout } =
  authSlice.actions;

export default authSlice.reducer;
