import { theme } from "antd";
import PasswordField from "../Fields/PasswordField";
import EmailField from "../Fields/EmailField";
import type React from "react";
import NameField from "../Fields/NameField";

interface IAuth {
  registerMode?: boolean;
}

const CustomAuthForm: React.FC<IAuth> = ({ registerMode }) => {
  const { token } = theme.useToken();
  return (
    <>
      {registerMode && <NameField />}
      <EmailField />
      <PasswordField token={token} />
    </>
  );
};

export default CustomAuthForm;
