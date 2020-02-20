export const SET_IMAGE = "SET_IMAGE";
export const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

export const setImage = image => ({
  type: SET_IMAGE,
  data: image
});

export const toggleIsFetching = status => ({
  type: TOGGLE_IS_FETCHING,
  data: status
});
