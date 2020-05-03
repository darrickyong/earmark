import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import CreateExpenseFormContainer from "../expenses/create_expense_form_container";
import UpdateExpenseFormContainer from "../expenses/update_expense_form_container";
import FriendFormContainer from "../friends/friend_form_container";


function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (Object.keys(modal)[0]) {
    case "create":
      component = <CreateExpenseFormContainer />;
      break;
    case "update":
      component = <UpdateExpenseFormContainer />;
      break;
    case "friend":
      component = <FriendFormContainer />;
      break;
    default:
      return null;
  }
  
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal,
    
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
