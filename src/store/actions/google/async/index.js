import { toggleIsFetching, setImage } from "..";
import { googleapis } from "../../../../api/googleapis";

export const getImage = (category, name, id) => {
  return dispatch => {
    dispatch(toggleIsFetching(true));

    googleapis
      .getImage(name)
      .then(data => {
        dispatch(toggleIsFetching(false));
        dispatch(setImage({ category, data: data.response, id }));
      })
      .catch(() => {
        dispatch(toggleIsFetching(false));
      });
  };
};
