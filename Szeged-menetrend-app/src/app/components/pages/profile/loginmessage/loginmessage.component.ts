import { Component, Input, OnInit, ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';
import { User } from '../../../../models/User';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-loginmessage',
  imports: [CommonModule],
  templateUrl: './loginmessage.component.html',
  styleUrl: './loginmessage.component.scss'
})
export class LoginmessageComponent {
  @Input() user: any = null;

  get message(): string {
    if (this.user?.isloggedIn) {
      return `Üdvözöljük, ${this.user.firstname}!`;
    } else {
      return 'Nem vagy bejelentkezve, további funkciókért lépjen be!';
    }
  }

  get messageClass(): string {
    return this.user?.isloggedIn ? 'logged-in' : 'not-logged-in';
  }

  loginUser(): void {
    const user = {
      firstname: 'Péter',
      isloggedIn: true,
    };
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.user = user;
  }

  logoutUser(): void {
    localStorage.removeItem('currentUser');
    this.user = null;
  }
}