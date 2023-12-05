import { Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { StudentUpdateComponent } from './student-update/student-update.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { authGuard } from './auth.guard';
export const routes: Routes = [
  {
    path: 'students',
    component: StudentComponent,
    canActivate: [authGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'aboutus',
    component: AboutUsComponent,
  },
  {
    path: 'contactus',
    component: ContactUsComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'studentupdate',
    component: StudentUpdateComponent,
    canActivate: [authGuard],
  },
  {
    path: 'logout',
    component: LogoutComponent,
  },
];
