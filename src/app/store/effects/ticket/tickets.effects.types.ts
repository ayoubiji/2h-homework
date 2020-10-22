import { Action } from "@ngrx/store";
export const EffectTypes = {
  GET_ALL_TICKET_EFFECT: "[TicketEffect] GET_ALL_TICKET_EFFECT",
  GET_TICKET_EFFECT: "[TicketEffect] GET_TICKET_EFFECT",
};
export class GetAllTicketEffect implements Action {
  type = EffectTypes.GET_ALL_TICKET_EFFECT;
  constructor() {}
}
export class GetTicketEffect implements Action {
  type = EffectTypes.GET_TICKET_EFFECT;
  constructor() {}
}
export type All = GetAllTicketEffect | GetTicketEffect;
