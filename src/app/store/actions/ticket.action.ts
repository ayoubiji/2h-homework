import { Action } from "@ngrx/store";
export const ActionTypes = {
  GET_TICKET: "GET_TICKET",
  GET_TICKET_ERROR: "GET_TICKET_ERROR",
};
export class GetTicketError implements Action {
  type = ActionTypes.GET_TICKET_ERROR;
  constructor(public errors?: any) {}
}
export class GetTicket implements Action {
  type = ActionTypes.GET_TICKET;
  constructor(public payload) {}
}
export type All = GetTicket | GetTicketError;
