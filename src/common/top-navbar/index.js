import { Icon } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import Helper from "./Helper";
import MenuItems from "./MenuItems";

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
          <img
            style={{ padding: "0.8rem", margin: "20px" }}
            src="/assets/icons/profile.jpg"
            alt="profile"
          />

          <img
            src="/assets/icons/notification.png"
            alt="notification"
            style={{
              height: "3rem",
              width: "1.5rem",
              padding: "0.5rem",
              marginRight: "10px",
            }}
          />

          <img
            src="/assets/icons/icon.png"
            alt="logout"
            style={{ height: "50px", width: "30px", marginRight: "20px" }}
          />
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
