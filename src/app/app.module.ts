import { NgModule, provide }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import {ReactiveFormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import {MusicComponent} from "./music/music.component";
import {HeaderComponent} from "./header/header.component";
import {FormComponent} from "./form/form.component";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {SteamComponent} from "./steam/steam.component";
import { routing }      from './app.routes';
import { HttpModule }       from '@angular/http';
import { AngularFireModule} from "angularfire2/angularfire2";



// Must export the config
export const firebaseConfig = {
  apiKey: "7hmrOOIVvrHgo9wstFeusvWQAGlji1pAj4FqvrNU",
  authDomain: "localhost",
  databaseURL: "https://personal-site-85a8a.firebaseio.com/",
  storageBucket: ""
};


@NgModule({
  declarations: [AppComponent, MusicComponent, HeaderComponent, FormComponent, HomeComponent, LoginComponent, RegisterComponent, SteamComponent],
  imports:      [BrowserModule, ReactiveFormsModule, HttpModule, routing, AngularFireModule.initializeApp(firebaseConfig)],
  bootstrap:    [AppComponent],
})
export class AppModule {}
