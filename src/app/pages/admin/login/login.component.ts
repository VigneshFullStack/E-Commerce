import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Login } from '../../../../models/Login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginObj: Login = {} as Login;

  constructor(private router: Router) {}

  login() {
    if (this.loginObj.username == 'admin' && this.loginObj.password == '123') {
      this.router.navigateByUrl('/products');
    } else {
      alert('Wrong Credentials...!');
    }
  }
}
