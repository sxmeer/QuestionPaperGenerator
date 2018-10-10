import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { ContributorsService } from './shared/contributors/contributors.service';
import { AppComponent } from './app.component';
import { CoursesComponent } from './components/courses/courses.component';
import { ContributorsComponent } from './components/contributors/contributors.component';
import { ValidatorsComponent } from './components/validators/validators.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes:Routes=[
  {path:'courses', component:CoursesComponent},
  {path:'contributors', component:ContributorsComponent},
  {path:'validators', component:ValidatorsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    ContributorsComponent,
    ValidatorsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ContributorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
