import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import AccessibleTable from '../Components/AccessibleTable/AccessibleTable.jsx';
import "../../App.css";
import "./Bids.css";
import LeftTable from "../LeftTable/LeftTable";
import Button from "@mui/material/Button";
import { IoIosSearch } from "react-icons/io";
const bidsdata = [
  {
    instrument: "IGCL",
    Name: "Indogulf Cropsciences",
    date: "26th-30th Jun",
    price: "105-111",
    min: "14985",
    button: "Apply",
  },
  {
    instrument: "PROFX",
    Name: "Pro FX Tech",
    date: "26th-30th Jun",
    price: "105-111",
    min: "14985",
    button: "Apply",
  },
  {
    instrument: "ACEALPHA",
    Name: "Ace Alpha Tech",
    date: "26th-30th Jun",
    price: "105-111",
    min: "14985",
    button: "Apply",
  },
  {
    instrument: "VALINDIA",
    Name: "Valencia India",
    date: "26th-30th Jun",
    price: "105-111",
    min: "14985",
    button: "Apply",
  },
  {
    instrument: "MMEL",
    date: "26th-30th Jun",
    Name: "Moving Media Entertainment",
    price: "105-111",
    min: "14985",
    button: "Apply",
  },
  {
    instrument: "ADCOUNTRY",
    Name: "AdCountry Media India",
    date: "26th-30th Jun",
    price: "105-111",
    min: "14985",
    button: "Apply",
  },
  {
    instrument: "NEETUYOSHI",
    Name: "Neety Yoshi",
    date: "26th-30th Jun",
    price: "105-111",
    min: "14985",
    button: "Apply",
  },
  {
    instrument: "OSWALPUMPS",
    Name: "Oswal Pumps",
    date: "26th-30th Jun",
    price: "105-111",
    min: "14985",
    button: "Apply",
  },
  {
    instrument: "ARISINFRA",
    Name: "Arisinfra Solutions",
    date: "26th-30th Jun",
    price: "105-111",
    min: "14985",
    button: "Apply",
  },
  {
    instrument: "GLOBECIVIL",
    Name: "Globe Civil Projects",
    date: "26th-30th Jun",
    price: "105-111",
    min: "14985",
    button: "Apply",
  },
];
export default function Bids() {
  return (
    <>
      <div className="bids">
        <div className="bids-container">
          <div className="leftTable">
            <LeftTable />
          </div>
          <div className="bids-right-container">
            <div className="bids-1">
              <p>IPOs</p>
              <div className="bids-input-field">
                <span className="bids-search-icon">
                  <IoIosSearch />
                </span>
                <input type="text" placeholder="Search"></input>
              </div>
            </div>
            <div className="TableContainer">
              <TableContainer
                component={Paper}
                className="right-bids-table"
                style={{ backgroundColor: "transparent" }}
              >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell style={{ color: "rgb(162, 160, 160)" }}>
                        Instrument
                      </TableCell>
                      <TableCell
                        style={{ color: "rgb(162, 160, 160)" }}
                        align="right"
                      >
                        Date
                      </TableCell>
                      <TableCell
                        style={{ color: "rgb(162, 160, 160)" }}
                        align="right"
                      >
                        Price
                      </TableCell>
                      <TableCell
                        style={{ color: "rgb(162, 160, 160)" }}
                        align="right"
                      >
                        Min.amount
                      </TableCell>
                      <TableCell
                        style={{ color: "rgb(162, 160, 160)" }}
                        align="right"
                      ></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {bidsdata.map((row) => (
                      <TableRow
                        key={row.instrument}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell
                          sx={{ borderBottom: "none" }}
                          component="th"
                          scope="row"
                          style={{ color: "rgba(255, 255, 255, 0.85)" }}
                        >
                          {row.instrument}
                        </TableCell>
                        <TableCell
                          sx={{ borderBottom: "none" }}
                          align="right"
                          style={{ color: "rgba(255, 255, 255, 0.85)" }}
                        >
                          {row.date}
                        </TableCell>
                        <TableCell
                          sx={{ borderBottom: "none" }}
                          align="right"
                          style={{ color: "rgba(255, 255, 255, 0.85)" }}
                        >
                          {row.price}
                        </TableCell>
                        <TableCell
                          sx={{ borderBottom: "none" }}
                          align="right"
                          style={{ color: "rgba(255, 255, 255, 0.85)" }}
                        >
                          {row.min}
                        </TableCell>
                        <TableCell
                          sx={{ borderBottom: "none" }}
                          align="right"
                          style={{ color: "rgba(255, 255, 255, 0.85)" }}
                        >
                          {<button className="apply-btn">Apply</button>}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
