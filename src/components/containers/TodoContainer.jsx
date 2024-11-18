import React from "react";
import { connect } from "react-redux";
import TodoList from "../pure/TodoList";
import { toggleTodo } from "../../store/actions/actions";

// Constantes para los filtros
const SHOW_ALL = "SHOW_ALL";
const SHOW_ACTIVE = "SHOW_ACTIVE";
const SHOW_COMPLETED = "SHOW_COMPLETED";

// Filter Todo List
const filterTodos = (todos, filter) => {
  switch (filter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_ACTIVE":
      return todos.filter((todo) => !todo.completed); // Solo tareas incompletas
    case "SHOW_COMPLETED":
      return todos.filter((todo) => todo.completed); // Solo tareas completadas
    default:
      return todos; // Si el filtro no coincide, muestra todo
  }
};

const mapStateToProps = (state) => ({
  todos: state.todoState || [], // Asegúrate de que nunca sea undefined
});

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id));
    },
  };
};

const TodosContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodosContainer;
