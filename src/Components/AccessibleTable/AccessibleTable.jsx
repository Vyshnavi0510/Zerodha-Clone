import * as React from "react";

import "./AccessibleTable.css";

const tabledata = [
  {
    instrument: "REDINGTON",
    qty: "26.20",
    avg: "8.89%",
    ltp: "323.10",
  },
  {
    instrument: "CRISIL",
    price: "3",
    qty: "26.20",
    avg: "8.89%",
    ltp: "323.10",
  },
  {
    instrument: "MUTHOOTHFIN",
    price: "10",
    qty: "26.20",
    avg: "8.89%",
    ltp: "323.10",
  },
  {
    instrument: "KIMS",
    price: "20",
    qty: "26.20",
    avg: "8.89%",
    ltp: "323.10",
  },
  {
    instrument: "APOLLOHOSP",
    qty: "26.20",
    avg: "8.89%",
    ltp: "323.10",
  },
  {
    instrument: "UNIHEALTH-SM",
    qty: "26.20",
    avg: "8.89%",
    ltp: "323.10",
  },
  {
    instrument: "MAXHEALTH",
    qty: "26.20",
    avg: "8.89%",
    ltp: "323.10",
  },
];

export default function AccessibleTable() {
  return (
    <table className="table-container">
      <thead>
        <tr>
          <th>
            Default <span>(7)</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {tabledata.map((data) => (
          <tr key={data.instrument}>
            <td>{data.instrument}</td>
            <td>{data.price}</td>
            <td>{data.qty}</td>
            <td>{data.avg}</td>
            <td>{data.ltp}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
