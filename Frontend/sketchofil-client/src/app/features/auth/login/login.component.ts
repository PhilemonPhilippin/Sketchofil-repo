import { inject, Component } from '@angular/core';
import { AuthService } from '../../../apis/auth.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private authService = inject(AuthService);

  email = new FormControl('');
  password = new FormControl('');

  login() {
    const userInput = {
      email: this.email.value || '',
      password: this.password.value || '',
    };
    this.authService.login(userInput).subscribe();
  }
}
