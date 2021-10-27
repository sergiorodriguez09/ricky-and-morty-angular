import { RickAndMortyService } from './../services/rick-and-morty.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersContentComponent } from './components/characters-content/characters-content.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';


@NgModule({
  declarations: [
    CharactersContentComponent,
    CharacterDetailComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule
  ],
  providers: [
    RickAndMortyService 
  ]
})
export class CharactersModule { }
