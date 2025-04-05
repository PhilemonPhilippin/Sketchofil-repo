import { inject, Component } from '@angular/core';
import { AuthService } from '../../../apis/auth.service';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { RegisterRequest } from '../../../models/contracts/requests/register-request';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit() {
    const userInput: RegisterRequest = {
      email: this.registerForm.value.email || '',
      password: this.registerForm.value.password || '',
    };
    this.authService.register(userInput).subscribe((response) => {
      this.router.navigate(['/auth/login']);
    });
  }
}
