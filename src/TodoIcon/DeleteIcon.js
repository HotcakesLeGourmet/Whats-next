import React from 'react';
import { TodoIcon } from './';

function DeleteIcon({ onDelete }) {
  return (
    <TodoIcon
      type="delete"
      color="IndianRed"
      onClick={onDelete}
    />
  );
}

export { DeleteIcon };
