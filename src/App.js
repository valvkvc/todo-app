import React, { useState } from "react";
import "./App.css";
import { login } from "./actions/login";
import { getTodoList, addTodo } from "./actions/todoList";
import { connect } from "react-redux";
import Login from "./components/Login";
import TodoList from "./components/TodoList";
import AddTodoModal from "./components/AddTodoModal";
import AddTodoButton from "./components/AddTodoButton";

function App({ login, addTodo, user, isUserLogged, todoList }) {
  const [isAddTodoModalOpen, setIsAddTodoModalOpen] = useState(false);

  const handleAddTodoButton = () => {
    setIsAddTodoModalOpen(!isAddTodoModalOpen);
  };

  const greeting = isUserLogged ? <p>Welcome, {user}</p> : <p>Hello!</p>;

  const content = !isUserLogged ? (
    <Login user={user} login={login} />
  ) : (
    <TodoList todoList={todoList} />
  );
  const addTodoModal = isAddTodoModalOpen && (
    <AddTodoModal addTodo={addTodo} handleAddTodoButton={handleAddTodoButton} />
  );

  const addTodoButton = isUserLogged && (
    <AddTodoButton handleAddTodoButton={handleAddTodoButton} />
  );

  return (
    <div>
      {greeting}
      {content}
      {addTodoButton}
      {addTodoModal}
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.LoginUserReducer.user,
  isUserLogged: state.LoginUserReducer.isUserLogged,
  todoList: state.UpdateTodoListReducer,
});

const mapDispatchToProps = {
  login,
  getTodoList,
  addTodo,
};

// const mapDispatchToProps = (dispatch) => ({
//   login: (user, pass) => dispatch(login(user, pass)),
// });

export default connect(mapStateToProps, mapDispatchToProps)(App);
