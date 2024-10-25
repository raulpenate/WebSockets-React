import { Tabs } from "antd";
import type { AuthType } from "../../types/Auth.types";
import type React from "react";
import type { Dispatch, SetStateAction } from "react";

interface iAuthTabs {
  authState: {
    AuthType: AuthType;
    setAuthType: Dispatch<SetStateAction<AuthType>>;
  };
}

const AuthTabs: React.FC<iAuthTabs> = ({
  authState: { AuthType, setAuthType },
}) => {
  return (
    <Tabs
      centered
      activeKey={AuthType}
      onChange={(activeKey: string) => setAuthType(activeKey as AuthType)}
    >
      <Tabs.TabPane key={"login"} tab={"Log in"} />
      <Tabs.TabPane key={"register"} tab={"Register"} />
    </Tabs>
  );
};

export default AuthTabs;
