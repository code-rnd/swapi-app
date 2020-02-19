export const SET_OBJECT = "SET_OBJECT";
export const SET_OBJECTS = "SET_OBJECTS";
export const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

export const setObject = object => ({
  type: SET_OBJECT,
  data: object
});

export const setObjects = objects => ({
  type: SET_OBJECTS,
  data: objects
});

export const toggleIsFetching = status => ({
  type: TOGGLE_IS_FETCHING,
  data: status
});
