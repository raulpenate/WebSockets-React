import { useState } from "react";

interface BandAddProps {
  create: (name: string) => void;
}

const BandAdd: React.FC<BandAddProps> = ({ create }) => {
  const [value, setValue] = useState<string>("");

  const onSubmit = (ev: React.SyntheticEvent) => {
    ev.preventDefault();
    
    if (value.trim().length > 0) create(value);
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
