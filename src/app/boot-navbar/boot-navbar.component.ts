import { Component} from '@angular/core';
import { AuthService } from '../services/auth.service';
import {AppUser} from '../models/app-user';

@Component({
  selector: 'boot-navbar',
  templateUrl: './boot-navbar.component.html',
  styleUrls: ['./boot-navbar.component.css']
})
export class BootNavbarComponent{

  appUser : AppUser;

  constructor(private auth:AuthService) {
    auth.appUser$.subscribe(appUser => this.appUser = appUser);
   }
  logout(){
    this.auth.signOut();
  }
  

}
