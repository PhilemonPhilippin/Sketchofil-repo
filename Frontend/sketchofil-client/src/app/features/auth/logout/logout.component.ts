import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../apis/auth.service';

@Component({
  selector: 'app-logout',
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css',
})
export class LogoutComponent {
  router = inject(Router);
  authService = inject(AuthService);

  logout() {
    this.authService.logout().subscribe();
    this.router.navigate(['/']);
  }
}
