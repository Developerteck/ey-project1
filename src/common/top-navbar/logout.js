import { createFromIconfontCN } from "@ant-design/icons";
import { Space } from "antd";
const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});
const Logout = () => (
  <Space>
    <IconFont type="icon-tuichu" />
    <IconFont type="icon-facebook" />
    <IconFont type="icon-twitter" />
  </Space>
);
export default Logout;
