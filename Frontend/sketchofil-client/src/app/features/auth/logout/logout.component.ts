import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../apis/auth.service';

@Component({
  selector: 'app-logout',
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css',
})
export class LogoutComponent implements OnInit {
  router = inject(Router);
  authService = inject(AuthService);
  isLoggedIn = this.authService.loggedIn;

  logout() {
    this.authService.logout().subscribe();
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
    this.authService.loginCheck().subscribe((response) => {
      this.isLoggedIn = response;
    });
  }
}
