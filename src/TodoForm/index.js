import React from "react";
import "./TodoForm.css";

function TodoForm({ addTodo, setOpenModal }) {
  const [newTodoValue, setNewTodoValue] = React.useState({
    title: "",
    type: "",
    description: "",
  });
  const formSubmits = {
    onChangeTitle: (event) => {
      setNewTodoValue({ ...newTodoValue, title: event.target.value });
    },
    onChangType: (event) => {
      setNewTodoValue({ ...newTodoValue, type: event.target.value });
    },
    onChangeDesc: (event) => {
      setNewTodoValue({ ...newTodoValue, description: event.target.value });
    },
  };
  const onCancel = () => {
    setNewTodoValue({
      title: "",
      type: "",
      description: "",
    });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);

    setOpenModal(false);
  };
  const onSelect = (e) =>
    setNewTodoValue({ ...newTodoValue, type: e.target.value });

  return (
    <form className="TodoForm" onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <div className="TodoForm-main">
        <div className="TodoForm-textarea--main">
          <textarea
            maxLength="50"
            value={newTodoValue.title}
            onChange={formSubmits.onChangeTitle}
            placeholder="What is your todo?"
            required
          />
        </div>
        <div className="TodoForm-textarea--type">
          <div className="TodoForm-textarea--type--select">
            <label htmlFor="Choose-type">Related to:</label>
            <select name="Choose-type" onChange={onSelect}>
              <option value="Art">Art</option>
              <option value="Job">Job</option>
              <option value="Personal"> Personal</option>
              <option value="Videogames">Videogames</option>
              <option value="Custom">Custom...</option>
            </select>
          </div>
          <textarea
            maxLength="20"
            placeholder="Is for..."
            value={newTodoValue.type}
            onChange={formSubmits.onChangType}
            required
          />
        </div>
      </div>
      <textarea
        maxLength="200"
        placeholder="Description"
        value={newTodoValue.description}
        onChange={formSubmits.onChangeDesc}
      />
      <div className="Write ">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          Borrar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
