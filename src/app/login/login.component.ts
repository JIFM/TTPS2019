import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { AuthService } from '../_services/authService';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { User } from '../_models/user';



@Component({
  selector: 'app-login',
  providers: [ AuthService ],
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  u = new User();
  userType = '';
  submitted = false;
  errorShow = false;
  error = '';
  returnUrl = '/petsList';

  onSubmit(formulario: NgForm) {
    if (formulario.valid) {
      this.submitted = true;
      this.errorShow = false;

      this.authService.login(this.u, this.userType)
                .pipe(first())
                .subscribe(
                    data => {
                        if (data != null) {
                          this.router.navigate([this.returnUrl]);
                        } else {
                          this.error = 'Usuario o contraseña inválidos';
                          this.errorShow = true;
                        }
                    },
                    error => {
                        this.error = 'Error';
                        this.errorShow = true;
                        // this.loading = false;
                    });

    } else {
      this.errorShow = true;
      this.error = 'Complete todos los campos';
    }
  }

  // this.loading = true;
  //       this.authenticationService.login(this.f.username.value, this.f.password.value)
  //           .pipe(first())
  //           .subscribe(
  //               data => {
  //                   this.router.navigate([this.returnUrl]);
  //               },
  //               error => {
  //                   this.error = 'Nombre de usuario o Contraseña incorrectas';
  //                   this.loading = false;
  //               });

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

}
