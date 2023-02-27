import { useNavigate } from "react-router-dom";

function LeftNavBar() {
  const navigate = useNavigate();
  return (
    <div className="sidenavbar">
      <div>
        <img
          style={{ padding: "8px", height: "80px", width: "60px" }}
          onClick={() => {
            navigate("/");
          }}
          alt="Company"
          src="/assets/icons/companylogo.png"
        />
      </div>
      <img
        onClick={() => {
          navigate("/");
        }}
        alt="Home"
        src="/assets/icons/home.png"
      />
      <img alt="database" src="/assets/icons/database.png" />
      <img
        onClick={() => {
          navigate("/user");
        }}
        alt="user"
        src="/assets/icons/user.png"
      />
      <img
        onClick={() => {
          navigate("/setting");
        }}
        alt="setting"
        src="/assets/icons/setting.png"
      />
      <img
        onClick={() => {
          navigate("/report");
        }}
        alt="report"
        src="/assets/icons/report.png"
      />
    </div>
  );
}

export default LeftNavBar;
