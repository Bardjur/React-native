import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, stateChangedUser } from "./operations";
import { Toast } from "toastify-react-native";

const initialState = {
  user: {
    userId: null,
    name: null,
    email: null,
  },
  isLoggedIn: false,
  isLoading: false,
};

const handlePending = (state) => {
  state.isLoading = true;
  console.log("loading...");
};

const handleReject = (state, { payload }) => {
  state.isLoading = false;
  Toast.error(payload);
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateUserProfile: (state, { payload }) => {
      state.isLoggedIn = true;
      state.user = { ...payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(register.pending, handlePending);
    builder.addCase(register.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.user = { ...payload };
    });
    builder.addCase(register.rejected, handleReject);

    builder.addCase(logIn.pending, handlePending);
    builder.addCase(logIn.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.user = { ...payload };
    });
    builder.addCase(logIn.rejected, handleReject);

    builder.addCase(stateChangedUser.pending, handlePending);
    builder.addCase(stateChangedUser.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(stateChangedUser.rejected, handleReject);

    builder.addCase(logOut.fulfilled, (state) => {
      state.isLoggedIn = false;
    });
  },
});
