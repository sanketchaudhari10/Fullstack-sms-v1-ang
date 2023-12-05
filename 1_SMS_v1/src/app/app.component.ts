import { Component } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { StudentComponent } from './student/student.component';
import { LoginComponent } from './login/login.component';
import { SortCriteriaComponent } from './sort-criteria/sort-criteria.component';
import { StudentUpdateComponent } from './student-update/student-update.component';
import { MenuComponent } from './menu/menu.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FooterComponent,
    HeaderComponent,
    StudentComponent,
    LoginComponent,
    SortCriteriaComponent,
    StudentUpdateComponent,
    MenuComponent,
    LogoutComponent,
    RegisterComponent,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'helloworld';
}
