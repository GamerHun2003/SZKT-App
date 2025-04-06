import { Component } from '@angular/core';
import { TrafficComponent } from './traffic/traffic.component';
import { NewsComponent } from './news/news.component';
import { WeatherComponent } from './weather/weather.component';

@Component({
  selector: 'app-home',
  imports: [TrafficComponent, NewsComponent, WeatherComponent],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
