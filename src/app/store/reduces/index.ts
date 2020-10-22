import { ActionReducerMap } from "@ngrx/store";
import { MainState } from "../states/main.state";
import { TicketReducer } from "./tickets/ticket.reducer";
import { TicketsReducer } from "./tickets/tickets.reducer";
export const reducers: ActionReducerMap<MainState> = {
  tickets: TicketsReducer,
  ticket: TicketReducer,
};
