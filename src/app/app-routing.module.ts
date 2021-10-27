import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", loadChildren: () => import("../app/pages/home/home.module").then(m => m.HomeModule)},
  {path: "about", loadChildren: () => import("../app/pages/about/about.module").then(m => m.AboutModule)},
  {path: "characters", loadChildren: () => import("../app/pages/characters/characters.module").then(m => m.CharactersModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
