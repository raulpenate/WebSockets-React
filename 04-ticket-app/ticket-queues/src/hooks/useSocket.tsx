import { useEffect, useMemo, useState } from "react";
import { io, Socket } from "socket.io-client";
import { SocketContextType } from "../context/SocketContext";

export const useSocket = (serverPath: string): SocketContextType => {
  const [online, setOnline] = useState<boolean>(false);

  const socket: Socket = useMemo(
    () =>
      io(serverPath, {
        // IF YOU PUT IT BACKWARDS IT BREAKS
        // I SPENT AN HOUR IN THIS TSRTRSTSRTSRDERSNYDHRI
        transports: ["websocket", "polling"],
      }),
    [serverPath]
  );

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
    online,
  };
};
