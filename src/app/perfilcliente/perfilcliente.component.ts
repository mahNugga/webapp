import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-perfilcliente',
  templateUrl: './perfilcliente.component.html',
  styleUrls: ['./perfilcliente.component.scss']
})
export class PerfilclienteComponent implements OnInit {

  constructor(
    private _location:Location
  ) { }

  ngOnInit(): void {
  }
  volver(){
    this._location.back();
  }
}
