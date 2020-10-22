import { GetAllTicketEffect } from "./../../store/effects/ticket/tickets.effects.types";
import { TicketEffects } from "./../../store/effects/ticket/tickets.effects";
import { MainState } from "./../../store/states/main.state";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Ticket } from "src/interfaces/ticket.interface";
import { Subscription } from "rxjs";
import * as TicketsAction from "../../store/actions/tickets.action";
@Component({
  selector: "app-list-ticket",
  templateUrl: "./list-ticket.component.html",
  styleUrls: ["./list-ticket.component.css"],
})
export class ListTicketComponent implements OnInit, OnDestroy {
  public tickets: Array<Ticket>;
  private subscriptionTicket: Subscription;
  constructor(
    private store: Store<MainState>,
    private ticketEffects: TicketEffects
  ) {}

  ngOnInit(): void {
    this.subscriptionTicket = this.ticketEffects.getAllTicket$
      .switchMap(
        (
          action: TicketsAction.GetAllTicket | TicketsAction.GetAllTicketError
        ) => {
          console.log("action", action);
          return this.store.select("tickets");
        }
      )
      .subscribe((tickets) => {
        console.log("tickets", tickets);
        this.tickets = tickets;
      });
    this.store.dispatch(new GetAllTicketEffect());
  }
  ngOnDestroy() {
    this.subscriptionTicket.unsubscribe();
  }
}
