import { Component } from '@angular/core';
import { RecommendedproductsComponent } from '../recommendedproducts/recommendedproducts.component';
interface Products{
  pName:string,
  pDesc:string,
  pPrice:number,
  pImg:string
}
@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [RecommendedproductsComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  product:Products[] = [
    {pName:"Ay 7aga",pPrice:40000,pDesc:'good',pImg:"assets/work-1.jpg"},
    {pName:"Ay 7aga",pPrice:10000,pDesc:'good',pImg:"assets/work-2.jpg"},
    {pName:"Ay 7aga",pPrice:20000,pDesc:'good',pImg:"assets/work-3.jpg"},
    {pName:"Ay 7aga",pPrice:60000,pDesc:'good',pImg:"assets/work-4.jpg"},
    {pName:"Ay 7aga",pPrice:50000,pDesc:'good',pImg:"assets/work-5.jpg"},
    {pName:"Ay 7aga",pPrice:25000,pDesc:'good',pImg:"assets/work-6.jpg"}
  ]
}
