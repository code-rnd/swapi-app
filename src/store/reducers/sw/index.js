import {
  SET_OBJECTS,
  SET_CURRENT_CATEGORY,
  TOGGLE_IS_FETCHING
} from "../../actions/sw";

export const initialState = {
  data: {
    objects: []
  },

  currentCategory: null,
  isFetching: false
};

export function swReducers(state = initialState, action) {
  const oldData = state.data;

  let newObjects = [];
  let newCurrentCategory = null;
  let newIsFetching = null;

  switch (action.type) {
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

    case SET_CURRENT_CATEGORY:
      newCurrentCategory = action.data;

      return {
        ...state,
        ...{
          currentCategory: newCurrentCategory
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
