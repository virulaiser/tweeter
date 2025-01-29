import { createSlice } from "@reduxjs/toolkit";

const tweetSlice = createSlice({
  name: "tweet",
  initialState: [],
  reducers: {
    login(state, action) {
      return action.payload;
    },

    logout(state, action) {
      return state;
    },

    deleteTweet(state, action) {
      return state.filter((tweet) => tweet.id !== action.payload);
    },

    likeTweet(state, action) {
      const clickedTweet = state.find((tweet) => tweet.id === action.payload);
      clickedTweet.isLiked = !clickedTweet.isLiked;
    },
  },
});

const { actions, reducer } = tweetSlice;
export const { login, logout, deleteTweet, likeTweet } = actions;
export default reducer;
