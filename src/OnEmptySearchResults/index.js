import React from "react";

function EmptySearchResults(props) {
  return <p>No hay resultados de tu busqueda: {props.searchValue}</p>;
}

export default EmptySearchResults;
