import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
    {path:"" , redirectTo:"home", pathMatch:'full'},
    {path:"home", component:HomeComponent},
    {path:"about", component:AboutComponent},
    {path:"gallery",component:GalleryComponent},
    {path:"portfolio", component:PortfolioComponent },
    {path:"contact" ,component:ContactComponent},
    {path:"**" , component:NotfoundComponent}

];
