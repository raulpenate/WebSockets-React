import { LockOutlined } from "@ant-design/icons";
import { ProFormText } from "@ant-design/pro-components";
import type { GlobalToken } from "antd";
import type React from "react";

interface IPasswordField {
  token: GlobalToken;
}

const PasswordField: React.FC<IPasswordField> = ({ token }) => {
  return (
    <ProFormText.Password
      name="password"
      fieldProps={{
        size: "large",
        prefix: <LockOutlined className={"prefixIcon"} />,
        strengthText:
          "Password should contain numbers, letters and special characters, at least 8 characters long.",
        statusRender: (value) => {
          const getStatus = () => {
            if (value && value.length > 12) {
              return "ok";
            }
            if (value && value.length > 6) {
              return "pass";
            }
            return "poor";
          };
          const status = getStatus();
          if (status === "pass") {
            return (
              <div style={{ color: token.colorWarning }}>Strength: Medium</div>
            );
          }
          if (status === "ok") {
            return (
              <div style={{ color: token.colorSuccess }}>Strength: Strong</div>
            );
          }
          return <div style={{ color: token.colorError }}>Strength: Weak</div>;
        },
      }}
      placeholder={"Password *"}
      rules={[
        {
          required: true,
          message: "password is required！",
        },
      ]}
    />
  );
};

export default PasswordField;
