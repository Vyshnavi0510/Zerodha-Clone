import React from "react";
import LeftTable from "../LeftTable/LeftTable";
import "./Positions.css";
export default function Positions() {
  return (
    <>
      <div className="pos-header">
        <div className="positions">
          <div className="pos-lefttable">
            <LeftTable />
          </div>
          <div className="pos-right-container"></div>
        </div>
      </div>
    </>
  );
}
