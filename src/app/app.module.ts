import { NgModule, provide }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import {ReactiveFormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import {MusicComponent} from "./music/music.component";
import {HeaderComponent} from "./header/header.component";
import {FormComponent} from "./form/form.component";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {LogoutComponent} from "./logout/logout.component";
import {RegisterComponent} from "./register/register.component";
import {SteamComponent} from "./steam/steam.component";
import { routing }      from './app.routes';
import { FormsModule }      from '@angular/forms';
import { HttpModule }       from '@angular/http';

declare var Firebase;

@NgModule({
  declarations: [AppComponent, MusicComponent, HeaderComponent, FormComponent, HomeComponent, LoginComponent, LogoutComponent, RegisterComponent, SteamComponent],
  imports:      [BrowserModule, ReactiveFormsModule,FormsModule,
    HttpModule,
    routing],
  bootstrap:    [AppComponent],
})
export class AppModule {}
