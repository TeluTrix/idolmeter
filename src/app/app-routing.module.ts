import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CelebComponent } from './pages/celeb/celeb.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'celeb', component: CelebComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
