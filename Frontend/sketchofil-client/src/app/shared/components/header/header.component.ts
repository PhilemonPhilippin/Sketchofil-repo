import { Component, inject, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../apis/auth.service';

@Component({
  selector: 'app-header',
  imports: [MatIconModule, MatMenuModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  imagePath = 'assets/images/pencil.jpg';
  private authService = inject(AuthService);
  @Input() isLoggedIn = this.authService.loggedIn;
}
