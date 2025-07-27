import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AccessibleTable from "../AccessibleTable/AccessibleTable";
import "./LeftTable.css";
import { IoIosSearch } from "react-icons/io";
import { AiOutlineMenuFold } from "react-icons/ai";

function LeftTable() {
  return (
    <>
      <div>
        <div className="searchbar-container">
          <div className="input-field">
            <span className="search-icon">
              <IoIosSearch />
            </span>
            <input
              type="text"
              placeholder="Search eg: infy bse, infty fut, index fund,etc"
            ></input>
            <span
              className="
                ctrl"
            >
              Ctrl + K
            </span>
            <span className="menu">
              <AiOutlineMenuFold />
            </span>
          </div>
        </div>

        <div className="watchlist">
          <p className="p1">Watchlist 1</p>
          <p className="p2">+ New group</p>
        </div>
        <div>
          {" "}
          <AccessibleTable />{" "}
        </div>
      </div>
    </>
  );
}

export default LeftTable;
