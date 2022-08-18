import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reserva-confirmacion',
  templateUrl: './reserva-confirmacion.component.html',
  styleUrls: ['./reserva-confirmacion.component.scss']
})
export class ReservaConfirmacionComponent implements OnInit {

  public extras:any;
  constructor(
    private _ruta:Router
  ) { 
    this.extras=this._ruta.getCurrentNavigation()?.extras.state?.['re'];
  }

  ngOnInit(): void {
  }

}
