import React from "react";
import "./TodoList.css";

function TodoList(props) {
  const renderMeth = props.children || props.render;
  return (
    <section className="TodoList-container">
      {props.onError.error && props.onError.display()}
      {props.onLoading.loading && props.onLoading.display()}

      {!props.onEmpty.loading && !props.totalTodos &&  props.onEmpty.display()}
      {props.searchValue &&
        !props.searchedTodos.length &&
        props.onEmptySearchResults(props.searchValue)}
      <ul className="TodoList">{props.searchedTodos.map(renderMeth)}</ul>
    </section>
  );
}

export { TodoList };
