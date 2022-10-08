import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  img1='https://www.udenar.edu.co/recursos/wp-content/uploads/2017/02/escudo_logosimbolo_udenar_2022.fw_-1.png'

  constructor() { }

  ngOnInit(): void {
  }

}
