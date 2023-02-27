import React, { useState } from "react";
import Myform from "./userform";

function User() {
  const [showMyform, setShowMyform] = useState(false);
  return (
    <>
      <div style={{ background: "white" }}>
        <div>
          <button
            className="button-container"
            onClick={() => setShowMyform(!showMyform)}
          >
            {showMyform ? " + ADD  " : " + ADD "}
          </button>
          {showMyform ? (
            <Myform />
          ) : (
            <div className="tble-container">
              <table>
                <tr>
                  <th>F Name </th>
                  <th>Last name </th>
                  <th>Email </th>
                  <th>Role</th>
                  <th>company status(active/inactive) </th>
                </tr>
                <tr>
                  <td className="cell-1">Abdullah</td>
                  <td>Mubarak</td>
                  <td>@gmail.com </td>
                  <td>@Role</td>
                  <td>@company status(active/inactive) </td>
                </tr>
                <tr>
                  <td className="cell-1">Abdullah</td>
                  <td>Mubarak</td>
                  <td>@gmail.com </td>
                  <td>@Role</td>
                  <td>@company status(active/inactive) </td>
                </tr>
                <tr>
                  <td>Abdullah</td>
                  <td>Mubarak</td>
                  <td>@gmail.com </td>
                  <td>@Role</td>
                  <td>@company status(active/inactive) </td>
                </tr>
                <tr>
                  <td>Abdullah</td>
                  <td>Mubarak</td>
                  <td>@gmail.com </td>
                  <td>@Role</td>
                  <td>@company status(active/inactive) </td>
                </tr>
                <tr>
                  <td>Abdullah</td>
                  <td>Mubarak</td>
                  <td>@gmail.com </td>
                  <td>@Role</td>
                  <td>@company status(active/inactive) </td>
                </tr>
                <tr>
                  <td>Abdullah</td>
                  <td>Mubarak</td>
                  <td>@gmail.com </td>
                  <td>@Role</td>
                  <td>@company status(active/inactive) </td>
                </tr>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default User;
