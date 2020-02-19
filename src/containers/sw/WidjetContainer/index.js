import { connect } from "react-redux";
import { getObjects } from "../../../store/actions/sw/async";
import WidjetComponent from "../../../components/sw/WidjetComponent";

const mapStateToProps = state => ({
  data: state.sw.data,
  isFetching: state.sw.isFetching
});

const mapDispatchToProps = {
  getObjects
};

export const WidjetContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(WidjetComponent);
