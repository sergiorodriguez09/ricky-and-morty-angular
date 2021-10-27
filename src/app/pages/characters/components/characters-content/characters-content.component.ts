import { Characters } from './../../models/characters';
import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from 'src/app/pages/services/rick-and-morty.service';

@Component({
  selector: 'app-characters-content',
  templateUrl: './characters-content.component.html',
  styleUrls: ['./characters-content.component.scss']
})
export class CharactersContentComponent implements OnInit {
characters:Characters[] = []
  constructor(private endPoint:RickAndMortyService) {
   }

  ngOnInit(): void {
    this.endPoint.getCharacters()
    .subscribe((data:any)=>{
      const result:Characters[] = data
      const mapResults = data.results.map((data:any)=>({
        id:data.id,
        name:data.name,
        image:data.image
      })) 
      this.characters=mapResults;
    })

  }

}
