import { Ticket } from "./../../../interfaces/ticket.interface";

export interface MainState {
  ticket: Ticket;
  tickets: Array<Ticket>;
}
export const initialState: MainState = { ticket: null, tickets: [] };
