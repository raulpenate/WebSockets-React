import { UserOutlined } from "@ant-design/icons";
import { ProFormText } from "@ant-design/pro-components";

const NameField = () => {
  return (
    <ProFormText
      name="name"
      fieldProps={{
        size: "large",
        prefix: <UserOutlined className={"prefixIcon"} />,
      }}
      placeholder={"Name *"}
      rules={[
        {
          required: true,
          message: "name is required!",
        },
      ]}
    />
  );
};

export default NameField;
