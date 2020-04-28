import { connect } from "react-redux";
import { signup, removeErrors } from "../../actions/session_actions";
import SignupForm from "./signup_form";

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  formType: "Sign me up!"
})

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user)),
  removeErrors: () => dispatch(removeErrors())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);