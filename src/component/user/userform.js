import { UserOutlined, MailOutlined } from "@ant-design/icons";
import { Input } from "antd";
const Myform = () => (
  <>
    <div
      responsive={{
        xs: { span: 24 },
        sm: { span: 12 },
        md: { span: 8 },
        lg: { span: 6 },
        xl: { span: 4 },
      }}
    >
      <div className="form-container">
        <Input
          type="text"
          placeholder="First Name "
          prefix={<UserOutlined />}
        />
        <br />
        <br />
        <Input type="text" placeholder="Last Name " prefix={<UserOutlined />} />
        <br />
        <br />
        <Input type="text" placeholder="Email" prefix={<MailOutlined />} />

        <br />
        <br />
        <Input type="text" placeholder="Company " prefix={<UserOutlined />} />
        <br />
        <br />
        <Input type="text" placeholder="Role" prefix={<UserOutlined />} />
      </div>
    </div>
  </>
);
export default Myform;
