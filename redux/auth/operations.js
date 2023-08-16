import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";

export const register = createAsyncThunk(
  "auth/register",
  async ({ email, password, name }, thunkAPI) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(auth.currentUser, {
        displayName: name,
      });

      const user = await auth.currentUser;

      return {
        userId: user.uid,
        name: user.displayName,
        email: user.email,
      };
    } catch (e) {
      console.log("ERRORI", e);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/logIn",
  async ({ email, password }, thunkAPI) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      return {
        userId: user.uid,
        name: user.displayName,
        email: user.email,
      };
    } catch (e) {
      console.log("ERRORI", e);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logOut", async () => {
  signOut(auth);
});

export const stateChangedUser = createAsyncThunk(
  "auth/stateChangedUser",
  async (slice, thunkAPI) => {
    await onAuthStateChanged(auth, (user) => {
      if (user) {
        thunkAPI.dispatch(
          slice.actions.updateUserProfile({
            userId: user.uid,
            name: user.displayName,
            email: user.email,
          })
        );
      }
    });
  }
);
