import { useContext, useEffect, useState } from "react";
import Band from "../interfaces/band";
import useSocketHook from "../interfaces/useSocketHook";
import { SocketContext } from "../context/SocketContext";

const BandList: React.FC = () => {
  const { socket } = useContext<useSocketHook>(SocketContext);
  const [bands, setBands] = useState<Band[]>([]);

  useEffect(() => {
    if (socket) {
      socket.on("band-list", (bandList) => {
        setBands(bandList);
      });
    }
    console.log('cleanup')
    return () => {
      if (socket) {
        socket.off("band-list");
      }
    };
  }, [socket]);

  const changeName = (event: any, id: string) => {
    const newName = event.target.value;
    setBands((bands) =>
      bands.map((band) => {
        if (band.id === id) {
          band.name = newName;
          rename(band.id, band.name);
        }
        return band;
      })
    );
  };

  const onLossFocus = (id: string, name: string) => {
    console.log(id, name);
  };

  const vote = (id: string): void => {
    console.log("voting - app");
    socket?.emit("vote-band", id);
  };

  const remove = (id: string): void => {
    console.log("removing - app");
    socket?.emit("remove-band", id);
  };

  const rename = (id: string, name: string): void => {
    const band = { id, name };
    console.log("renaming - band");
    socket?.emit("rename-band", band);
  };

  const createRows = (): JSX.Element => {
    return (
      <>
        {bands.map((band) => (
          <tr key={band.id}>
            <td>
              <button onClick={() => vote(band.id)} className="btn btn-primary">
                {" "}
                +1{" "}
              </button>
            </td>
            <td>
              <input
                type="text"
                className="form-control"
                value={band.name}
                onChange={(event) => changeName(event, band.id)}
                onBlur={() => onLossFocus(band.id, band.name)}
              />
            </td>
            <td>
              <h3>{band.votes}</h3>
            </td>
            <td>
              <button
                onClick={() => remove(band.id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </>
    );
  };

  return (
    <>
      <table className="table table-stripped">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Votes</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{createRows()}</tbody>
      </table>
    </>
  );
};

export default BandList;
