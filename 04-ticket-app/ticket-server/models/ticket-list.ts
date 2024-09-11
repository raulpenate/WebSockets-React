import { iTicket } from "../types/ticket";
import { iTicketList } from "../types/ticketList";
import Ticket from "./ticket";

class TicketList implements iTicketList{
  private lastNumber: number;
  waiting: iTicket[];
  assigned: iTicket[];

  constructor() {
    this.lastNumber = 0;

    this.waiting = [];
    this.assigned = [];
  }

  private get nextNumber() {
    this.lastNumber++;
    return this.lastNumber;
  }

  get last13(): iTicket[] {
    return this.assigned.slice(0, 13);
  }

  createTicket(): iTicket {
    const newTicket = new Ticket(this.nextNumber);
    this.waiting.push(newTicket);
    return newTicket;
  }

  assignTicket(agent: string, desktop: string): iTicket | undefined {
    if (this.waiting.length === 0) return;

    const { id, number } = this.waiting.shift()!;

    const nextTicket = {
      id,
      number,
      agent,
      desktop,
    };

    this.assigned.unshift(nextTicket);

    return nextTicket;
  }
}

export default TicketList;
