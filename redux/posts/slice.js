import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  comments: {},
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});
