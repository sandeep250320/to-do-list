import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

export default function TableData({ setRowData }) {
  const [rowData] = useState([
    { Title: setRowData[0], Description: setRowData[1], Date: setRowData[2] },
  ]);

  const [columnDefs] = useState([
    { field: "Title" },
    { field: "Description" },
    { field: "Date" },
  ]);

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
      <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
    </div>
  );
}
