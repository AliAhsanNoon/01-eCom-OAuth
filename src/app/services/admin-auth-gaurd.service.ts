import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

import 'rxjs/add/operator/map';

@Injectable()
export class AdminAuthGaurd implements CanActivate {

  constructor(private auth: AuthService, private userService: UserService) { }
  canActivate(): Observable<boolean> {
      return this.auth.appUser$.map(appUser => appUser.isAdmin);
  }
}
