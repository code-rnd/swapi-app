export const SET_OBJECTS = "SET_OBJECTS";
export const SET_CURRENT_CATEGORY = "SET_CURRENT_CATEGORY";
export const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

export const setObjects = objects => ({
  type: SET_OBJECTS,
  data: objects
});

export const setCurrentCategory = string => ({
  type: SET_CURRENT_CATEGORY,
  data: string
});

export const toggleIsFetching = status => ({
  type: TOGGLE_IS_FETCHING,
  data: status
});
