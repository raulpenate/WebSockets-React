import { useContext } from "react";
import { SocketContext } from "../context/SocketContext";
import useSocketHook from "../interfaces/useSocketHook";
import BandAdd from "../componets/BandAdd";
import BandList from "../componets/BandList";
import BandChart from "../componets/BandChart";

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

        <h1>Band names</h1>
        <hr />

        <div className="row">
          <div className="col">
            <BandChart/>
          </div>
        </div>

        <div className="row">
          <div className="col-12 py-5">{<BandAdd />}</div>
          <div className="col-12">{<BandList />}</div>
        </div>
        
      </div>
    </div>
  );
}

export default HomePage;
