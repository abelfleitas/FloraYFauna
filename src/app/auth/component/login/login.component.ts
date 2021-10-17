import { Component, HostBinding, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ErrorResponse, LoginRequest } from 'src/app/models/commands';
import { LoginService } from 'src/app/services/login.service';
import { ToastrService } from 'src/app/services/toastr.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit,OnDestroy {
  @HostBinding('class') class = 'login-box';
  loginForm!: FormGroup;
  public isAuthLoading: boolean = false;

  constructor(
    private cookieService: CookieService,
    private router: Router,
    private toastr: ToastrService,
    private renderer: Renderer2,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.renderer.addClass(
      document.querySelector('app-root'),
      'login-page');

    this.loginForm = new FormGroup({
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    });
  }

  onSubmit() {
    this.isAuthLoading = true;
    const cmd: LoginRequest = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    };
    this.loginService.login(cmd).subscribe((x)=> {
      this.cookieService.set('token_access',x.token);
    }, (err: ErrorResponse) => {        
      if(err.code === 400){
        this.toastr.showErrorHTML(err.errores, err.code);
      }else {
        this.toastr.showError(err.message,err.code);
      }
      this.isAuthLoading = false;
    },
    () => {
      this.isAuthLoading = false;
      this.router.navigate(['dashboard']);
    });
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(
      document.querySelector('app-root'),
      'login-page'
    );
  }

}
