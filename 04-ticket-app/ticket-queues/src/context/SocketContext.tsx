import { createContext, FC, ReactNode } from "react";
import { Socket } from "socket.io-client";
import { useSocket } from "../hooks/useSocket";

export type SocketContextType = {
  socket?: Socket;
  online: boolean;
};

export interface iSocketProvider {
 children: ReactNode;
}

export const SocketContext = createContext<SocketContextType>({ online: false });

export const SocketProvider: FC<iSocketProvider> = ({ children }) => {
  const { socket, online } = useSocket("http://localhost:8080");

  return (
    <SocketContext.Provider value={{ socket, online }}>
      {children}
    </SocketContext.Provider>
  );
};