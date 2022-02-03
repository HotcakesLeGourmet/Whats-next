import React from "react";
import "./TodoSearch.css";

function TodoSearch(props) {
  const TodoSearchPhrases = [
    "¡Esto no es juego!",
    "Today I'lll...",
    "What's next?",
    "Everything you are doing is good",
    "I think...",
  ];
  const [phrase, setPhrase] = React.useState("What's next?");
  const onSearchValueChange = (event) => {
    props.setSearchValue(event.target.value);
  };
  const onClickSearch = () =>{
    setPhrase(TodoSearchPhrases[Math.floor(Math.random() * 5)]);
    }
  return (
    <input
      className="TodoSearch"
      placeholder={phrase}
      value={props.searchValue}
      onChange={onSearchValueChange}
      onClick={onClickSearch}
      disabled={props.loading}
    />
  );
}

export { TodoSearch };
