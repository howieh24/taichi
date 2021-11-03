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

  imageObject: Array<object> = [{
    image: 'assets/IMG_6799.jfif',
    thumbImage: 'assets/IMG_6799.jfif'
}, {
    image: 'assets/IMG_6801.jfif',
    thumbImage: 'assets/IMG_6801.jfif',
    order: 1 
}
];

}
