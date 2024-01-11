import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { WelcomeComponent } from './app/welcome/welcome.component';
import { CounterComponent } from './app/counter/counter.component';
import { ParentComponent } from './app/parent/parent.component';
import { EmployeeDetailsComponent } from './app/employee-details/employee-details.component';

bootstrapApplication(EmployeeDetailsComponent, appConfig)
  .catch((err) => console.error(err));
