import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { StudentLoginService } from './service/student-login.service';

export const authGuard: CanActivateFn = (route, state) => {
  const service = inject(StudentLoginService);
  const r = inject(Router); //inject is used to do dependency injection

  console.log('In authguard ' + service.isUserLoggedIn);
  if (service.isUserLoggedIn) return true;
  else {
    r.navigate(['login']);
    return false;
  }
};
