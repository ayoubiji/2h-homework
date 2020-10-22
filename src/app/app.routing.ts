import { ListTicketComponent } from "./pages/list-ticket/list-ticket.component";
import { Routes } from "@angular/router";
import { TicketComponent } from "./pages/ticket/ticket.component";

export const appRoutes: Routes = [
  {
    path: "ticket",
    component: ListTicketComponent,
  },
  {
    path: "ticket/:id",
    component: TicketComponent,
  },
  {
    path: "**",
    redirectTo: "ticket",
  },
];
