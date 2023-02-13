import MenuItems from "./MenuItems";
const Helper = ({ submenus, dropdown }) => {
  console.log(submenus, "submenus");
  return (
    <ul className={`dropdown ${dropdown ? "show" : ""}`}>
      {dropdown &&
        submenus.map((submenu, index) => (
          <MenuItems navItem={submenu} index={index} extra />
        ))}
    </ul>
  );
};

export default Helper;
