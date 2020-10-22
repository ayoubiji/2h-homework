import { Ticket } from "./../../../../interfaces/ticket.interface";
import * as TicketsActions from "../../actions/tickets.action";
import { initialState } from "../../states/main.state";
import createReducer from "../../createReducer";

export type Action = TicketsActions.All;

export function TicketsReducer(
  incomingState: Array<Ticket> = initialState.tickets,
  incomingAction: Action
): Array<Ticket> {
  return createReducer({
    [TicketsActions.ActionTypes.GET_ALL_TICKET]: (
      state: Array<Ticket>,
      action: TicketsActions.GetAllTicket
    ) => {
      return action.payload;
    },
  })(incomingState, incomingAction);
}
