import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  images:string[]=["assets/poert1.png","assets/port2.png","assets/port3.png","assets/poert1.png","assets/port2.png","assets/port3.png"]
  flag!:boolean;
  modalImg!:string;
  OpenModal(){
    this.flag=true
  }
  closeModal(){
    this.flag=false;
  }
  modalImgSelector(img:string){
    this.modalImg=img;
    this.OpenModal()
  }
}
