import { Icon } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import Helper from "./Helper";
import MenuItems from "./MenuItems";
import { BellOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";

const fontStyles = { color: "black", fontSize: "32px", margin: "10px" };

function TopNavBar(props) {
  const { navOptions } = props;
  const navigate = useNavigate();

  return (
    //first row navbar
    <>
      <div>
        {/* header first row */}
        <div
          className="header"
          responsive={{
            xs: { span: 24 },
            sm: { span: 12 },
            md: { span: 8 },
            lg: { span: 6 },
            xl: { span: 4 },
          }}
        >
          <h1 className="d1">Dashboard</h1>
          <p className="p1">Super-Admin</p>
          <UserOutlined style={fontStyles} />
          <BellOutlined style={fontStyles} />

          <LogoutOutlined style={fontStyles} />
        </div>

        {/* header second row (nav links) */}

        <div
          className="navbar"
          responsive={{
            xs: { span: 24 },
            sm: { span: 12 },
            md: { span: 8 },
            lg: { span: 6 },
            xl: { span: 4 },
          }}
        >
          {navOptions.map((navItem, index) => {
            return <MenuItems navItem={navItem} index={index} />;
          })}
        </div>
      </div>
    </>
  );
}

export default TopNavBar;
