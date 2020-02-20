import { SET_IMAGE, TOGGLE_IS_FETCHING } from "../../actions/google";

export const initialState = {
  objects: [],
  isFetching: false
};

export function googleReducers(state = initialState, action) {
  const objects = state.objects;

  let newObject = {};
  let newObjects = [];
  let newIsFetching = null;

  switch (action.type) {
    case SET_IMAGE:
      newObject = action.data;
      newObjects = [...objects, newObject];

      return {
        ...state,
        ...{
          objects: newObjects
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
