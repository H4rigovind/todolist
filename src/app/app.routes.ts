import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PnfComponent } from './pnf/pnf.component';

export const routes: Routes = [
    {
        path:'',component:HomeComponent
    },
    {
        path:"**",component:PnfComponent
    }
];
