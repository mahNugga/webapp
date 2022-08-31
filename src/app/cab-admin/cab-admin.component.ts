import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cab-admin',
  templateUrl: './cab-admin.component.html',
  styleUrls: ['./cab-admin.component.scss']
})
export class CabAdminComponent implements OnInit {

  constructor(
    private route:Router
  ) { }

  ngOnInit(): void {
  }

  HastaLaVista(){
    this.route.navigate(['/']);
  }
}
