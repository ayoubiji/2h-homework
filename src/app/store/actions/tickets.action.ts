import { Action } from "@ngrx/store";
export const ActionTypes = {
  GET_ALL_TICKET: "GET_ALL_TICKE",
  GET_ALL_TICKET_ERROR: "GET_ALL_TICKET_ERROR",
};
export class GetAllTicketError implements Action {
  type = ActionTypes.GET_ALL_TICKET_ERROR;
  constructor(public errors?: any) {}
}
export class GetAllTicket implements Action {
  type = ActionTypes.GET_ALL_TICKET;
  constructor(
    public payload: {
      tickes: any;
    }
  ) {}
}

export type All = GetAllTicket | GetAllTicketError;
