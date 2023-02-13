import React, { useState, setSortedData } from "react";
import { Table, Button } from "antd";
import Companyform from "./companyform";

const data = [
  {
    key: 1,
    Companyname: "John Doe",
    address: "New York",
  },
  {
    key: 2,
    Companyname: "Jane Smith",
    address: "Los Angeles",
  },
  {
    key: 3,
    Companyname: "Bob Johnson",
    address: "Chicago",
  },
  {
    key: 3,
    Companyname: "Bob Johnson",
    address: "Chicago",
  },
];

const columns = [
  {
    title: "Companyname",
    dataIndex: "Companyname",
    key: "Companyname",
    sorter: (a, b) => a.Companyname.localeCompare(b.Companyname),
    sortDirections: ["ascend", "descend"],
  },
  {
    title: "Industry",
    dataIndex: "address",
    key: "address",
    sorter: (a, b) => a.address.localeCompare(b.address),
    sortDirections: ["ascend", "descend"],
  },
  {
    title: "Sub-Industry",
    dataIndex: "Companyname",
    key: "name",
    sorter: (a, b) => a.name.localeCompare(b.name),
    sortDirections: ["ascend", "descend"],
  },
  {
    title: "Company ISIN",
    dataIndex: "Companyname",
    key: "Industry",
    sorter: (a, b) => a.Industry.localeCompare(b.Industry),
    sortDirections: ["ascend", "descend"],
  },
  {
    title: "Client Admin",
    dataIndex: "Companyname",
    key: "name",
    sorter: (a, b) => a.name.localeCompare(b.name),
    sortDirections: ["ascend", "descend"],
  },
  {
    title: "Ey-Admin",
    dataIndex: "address",
    key: "address",
    sorter: (a, b) => a.address.localeCompare(b.address),
    sortDirections: ["ascend", "descend"],
  },

  {
    title: "Address",
    dataIndex: "Companyname",
    key: "name",
    sorter: (a, b) => a.name.localeCompare(b.name),
    sortDirections: ["ascend", "descend"],
  },
  {
    title: "Country",
    dataIndex: "address",
    key: "address",
    sorter: (a, b) => a.address.localeCompare(b.address),
    sortDirections: ["ascend", "descend"],
  },
];

// const handleButtonClick = () => {
//   console.log("Button clicked");
//   // You can add your code here to handle the button click event
// };

const handleChange = (pagination, filters, sorter) => {
  const newData = [...data];
  if (sorter.field) {
    setSortedData(
      newData.sort((a, b) => {
        const order = sorter.order === "ascend" ? 1 : -1;
        if (a[sorter.field] < b[sorter.field]) {
          return -1 * order;
        }
        if (a[sorter.field] > b[sorter.field]) {
          return 1 * order;
        }
        return 0;
      })
    );
  } else {
    setSortedData(data);
  }
};

const Companytable = () => {
  const [showCompanyform, setShowCompanyform] = useState(false);
  const [sortedData, setSortedData] = useState(data);

  return (
    <>
      <div>
        <button
          className="button-container"
          onClick={() => setShowCompanyform(!showCompanyform)}
        >
          {showCompanyform ? " + ADD  " : " + ADD "}
        </button>
        {showCompanyform ? <Companyform /> : null}
        <Table
          columns={columns}
          dataSource={sortedData}
          className="companytable"
        />
      </div>
    </>
  );
};

export default Companytable;
