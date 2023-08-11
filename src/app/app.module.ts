import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { UpcomingeventsComponent } from './upcomingevents/upcomingevents.component';
import { ArtistsComponent } from './artists/artists.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { PujascheduleComponent } from './pujaschedule/pujaschedule.component';
import { PujaratesComponent } from './pujarates/pujarates.component';
import { CommunityserviicesComponent } from './communityserviices/communityserviices.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SignupComponent } from './signup/signup.component';
import { FooterComponent } from './footer/footer.component'
import {MatExpansionModule} from '@angular/material/expansion'
import {MatTableModule} from '@angular/material/table'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    UpcomingeventsComponent,
    ArtistsComponent,
    SponsorsComponent,
    PujascheduleComponent,
    PujaratesComponent,
    CommunityserviicesComponent,
    GalleryComponent,
    AboutusComponent,
    ContactusComponent,
    SignupComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
