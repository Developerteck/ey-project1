import { useState } from "react";
import Unitform from "./unitform";

function Unittable() {
  const [showUnitform, setShowUnitform] = useState(false);
  return (
    <>
      <div style={{ background: "white" }}>
        <div>
          <button
            className="button-container"
            onClick={() => setShowUnitform(!showUnitform)}
          >
            {" "}
            {showUnitform ? " + ADD  " : " + ADD "}{" "}
          </button>
          {showUnitform ? <Unitform /> : null}

          {/* <button
            onClick={() => navigate("/Role")}


            className="button-container">
            {" "}
            + ADD{" "}
          </button> */}
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
        </div>
      </div>
    </>
  );
}

export default Unittable;
