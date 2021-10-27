import { CharactersDetail } from './../../models/characters';
import { RickAndMortyService } from './../../../services/rick-and-morty.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {
  public id!:any
  charactersDetail!:CharactersDetail
  constructor(private endPoint:RickAndMortyService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id")
    })
    this.endPoint.getCharactersDetail(this.id)
    .subscribe((data:any) => {
      this.charactersDetail={
        id:data.id,
        name:data.name,
        image:data.image,
        location:data.location.name,
        episodes:data.episodes,
        gender:data.gender,
        status:data.statuts,
      }
    })
  }
}
