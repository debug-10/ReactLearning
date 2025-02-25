import { Menu } from "antd";
import "antd/dist/reset.css";

const Header = () => {
  const handleMenuClick = (e) => {
    console.log("点击了菜单:", e.key);
  };

  return (
    <Menu
      mode="horizontal"
      theme="light"
      onClick={handleMenuClick}
      defaultSelectedKeys={["home"]}
    >
      <Menu.Item key="home">首页</Menu.Item>
      <Menu.Item key="mail">邮件</Menu.Item>
      <Menu.Item key="settings">设置</Menu.Item>
    </Menu>
  );
};

export default Header;
