import { Socket } from "socket.io-client";

interface useSocketHook {
  socket?: Socket;
  online: boolean;
}

export default useSocketHook;
