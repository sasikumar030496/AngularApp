import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {path :"home", component:HomeComponent},
    {path :"home/:userid", component:HomeComponent},
    {path : "employeedetails", component:EmployeeDetailsComponent},
    {path : "userdetails", component:UserDetailsComponent},
    {path : "", redirectTo:"/home", pathMatch:'full'},
    {path : "**", component:PageNotFoundComponent}
];
