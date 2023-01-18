import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [{
  path:"login",
  component:LoginComponent,
},
{
  path:"registration",
  component:RegistrationComponent,
},
{
  path:"dashboard",
  component:DashboardComponent,
},
{
  path:"playlist",
  component:PlaylistComponent

},
{
  path: "",
  redirectTo: "/dashboard",
  pathMatch: "full"
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
