import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudentLoginService } from '../service/student-login.service';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username: string;
  password: string;
  message: string = '';
  constructor(private user: StudentLoginService, private r: Router) {
    this.username = 'admin';
    this.password = 'admin';
  }
  performLogin() {
    // {
    this.user.perform_login(this.username, this.password).subscribe(
      (response) => {
        console.log(response);
        // if (response.success) {
        this.message = 'Login Success';
        this.user.createSessionAndStoreValue(this.username, true);

        this.r.navigate(['students']);
        // } else {
        //   this.message = 'Login Failed';
        //   this.user.createSessionAndStoreValue('guest', false);
        // }
      }
      // (error: any) => {
      //   console.error('Error during login:', error);
      //   this.message = 'Error during login';
      // }
    );
    // }
    // if (this.user.perform_login(this.username, this.password)) {
    //   console.log('(In login component) username: ' + this.username);
    //   this.message = 'Login Success';
    //   this.user.createSessionAndStoreValue(this.username, true);
    //   // show students view to user
    //   this.r.navigate(['students']); // this is programmatic navigation
    // } else {
    //   this.message = 'Login Failed';
    //   this.user.createSessionAndStoreValue('guest', false);
    // }
  }
}
