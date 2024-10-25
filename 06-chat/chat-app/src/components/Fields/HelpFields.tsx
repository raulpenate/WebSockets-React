import { ProFormCheckbox } from "@ant-design/pro-components";

const HelpFields = () => {
  return (
    <div className="rememberDiv">
      <div>
        <ProFormCheckbox noStyle name="autoLogin">
          Remember me
        </ProFormCheckbox>
      </div>
      <div>
        {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
        <a>Password help?</a>
      </div>
    </div>
  );
};

export default HelpFields;
