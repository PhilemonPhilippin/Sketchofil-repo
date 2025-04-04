import { inject, Component } from '@angular/core';
import { AuthService } from '../../../apis/auth.service';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { LoginRequest } from '../../../models/contracts/requests/login-request';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit() {
    const userInput: LoginRequest = {
      email: this.loginForm.value.email || '',
      password: this.loginForm.value.password || '',
    };
    this.authService.login(userInput).subscribe((response) => {
      this.router.navigate(['/']);
    });
  }
}
