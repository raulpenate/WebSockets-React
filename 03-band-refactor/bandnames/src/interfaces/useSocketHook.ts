import { Socket } from "socket.io-client";

interface useSocketHook {
  socket: Socket | null;
  online: boolean;
}

export default useSocketHook;
