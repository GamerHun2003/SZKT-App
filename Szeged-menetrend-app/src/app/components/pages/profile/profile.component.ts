import { Component } from '@angular/core';
import { UsrinfosComponent } from './usrinfos/usrinfos.component';
import { SettingsComponent } from './settings/settings.component';
import { SupportComponent } from './support/support.component';
import { LegendComponent } from './legend/legend.component';
import { LoginmessageComponent } from './loginmessage/loginmessage.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-profile',
  imports: [UsrinfosComponent, SettingsComponent, SupportComponent, LegendComponent, LoginmessageComponent],
  standalone: true,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

}
