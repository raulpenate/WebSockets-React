import { useContext, useState } from "react";
import { SocketContext } from "../context/SocketContext";
import useSocketHook from "../interfaces/useSocketHook";

const BandAdd: React.FC = () => {
  const { socket } = useContext<useSocketHook>(SocketContext)
  const [value, setValue] = useState<string>("");

  const onSubmit = (ev: React.SyntheticEvent) => {
    ev.preventDefault();
    const trimmedValue = value.trim()

    if (trimmedValue.length > 0) {
      socket?.emit("create-band", { name: trimmedValue });
      setValue("");
    }
  };

  return (
    <>
      <h3>Add Band</h3>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="New band name"
          value={value}
          onChange={(ev) => setValue(ev.target.value)}
        />
      </form>
    </>
  );
};

export default BandAdd;
