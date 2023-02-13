import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Helper from "./Helper";

const MenuItems = ({ navItem, index, extra }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <li className="">
      {navItem?.submenu?.length ? (
        <>
          <div
            key={`nav-item-${index + 1}`}
            style={{
              margin: "0 5px",
              position: "relative",
              listStyle: "none",
            }}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(true)}
            // onClick={() => setOpen((prev) => !prev)}
          >
            {navItem.title}
          </div>
          {open && (
            <div
              className="subdropdown"
              style={{
                position: "absolute",
                top: "8.3rem",
                backgroundColor: " black",
                marginLeft: "-15px",
              }}
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              <Helper submenus={navItem?.submenu} dropdown={open} />
            </div>
          )}
        </>
      ) : (
        <div
          key={`nav-item-${index + 1}`}
          style={{ margin: "0 5px" }}
          onClick={() => {
            navigate(navItem.link);
          }}
        >
          {navItem.title}
        </div>
      )}
    </li>
  );
};

export default MenuItems;
