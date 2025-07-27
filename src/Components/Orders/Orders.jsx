import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import LeftTable from "../LeftTable/LeftTable";
import "./Orders.css";
import { IoIosSearch } from "react-icons/io";
export default function Orders() {
  return (
    <>
      <div>
        <div className="orders">
          <div className="orders-Lefttable">
            <LeftTable />
          </div>
          <div className="orders-right-container">
            <div className="orders-1">
              <p>Excecuted Orders</p>
              <div className="orders-input-field">
                <span className="orders-search-icon">
                  <IoIosSearch />
                </span>
                <input type="text" placeholder="Search"></input>
              </div>
            </div>
            <div className="TableContainer">
              <TableContainer
                component={Paper}
                style={{ background: " transparent " }}
              >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell style={{ color: "rgb(162, 160, 160)" }}>
                        Time
                      </TableCell>
                      <TableCell
                        align="right"
                        style={{ color: "rgb(162, 160, 160)" }}
                      >
                        Type
                      </TableCell>
                      <TableCell
                        align="right"
                        style={{ color: "rgb(162, 160, 160)" }}
                      >
                        Instrument
                      </TableCell>
                      <TableCell
                        align="right"
                        style={{ color: "rgb(162, 160, 160)" }}
                      >
                        Product
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
                        Avg.Price
                      </TableCell>
                      <TableCell
                        align="right"
                        style={{ color: "rgb(162, 160, 160)" }}
                      >
                        Status
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        style={{ color: "#fff" }}
                      >
                        12:12:21
                      </TableCell>
                      <TableCell align="right" style={{ color: "#fff" }}>
                        BUY
                      </TableCell>
                      <TableCell align="right" style={{ color: "#fff" }}>
                        MAXHEALTH
                      </TableCell>
                      <TableCell align="right" style={{ color: "#fff" }}>
                        CNC
                      </TableCell>
                      <TableCell align="right" style={{ color: "#fff" }}>
                        0/1
                      </TableCell>
                      <TableCell align="right" style={{ color: "#fff" }}>
                        82.297
                      </TableCell>
                      <TableCell align="right" style={{ color: "#fff" }}>
                        <button className="btn-cancel">CANCELLED AMO</button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>

            {/* <table className="table-div">
                            <thead>
                                <tr>
                                    <th>Time</th>
                                    <th>Type</th>
                                    <th>Instrument</th>
                                    <th>Product</th>
                                    <th>Qty</th>
                                    <th>Avg.Price</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>12:12:21</td>
                                    <td>Buy</td>
                                    <td>MAXHEALTH</td>
                                    <td>CNC</td>
                                    <td>0/1</td>
                                    <td>2.33</td>
                                    <td><button>CANCELLED AMO</button></td>
                                </tr>
                            </tbody>
                        </table> */}
          </div>
        </div>
      </div>
    </>
  );
}
