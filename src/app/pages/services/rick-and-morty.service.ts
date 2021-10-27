import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const url:string = "https://rickandmortyapi.com/api/"
@Injectable({
  providedIn: 'root'
})

export class RickAndMortyService {
  
  constructor(private http:HttpClient) { }
  getCharacters() {
    return this.http.get(`${url}/character`);
  }

  getCharactersDetail(id:number) {
    return this.http.get(`${url}/character/${id}`);
  }

  getLocations() {
    return this.http.get(`${url}/location`);
  }

  getLocationsDetail(id:number) {
    return this.http.get(`${url}/location/${id}`);
  }

  getEpisodes() {
    return this.http.get(`${url}/episodes`);
  }

  getEpisodesDetail(id:number) {
    return this.http.get(`${url}/episodes/${id}`);
  }
}

