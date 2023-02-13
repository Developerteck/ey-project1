function Usertable() {
  return (
    <>
      <div>
        <div
          className="tble-container"
          responsive={{
            xs: { span: 24 },
            sm: { span: 12 },
            md: { span: 8 },
            lg: { span: 6 },
            xl: { span: 4 },
          }}
        >
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
      </div>
    </>
  );
}

export default Usertable;
