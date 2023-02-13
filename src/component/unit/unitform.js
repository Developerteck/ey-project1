import React from "react";
import { UserOutlined, MailOutlined } from "@ant-design/icons";
import { Input } from "antd";

const Unitform = () => (
  <>
    <div>
      <div className="form-container">
        <Input type="text" placeholder="Name  " prefix={<UserOutlined />} />
        <br />
        <br />
        <Input
          type="text"
          placeholder="Description "
          prefix={<UserOutlined />}
        />
        <br />
        <br />
        <Input type="text" placeholder="Group " prefix={<UserOutlined />} />
        <br />
        <br />
        <Input
          type="text"
          placeholder="Spacification "
          prefix={<UserOutlined />}
        />
        <br />
        <br />
      </div>
    </div>
  </>
);
export default Unitform;
