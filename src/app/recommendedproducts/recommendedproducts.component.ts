import { Component } from '@angular/core';
interface Products{
  pName:string,
  pDesc:string,
  pPrice:number,
  pImg:string
}
@Component({
  selector: 'app-recommendedproducts',
  standalone: true,
  imports: [],
  templateUrl: './recommendedproducts.component.html',
  styleUrl: './recommendedproducts.component.css'
})
export class RecommendedproductsComponent {
  product:Products[] = [
    {pName:"Ay 7aga",pPrice:40000,pDesc:'good',pImg:"assets/work-1.jpg"},
    {pName:"Ay 7aga",pPrice:10000,pDesc:'good',pImg:"assets/work-2.jpg"},
    {pName:"Ay 7aga",pPrice:20000,pDesc:'good',pImg:"assets/work-3.jpg"},
    {pName:"Ay 7aga",pPrice:60000,pDesc:'good',pImg:"assets/work-4.jpg"},
    {pName:"Ay 7aga",pPrice:50000,pDesc:'good',pImg:"assets/work-5.jpg"},
    {pName:"Ay 7aga",pPrice:25000,pDesc:'good',pImg:"assets/work-6.jpg"}
  ]
}
