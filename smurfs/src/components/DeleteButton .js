import React from "react";
import { connect } from "react-redux";
import { deleteSmurfs } from "../actions";
const DeleteButton = props => {
  console.log("delete button", props);
  return (
    <div>
      <button
        onClick={() => props.deleteSmurfs(props.smurfIds)}
      >
        Delete
      </button>
    </div>
  );
};

export default connect(
  null,
  { deleteSmurfs }
)(DeleteButton);
