import { Component, OnInit, Inject,  } from '@angular/core';
import { HomeServiceService } from '../../Services/home-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private _homeService: HomeServiceService;

  constructor(@Inject(HomeServiceService) _homeSer) {
    this._homeService = _homeSer;
   }

  ngOnInit() {
      // this._homeService.getCustomers()
      // .subscribe(res => alert(JSON.stringify(res)));
  }

}
