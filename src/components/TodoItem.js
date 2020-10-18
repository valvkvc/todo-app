import React from "react";
import moment from "moment";

export default function TodoItem({ item, onTodoItemClick }) {
  const handleTodoItemClick = (event) => {
    onTodoItemClick(event, item);
  };

  return (
    <div>
      <li onClick={handleTodoItemClick}>
        {item.title} - {moment(item.deadline).format("llll")}
      </li>
    </div>
  );
}
