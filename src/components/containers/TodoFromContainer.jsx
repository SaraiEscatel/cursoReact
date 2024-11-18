import React from "react";
import { connect } from "react-redux";
import TodoForm from "../pure/TodoForm";
import { addTodo } from "../../store/actions/actions";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return {
    submit: (text) => {
      dispatch(addTodo(text));
    },
  };
};

const TodoFromContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm);

export default TodoFromContainer;
