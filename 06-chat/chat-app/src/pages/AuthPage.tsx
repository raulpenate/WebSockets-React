import {
  AlipayCircleOutlined,
  TaobaoCircleOutlined,
  WeiboCircleOutlined,
} from "@ant-design/icons";
import {
  LoginForm,
  ProConfigProvider,
  setAlpha,
} from "@ant-design/pro-components";
import { Space, theme } from "antd";
import type { CSSProperties } from "react";
import { useState } from "react";
import "../css/LoginPage.css";
import type { AuthType } from "../types/Auth.types";
import CustomAuthForm from "../components/Auth/CustomAuthForm";
import HelpFields from "../components/Fields/HelpFields";
import AuthTabs from "../components/Tabs/AuthTabs";

const AuthPage = () => {
  const { token } = theme.useToken();
  const [AuthType, setAuthType] = useState<AuthType>("login");

  const iconStyles: CSSProperties = {
    marginInlineStart: "16px",
    color: setAlpha(token.colorTextBase, 0.2),
    fontSize: "24px",
    verticalAlign: "middle",
    cursor: "pointer",
  };

  const loginFormProps = {
    logo: "https://github.githubassets.com/favicons/favicon.png",
    title: "Login",
    subTitle: "Welcome to the chat app",
    actions: (
      <Space>
        Other login methods
        <AlipayCircleOutlined style={iconStyles} />
        <TaobaoCircleOutlined style={iconStyles} />
        <WeiboCircleOutlined style={iconStyles} />
      </Space>
    ),
  };

  const formStyle = {
    backgroundColor: token.colorBgContainer,
    color: "rgba(0, 0, 0, 0.65)",
  };

  return (
    <ProConfigProvider hashed={false}>
      <div style={formStyle}>
        <LoginForm {...loginFormProps}>
          <AuthTabs authState={{ AuthType, setAuthType }} />
          {AuthType === "login" && (
            <>
              <CustomAuthForm /> <HelpFields />
            </>
          )}
          {AuthType === "register" && <CustomAuthForm />}
        </LoginForm>
      </div>
    </ProConfigProvider>
  );
};

export default AuthPage;
