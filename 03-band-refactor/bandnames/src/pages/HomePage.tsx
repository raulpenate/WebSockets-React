import { useContext } from "react";
import { SocketContext } from "../context/SocketContext";
import useSocketHook from "../interfaces/useSocketHook";
import BandAdd from "../componets/BandAdd";
import BandList from "../componets/BandList";

function HomePage() {
  const { online } = useContext<useSocketHook>(SocketContext);

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
          <div className="col-8">{<BandList />}</div>

          <div className="col-4">{<BandAdd />}</div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
