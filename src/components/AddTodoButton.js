import React from "react";

export default function AddTodoButton({ handleAddTodoButton }) {
  return (
    <div>
      <button onClick={handleAddTodoButton}>Add Todo</button>
    </div>
  );
}
