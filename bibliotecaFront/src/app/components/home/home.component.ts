import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  img1='https://www.udenar.edu.co/recursos/wp-content/uploads/2017/02/escudo_logosimbolo_udenar_2022.fw_-1.png'
 
   
  img2='https://static.vecteezy.com/system/resources/previews/005/992/412/original/world-book-day-flat-cartoon-background-illustration-stack-of-books-to-reading-increase-insight-and-knowledge-suitable-for-wallpaper-or-poster-vector.jpg'

  constructor() { }

  ngOnInit(): void {
  }

}
