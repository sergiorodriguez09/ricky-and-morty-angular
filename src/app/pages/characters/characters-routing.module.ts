import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { CharactersContentComponent } from './components/characters-content/characters-content.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", component: CharactersContentComponent},
  {path: ":id", component: CharacterDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }
