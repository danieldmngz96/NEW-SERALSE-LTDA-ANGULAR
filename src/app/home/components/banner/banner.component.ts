import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  //Aca tenemos el arreglo de strings para las diferentes imagenes 
  images: string[] = [
    'assets/images/paronamica.jpg',
    'assets/images/banner-2.jpg',
    'assets/images/banner-3.jpg'
  ];

  images2: string[] = [
    'assets/images/logo-seralse-white.png',
  ];

  constructor() { }

  ngOnInit() {
  }

}
