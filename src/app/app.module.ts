import { appRoutes } from "./app.routing";
import { initialState } from "./store/states/main.state";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BackendService } from "./backend.service";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { reducers } from "./store/reduces";
import { effects } from "./store/effects";
import { ListTicketComponent } from "./pages/list-ticket/list-ticket.component";
import { TicketComponent } from "./pages/ticket/ticket.component";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
@NgModule({
  declarations: [AppComponent, ListTicketComponent, TicketComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot(reducers, {
      initialState,
    }),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument({
      maxAge: 5,
    }),
    RouterModule.forRoot(appRoutes),
  ],
  providers: [BackendService],
  bootstrap: [AppComponent],
})
export class AppModule {}
