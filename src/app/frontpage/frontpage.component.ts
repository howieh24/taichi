import { Component, OnInit } from '@angular/core';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md'

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent implements OnInit {
  panelOpenState = true;
  
  constructor() { }

  ngOnInit(): void {
  }

}
