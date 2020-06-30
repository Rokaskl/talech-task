import React, { useState } from "react";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import "./DeleteModal.scss";

export default function DeleteModal(props) {
  const handleDelete = props.handleDelete;
  const [isOpen, setIsOpen] = useState(false);
  const coverClass = isOpen ? "modal-cover modal-cover-active" : "modal-cover";
  const containerClass = isOpen
    ? "modal-container modal-container-active"
    : "modal-container";
  return (
    <div className="modal">
      <Button
        color="secondary"
        variant="contained"
        onClick={() => setIsOpen(true)}
      >
        Delete
      </Button>
      <div className={containerClass}>
        <div>
          <div className="modal-header">
            <Typography variant="h6" gutterBottom>
              Are you sure you want to delete: <b>{props.name}</b>
            </Typography>

            <img
              className="modal-close"
              src="./assets/close.svg"
              alt="close icon"
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
          <div className="modal-body">
            <Button
              color="secondary"
              variant="contained"
              onClick={(e) => {
                handleDelete(props.id);
                setIsOpen(!isOpen);
              }}
            >
              Delete
            </Button>
            <Button variant="contained" onClick={() => setIsOpen(!isOpen)}>
              Cancel
            </Button>
          </div>
        </div>
      </div>

      <div className={coverClass} onClick={() => setIsOpen(!isOpen)}></div>
    </div>
  );
}
