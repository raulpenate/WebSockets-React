import { iTicket } from "../interfaces/iTicket";

export const getLast13 = async (): Promise<iTicket[]> => {
  const resp = await fetch("http://localhost:8080/last");
  const data = await resp.json();
  console.log(data);
  return data.lastOnes;
};
