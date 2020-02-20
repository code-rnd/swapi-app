import { connect } from "react-redux";
import { getImage } from "../../../store/actions/google/async";
import CardComponent from "../../../components/sw/CardComponent";

const mapStateToProps = state => ({
  isFetching: state.sw.isFetching,
  currentCategory: state.sw.currentCategory,
  data: state.google.data
});

const mapDispatchToProps = {
  getImage
};

export const CardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CardComponent);
