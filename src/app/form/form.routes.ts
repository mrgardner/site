import { RouterConfig } from "@angular/router";

import {LoginComponent} from "../login/login.component";
import {LogoutComponent} from "../logout/logout.component";

export const FORM_ROUTES: RouterConfig = [
  { path: 'login', component: LoginComponent, },
  { path: 'logout', component: LogoutComponent, }
];
