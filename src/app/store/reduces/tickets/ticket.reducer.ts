import { Ticket } from "./../../../../interfaces/ticket.interface";
import * as TicketActions from "../../actions/ticket.action";
import { initialState } from "../../states/main.state";
import createReducer from "../../createReducer";

export type Action = TicketActions.All;

export function TicketReducer(
  incomingState: Ticket = initialState.ticket,
  incomingAction: Action
): Ticket {
  return createReducer({
    [TicketActions.ActionTypes.GET_TICKET]: (
      state: Array<Ticket>,
      action: TicketActions.GetTicket
    ) => {
      return action.payload;
    },
  })(incomingState, incomingAction);
}
