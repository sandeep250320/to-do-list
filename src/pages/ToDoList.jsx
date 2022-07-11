import { Paper, TextField } from "@mui/material";
import React, { useState } from "react";
import "./ToDolist.css";
import TableData from "../components/TableData";
import Button from "@mui/material/Button";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer, toast } from "react-toastify";

export default function ToDoList() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [clicked, setClicked] = useState(false);
  const [viewMessage, setViewMessage] = useState("View Data");
  const [disabled, setDisabled] = useState(true);
  const date = new Date();

  const handleTitle = (e) => {
    if (e.target.value !== "") {
      setDisabled(false);
    }
    setTitle(e.target.value);
  };

  const handleDescription = (e) => {
    if (e.target.value !== "") {
      setDisabled(false);
    }
    setDescription(e.target.value);
  };

  const handleViewButton = () => {
    setClicked(true);
    if (setClicked) {
      setClicked(true);
      setViewMessage("Hide Data");
    }
    if (viewMessage === "Hide Data") {
      setViewMessage("View Data");
      setClicked(false);
    }
  };
  let payload = [];
  const handleAddNotes = () => {
    payload = {
      title: title,
      description: description,
      date: date,
    };
    toast.success("Notes added successfully");
  };
  return (
    <>
      <ToastContainer />
      <div>
        <span className="heading">To-Do List</span>
        <Paper style={{ margin: "20px" }}>
          <div className="inputField">
            <TextField
              id="standard-basic"
              label="Notes Title"
              variant="standard"
              onChange={handleTitle}
            />
            <TextField
              label="Add Your Notes here"
              onChange={handleDescription}
            />
            <Button
              size="xs"
              variant="contained"
              onClick={handleAddNotes}
              disabled={disabled}
            >
              Add Notes
            </Button>
          </div>
        </Paper>
        <div className="view-button">
          <Button variant="contained" onClick={handleViewButton}>
            {viewMessage}
          </Button>
        </div>
        {clicked && <TableData title={title} description={description} />}
      </div>
    </>
  );
}
