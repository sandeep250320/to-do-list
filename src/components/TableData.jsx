import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

export default function TableData({ title, description, date}) {
  const [rowData] = useState([
    { Title: "Promo", Description: "Learn React" , Date:Date },
    { Title: "Important work", Description: "Learn DSA" , Date:Date },
    { Title: "Sample", Description: "Learn AI" , Date:Date },
    { Title: "AIML", Description: "Learn ML" , Date:Date },
    { Title: "Promo", Description: "Learn React" , Date:Date },
    { Title: title, Description: description, Date:date }
  ]);

  const [columnDefs] = useState([
    { field: "Title" },
    { field: "Description" },
    { field: "Date" },
  ]);

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 602,marginBottom:"30px",alignContent:"center", padding:"10px 100px"}}>
      <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
    </div>
  );
}
