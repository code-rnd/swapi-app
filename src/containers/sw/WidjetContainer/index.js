import { connect } from "react-redux";
import { getObjects } from "../../../store/actions/sw/async";
import WidjetComponent from "../../../components/sw/WidjetComponent";

const mapStateToProps = state => ({
  objects: state.sw.data.objects,
  isFetching: state.sw.isFetching
});

const mapDispatchToProps = {
  getObjects
};

export const WidjetContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(WidjetComponent);
