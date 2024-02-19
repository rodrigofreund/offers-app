import { Injectable } from '@angular/core';
import { Place } from './discover/place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places: Place[] = [
    new Place(
      'p1',
      'Manhattan Mansion',
      'In the heart of New York City.',
      'https://upload.wikimedia.org/wikipedia/commons/6/67/Manhattan_skyline_south_by_Don_Ramey_Logan.jpg',
      149.99),
    new Place(
        'p2',
        'São Paulo',
        'The San Jose Cathedral.',
        'https://media.lex.dk/media/180126/article_topimage_20230920-030206-6-4528x3016ma_top.jpg',
        40.00),
    new Place(
        'p3',
        'Porto',
        'Ibis Hotel',
        'https://www.feelporto.com/blog/wp-content/uploads/2021/07/28_visitar-Porto.jpg',
        25.00)
  ];

  constructor() { }

  getPlaces() {
    return [...this._places];
  }

  getPlace(id: string) {
    return this._places.find(
      p => p.id === id
    )
  }
}
