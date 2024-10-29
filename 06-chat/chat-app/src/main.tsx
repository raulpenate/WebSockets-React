import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ChatApp from "./ChatApp.tsx";
import { ConfigProvider } from "antd";
import enUS from "antd/locale/en_US";
import './css/App.css'

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConfigProvider locale={enUS}>
      <ChatApp />
    </ConfigProvider>
  </StrictMode>
);
