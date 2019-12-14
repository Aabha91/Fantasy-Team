import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PlayersComponent } from "./players/players.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatTableModule } from "@angular/material/table";
import { MatDialogModule } from "@angular/material/dialog";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule } from "@angular/forms";
import { DeleteConfirmationDialog } from "./players/deleteConfirmationDialog/deleteConfirmationDialog";
import { ToastrModule } from "ngx-toastr";
import { PlayerDataDialog } from "./players/playerDataDialog/playerDataDialog";
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    PlayerDataDialog,
    DeleteConfirmationDialog,
    NotFoundComponentComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [PlayerDataDialog, DeleteConfirmationDialog]
})
export class AppModule {}
