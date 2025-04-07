import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ScheduleComponent } from './components/pages/schedule/schedule.component';
import { FavoritesComponent } from './components/pages/favorites/favorites.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { TicketComponent } from './components/pages/ticket/ticket.component';


export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: 'home', component: HomeComponent},
    {path: 'schedule', component: ScheduleComponent},
    {path: 'favorites', component: FavoritesComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'ticket', component: TicketComponent},

];
