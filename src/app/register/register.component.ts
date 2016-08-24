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
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {

  myForm:FormGroup;

  ngOnInit() {
  }

  constructor(private formBuilder:FormBuilder, private _userService: UserService, private router: Router,private route: ActivatedRoute) {

    this.myForm = formBuilder.group({
      'userData': formBuilder.group({
        'firstName': ['',[Validators.required]],
        'lastName': ['',[Validators.required]],
        'username': ['',[
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9]+$")
        ]],
        'email': ['', [
          Validators.required,
          Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
        ]]
      }),
      'password': ['', [
        Validators.required,
        this.validateTextLength
      ]],
      'confirmPassword': ['', [
        Validators.required,
        this.validateTextLength
      ]],
    },
      {validator: this.validatePassword('password', 'confirmPassword')}
    );
  }

  onSubmit() {
    this.router.navigate(["/login", {}], {relativeTo: this.route});
  }

  createUser (firstName: string, lastName: string, email: string, password: string, username: string) {
    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      username: username

    };
    this._userService.createUser(data, username);
  }


  validatePassword(passwordKey: string, confirmPasswordKey: string) {
    return (group: ControlGroup): {[key: string]: any} => {
      let password = group.controls[passwordKey];
      let confirmPassword = group.controls[confirmPasswordKey];

      if (password.value !== confirmPassword.value) {
        return {
          mismatchedPasswords: true
        };
      }
    }
  }

  validateTextLength (control: Control): {[s: string]: boolean} {
    if (control.value.length < 6 || control.value.length === 0) {
      return {invalidLength: true};
    }
  }
}


