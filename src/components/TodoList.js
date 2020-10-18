import React, { useState } from "react";
import TodoItem from "./TodoItem";
import TodoDetailsModal from "./TodoDetailsModal";

export default function TodoList({ todoList }) {
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [todoDetails, setTodoDetails] = useState({});

  const handleTodoItemClick = (event, item) => {
    event.preventDefault();
    setIsDetailsModalOpen(true);
    setTodoDetails(item);
    console.log(item);
  };

  const handleDetailsModalClose = () => {
    setIsDetailsModalOpen(false);
  };

  const todoDetailsModal = isDetailsModalOpen && (
    <TodoDetailsModal
      item={todoDetails}
      onDetailsModalClose={handleDetailsModalClose}
    />
  );

  const todoItems = todoList.map((item) => (
    <TodoItem key={item.id} item={item} onTodoItemClick={handleTodoItemClick} />
  ));

  return (
    <div>
      <h3>Title | Deadline</h3>
      <ul>{todoItems}</ul>
      {todoDetailsModal}
    </div>
  );
}
