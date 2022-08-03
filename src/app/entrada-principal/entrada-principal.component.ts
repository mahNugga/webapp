import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogEmpleadoComponent } from '../dialog-empleado/dialog-empleado.component';

@Component({
  selector: 'app-entrada-principal',
  templateUrl: './entrada-principal.component.html',
  styleUrls: ['./entrada-principal.component.scss']
})
export class EntradaPrincipalComponent implements OnInit {

  constructor( private dialog: MatDialog) { }

  ngOnInit(): void {
    const btnPrev = document.getElementById('btn-prev');
    const btnNxt = document.getElementById('slick-nxt');
    const track = document.getElementById('track');
    const slickList = document.getElementById('slick-list');
    const slick = document.querySelectorAll('.slick') as unknown as HTMLCollectionOf<HTMLElement>;

    const slickWidth = slick[0].offsetWidth;
    console.log(btnPrev);
    let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n: number){
      showSlides(slideIndex+= n);
    }
    function currentSlide(n: number){
      showSlides(slideIndex = n);
    }

    function showSlides(n: number){
      let i;
      let slides = document.getElementsByClassName("slick");
      if( n > slides.length){
        slideIndex =1;
      }
      if(n<1 ){
        slideIndex = slides.length;
      }
      //slides[slideIndex-1].style.display= "block" 
    }

    if(btnPrev){
      //onclick = () => Move(1);
    }
    if(btnNxt){
      //onclick = () => Move(2);
    }
    function Move(){
      const trackWidth = track?.offsetWidth;
      const listWidth = slickList?.offsetWidth;

      
    }
  }

  openDialog(){
    this.dialog.open(DialogEmpleadoComponent);
  }

}
