import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES, Router, ActivatedRoute} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-form',
  templateUrl: 'form.component.html',
  styleUrls: ['form.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class FormComponent implements OnInit {

  constructor(private router:Router, private route: ActivatedRoute) {
    if (localStorage.getItem('auth')) {
      console.log("TOKEN EXISTS");
    }
    else {
      console.log("TOKEN DOES NOT EXIST")
      this.router.navigate(['/login']);
    }
  }

  ngOnInit() {

  }

  logout() {
    localStorage.removeItem('auth');
    this.router.navigate(["/login", {}], {relativeTo: this.route});
  }


}
