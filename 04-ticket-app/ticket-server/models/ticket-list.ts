import { iTicket } from "../types/ticket";

const Ticket = require("./ticket");

class TicketList {
  private lastNumber: number;
  private waiting: number[];
  private assigned: iTicket[];

  private constructor() {
    this.lastNumber = 0;

    this.waiting = [];
    this.assigned = [];
  }

  private get nextNumber() {
    this.lastNumber++;
    return this.lastNumber;
  }

  get last13() {
    return this.assigned.slice(0, 13);
  }

  createTicket() {
    const newTicket = Ticket(this.nextNumber);
    this.waiting.push(newTicket);
    return newTicket;
  }

  assignTicket(agent: string, desktop: string) {
    if (this.waiting.length === 0) return;

    const nextTicket: iTicket = {
      ticket: this.waiting.shift()!,
      agent: agent,
      desktop: desktop,
    };

    this.assigned.unshift(nextTicket);
  }
}

module.exports = TicketList;
