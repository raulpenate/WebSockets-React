import { iTicket } from "./ticket";

export interface iTicketList {
    waiting: iTicket[];
    assigned: iTicket[];
    last13: iTicket[];
}