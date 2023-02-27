import { useState } from "react";
import Roleform from "./roleform";

function Roletable() {
  const [showRoleform, setShowRoleform] = useState(false);
  return (
    <>
      <div style={{ background: "white" }}>
        <div>
          <button
            className="button-container"
            onClick={() => setShowRoleform(!showRoleform)}
          >
            {" "}
            {showRoleform ? " + ADD  " : " + ADD "}{" "}
          </button>
          {showRoleform ? (
            <Roleform />
          ) : (
            <div className="tble-container">
              <table>
                <tr>
                  <th>Role </th>
                  <th>Description</th>
                  <th>Specification </th>
                </tr>
                <tr>
                  <td className="cell-1">React Developer</td>
                  <td>Js library</td>
                  <td>Specification </td>
                </tr>
                <tr>
                  <td className="cell-1">React Developer</td>
                  <td>Js library</td>
                  <td>Specification </td>
                </tr>
                <tr>
                  <td>React Developer</td>
                  <td>Js library</td>
                  <td>Specification </td>
                </tr>
                <tr>
                  <td>React Developer</td>
                  <td>Js library</td>
                  <td>Specification </td>
                </tr>
                <tr>
                  <td>React Developer</td>
                  <td>Js library</td>
                  <td>Specification </td>
                </tr>
                <tr>
                  <td>React Developer</td>
                  <td>Js library</td>
                  <td>@gmail.com </td>
                </tr>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Roletable;
