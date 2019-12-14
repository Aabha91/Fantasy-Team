import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PlayersComponent } from "./players/players.component";
import { NotFoundComponentComponent } from "./not-found-component/not-found-component.component";

const routes: Routes = [
  {
    path: "home",
    component: PlayersComponent
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "**",
    component: NotFoundComponentComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
