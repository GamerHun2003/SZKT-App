import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/shared/footer/footer.component';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Szeged-menetrend-app';
}
