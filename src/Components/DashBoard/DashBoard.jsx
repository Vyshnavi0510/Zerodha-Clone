import React from "react";
import LeftTable from "../LeftTable/LeftTable";
import "./DashBoard.css";
// import { useAuth } from "../AuthProvider/AuthProvider";
function DashBoard() {
  // useAuth();
  return (
    <>
      <div className="dashboard-header">
        <div className="dashboard">
          <div className="Lefttable">
            <LeftTable />
          </div>
          <div className="right-container">
            <div>
              <p className="header-container">Hi,Vyshu</p>
            </div>
            <div className="section-1">
              <div className="row-1">
                <p className="equity">Equity</p>
                <p className="commodity">Commodity</p>
              </div>
              <div className="row-2">
                <div className="coln-1">
                  <p className="value1">450.2</p>
                  <p>Margin available</p>
                </div>
                <div className="coln-2">
                  <p>
                    Margin used <span> 0 </span>{" "}
                  </p>
                  <p>
                    opening Balance <span>450.6</span>
                  </p>
                </div>
                <div className="coln-3">
                  <p className="value2">0</p>
                  <p>Margin available</p>
                </div>
                <div className="coln-4">
                  <p>
                    Margin used <span>0</span>
                  </p>
                  <p>
                    opening Balance <span>0</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="section-2">
              <p>Holdings</p>
              <div className="container-1">
                <div className="value-container1">
                  <p style={{ color: "green" }}>73.39k</p>
                  <p className="pl">P&L</p>
                </div>
                <div className="value-container2">
                  <div className="curr">
                    <p>
                      Current value <span>2.42L</span>
                    </p>
                  </div>
                  <div className="invest">
                    <p>
                      Investment<span>7.25L</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="boxes">
                <div className="boxes-col-1">
                  <div className="box1"></div>
                  <div className="box2"></div>
                  <div className="box3"></div>
                  <div className="box4"></div>
                  <div className="box5"></div>
                </div>
                <div className="boxes-col-2">
                  <div className="boxes-row1">
                    <div className="box6"></div>
                    <div className="box7"></div>
                    <div className="box8"></div>
                    <div className="box9"></div>
                    <div className="box10"></div>
                    <div className="box11"></div>
                    <div className="box12"></div>
                  </div>
                  <div className="boxes-row2">
                    <div className="box16"></div>
                    <div className="box17"></div>
                    <div className="box18"></div>
                    <div className="box19"></div>
                    <div className="box20"></div>
                    <div className="box21"></div>
                    <div className="box22"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default DashBoard;
