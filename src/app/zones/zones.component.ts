import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zones',
  templateUrl: './zones.component.html',
  styleUrls: ['./zones.component.css']
})
export class ZonesComponent implements OnInit {
  displaytime : Date = null;
  constructor() { }

  ngOnInit() {
  }

  changeZone(zoneChoice, offset){
    let baseDate = Date.now();
    baseDate += offset * 3600000
    this.displaytime = new Date(baseDate)
  }
  clearButton(){
    this.displaytime = null;
  }

}
