import { createContext } from "react";
import { useSocket } from "../hooks/useSocket";

interface SocketContextProps {
  socket: any;
  online: boolean;
}

export const SocketContext = createContext<SocketContextProps>({
  socket: null,
  online: false,
});

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const SocketProvider = ({ children }: Props) => {
  const { socket, online } = useSocket("http://localhost:8080");

  return (
    <SocketContext.Provider value={{ socket, online }}>
      {children}
    </SocketContext.Provider>
  );
};
