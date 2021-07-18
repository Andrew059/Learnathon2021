import React from "react";
import PropTypes from "prop-types";
import "./InputForm.css"

const InputForm = props => {
  return (
    <form onSubmit={props.newItemSubmitHandler} className="todoInput">
      <input
        className="input"
        type="text"
        onChange={props.handleItemInput}
        value={props.pendingItem}
        placeholder="Add your deepest secrets"
      />
      <button className="button2" type="submit" name="submit" value="submit">
        Add
      </button>
    </form>
  );
};

InputForm.propTypes = {
  newItemSubmitHandler: PropTypes.func.isRequired,
  handleItemInput: PropTypes.func.isRequired,
  pendingItem: PropTypes.string.isRequired
};

export default InputForm;
