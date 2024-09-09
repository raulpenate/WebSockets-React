const { v4: uuidv4 } = require("uuid");
import { iTicket } from "../types/ticket";

class Ticket implements iTicket {
  id: string;
  number: any;
  desktop?: string;
  agent?: string;

  constructor(number) {
    this.id = uuidv4();
    this.number = number;
    this.desktop = undefined;
    this.agent = undefined;
  }
}

module.exports = Ticket;
