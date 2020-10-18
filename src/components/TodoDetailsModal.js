import React from "react";
import moment from "moment";

export default function TodoDetailsModal({ item, onDetailsModalClose }) {
  const file =
    item.file.length !== 0 && typeof item.file[0] !== "string"
      ? item.file[0].name
      : "No file attached";

  return (
    <div className="todoDetails-modal-bg">
      <div className="todoDetails-modal">
        <div>Todo: {item.title}</div>
        <div>Description: {item.description}</div>
        <div>File: {file}</div>
        <div>Deadline: {moment(item.deadline).format("llll")}</div>
        <div>
          <button onClick={onDetailsModalClose}>Close</button>
        </div>
      </div>
    </div>
  );
}
