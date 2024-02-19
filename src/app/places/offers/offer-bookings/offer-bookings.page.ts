import { Component, OnInit } from '@angular/core';
import { Place } from '../../discover/place.model';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
})
export class OfferBookingsPage implements OnInit {

  place: Place | undefined;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private placesServices: PlacesService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if(!paramMap.has('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/offers');
        return;
      }
      let placeId = paramMap.get('placeId');
      if(!placeId)
        return;
      this.place = this.placesServices.getPlace(placeId);
    });
  }

}
