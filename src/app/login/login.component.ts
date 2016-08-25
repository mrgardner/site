import {Component, OnInit} from "@angular/core";
import {
  FormGroup,
  Validators,
  FormBuilder,
} from "@angular/forms";
import {UserService} from "../services/user.service";
import {Control, ControlGroup} from "@angular/common";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  myForm:FormGroup;

  private password: string;
  private username: string;

  constructor(private formBuilder:FormBuilder, private _userService: UserService, private router: Router,private route: ActivatedRoute) {
    this.myForm = formBuilder.group({
        'userData': formBuilder.group({
          'username': ['',[
            Validators.required,
            Validators.pattern("^[a-zA-Z0-9]+$")
          ]]
        }),
        'password': ['', [
          Validators.required,
          this.validateTextLength
        ]],
      }
    );
  }

  ngOnInit() {
  }

  validateCredentials(username: string, password: string) {
    try {
      var credentials = this._userService.getUser(username);
      credentials.subscribe(snapshot => {
        this.username = "";
        this.password = "";
        try {
          this.username = snapshot.val().username;
          this.password = snapshot.val().password;
        }
        catch (err) {
          console.log(err);
        }

        if(this.username == username && this.password == password) {
          console.log("CORRECT LOGIN with " + this.username + " and "+this.password);
          localStorage.setItem('authh', "TEST");
          this.router.navigate(["/form", {}], {relativeTo: this.route});
        }
        else {
          console.log("Wrong login");
          console.log("local user -> "+username+ " != "+this.username);
          console.log("local pass -> "+password+ " != "+this.password);
        }
      });
    }
    catch (err){
      console.log(err);
    }

  }

  validateTextLength (control: Control): {[s: string]: boolean} {
    if (control.value.length < 6 || control.value.length === 0) {
      return {invalidLength: true};
    }
  }

  registerPage() {
    this.router.navigate(['/register']);
  }

}
