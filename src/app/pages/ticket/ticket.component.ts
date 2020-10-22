import { GetTicketEffect } from "./../../store/effects/ticket/tickets.effects.types";
import { TicketEffects } from "./../../store/effects/ticket/tickets.effects";

import { MainState } from "./../../store/states/main.state";
import { Ticket } from "./../../../interfaces/ticket.interface";
import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Store } from "@ngrx/store";
import * as TicketAction from "../../store/actions/ticket.action";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-ticket",
  templateUrl: "./ticket.component.html",
  styleUrls: ["./ticket.component.css"],
})
export class TicketComponent implements OnInit {
  public ticket: Ticket;
  private idTicket;
  private subscription: Subscription = new Subscription();
  private subscriptionTicketEffect: Subscription;
  private subscriptionParams: Subscription;
  constructor(
    private store: Store<MainState>,
    private ticketEffects: TicketEffects,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.subscriptionTicketEffect = this.ticketEffects.getTicket$
      .switchMap(
        (action: TicketAction.GetTicket | TicketAction.GetTicketError) => {
          console.log("action", action);
          return this.store.select("ticket");
        }
      )
      .subscribe((ticket) => {
        this.ticket = ticket;
        console.log("ticket", ticket);
      });
    this.subscription.add(this.subscriptionTicketEffect);
    this.subscriptionParams = this.route.params.subscribe(({ id }) => {
      this.store.dispatch(new GetTicketEffect({ ticket_id: id }));
    });
    this.subscription.add(this.subscriptionParams);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
