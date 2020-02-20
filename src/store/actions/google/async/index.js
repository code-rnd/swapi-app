import { toggleIsFetching, setImage } from "..";
import { googleapis } from "../../../../api/googleapis";
import { getUrlUtil } from "../../../../utils";

export const getImage = (category, name, id) => {
  return dispatch => {
    dispatch(toggleIsFetching(true));

    googleapis
      .getImage(name)
      .then(data => {
        dispatch(toggleIsFetching(false));
        dispatch(
          setImage({ category, url: getUrlUtil(data.items[0].pagemap), id })
        );
      })
      .catch(() => {
        dispatch(toggleIsFetching(false));
      });
  };
};
