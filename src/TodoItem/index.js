import React from "react";
import { CompleteIcon } from "../TodoIcon/CompleteIcon";
import { DeleteIcon } from "../TodoIcon/DeleteIcon";
import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <CompleteIcon completed={props.completed} onComplete={props.onComplete} />
      <div className="TodoItem-text">
        <div className="TodoItem-text--header">
          <p className={`TodoItem-p title ${props.completed && "complete"}`}>
            {props.text.title}
          </p>
          <p className="TodoItem-p type">{props.text.type}</p>
        </div>
        <div className="TodoItem-text--main">
          <p className="description">{props.text.description} </p>
        </div>
      </div>
      <DeleteIcon onDelete={props.onDelete} />
    </li>
  );
}

export { TodoItem };
