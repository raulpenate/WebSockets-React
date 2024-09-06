import "./RouterPage.css";
import { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import CreateTicket from "./CreateTicket";
import Queue from "./Queue";

const { Header, Sider, Content } = Layout;

const RouterPage: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const nav = [
    {
      key: "1",
      icon: <UserOutlined />,
      label: <Link to="/login">Log in</Link>,
    },
    {
      key: "2",
      icon: <VideoCameraOutlined />,
      label: <Link to="/queue">Queue</Link>,
    },
    {
      key: "3",
      icon: <UploadOutlined />,
      label: <Link to="/create">Create Ticket</Link>,
    },
  ];

  return (
    <Router>
      <Layout className="full-h">
        <Sider trigger={null} collapsible collapsedWidth={0} breakpoint="md">
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={nav}
          />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Routes>
              <Route path="/login" Component={Login} />
              <Route path="/queue" Component={Queue} />
              <Route path="/create" Component={CreateTicket} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default RouterPage;
