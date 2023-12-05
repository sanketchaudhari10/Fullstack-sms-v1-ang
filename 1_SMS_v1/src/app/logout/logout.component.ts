import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { StudentLoginService } from '../service/student-login.service';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css',
})
export class LogoutComponent {
  constructor(private r: Router, private service: StudentLoginService) {
    console.log('In logout');
    this.logout();
  }
  logout() {
    this.service.logout();
    this.service.isUserLoggedIn = false;
    this.r.navigate(['login']);
  }
}
