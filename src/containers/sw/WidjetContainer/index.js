import { connect } from "react-redux";
import { getObjects } from "../../../store/actions/sw/async";
import { setCurrentCategory } from "../../../store/actions/sw";
import { getImage } from "../../../store/actions/google/async";

import WidjetComponent from "../../../components/sw/WidjetComponent";

const mapStateToProps = state => ({
  objects: state.sw.data.objects,
  isFetching: state.sw.isFetching,
  images: state.google.objects
});

const mapDispatchToProps = {
  getObjects,
  setCurrentCategory,
  getImage
};

export const WidjetContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(WidjetComponent);
