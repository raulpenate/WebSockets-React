import { useEffect, useMemo, useState } from "react";
import { io, Socket } from "socket.io-client";
import useSocketHook from "../interfaces/useSocketHook";

export const useSocket = (serverPath: string) : useSocketHook  => {
  
  const [online, setOnline] = useState<boolean>(false);

    const socket: Socket = useMemo( ()=> io(serverPath, {
      transports: ["websocket", "polling"],
    }), [serverPath] )

    useEffect(() => {
      setOnline(socket.connected);
    }, [socket]);
  
    useEffect(() => {
      socket.on("connect", () => {
        setOnline(true);
      });
  
      // socket.disconnect()
    }, [socket]);
  
    useEffect(() => {
      socket.on("disconnect", () => {
        setOnline(false);
      });
    }, [socket]);

  return {
    socket,
    online
  };
};
