import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cab-main',
  templateUrl: './cab-main.component.html',
  styleUrls: ['./cab-main.component.scss']
})
export class CabMainComponent implements OnInit {
  public titulo:string;
  constructor() {
    this.titulo = "Carolina Aguirre Master en Colorimetria Organica";
   }

  ngOnInit(): void {
  }

}
