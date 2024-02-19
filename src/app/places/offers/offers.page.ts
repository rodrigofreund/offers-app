import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from '../discover/place.model';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {

  protected places : Place[];

  constructor(private placesService: PlacesService) { 
    this.places = [];
  }

  ngOnInit() {
    this.places = this.placesService.getPlaces();
  }

}
