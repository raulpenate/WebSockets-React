import { useEffect, useState } from "react";
import BandAdd from "./componets/BandAdd";
import BandList from "./componets/BandList";
import { io, Socket } from "socket.io-client";
import Band from "./interfaces/band";

const connectSocketServer = (): Socket => {
  const socket: Socket = io("http://localhost:8080", {
    transports: ["websocket"],
  });
  return socket;
};

function App() {
  const [socket] = useState<Socket>(connectSocketServer);
  const [online, setOnline] = useState<boolean>(false);
  const [bands, setBands] = useState<Band[]>([]);

  const vote = (id: string): void => {
    console.log("voting - app");
    socket.emit("vote-band", id);
  };

  const remove = (id: string): void => {
    console.log("removing - app");
    socket.emit("remove-band", id);
  };

  const rename = (id: string, name: string): void => {
    const band = {id, name}
    console.log("renaming - band")
    socket.emit("rename-band", band)
  }

  const create = (name: string): void => {
    console.log("creating - app");
    socket.emit("create-band", name);
  };

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

  useEffect(() => {
    socket.on("band-list", (bandList) => {
      setBands(bandList);
    });
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
            <BandList data={bands} vote={vote} remove={remove} rename={rename}/>
          </div>

          <div className="col-4">
            <BandAdd create={create}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
