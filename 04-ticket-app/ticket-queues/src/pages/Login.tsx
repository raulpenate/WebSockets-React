import "./Login.css";
import React, { ReactNode, useEffect, useState } from "react";
import type { FormProps } from "antd";
import { Button, Divider, Form, Input, InputNumber, Typography } from "antd";
import { DesktopOutlined, LoginOutlined } from "@ant-design/icons";
import { redirect, useNavigate } from "react-router-dom";
import { useHideMenu } from "../hooks/useHideMenu";
import {
  getUserStorage,
  iUserStorage,
  setUserStorage,
} from "../helpers/getUsuariosStorage";
import { useShowDesktop } from "../hooks/useShowDesktop";

type FieldType = {
  agent: string;
  desktop: string;
};

const Login = () => {
  useHideMenu(false);

  useShowDesktop();

  const navigate = useNavigate();

  const { Title, Text } = Typography;

  const onFinish: FormProps<FieldType>["onFinish"] = ({
    agent,
    desktop,
  }: FieldType) => {
    console.log("Success:", { agent, desktop });

    if ("agent" in { agent } && "desktop" in { desktop }) {
      setUserStorage({ agent, desktop } as iUserStorage);
    }

    navigate("/desktop");
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div className="position">
        <div className="titles">
          <div>
            <DesktopOutlined className="icon" />
          </div>
          <div>
            <div>
              <Title level={2}>Log in</Title>
              <Text>Enter your name and desk number</Text>
            </div>
          </div>
          <Divider />
        </div>
        <Form
          name="basic"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          style={{ maxWidth: 1000 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Agent name"
            name="agent"
            hasFeedback={true}
            rules={[
              { required: true, message: "Please input your agent name!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Desktop number"
            name="desktop"
            hasFeedback={true}
            rules={[
              {
                pattern: /\d{1,2}/g,
                required: true,
                message: "Please input your desktop number!",
              },
            ]}
          >
            <InputNumber min={1} />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              <LoginOutlined />
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default Login;
