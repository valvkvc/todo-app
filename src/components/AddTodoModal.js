import React, { useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";

export default function AddTodoModal({ addTodo, handleAddTodoButton }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState([]);
  const [deadline, setDeadline] = useState(new Date());

  // const postFormData = async (url, data) => {
  //   const token = localStorage.getItem("token");

  //   const response = fetch(url, {
  //     method: "POST",
  //     mode: "cors",
  //     cache: "no-cache",
  //     credentials: "same-origin",
  //     headers: { token: token },
  //     referrer: "no-referrer",
  //     body: data,
  //   });

  //   if (response.status === 200) {
  //     const responseBody = response.json();
  //     console.log(responseBody);
  //     return responseBody;
  //   } else {
  //     console.log(typeof response);description
  // };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleDateChange = (date) => {
    setDeadline(date);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();

    const deadlineFormatted = moment(deadline).format("YYYY-MM-DD hh:mm:ss");
    const data = new FormData();

    data.append("title", title);
    data.append("description", description);
    data.append("file[0]", file);
    data.append("deadline", deadlineFormatted);
    console.log(data);
    //postFormData("http://localhost:8080/api/todo", data);
    addTodo(data);
  };

  return (
    <div className="addTodo-modal-bg">
      <div>
        <form className="addTodo-modal">
          <div>
            <label htmlFor="task-title">Title: </label>
            <input
              id="task-title"
              type="text"
              value={title}
              placeholder="Title of your task"
              onChange={handleTitleChange}
              autoFocus={true}
            />
          </div>
          <div>
            <label htmlFor="task-description">Description: </label>
            <input
              id="task-description"
              type="text"
              value={description}
              placeholder="Description of your task"
              onChange={handleDescriptionChange}
            />
          </div>
          <div>
            <label htmlFor="task-file">Upload file: </label>
            <input
              id="task-file"
              type="file"
              value={file}
              onChange={handleFileChange}
            />
          </div>
          <div>
            <label htmlFor="date">Deadline: </label>
            <DatePicker
              id="date"
              selected={deadline}
              onChange={handleDateChange}
              showTimeSelect
              dateFormat="Pp"
            />
          </div>
          <div>
            <button onClick={handleAddTodo}>Add Todo</button>
            <button onClick={handleAddTodoButton}>Close</button>
          </div>
        </form>
      </div>
    </div>
  );
}
