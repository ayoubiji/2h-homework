import { Effect, Actions, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/share";
import { HttpClient } from "@angular/common/http";
import * as TicketEffectsTypes from "./tickets.effects.types";
import { Router } from "@angular/router";
import { AppEffect } from "../app.effect";
import * as TicketsAction from "../../actions/tickets.action";
import * as TicketAction from "../../actions/ticket.action";

import { Observable, of } from "rxjs";
export type Action = TicketEffectsTypes.All;
@Injectable()
export class TicketEffects extends AppEffect {
  constructor(
    private action$: Actions<Action>,
    private http: HttpClient,
    private router: Router
  ) {
    super(http);
  }
  @Effect()
  getAllTicket$: Observable<
    TicketsAction.GetAllTicket | TicketAction.All
  > = this.action$
    .pipe(
      ofType<TicketEffectsTypes.GetAllTicketEffect>(
        TicketEffectsTypes.EffectTypes.GET_ALL_TICKET_EFFECT
      )
    )

    .switchMap((action) => {
      return this.get$(this.apiUrl)
        .map((data: any) => {
          return new TicketsAction.GetAllTicket({
            tickes: null,
          });
        })
        .catch((err) => of(new TicketsAction.GetAllTicketError(err)));
    })
    .catch((err) => {
      return of(
        new TicketsAction.GetAllTicketError({
          errors: err,
        })
      );
    })
    .share();
  @Effect()
  getTicket$: Observable<
    TicketAction.GetTicket | TicketAction.All
  > = this.action$
    .pipe(
      ofType<TicketEffectsTypes.GetAllTicketEffect>(
        TicketEffectsTypes.EffectTypes.GET_ALL_TICKET_EFFECT
      )
    )

    .switchMap((action) => {
      return this.get$(this.apiUrl)
        .map((data: any) => {
          return new TicketAction.GetTicket({
            tickes: null,
          });
        })
        .catch((err) => of(new TicketAction.GetTicketError(err)));
    })
    .catch((err) => {
      return of(
        new TicketAction.GetTicketError({
          errors: err,
        })
      );
    })
    .share();
}
