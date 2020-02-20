import { toggleIsFetching, setObjects } from "..";
import { swApi } from "../../../../api/swapi";

export const getObjects = (categoryName, url = "") => {
  return dispatch => {
    dispatch(toggleIsFetching(true));

    swApi
      .getObjects(categoryName, url)
      .then(data => {
        dispatch(toggleIsFetching(false));
        dispatch(setObjects(data));
      })
      .catch(() => {
        dispatch(toggleIsFetching(false));
      });
  };
};
