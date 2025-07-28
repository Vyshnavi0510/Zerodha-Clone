import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import LeftTable from "../LeftTable/LeftTable";
import "./Holdings.css";
import { IoIosSearch } from "react-icons/io";
export default function Holdings() {
  const rows = [
    {
      instrument: "ADANIENT",
      qty: "20",
      avg: "2,197.84",
      ltp: "2,648.35",
      invested: "43,956",
      cur: "52,967",
      pl: "9,000.25",
      net: "+20.50%",
      day: "+2.41",
    },
    {
      instrument: "ADANIGREEN",
      qty: "20",
      avg: "2,197.84",
      ltp: "2,648.35",
      invested: "43,956",
      cur: "52,967",
      pl: "9,000.25",
      net: "+20.50%",
      day: "+2.41",
    },
    {
      instrument: "ADANIPORTS",
      qty: "200",
      avg: "2,197.84",
      ltp: "2,648.35",
      invested: "43,956",
      cur: "52,967",
      pl: "9,000.25",
      net: "+20.50%",
      day: "+2.41",
    },
    {
      instrument: "ADANIPOWERS",
      qty: "20",
      avg: "2,197.84",
      ltp: "2,648.35",
      invested: "43,956",
      cur: "52,967",
      pl: "9,000.25",
      net: "+20.50%",
      day: "+2.41",
    },
    {
      instrument: "AURIONPRO",
      qty: "2",
      avg: "2,197.84",
      ltp: "2,648.35",
      invested: "43,956",
      cur: "52,967",
      pl: "9,000.25",
      net: "+20.50%",
      day: "+2.41",
    },
    {
      instrument: "BAJAJELEC",
      qty: "9",
      avg: "2,197.84",
      ltp: "2,648.35",
      invested: "43,956",
      cur: "52,967",
      pl: "9,000.25",
      net: "+20.50%",
      day: "+2.41",
    },
    {
      instrument: "BFUTILITIE",
      qty: "3",
      avg: "2,197.84",
      ltp: "2,648.35",
      invested: "43,956",
      cur: "52,967",
      pl: "9,000.25",
      net: "+20.50%",
      day: "+2.41",
    },
    {
      instrument: "CRISIL",
      qty: "4",
      avg: "2,197.84",
      ltp: "2,648.35",
      invested: "43,956",
      cur: "52,967",
      pl: "9,000.25",
      net: "+20.50%",
      day: "+2.41",
    },
    {
      instrument: "DRREDDY",
      qty: "10",
      avg: "2,197.84",
      ltp: "2,648.35",
      invested: "43,956",
      cur: "52,967",
      pl: "9,000.25",
      net: "+20.50%",
      day: "+2.41",
    },
    {
      instrument: "GPIL",
      qty: "30",
      avg: "2,197.84",
      ltp: "2,648.35",
      invested: "43,956",
      cur: "52,967",
      pl: "9,000.25",
      net: "+20.50%",
      day: "+2.41",
    },
    {
      instrument: "GREENPOWER",
      qty: "100",
      avg: "2,197.84",
      ltp: "2,648.35",
      invested: "43,956",
      cur: "52,967",
      pl: "9,000.25",
      net: "+20.50%",
      day: "+2.41",
    },
    {
      instrument: "HAPPSTMNDS",
      qty: "10",
      avg: "2,197.84",
      ltp: "2,648.35",
      invested: "43,956",
      cur: "52,967",
      pl: "9,000.25",
      net: "+20.50%",
      day: "+2.41",
    },
    {
      instrument: "HAVELLS",
      qty: "60",
      avg: "2,197.84",
      ltp: "2,648.35",
      invested: "43,956",
      cur: "52,967",
      pl: "9,000.25",
      net: "+20.50%",
      day: "+2.41",
    },
  ];

  return (
    <>
      <div className="holdings">
        <div className="holdings-container">
          <div className="LeftTable">
            <LeftTable />
          </div>

          <div className="right-content">
            <div className="section1">
              <p>Holdings</p>

              <div className="holdings-1">
                <div className="holdings-input-field">
                  <span className="holdings-search-icon">
                    <IoIosSearch />
                  </span>
                  <input type="text" placeholder="Search"></input>
                </div>
              </div>

              <ul>
                <li>Family</li>
                <li>Analytics</li>
                <li>Download</li>
              </ul>
            </div>
            <div className="section2">
              <div>
                <p className="content1">Total investment</p>
                <p>3,96,786</p>
              </div>
              <div>
                <p className="content2">Current value</p>
                <p>3,78,579</p>
              </div>
              <div>
                <p className="content3">Day's P&L</p>
                <p className="p-5">3,07,78</p>
              </div>
              <div>
                <p className="content4">Total P&L</p>
                <p className="p-5">9,478</p>
              </div>
            </div>

            <div className="TableContainer">
              <TableContainer
                component={Paper}
                style={{ backgroundColor: "transparent", overflow: "hidden" }}
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
                        align="right"
                        style={{ color: "rgb(162, 160, 160)" }}
                      >
                        Qty
                      </TableCell>
                      <TableCell
                        align="right"
                        style={{ color: "rgb(162, 160, 160)" }}
                      >
                        Avg.cost
                      </TableCell>
                      <TableCell
                        align="right"
                        style={{ color: "rgb(162, 160, 160)" }}
                      >
                        LTP
                      </TableCell>
                      <TableCell
                        align="right"
                        style={{ color: "rgb(162, 160, 160)" }}
                      >
                        Invested
                      </TableCell>
                      <TableCell
                        align="right"
                        style={{ color: "rgb(162, 160, 160)" }}
                      >
                        Cur.val
                      </TableCell>
                      <TableCell
                        align="right"
                        style={{ color: "rgb(162, 160, 160)" }}
                      >
                        P&L
                      </TableCell>
                      <TableCell
                        align="right"
                        style={{ color: "rgb(162, 160, 160)" }}
                      >
                        Net chg
                      </TableCell>
                      <TableCell
                        align="right"
                        style={{ color: "rgb(162, 160, 160)" }}
                      >
                        Day chg
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
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
                          {row.qty}
                        </TableCell>
                        <TableCell
                          sx={{ borderBottom: "none" }}
                          align="right"
                          style={{ color: "rgba(255, 255, 255, 0.85)" }}
                        >
                          {row.avg}
                        </TableCell>
                        <TableCell
                          sx={{ borderBottom: "none" }}
                          align="right"
                          style={{ color: "rgba(255, 255, 255, 0.85)" }}
                        >
                          {row.ltp}
                        </TableCell>
                        <TableCell
                          sx={{ borderBottom: "none" }}
                          align="right"
                          style={{ color: "rgba(255, 255, 255, 0.85)" }}
                        >
                          {row.invested}
                        </TableCell>
                        <TableCell
                          sx={{ borderBottom: "none" }}
                          align="right"
                          style={{ color: "rgba(255, 255, 255, 0.85)" }}
                        >
                          {row.cur}
                        </TableCell>
                        <TableCell
                          sx={{ borderBottom: "none" }}
                          className="PL"
                          align="right"
                        >
                          {row.pl}
                        </TableCell>
                        <TableCell
                          sx={{ borderBottom: "none" }}
                          className="net"
                          align="right"
                        >
                          {row.net}
                        </TableCell>
                        <TableCell
                          sx={{ borderBottom: "none" }}
                          className="day"
                          align="right"
                        >
                          {row.day}
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
