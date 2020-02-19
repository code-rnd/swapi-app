import { SET_OBJECT, SET_OBJECTS, TOGGLE_IS_FETCHING } from "../../actions/sw";

export const initialState = {
  data: {
    objects: [],
    currentObjects: {}
  },

  isFetching: false
};

export function swReducers(state = initialState, action) {
  const oldData = state.data;

  let newObjects = [];
  let newCurrentObject = {};

  let newIsFetching = null;

  switch (action.type) {
    case SET_OBJECT:
      newCurrentObject = action.data;

      return {
        ...state,
        ...{
          data: {
            ...oldData,
            currentObjects: newCurrentObject
          }
        }
      };

    case SET_OBJECTS:
      newObjects = action.data;

      return {
        ...state,
        ...{
          data: {
            ...oldData,
            objects: newObjects
          }
        }
      };

    case TOGGLE_IS_FETCHING:
      newIsFetching = action.data;

      return {
        ...state,
        ...{
          isFetching: newIsFetching
        }
      };

    default:
      return state;
  }
}
