import { useEffect, useState } from "react";
import Band from "../interfaces/band";
import BandListProps from "../interfaces/bandListProps";

const BandList: React.FC<BandListProps> = ({ data, vote, remove, rename }) => {
  const [bands, setBands] = useState<Band[]>([]);

  useEffect(() => {
    setBands(data);
  }, [data]);

  const changeName = (event: any, id: string) => {
    const newName = event.target.value;
    setBands((bands) =>
      bands.map((band) => {
        if (band.id === id) {
          band.name = newName;
          rename(band.id, band.name) 
        }
        return band;
      })
    );
  };

  const onLossFocus = (id: string, name: string) => {
    console.log(id, name)
  }

  const createRows = (): JSX.Element => {
    return (
      <>
        {bands.map((band) => (
          <tr key={band.id}>
            <td>
              <button onClick={() => vote(band.id)} className="btn btn-primary"> +1 </button>
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
              <button onClick={() => remove(band.id)} className="btn btn-danger">Delete</button>
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
