import { UserOutlined, MailOutlined } from "@ant-design/icons";
import { Input } from "antd";
const Companyform = () => (
  <>
    <div>
      <div className="form-container">
        <Input
          style={{ height: "" }}
          type="text"
          placeholder="First Name "
          prefix={<UserOutlined />}
        />

        <Input type="text" placeholder="Last Name " prefix={<UserOutlined />} />

        <Input type="text" placeholder="Email" prefix={<MailOutlined />} />

        <Input type="text" placeholder="Company " prefix={<UserOutlined />} />
        <br />
        <Input type="text" placeholder="Role" prefix={<UserOutlined />} />
        <Input type="text" placeholder="Last Name " prefix={<UserOutlined />} />

        <Input type="text" placeholder="Email" prefix={<MailOutlined />} />

        <Input type="text" placeholder="Company " prefix={<UserOutlined />} />

        <Input type="text" placeholder="Role" prefix={<UserOutlined />} />

        <Input type="text" placeholder="Role" prefix={<UserOutlined />} />
      </div>
    </div>
  </>
);
export default Companyform;
