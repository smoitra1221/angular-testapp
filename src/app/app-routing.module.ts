import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'; 
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UpcomingeventsComponent } from './upcomingevents/upcomingevents.component';
import { ArtistsComponent } from './artists/artists.component';
import { PujascheduleComponent } from './pujaschedule/pujaschedule.component';
import { PujaratesComponent } from './pujarates/pujarates.component';
import { CommunityserviicesComponent } from './communityserviices/communityserviices.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SignupComponent } from './signup/signup.component';
import { SponsorsComponent } from './sponsors/sponsors.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'upcomingevents', component: UpcomingeventsComponent},
  {path: 'artists', component: ArtistsComponent},
  {path: 'sponsors', component: SponsorsComponent},
  {path: 'pujaschedule', component: PujascheduleComponent},
  {path: 'pujarates', component: PujaratesComponent},
  {path: 'communityserviices', component: CommunityserviicesComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'contactus', component: ContactusComponent},
  {path: 'signup', component: SignupComponent}
  
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
