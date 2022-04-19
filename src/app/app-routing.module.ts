// import { FormComponent } from './components/form/form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { GithubComponent } from './components/github/github.component';
import { NavbarComponent } from './components/navbar/navbar.component';


const routes: Routes = [
  {path:"about", component: AboutComponent},
  {path:"navbar", component: NavbarComponent},
  {path: "", component: GithubComponent},
  // {path: "search", component: FormComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
