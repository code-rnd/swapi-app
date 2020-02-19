import { toggleIsFetching, setObject, setObjects } from "..";
import { swApi } from "../../../../api/swapi";

export const getObject = (categoryName, id) => {
  return dispatch => {
    dispatch(toggleIsFetching(true));

    swApi
      .getObject(categoryName, id)
      .then(data => {
        dispatch(toggleIsFetching(false));
        dispatch(setObject({ categoryName: categoryName, data: data }));
      })
      .catch(() => {
        dispatch(toggleIsFetching(false));
      });
  };
};

export const getObjects = (categoryName, url = "") => {
  return dispatch => {
    dispatch(toggleIsFetching(true));

    swApi
      .getObjects(categoryName, url)
      .then(data => {
        dispatch(toggleIsFetching(false));
        dispatch(setObjects({ categoryName: categoryName, data: data }));
      })
      .catch(() => {
        dispatch(toggleIsFetching(false));
      });
  };
};
