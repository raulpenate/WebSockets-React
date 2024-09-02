import { createContext, FC, ReactNode } from "react";
import { useSocket } from "../hooks/useSocket";
import useSocketHook from "../interfaces/useSocketHook";

interface SocketProviderProps {
    children: ReactNode;
}

const defaultSocketHook: useSocketHook = {
    socket: null,
    online: false,
  }

export const SocketContext = createContext<useSocketHook>(defaultSocketHook);

export const SocketProvider: FC<SocketProviderProps> = ({ children }) => {
  const { socket, online } = useSocket("http://localhost:8080");

  return <SocketContext.Provider value={{ socket, online }}>{children}</SocketContext.Provider>;
};