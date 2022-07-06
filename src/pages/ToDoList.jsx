import { TextField } from "@mui/material";
import React, { useState } from "react";
import "./ToDolist.css";
import TableData from "../components/TableData";
import Button from "@mui/material/Button";
export default function ToDoList() {
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState([]);
 const [clicked,setClicked]=useState(false);
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const setData = [{}];
  
  const handleViewButton = () => {
    setClicked(true);
  //  setData[{title, description, Date}];
  };
  console.log(title, description);
  return (
    <>
      <div>
        <span className="heading">To-Do List</span>
        <div className="inputField">
          <TextField
            id="standard-basic"
            label="Notes Title"
            variant="standard"
            onChange={handleTitle}
          />
          <TextField
            id="standard-basic"
            label="Add Your Notes here"
            variant="standard"
            onChange={handleDescription}
          />
        </div>
        <div className="view-button">
          <Button variant="contained" onClick={handleViewButton}>
            View Data
          </Button>
          </div>
         {clicked && <TableData setRowData={setData} />}
        
      </div>
    </>
  );
}
