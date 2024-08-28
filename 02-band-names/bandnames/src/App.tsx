import { useEffect, useState } from "react";
import BandAdd from "./componets/BandAdd";
import BandList from "./componets/BandList";
import { io, Socket } from "socket.io-client";

const connectSocketServer = (): Socket => {
  const socket: Socket = io("http://localhost:8080", {
    transports: ["websocket"],
  });
  return socket;
};

function App() {
  const [socket] = useState<Socket>(connectSocketServer);
  const [online, setOnline] = useState<boolean>(false);

  useEffect(() => {
    setOnline(socket.connected);
  }, [socket]);

  useEffect(() => {
    socket.on('connect', () => {
      setOnline(true)
    })

    // socket.disconnect()
  }, [socket]);

  useEffect(() => {
    socket.on('disconnect', () => {
      setOnline(false)
    })
  }, [socket]);

  return (
    <div className="container">
      <div className="alert">
        <p>
          service status:
          {online ? ( 
            <span className="text-success"> Online</span>
          ) : (
            <span className="text-danger"> Offline</span>
          )}
        </p>

        <h1>Bandnames</h1>
        <hr />

        <div className="row">
          <div className="col-8">
            <BandList />
          </div>

          <div className="col-4">
            <BandAdd />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
