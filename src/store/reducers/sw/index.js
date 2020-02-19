import { SET_OBJECT, SET_OBJECTS, TOGGLE_IS_FETCHING } from "../../actions/sw";

export const initialState = {
  data: {
    objects: {
      people: [],
      planets: [],
      starships: []
    },
    currentObjects: {
      people: null,
      planets: null,
      starships: null
    }
  },

  isFetching: false
};

export function swReducers(state = initialState, action) {
  const oldData = state.data;
  const oldObjects = state.data.objects;
  const oldCurrentObjects = state.data.currentObjects;

  let categoryName = null;
  let data = {};

  let newIsFetching = null;

  switch (action.type) {
    case SET_OBJECT:
      categoryName = action.data.categoryName;
      data = action.data.data[categoryName];

      return {
        ...state,
        ...{
          data: {
            ...oldData,
            currentObjects: {
              ...oldCurrentObjects,
              [categoryName]: data
            }
          }
        }
      };

    case SET_OBJECTS:
      categoryName = action.data.categoryName;
      data = action.data.data[categoryName];

      return {
        ...state,
        ...{
          data: {
            ...oldData,
            objects: {
              ...oldObjects,
              [categoryName]: data
            }
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
