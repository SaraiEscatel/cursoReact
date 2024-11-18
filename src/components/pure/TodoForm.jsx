import React, { useState } from "react";
import PropTypes from "prop-types";

const TodoForm = ({ submit }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    submit(text); // Llama al prop `submit`
    setText(""); // Limpia el campo después de enviar
  };

  return (
    <div>
      <h2>Create your TODOs </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a todo"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

TodoForm.propTypes = {
  submit: PropTypes.func.isRequired, // Aquí define que `submit` es una función
};

export default TodoForm;
