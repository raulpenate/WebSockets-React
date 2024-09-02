import { useState } from "react";
import { useSocket } from "../hooks/useSocket";

const BandAdd: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const { socket } = useSocket("http://localhost:8080");

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
