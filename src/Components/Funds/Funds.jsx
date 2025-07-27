import React from "react";
import LeftTable from "../LeftTable/LeftTable";
import "./Funds.css";
export default function Funds() {
  const access_token = localStorage.getItem("access_token");
  alert(access_token);
  return (
    <>
      <div>
        <div className="funds">
          <div className="funds-lefttable">
            <LeftTable />
          </div>
          <div className="funds-right-container">
            <div className="funds-btns">
              <button className="btn-fd">Add Funds</button>
              <button className="btn-wd">Withdraw</button>
            </div>
            <div className="row-1-fd">
              <div className="fd-equity">
                <p>Equity</p>
                <ul>
                  <li>View statement</li>
                  <li>Help</li>
                </ul>
              </div>
              <div className="fd-commodity">
                <p>Commodity</p>
                <ul>
                  <li>View statement</li>
                  <li>Help</li>
                </ul>
              </div>
            </div>
            <div className="row-2-fd">
              <div className="row-2-right">
                <div className="grid-container1">
                  <div className="grid-content">Available margin</div>
                  <div
                    className="grid-value"
                    style={{ color: " rgb(0, 132, 255)" }}
                  >
                    383.89
                  </div>
                  <div className="grid-content">Used margin</div>
                  <div className="grid-value">0.00</div>
                  <div className="grid-content">Available cash</div>
                  <div className="grid-value">379.46</div>
                </div>
                <div className="grid-container2">
                  <div className="grid-content">Opening balance</div>
                  <div className="grid-value1">0.00</div>
                  <div className="grid-content">Payin</div>
                  <div className="grid-value1">0.00</div>
                  <div className="grid-content">Payout</div>
                  <div className="grid-value1">0.00</div>
                  <div className="grid-content">Span</div>
                  <div className="grid-value1">0.00</div>
                  <div className="grid-content">Delivery margin</div>
                  <div className="grid-value1">0.00</div>
                  <div className="grid-content">Exposure</div>
                  <div className="grid-value1">0.00</div>
                  <div className="grid-content">Options premium</div>
                  <div className="grid-value1">0.00</div>
                </div>
                <div className="grid-container3">
                  <div className="grid-content">Collateral(Liquid funds)</div>
                  <div className="grid-value1">0.00</div>
                  <div className="grid-content">Collateral(Equity)</div>
                  <div className="grid-value1">0.00</div>
                  <div className="grid-content">Total Collateral</div>
                  <div className="grid-value1">0.00</div>
                </div>
              </div>
              <div className="row-2-left">
                <div className="grid-container-1">
                  <div className="grid-content">Available margin</div>
                  <div className="grid-values">0.00</div>
                  <div className="grid-content">Used margin</div>
                  <div className="grid-values">0.00</div>
                  <div className="grid-content">Available cash</div>
                  <div className="grid-values">0.00</div>
                </div>
                <div className="grid-container-2">
                  <div className="grid-content">Opening balance</div>
                  <div className="grid-value-1">0.00</div>
                  <div className="grid-content">Payin</div>
                  <div className="grid-value-1">0.00</div>
                  <div className="grid-content">Payout</div>
                  <div className="grid-value-1">0.00</div>
                  <div className="grid-content">Span</div>
                  <div className="grid-value-1">0.00</div>
                  <div className="grid-content">Delivery margin</div>
                  <div className="grid-value-1">0.00</div>
                  <div className="grid-content">Exposure</div>
                  <div className="grid-value-1">0.00</div>
                  <div className="grid-content">Options premium</div>
                  <div className="grid-value-1">0.00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
