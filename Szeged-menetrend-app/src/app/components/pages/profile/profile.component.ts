import { Component, OnInit } from '@angular/core';
import { UserinfosComponent } from './userinfos/userinfos.component';
import { SettingsComponent } from './settings/settings.component';
import { SupportComponent } from './support/support.component';
import { LegendComponent } from './legend/legend.component';
import { LoginmessageComponent } from './loginmessage/loginmessage.component';
import { MatIcon } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { User } from '../../../models/User';
import { CommonModule } from '@angular/common';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { RegistrationcomponentComponent } from './registrationcomponent/registrationcomponent.component';
import { ChangeDetectorRef } from '@angular/core';
import { AccountdeleteComponent } from './accountdelete/accountdelete.component';


@Component({
  selector: 'app-profile',
  imports: [UserinfosComponent, SettingsComponent, SupportComponent, LegendComponent, LoginmessageComponent, MatIcon, CommonModule, LogincomponentComponent, RegistrationcomponentComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {

  user: User | null = null;
  constructor(private dialog: MatDialog, private cdr: ChangeDetectorRef) { }
  ngOnInit(): void {
    this.loadUser();
  }
  loadUser(): void {
    const userData = localStorage.getItem('user');
    if (userData) {
      this.user = JSON.parse(userData);
    } else {
      this.user = this.getDefaultUser(); 
    }
    this.cdr.detectChanges(); 
  }
  getDefaultUser(): User {
    return {
      email: '',
      firstname: '',
      lastname: '',
      password: '',
      isloggedIn: false,
      isregisteredIn: false,
      isAdmin: false,
      isStudent: false,
      tickets: [],
      cardNumber: '',
      savedRoutes: [],
    };
  }
  dialogpopup(): void {
    if (!this.user || !this.user.isloggedIn) {
      console.warn("Csak bejelentkezett felhasználók módosíthatják az adatokat.");
      return; 
    }
  
    const dialogRef = this.dialog.open(UserinfosComponent, {
      data: { user: this.user }, 
      panelClass: 'userdata-dialog',
    });
  
    dialogRef.afterClosed().subscribe(result => {
      this.loadUser(); 
    });
  }
  logout(): void {
    if (this.user) {
      this.user.isloggedIn = false;
      localStorage.setItem('user', JSON.stringify(this.user)); 
      this.loadUser(); 
      this.cdr.detectChanges(); 
      console.log("User logged out successfully!");
    }
  }
  login(): void{
    const dialogreflogin = this.dialog.open(LogincomponentComponent);
    dialogreflogin.afterClosed().subscribe(result => {

      const updatedUser = localStorage.getItem('user');
      if (updatedUser) {
        this.loadUser(); 
        this.cdr.detectChanges(); 
      }
    });
  }
  registredin(): void{
    const dialogrefreg = this.dialog.open(RegistrationcomponentComponent);
  
    dialogrefreg.afterClosed().subscribe(result => {
      
      this.loadUser();
      this.cdr.detectChanges();
    });
  }
  delaccount(): void{
    const dialogdel = this.dialog.open(AccountdeleteComponent);

    dialogdel.afterClosed().subscribe(result => {
      this.loadUser(); 
      this.cdr.detectChanges(); 
    });
  }
}
