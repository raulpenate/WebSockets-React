import { v4 as uuidv4 } from "uuid";
import { iTicket } from "../types/ticket";

class Ticket implements iTicket {
  id: string;
  number: any;
  desktop?: string;
  agent?: string;

  constructor(number: number) {
    this.id = uuidv4();
    this.number = number;
    this.desktop = undefined;
    this.agent = undefined;
  }
}

export default Ticket;
