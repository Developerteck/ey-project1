const Dropdown = ({ submenus }) => {
  return (
    <div className="dropdown-container">
      <ul className="dropdown">
        {submenus.map((submenu, index) => (
          <li key={index} className="menu-items">
            <a href={submenu.url}>{submenu.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
