import { connect } from "react-redux";
import { getObject, getObjects } from "../../../store/actions/sw/async";
import SwComponent from "../../../components/sw/SwComponent";

const mapStateToProps = state => ({
  data: state.sw.data,
  isFetching: state.sw.isFetching
});

const mapDispatchToProps = {
  getObject,
  getObjects
};

export const SwContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SwComponent);
