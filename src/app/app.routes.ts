import { RouterModule, Routes } from "@angular/router";
import { MusicComponent } from "./music/music.component";
import { HomeComponent } from "./home/home.component";
import {FormComponent} from "./form/form.component";
import {FORM_ROUTES} from "./form/form.routes";
import {LoginComponent} from "./login/login.component";
import {LogoutComponent} from "./logout/logout.component";
import {RegisterComponent} from "./register/register.component";
import {SteamComponent} from "./steam/steam.component";

const APP_ROUTES: Routes = [
  { path: 'music', component: MusicComponent },
  { path: 'steam', component: SteamComponent },
  { path: 'form', component: FormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: HomeComponent },
];

export const routing = RouterModule.forRoot(APP_ROUTES);

