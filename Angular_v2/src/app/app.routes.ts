import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ClubsComponent } from './components/clubs/clubs.component';
import { NationalTeamsComponent } from './components/national-teams/national-teams.component';
import { GamesComponent } from './components/games/games.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'clubs', component: ClubsComponent },
    { path: 'national-teams', component: NationalTeamsComponent },
    { path: 'games', component: GamesComponent }
];
