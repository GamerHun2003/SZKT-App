import { Component } from '@angular/core';
import { UserinfosComponent } from './userinfos/userinfos.component';
import { SettingsComponent } from './settings/settings.component';
import { SupportComponent } from './support/support.component';
import { LegendComponent } from './legend/legend.component';
import { LoginmessageComponent } from './loginmessage/loginmessage.component';


@Component({
  selector: 'app-profile',
  imports: [UserinfosComponent, SettingsComponent, SupportComponent, LegendComponent, LoginmessageComponent],
  standalone: true,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  
}
