import { theme } from "antd";
import PasswordField from "../Fields/PasswordField";
import EmailField from "../Fields/EmailField";

const CustomAuthForm = () => {
  const { token } = theme.useToken();
  return (
    <>
      <EmailField />
      <PasswordField token={token} />
    </>
  );
};

export default CustomAuthForm;
