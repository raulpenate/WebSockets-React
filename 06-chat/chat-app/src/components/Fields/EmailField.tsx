import { MailOutlined } from "@ant-design/icons";
import { ProFormText } from "@ant-design/pro-components";

const EmailField = () => {
  return (
    <ProFormText
      name="email"
      fieldProps={{
        size: "large",
        prefix: <MailOutlined className={"prefixIcon"} />,
      }}
      placeholder={"Email *"}
      rules={[
        {
          required: true,
          message: "email is required!",
        },
        {
          pattern:
            /[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/g,
          message: "it must be an email",
        },
      ]}
    />
  );
};

export default EmailField;
