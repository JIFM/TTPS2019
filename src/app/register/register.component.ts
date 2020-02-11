import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { User } from '../_models/user';
import { UserService } from '../_services/userService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  providers: [ UserService ],
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  u = new User();
  submitted = false;
  errorShow = false;

  onSubmit(formulario: NgForm) {
    if(formulario.valid) {
      this.userService.register(this.u)
            .subscribe(
                data => {
                    // this.alertService.success('Registration successful', true);
                    this.submitted = true;
                    this.errorShow = false;
                    this.router.navigate(['/login']);
                },
                error => {
                    // this.alertService.error(error);
                    // this.loading = false;
                    console.log('error en registrar');
                });
    }else{
      this.errorShow = true;
    }
  }

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
  }

  get diagnostic() {
    return JSON.stringify(this.u);
  }

}
